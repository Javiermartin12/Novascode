"use client";

import { type FormEvent, useRef, useState } from "react";

import Link from "next/link";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

import { sendGAEvent } from "@next/third-parties/google";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  Lightbulb,
  LoaderCircle,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* =========================================================
   TIPOS Y CONFIGURACIÓN
========================================================= */

type FormStatus = "idle" | "loading" | "success" | "error";

const WHATSAPP_URL =
  "https://wa.me/34633560759?text=" +
  encodeURIComponent(
    "Hola, he visitado Novascode y me gustaría consultar un proyecto para mi negocio.",
  );

const projectOptions = [
  {
    value: "web",
    label: "Quiero una página web para mi negocio",
  },
  {
    value: "ecommerce",
    label: "Quiero vender por internet",
  },
  {
    value: "software",
    label: "Necesito una herramienta para gestionar mi empresa",
  },
  {
    value: "app",
    label: "Quiero desarrollar una aplicación móvil",
  },
  {
    value: "automation",
    label: "Quiero automatizar tareas o procesos",
  },
  {
    value: "existing",
    label: "Quiero mejorar un proyecto que ya tengo",
  },
  {
    value: "other",
    label: "Tengo otra idea",
  },
  {
    value: "unsure",
    label: "No tengo claro qué solución necesito",
  },
] as const;

const examples = [
  "Quiero que los clientes encuentren mi negocio en internet.",
  "Necesito mostrar mis servicios y recibir solicitudes de presupuesto.",
  "Quiero organizar mejor las tareas de mi empresa.",
  "Tengo una idea para una aplicación o plataforma.",
] as const;

const inputClassName =
  "mt-2.5 w-full rounded-xl border border-[#E3E4EE] bg-white px-4 py-3.5 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 hover:border-[#C9C8DD] focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10";

