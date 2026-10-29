"use client";

import { type ElementType, type FormEvent, useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import Link from "next/link";

import {
  ArrowRight,
  Check,
  CircleAlert,
  Clock3,
  Lightbulb,
  LoaderCircle,
  MessagesSquare,
} from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

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

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
      turnstileToken,

      // Campo antispam oculto
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
    } catch (error) {
      console.error("Error enviando formulario:", error);
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No se ha podido enviar el mensaje.",
      );
    } finally {
      // El token es de un solo uso.
      turnstileRef.current?.reset();
      setTurnstileToken("");
    }
  }

  return (
    <section className="bg-neutral-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* FORMULARIO */}
          <div className="rounded-[32px] border border-neutral-200 bg-white p-7 sm:p-9 lg:p-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                Háblanos de tu proyecto
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-4xl">
                Empecemos por conocerte un poco mejor.
              </h2>

              <p className="mt-4 text-base leading-7 text-neutral-600">
                Cuéntanos qué necesitas. No hace falta que tengas definida la
                tecnología, las funcionalidades ni todos los detalles.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              {/* Honeypot antispam */}
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

              {/* Nombre + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-neutral-800"
                  >
                    Nombre *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Tu nombre"
                    className="mt-2.5 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-neutral-800"
                  >
                    Email *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    placeholder="nombre@empresa.com"
                    className="mt-2.5 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              {/* Teléfono + Empresa */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-neutral-800"
                  >
                    Teléfono
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    maxLength={50}
                    placeholder="+34 600 000 000"
                    className="mt-2.5 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="text-sm font-semibold text-neutral-800"
                  >
                    Empresa
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    maxLength={150}
                    placeholder="Nombre de tu empresa"
                    className="mt-2.5 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              {/* Tipo de proyecto */}
              <div>
                <label
                  htmlFor="projectType"
                  className="text-sm font-semibold text-neutral-800"
                >
                  ¿En qué podemos ayudarte? *
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="mt-2.5 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm text-neutral-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>

                  <option value="web">Web corporativa</option>
                  <option value="ecommerce">Tienda online / e-commerce</option>
                  <option value="software">Software a medida</option>
                  <option value="app">Aplicación móvil</option>
                  <option value="automation">
                    Automatización e integraciones
                  </option>
                  <option value="existing">
                    Mejorar un proyecto existente
                  </option>
                  <option value="other">Tengo una idea diferente</option>
                  <option value="unsure">No sé exactamente qué necesito</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-neutral-800"
                >
                  Cuéntanos tu idea *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={5000}
                  rows={6}
                  placeholder="Explícanos brevemente qué quieres crear, mejorar o solucionar..."
                  className="mt-2.5 w-full resize-none rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm leading-6 text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Privacidad */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  className="mt-1 h-4 w-4 rounded border-neutral-300 accent-indigo-600"
                />

                <span className="text-sm leading-6 text-neutral-500">
                  He leído y acepto la{" "}
                  <Link
                    href="/privacidad"
                    target="_blank"
                    className="font-medium text-indigo-600 hover:underline"
                  >
                    Política de Privacidad
                  </Link>
                  . *
                </span>
              </label>

              {/* Cloudflare Turnstile */}
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
                    onExpire={() => setTurnstileToken("")}
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

              {/* Botón */}
              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <LoaderCircle size={17} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar consulta
                      <ArrowRight size={17} />
                    </>
                  )}
                </button>

                <p className="text-xs leading-5 text-neutral-400">
                  Sin compromiso · Contacto directo
                </p>
              </div>

              {/* ÉXITO */}
              {status === "success" && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
                      <Check size={13} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-neutral-950">
                        Mensaje enviado correctamente.
                      </p>

                      <p className="mt-1 text-sm leading-6 text-neutral-600">
                        Hemos recibido tu consulta. Nos pondremos en contacto
                        contigo lo antes posible.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ERROR */}
              {status === "error" && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4">
                  <div className="flex items-start gap-3">
                    <CircleAlert
                      size={18}
                      className="mt-0.5 shrink-0 text-red-600"
                    />

                    <div>
                      <p className="text-sm font-semibold text-neutral-950">
                        No hemos podido enviar el mensaje.
                      </p>

                      <p className="mt-1 text-sm leading-6 text-neutral-600">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* PARTE DERECHA */}
          <div className="lg:pt-6">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
                No hace falta tenerlo todo claro
              </p>

              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-neutral-950 sm:text-4xl">
                Cuéntanos el problema. Nosotros pensamos en la solución.
              </h3>

              <p className="mt-5 text-base leading-7 text-neutral-600">
                Puedes contactar aunque tu proyecto esté todavía en una fase
                inicial. Lo primero es entender qué quieres conseguir.
              </p>

              <div className="mt-10 space-y-4">
                <InfoCard
                  icon={Lightbulb}
                  title="Puede ser solo una idea"
                  description="No necesitas tener definido cómo debe desarrollarse ni qué tecnologías utilizar."
                />

                <InfoCard
                  icon={MessagesSquare}
                  title="Hablamos directamente"
                  description="Podremos comentar tus necesidades, resolver dudas y definir juntos el alcance del proyecto."
                />

                <InfoCard
                  icon={Clock3}
                  title="Sin procesos complicados"
                  description="Analizamos lo necesario y planteamos una propuesta clara antes de comenzar el desarrollo."
                />
              </div>

              {/* WhatsApp */}
              <div className="mt-8 overflow-hidden rounded-[28px] bg-neutral-950 p-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
                  ¿Prefieres algo más rápido?
                </p>

                <h4 className="mt-3 text-xl font-semibold">
                  Escríbenos directamente por WhatsApp.
                </h4>

                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  Puedes explicarnos brevemente qué necesitas y continuamos la
                  conversación desde ahí.
                </p>

                <a
                  href="https://wa.me/34633560759"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-indigo-400"
                >
                  Abrir WhatsApp
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  description,
}: {
  icon: ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 rounded-[24px] border border-neutral-200 bg-white p-5">
      <div className="h-11 w-11 shrink-0 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
        <Icon size={19} strokeWidth={1.8} />
      </div>

      <div>
        <p className="text-sm font-semibold text-neutral-950">{title}</p>

        <p className="mt-1.5 text-sm leading-6 text-neutral-500">
          {description}
        </p>
      </div>
    </div>
  );
}
