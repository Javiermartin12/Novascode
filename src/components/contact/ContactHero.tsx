import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

/* =========================================================
   DATOS DE CONTACTO
========================================================= */

const PHONE = "+34 633 560 759";
const EMAIL = "contacto@novascode.es";

const WHATSAPP_URL =
  "https://wa.me/34633560759?text=" +
  encodeURIComponent(
    "Hola, he visitado Novascode y me gustaría hablar sobre un proyecto para mi negocio.",
  );

/* =========================================================
   VENTAJAS DE CONTACTAR CON NOVASCODE
========================================================= */

const benefits = [
  "Trato directo",
  "Sin tecnicismos",
  "Presupuesto claro",
] as const;

/* =========================================================
   CONTACT HERO - NOVASCODE
========================================================= */

export default function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-title"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* =====================================================
          FONDO DECORATIVO
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-indigo-200/40 blur-[110px]" />

        <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-violet-100/50 blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:px-10 lg:pb-28 lg:pt-16">
        {/* ===================================================
            VOLVER AL INICIO
        ==================================================== */}

        <Link
          href="/"
          className="group inline-flex min-h-10 items-center gap-2 text-sm font-medium text-neutral-500 no-underline transition-colors hover:text-indigo-600"
        >
          <ArrowLeft
            size={17}
            strokeWidth={1.8}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          Volver al inicio
        </Link>

        {/* ===================================================
            CONTENIDO PRINCIPAL
        ==================================================== */}

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-16 xl:gap-20">
          {/* =================================================
              COLUMNA IZQUIERDA
          ================================================== */}

          <div className="min-w-0">
            {/* ETIQUETA */}

            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2.5">
              <Sparkles
                size={16}
                strokeWidth={1.8}
                className="text-indigo-600"
              />

              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-700">
                Hablemos de tu negocio
              </span>
            </div>

            {/* TITULAR PRINCIPAL */}

            <h1
              id="contact-hero-title"
              className="mt-8 max-w-3xl text-[clamp(2.9rem,5vw,5.2rem)] font-bold leading-[1.08] tracking-[-0.06em] text-neutral-950"
            >
              Cuéntanos qué quieres{" "}
              <span className="text-indigo-600">conseguir.</span>
            </h1>

            {/* SUBTÍTULO */}

            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-neutral-900 sm:text-xl sm:leading-9">
              Nosotros te ayudamos a encontrar la mejor forma de hacerlo
              realidad.
            </p>

            {/* DESCRIPCIÓN COMERCIAL */}

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              ¿Necesitas una página web para tu negocio? ¿Quieres mejorar cómo
              trabajas, vender por internet o desarrollar una idea?
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              Explícanos tu situación y estudiaremos contigo qué opciones tienen
              sentido, qué alcance puede tener el proyecto y cuál sería su
              presupuesto.
            </p>

            {/* MENSAJE DIFERENCIAL */}

            <div className="mt-9 max-w-xl rounded-2xl border border-indigo-100 bg-[#F7F6FF] p-5 sm:p-6">
              <p className="text-base font-bold leading-7 text-neutral-950">
                No necesitas saber de tecnología para hablar con nosotros.
              </p>

              <p className="mt-2 text-sm leading-7 text-neutral-600">
                Tú conoces tu negocio y lo que te gustaría mejorar. Nosotros nos
                encargamos de ayudarte a definir la parte técnica.
              </p>
            </div>

            {/* VALORES */}

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="inline-flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <Check size={14} strokeWidth={2.5} />
                  </span>

                  <span className="text-sm font-semibold text-neutral-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              COLUMNA DERECHA - CONTACTO DIRECTO
          ================================================== */}

          <div className="relative min-w-0">
            {/* RESPLANDOR */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-[38px] bg-indigo-500/10 blur-[65px]"
            />

            {/* PANEL */}

            <div className="relative overflow-hidden rounded-[28px] border border-[#29243E] bg-[#11111B] p-6 text-white shadow-[0_35px_90px_-40px_rgba(20,15,60,0.45)] sm:p-8 xl:p-9">
              {/* FONDO DEL PANEL */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              >
                <div className="absolute -right-28 -top-32 h-80 w-80 rounded-full bg-indigo-600/20 blur-[80px]" />
              </div>

              {/* ENCABEZADO */}

              <div className="relative">
                <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-[#B8AAFF]">
                  Estamos al otro lado
                </p>

                <h2 className="mt-4 text-2xl font-bold leading-[1.2] tracking-[-0.04em] sm:text-3xl">
                  ¿Cómo prefieres hablar con nosotros?
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#B4B2C5] sm:text-[15px]">
                  Elige la forma que te resulte más cómoda. Puedes empezar
                  contándonos tu idea en unas líneas.
                </p>
              </div>

              {/* ===============================================
                  WHATSAPP - CANAL PRINCIPAL
              ================================================ */}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-8 flex items-center gap-4 rounded-2xl bg-[#6952F5] p-5 text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#806BFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <MessageCircle size={23} strokeWidth={1.8} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-base font-bold">
                    Escribir por WhatsApp
                  </span>

                  <span className="mt-1 block text-sm text-white/85">
                    {PHONE}
                  </span>
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.8}
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              {/* ===============================================
                  CONTACTOS SECUNDARIOS
              ================================================ */}

              <div className="relative mt-4 space-y-3">
                {/* CORREO */}

                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-white no-underline transition-colors hover:border-[#8D7CFF]/40 hover:bg-white/[0.08] sm:p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#302A4F] text-[#BFB3FF]">
                    <Mail size={20} strokeWidth={1.8} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-[#A8A6BB]">
                      Correo electrónico
                    </span>

                    <span className="mt-1 block break-all text-sm font-semibold">
                      {EMAIL}
                    </span>
                  </span>

                  <ArrowUpRight size={17} className="shrink-0 text-[#B4A8FF]" />
                </a>

                {/* TELÉFONO */}

                <a
                  href="tel:+34633560759"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-white no-underline transition-colors hover:border-[#8D7CFF]/40 hover:bg-white/[0.08] sm:p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#302A4F] text-[#BFB3FF]">
                    <Phone size={20} strokeWidth={1.8} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-[#A8A6BB]">
                      Llamar por teléfono
                    </span>

                    <span className="mt-1 block text-sm font-semibold">
                      {PHONE}
                    </span>
                  </span>

                  <ArrowUpRight size={17} className="shrink-0 text-[#B4A8FF]" />
                </a>
              </div>

              {/* SEPARADOR */}

              <div className="relative mt-7 border-t border-white/10 pt-6">
                {/* FORMULARIO */}

                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-[#B9ADFF]">
                    <ArrowRight size={18} />
                  </span>

                  <div>
                    <p className="text-sm font-bold">
                      ¿Prefieres utilizar un formulario?
                    </p>

                    <p className="mt-2 text-xs leading-6 text-[#AAA8BD] sm:text-sm">
                      Lo encontrarás justo debajo. Cuéntanos qué necesitas y
                      podremos estudiar tu propuesta.
                    </p>
                  </div>
                </div>
              </div>

              {/* LÍNEA DECORATIVA */}

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#6952F5] via-[#9A8AFF] to-transparent"
              />
            </div>
          </div>
        </div>

        {/* ===================================================
            FRANJA INFERIOR
        ==================================================== */}

        <div className="mt-16 border-t border-neutral-200 pt-7 sm:mt-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <p className="max-w-2xl text-sm leading-7 text-neutral-500">
              ¿Has visto nuestras ofertas de páginas web desde 100 € o 400 €?
              Indícanos cuál te interesa y te ayudaremos a valorar si encaja con
              tu negocio.
            </p>

            <Link
              href="/#oferta-lanzamiento"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-indigo-600 no-underline transition-colors hover:text-indigo-800"
            >
              Ver ofertas web
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
