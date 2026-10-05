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

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, company, projectType, message, website } = body;

    // Honeypot antispam
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 },
      );
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanPhone = phone ? String(phone).trim() : "";
    const cleanCompany = company ? String(company).trim() : "";
    const cleanMessage = String(message).trim();
    const cleanProjectType = String(projectType).trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: "El correo electrónico no es válido." },
        { status: 400 },
      );
    }

    const projectName = projectLabels[cleanProjectType] ?? "Consulta general";

    const { data, error } = await resend.emails.send({
      from: "Novascode <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: cleanEmail,
      subject: `[Novascode] Nueva consulta — ${cleanName}`,
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