/* =========================================================
   CONTACT FORM
========================================================= */

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();

  /* =======================================================
     ENVÍO DEL FORMULARIO
  ======================================================== */

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    if (!turnstileSiteKey) {
      setStatus("error");
      setErrorMessage("La verificación de seguridad no está configurada.");
      return;
    }

    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Completa la verificación de seguridad antes de enviar.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Mantener los campos utilizados por /api/contact.
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
      turnstileToken,

      // Campo antispam oculto.
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "No se ha podido enviar el mensaje.");
      }

      setStatus("success");
      form.reset();

      /* ===================================================
         EVENTO DE CONVERSIÓN GA4
      ==================================================== */

      try {
        if (
          window.localStorage.getItem("novascode-analytics-consent") ===
          "accepted"
        ) {
          sendGAEvent("event", "generate_lead", {
            form_name: "contacto",
            project_type: String(data.projectType || "other"),
          });
        }
      } catch (analyticsError) {
        // Analytics no debe afectar al envío.
        console.warn(
          "No se ha podido registrar el evento de Analytics:",
          analyticsError,
        );
      }
    } catch (error) {
      console.error("Error enviando formulario:", error);

      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No se ha podido enviar el mensaje.",
      );
    } finally {
      // El token Turnstile es de un solo uso.
      turnstileRef.current?.reset();
      setTurnstileToken("");
    }
  }

  /* =======================================================
     INTERFAZ
  ======================================================== */

  return (
    <section
      id="formulario-contacto"
      aria-labelledby="contact-form-title"
      className="relative isolate overflow-hidden bg-[#F7F8FC] py-16 sm:py-20 lg:py-24"
    >
      {/* FONDO DECORATIVO */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-indigo-200/30 blur-[100px]" />

        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-violet-200/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ===================================================
            ENCABEZADO
        ==================================================== */}

        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="inline-flex items-center gap-2 text-indigo-600">
            <Sparkles size={17} strokeWidth={1.8} />

            <span className="text-xs font-bold uppercase tracking-[0.16em]">
              Tu proyecto empieza aquí
            </span>
          </div>

          <h2
            id="contact-form-title"
            className="mt-5 text-[clamp(2.25rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.055em] text-neutral-950"
          >
            Cuéntanos tu idea.
            <br />
            <span className="text-indigo-600">Nosotros te orientamos.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            No necesitas preparar un documento técnico ni tener todo decidido.
            Explícanos qué necesita tu negocio y podremos estudiar contigo la
            mejor opción.
          </p>
        </div>

        {/* ===================================================
            FORMULARIO Y PANEL DE AYUDA
        ==================================================== */}

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
          {/* =================================================
              FORMULARIO
          ================================================== */}

          <div className="min-w-0 rounded-[26px] border border-[#E6E7F0] bg-white p-6 shadow-[0_20px_65px_-45px_rgba(20,20,50,0.2)] sm:p-9 lg:p-10">
            {/* ENCABEZADO DEL FORMULARIO */}

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <MessageCircle size={22} strokeWidth={1.8} />
              </span>

              <div>
                <h3 className="text-xl font-bold tracking-[-0.035em] text-neutral-950 sm:text-2xl">
                  Hablemos de tu proyecto
                </h3>

                <p className="mt-2 text-sm leading-7 text-neutral-600">
                  Rellena los datos básicos y cuéntanos brevemente qué
                  necesitas.
                </p>
              </div>
            </div>

            {/* =================================================
                FORMULARIO HTML
            ================================================== */}

            <form onSubmit={handleSubmit} className="mt-9 space-y-6">
              {/* HONEYPOT ANTISPAM */}

              <div
                className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
                aria-hidden="true"
              >
                <label htmlFor="website">Website</label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* ===============================================
                  DATOS DE CONTACTO
              ================================================ */}

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-600">
                  01 · Cómo podemos contactar contigo
                </p>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {/* NOMBRE */}

                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-neutral-800"
                    >
                      Tu nombre <span className="text-indigo-600">*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      placeholder="¿Cómo te llamas?"
                      className={inputClassName}
                    />
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-neutral-800"
                    >
                      Correo electrónico{" "}
                      <span className="text-indigo-600">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={200}
                      placeholder="nombre@empresa.com"
                      className={inputClassName}
                    />
                  </div>

                  {/* TELÉFONO */}

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-neutral-800"
                    >
                      Teléfono{" "}
                      <span className="font-normal text-neutral-400">
                        (opcional)
                      </span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={50}
                      placeholder="+34 600 000 000"
                      className={inputClassName}
                    />
                  </div>

                  {/* EMPRESA */}

                  <div>
                    <label
                      htmlFor="company"
                      className="text-sm font-semibold text-neutral-800"
                    >
                      Nombre del negocio{" "}
                      <span className="font-normal text-neutral-400">
                        (opcional)
                      </span>
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      maxLength={150}
                      placeholder="Nombre de tu empresa"
                      className={inputClassName}
                    />
                  </div>
                </div>
              </div>

              {/* SEPARADOR */}

              <div className="border-t border-neutral-100" />

              {/* ===============================================
                  INFORMACIÓN DEL PROYECTO
              ================================================ */}

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-600">
                  02 · Qué necesitas
                </p>

                {/* TIPO DE PROYECTO */}

                <div className="mt-5">
                  <label
                    htmlFor="projectType"
                    className="text-sm font-semibold text-neutral-800"
                  >
                    ¿En qué podemos ayudarte?{" "}
                    <span className="text-indigo-600">*</span>
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    required
                    defaultValue=""
                    className={inputClassName}
                  >
                    <option value="" disabled>
                      Selecciona lo que más se parece a tu idea
                    </option>

                    {projectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>

                  <p className="mt-2.5 text-xs leading-6 text-neutral-500">
                    Si no tienes claro qué elegir, puedes seleccionar la última
                    opción.
                  </p>
                </div>

                {/* MENSAJE */}

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-neutral-800"
                  >
                    Cuéntanos un poco más{" "}
                    <span className="text-indigo-600">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={5000}
                    rows={5}
                    placeholder="Por ejemplo: Tengo una empresa de reformas y quiero una web donde mis clientes puedan conocer nuestros servicios, ver algunos trabajos y pedir presupuesto..."
                    className={`${inputClassName} min-h-[150px] resize-y leading-7`}
                  />

                  <p className="mt-2.5 text-xs leading-6 text-neutral-500">
                    Puedes explicarlo con tus palabras. No hace falta que
                    conozcas los términos técnicos.
                  </p>
                </div>
              </div>

              {/* ===============================================
                  PRIVACIDAD
              ================================================ */}

              <div className="border-t border-neutral-100 pt-6">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 shrink-0 rounded border-neutral-300 accent-indigo-600"
                  />

                  <span className="text-sm leading-7 text-neutral-600">
                    He leído y acepto la{" "}
                    <Link
                      href="/privacidad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-indigo-600 hover:underline"
                    >
                      Política de privacidad
                    </Link>
                    . <span className="text-indigo-600">*</span>
                  </span>
                </label>
              </div>

              {/* ===============================================
                  CLOUDFLARE TURNSTILE
              ================================================ */}

              <div className="space-y-3">
                <p className="text-sm font-semibold text-neutral-800">
                  Verificación de seguridad
                </p>

                {turnstileSiteKey ? (
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={turnstileSiteKey}
                    options={{
                      theme: "light",
                      language: "es",
                      action: "contact_form",
                    }}
                    onSuccess={(token) => {
                      setTurnstileToken(token);

                      if (status === "error") {
                        setStatus("idle");
                        setErrorMessage("");
                      }
                    }}
                    onExpire={() => {
                      setTurnstileToken("");
                    }}
                    onError={() => {
                      setTurnstileToken("");
                      setStatus("error");

                      setErrorMessage(
                        "No se ha podido verificar la seguridad. Vuelve a intentarlo.",
                      );
                    }}
                  />
                ) : (
                  <p role="alert" className="text-sm text-red-600">
                    Verificación de seguridad no configurada.
                  </p>
                )}
              </div>

              {/* ===============================================
                  ENVIAR CONSULTA
              ================================================ */}

              <div className="border-t border-neutral-100 pt-6">
                <button
                  type="submit"
                  disabled={status === "loading" || !turnstileSiteKey}
                  className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#6952F5] px-7 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#806BFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <LoaderCircle size={18} className="animate-spin" />
                      Enviando consulta...
                    </>
                  ) : (
                    <>
                      Quiero hablar de mi proyecto
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-neutral-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Check size={14} className="text-indigo-600" />
                    Sin compromiso
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <Check size={14} className="text-indigo-600" />
                    Trato directo
                  </span>
                </div>
              </div>

              {/* ===============================================
                  MENSAJE DE ÉXITO
              ================================================ */}

              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={22}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />

                    <div>
                      <p className="text-sm font-bold text-neutral-950">
                        Tu consulta se ha enviado correctamente.
                      </p>

                      <p className="mt-2 text-sm leading-7 text-neutral-600">
                        Hemos recibido tu mensaje. Revisaremos tu consulta y nos
                        pondremos en contacto contigo lo antes posible.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ===============================================
                  MENSAJE DE ERROR
              ================================================ */}

              {status === "error" && (
                <div
                  role="alert"
                  className="rounded-2xl border border-red-200 bg-red-50 p-5"
                >
                  <div className="flex items-start gap-3">
                    <CircleAlert
                      size={21}
                      className="mt-0.5 shrink-0 text-red-600"
                    />

                    <div>
                      <p className="text-sm font-bold text-neutral-950">
                        No hemos podido enviar tu consulta.
                      </p>

                      <p className="mt-2 text-sm leading-7 text-neutral-600">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* =================================================
              PANEL DERECHO
          ================================================== */}

          <aside className="min-w-0 lg:sticky lg:top-28">
            {/* PANEL PRINCIPAL */}

            <div className="relative isolate overflow-hidden rounded-[26px] bg-[#11111B] p-7 text-white sm:p-9">
              {/* RESPLANDOR */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
              >
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-[85px]" />
              </div>

              {/* ENCABEZADO */}

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#302A4F] text-[#B8AAFF]">
                <Lightbulb size={24} strokeWidth={1.8} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-[#B8AAFF]">
                No hace falta tenerlo todo claro
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-[1.2] tracking-[-0.04em] sm:text-3xl">
                Empecemos por lo que necesita tu negocio.
              </h3>

              <p className="mt-5 text-sm leading-8 text-[#B9B7C9] sm:text-[15px]">
                A veces lo más difícil es saber por dónde empezar. Puedes
                contarnos qué te preocupa, qué quieres mejorar o qué idea llevas
                tiempo pensando desarrollar.
              </p>

              {/* EJEMPLOS */}

              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="text-sm font-bold text-white">
                  Por ejemplo, puedes decirnos:
                </p>

                <div className="mt-5 space-y-3">
                  {examples.map((example) => (
                    <div
                      key={example}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.045] p-4"
                    >
                      <Check
                        size={16}
                        strokeWidth={2}
                        className="mt-1 shrink-0 text-[#B9ADFF]"
                      />

                      <p className="text-sm leading-6 text-[#D4D1E2]">
                        {example}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CIERRE */}

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold leading-7 text-white">
                  No tienes que elegir la solución técnica.
                </p>

                <p className="mt-2 text-sm leading-7 text-[#B4B2C5]">
                  Primero entendemos tu situación. Después valoramos contigo qué
                  alternativa tiene más sentido.
                </p>
              </div>

              {/* LÍNEA DECORATIVA */}

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#6952F5] via-[#9A8AFF] to-transparent"
              />
            </div>

            {/* =================================================
                BLOQUE DE CONFIANZA
            ================================================== */}

            <div className="mt-5 rounded-2xl border border-[#E5E6EF] bg-white p-6 sm:p-7">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <ClipboardCheck size={21} strokeWidth={1.8} />
                </span>

                <div>
                  <p className="text-base font-bold text-neutral-950">
                    Antes de comenzar, todo claro.
                  </p>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    Te explicaremos qué podemos hacer, qué incluye nuestra
                    propuesta, cuánto costaría y cuáles serían los plazos
                    previstos.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-neutral-500">
                <ShieldCheck size={17} className="text-indigo-600" />
                Tu consulta no supone ningún compromiso.
              </div>
            </div>

            {/* WHATSAPP ALTERNATIVO */}

            <div className="mt-6 text-center">
              <p className="text-sm text-neutral-600">
                ¿Prefieres escribirnos directamente?
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex min-h-11 items-center justify-center gap-2 text-sm font-bold text-indigo-600 no-underline transition-colors hover:text-indigo-800"
              >
                Hablar por WhatsApp
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
