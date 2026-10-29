import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = "contacto@novascode.es";

const projectLabels: Record<string, string> = {
  web: "Web corporativa",
  ecommerce: "Tienda online / e-commerce",
  software: "Software a medida",
  app: "Aplicación móvil",
  automation: "Automatización e integraciones",
  existing: "Mejorar un proyecto existente",
  other: "Idea diferente",
  unsure: "No sabe exactamente qué necesita",
};

type TurnstileVerification = {
  success: boolean;
  hostname?: string;
  action?: string;
  "error-codes"?: string[];
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      projectType,
      message,
      website,
      turnstileToken,
    } = body;

    // 1. Honeypot antispam
    if (website) {
      return NextResponse.json({ success: true });
    }

    // 2. Comprobación de campos obligatorios
    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof projectType !== "string" ||
      !projectType.trim() ||
      typeof message !== "string" ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 },
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone ? String(phone).trim() : "";
    const cleanCompany = company ? String(company).trim() : "";
    const cleanMessage = message.trim();
    const cleanProjectType = projectType.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailRegex.test(cleanEmail) ||
      cleanName.length > 100 ||
      cleanEmail.length > 200 ||
      cleanPhone.length > 50 ||
      cleanCompany.length > 150 ||
      cleanMessage.length > 5000 ||
      !(cleanProjectType in projectLabels)
    ) {
      return NextResponse.json(
        { error: "Revisa los datos del formulario." },
        { status: 400 },
      );
    }

    // 3. Comprobar configuración de Cloudflare
    const secretKey = process.env.TURNSTILE_SECRET_KEY?.trim();

    if (!secretKey) {
      console.error("TURNSTILE_SECRET_KEY no configurada.");

      return NextResponse.json(
        {
          error: "La verificación de seguridad no está disponible.",
        },
        { status: 503 },
      );
    }

    // 4. Exigir token de Turnstile
    if (
      typeof turnstileToken !== "string" ||
      !turnstileToken.trim() ||
      turnstileToken.length > 2048
    ) {
      return NextResponse.json(
        {
          error: "Completa la verificación de seguridad.",
        },
        { status: 400 },
      );
    }

    // 5. Verificar el token con Cloudflare
    let verification: TurnstileVerification;

    try {
      const params = new URLSearchParams({
        secret: secretKey,
        response: turnstileToken,
      });

      const cloudflareResponse = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
          cache: "no-store",
          signal: AbortSignal.timeout(10000),
        },
      );

      if (!cloudflareResponse.ok) {
        throw new Error("Error de comunicación con Cloudflare.");
      }

      verification = (await cloudflareResponse.json()) as TurnstileVerification;
    } catch (error) {
      console.error("Error verificando Turnstile:", error);

      return NextResponse.json(
        {
          error: "No se ha podido verificar la seguridad. Inténtalo de nuevo.",
        },
        { status: 503 },
      );
    }

    // 6. Validar resultado, acción y dominio
    const validHostname =
      verification.hostname === "novascode.es" ||
      verification.hostname === "www.novascode.es";

    const validAction = verification.action === "contact_form";

    if (!verification.success || !validAction || !validHostname) {
      console.warn("Verificación Turnstile rechazada.");

      return NextResponse.json(
        {
          error:
            "La verificación de seguridad no es válida. Inténtalo de nuevo.",
        },
        { status: 403 },
      );
    }

    // 7. Enviar correo tras verificar la seguridad
    const projectName = projectLabels[cleanProjectType];

    const { data, error } = await resend.emails.send({
      from: "Novascode <contacto@novascode.es>",
      to: [CONTACT_EMAIL],
      replyTo: cleanEmail,
      subject: `[Novascode] Nueva consulta — ${cleanName.replace(/[\r\n]/g, " ")}`,
      text: `
NUEVA CONSULTA DESDE NOVASCODE

Nombre:
${cleanName}

Email:
${cleanEmail}

Teléfono:
${cleanPhone || "No indicado"}

Empresa:
${cleanCompany || "No indicada"}

Tipo de proyecto:
${projectName}

Mensaje:
${cleanMessage}

--------------------------------
Mensaje enviado desde el formulario de contacto de Novascode.
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "No se ha podido enviar el mensaje." },
        { status: 500 },
      );
    }

    // 8. Respuesta de éxito
    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Ha ocurrido un error inesperado." },
      { status: 500 },
    );
  }
}
