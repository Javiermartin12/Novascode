import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe2,
  Lightbulb,
  MessageCircleMore,
  RefreshCw,
  Workflow,
} from "lucide-react";

/* =========================================================
   CONFIGURACIÓN
========================================================= */

const WHATSAPP_NUMBER = "34633560759";

const benefits = [
  {
    title: "Trato directo",
    description: "Hablas con quien desarrolla tu proyecto.",
  },
  {
    title: "Todo claro",
    description: "Te explicamos las opciones sin tecnicismos.",
  },
  {
    title: "A tu medida",
    description: "Buscamos una solución que encaje contigo.",
  },
] as const;

/* =========================================================
   CONSULTAS RÁPIDAS
========================================================= */

const consultationTopics = [
  {
    id: "nueva-web",
    icon: Globe2,
    title: "Quiero una web para mi negocio",
    description: "Necesito empezar a tener presencia en internet.",
    message:
      "Hola, tengo un negocio y me gustaría consultar las opciones para tener una página web profesional.",
  },
  {
    id: "mejorar-web",
    icon: RefreshCw,
    title: "Quiero mejorar mi página web",
    description: "Ya tengo una web, pero quiero darle una nueva imagen.",
    message:
      "Hola, ya tengo una página web, pero me gustaría renovarla o mejorarla. ¿Podemos hablar?",
  },
  {
    id: "automatizar",
    icon: Workflow,
    title: "Quiero ahorrar tiempo en mi negocio",
    description: "Hay tareas o procesos que me gustaría simplificar.",
    message:
      "Hola, tengo un negocio y me gustaría consultar cómo podría automatizar tareas o mejorar algunos procesos de trabajo.",
  },
  {
    id: "otra-idea",
    icon: Lightbulb,
    title: "Tengo una idea que quiero desarrollar",
    description: "Necesito orientación para saber cómo llevarla a cabo.",
    message:
      "Hola, tengo una idea para un proyecto digital y me gustaría comentarla con vosotros.",
  },
] as const;

function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* =========================================================
   HELP CTA - NOVASCODE
========================================================= */

export default function HelpCTA() {
  return (
    <section
      aria-labelledby="help-cta-title"
      className="bg-[#F7F8FC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-[28px] border border-[#E6E7F0] bg-white shadow-[0_25px_80px_-50px_rgba(20,20,45,0.2)] lg:grid-cols-[1.08fr_0.92fr] lg:rounded-[34px]">
          {/* ===================================================
              CONTENIDO COMERCIAL
          ==================================================== */}

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12 xl:p-14">
            {/* ETIQUETA */}

            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <MessageCircleMore size={22} strokeWidth={1.8} />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">
                Hablemos de tu proyecto
              </span>
            </div>

            {/* TITULAR */}

            <h2
              id="help-cta-title"
              className="mt-8 max-w-xl text-[clamp(2.3rem,4vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.055em] text-neutral-950"
            >
              Hablemos de tu negocio,{" "}
              <span className="text-indigo-600">no de tecnicismos.</span>
            </h2>

            {/* DESCRIPCIÓN */}

            <p className="mt-7 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              Puede que tengas una idea muy clara o que simplemente sepas que
              algo en tu negocio podría funcionar mejor.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              Cuéntanos qué necesitas. Te ayudaremos a valorar las opciones y a
              definir una solución realista, con un alcance y un presupuesto
              claros.
            </p>

            {/* ACCIONES PRINCIPALES */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contacto"
                className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#161620] px-7 py-4 text-sm font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#6952F5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 sm:w-auto"
              >
                Cuéntanos tu proyecto
                <ArrowUpRight
                  size={19}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <a
                href={getWhatsAppUrl(
                  "Hola, he visto la web de Novascode y me gustaría consultar un proyecto para mi negocio.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white px-7 py-4 text-sm font-semibold text-neutral-800 no-underline transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 sm:w-auto"
              >
                <MessageCircleMore size={18} strokeWidth={1.8} />
                Hablar por WhatsApp
              </a>
            </div>

            {/* MENSAJE DE CONFIANZA */}

            <p className="mt-5 text-sm leading-6 text-neutral-500">
              Primero hablamos de tu idea. Después decides si quieres seguir
              adelante.
            </p>

            {/* =================================================
                BENEFICIOS
            ================================================== */}

            <div className="mt-10 border-t border-neutral-100 pt-8">
              <div className="grid gap-5 sm:grid-cols-3">
                {benefits.map((benefit) => (
                  <div key={benefit.title}>
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                        <Check size={12} strokeWidth={2.5} />
                      </span>

                      <p className="text-sm font-bold text-neutral-950">
                        {benefit.title}
                      </p>
                    </div>

                    <p className="mt-2 text-xs leading-6 text-neutral-500 sm:text-[13px]">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===================================================
              PANEL DE CONSULTAS
          ==================================================== */}

          <div className="relative isolate overflow-hidden bg-[#11111B] p-6 text-white sm:p-9 lg:p-10 xl:p-12">
            {/* FONDO DECORATIVO */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10"
            >
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-indigo-600/20 blur-[90px]" />

              <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[90px]" />
            </div>

            {/* ENCABEZADO */}

            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#B9ACFF]">
                Empecemos por aquí
              </p>

              <h3 className="mt-4 max-w-md text-2xl font-bold leading-[1.2] tracking-[-0.04em] sm:text-3xl">
                ¿Qué te gustaría conseguir?
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#B4B2C5] sm:text-[15px]">
                Elige la opción que más se parezca a lo que necesitas y
                cuéntanos tu caso. No hace falta que tengas todo definido.
              </p>
            </div>

            {/* =================================================
                OPCIONES DE CONTACTO
            ================================================== */}

            <div className="relative mt-8 space-y-3">
              {consultationTopics.map((topic) => {
                const Icon = topic.icon;

                return (
                  <a
                    key={topic.id}
                    href={getWhatsAppUrl(topic.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${topic.title}. Consultar por WhatsApp`}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8976FF]/50 hover:bg-[#6D57EF]/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B6AAFF] sm:p-5"
                  >
                    {/* ICONO */}

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#302A4F] text-[#BFB3FF] transition-colors group-hover:bg-[#6952F5] group-hover:text-white">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>

                    {/* TEXTO */}

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold leading-6 text-white">
                        {topic.title}
                      </span>

                      <span className="mt-1 block text-xs leading-5 text-[#A7A5BB]">
                        {topic.description}
                      </span>
                    </span>

                    {/* FLECHA */}

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.8}
                      className="shrink-0 text-[#AAA0DB] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  </a>
                );
              })}
            </div>

            {/* PIE */}

            <div className="relative mt-8 border-t border-white/10 pt-6">
              <div className="flex items-start gap-3">
                <MessageCircleMore
                  size={18}
                  strokeWidth={1.8}
                  className="mt-1 shrink-0 text-[#B8AAFF]"
                />

                <p className="text-xs leading-6 text-[#A9A7BB] sm:text-sm">
                  Al elegir una opción se abrirá WhatsApp con un mensaje
                  preparado. Podrás modificarlo antes de enviarlo.
                </p>
              </div>
            </div>

            {/* DETALLE DECORATIVO */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#6952F5] via-[#9584FF] to-transparent"
            />
          </div>
        </div>

        {/* ===================================================
            CIERRE INFERIOR
        ==================================================== */}

        <div className="mt-7 flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-3">
          <span className="text-sm text-neutral-500">
            ¿Tienes una necesidad diferente?
          </span>

          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 text-sm font-bold text-indigo-600 no-underline transition-colors hover:text-indigo-800"
          >
            También podemos estudiarla
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
