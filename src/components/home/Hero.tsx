import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Globe2,
  MessageCircle,
  MonitorSmartphone,
  Sparkles,
} from "lucide-react";

/* =========================================================
   CONFIGURACIÓN DE OFERTAS
========================================================= */

const webOffers = [
  {
    id: "express",
    name: "Web Express",
    description: "Para dar a conocer tu negocio en internet.",
    price: "100",
    highlighted: true,
  },
  {
    id: "corporativa",
    name: "Web Corporativa",
    description: "Para presentar tu empresa y sus servicios.",
    price: "400",
    highlighted: false,
  },
] as const;

/* =========================================================
   HERO - NOVASCODE
========================================================= */

export default function Hero() {
  return (
    <section
      aria-labelledby="novascode-hero-title"
      className="relative isolate overflow-hidden bg-[#0D0D15] text-white"
    >
      {/* =====================================================
          FONDO DECORATIVO
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(87,60,230,0.17),transparent_55%)]" />

        <div className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-indigo-700/10 blur-[110px]" />

        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-violet-600/15 blur-[120px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      {/* =====================================================
          CONTENIDO
      ====================================================== */}

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:gap-16 lg:py-24 xl:grid-cols-[1.08fr_0.92fr] xl:gap-20">
        {/* ===================================================
            COLUMNA IZQUIERDA
        ==================================================== */}

        <div className="min-w-0">
          {/* ETIQUETA */}

          <div className="mb-8 inline-flex max-w-full items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-4 py-2.5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#A69BFF]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C4BEFF] sm:text-xs">
              Desarrollo web · Software · Apps
            </span>
          </div>

          {/* TITULAR PRINCIPAL */}

          <h1
            id="novascode-hero-title"
            className="max-w-3xl text-[clamp(2.8rem,5.2vw,5.1rem)] font-bold leading-[1.075] tracking-[-0.055em] text-white"
          >
            Una web que transmite{" "}
            <span className="bg-gradient-to-r from-[#B9ADFF] via-[#8D7BFF] to-[#6D5AFF] bg-clip-text text-transparent">
              confianza.
            </span>
            <br className="hidden sm:block" /> Software que resuelve.
          </h1>

          {/* DESCRIPCIÓN */}

          <p className="mt-7 max-w-[590px] text-base leading-8 text-[#B8B8C9] sm:text-lg sm:leading-9">
            Diseñamos páginas web profesionales para autónomos y empresas.
            También desarrollamos aplicaciones, software a medida y
            automatizaciones adaptadas a las necesidades de cada negocio.
          </p>

          {/* LLAMADAS A LA ACCIÓN */}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contacto"
              className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#6952F5] px-7 py-4 text-sm font-bold text-white no-underline shadow-[0_16px_35px_-18px_rgba(105,82,245,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#806BFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Cuéntanos tu proyecto
              <ArrowUpRight
                size={19}
                strokeWidth={1.8}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <a
              href="https://wa.me/34633560759"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.06] px-7 py-4 text-sm font-semibold text-white no-underline transition-all duration-200 hover:border-white/40 hover:bg-white/[0.12] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              <MessageCircle size={19} strokeWidth={1.8} />
              Hablar por WhatsApp
              <ArrowUpRight
                size={16}
                className="text-white/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* ENLACE SECUNDARIO */}

          <Link
            href="#servicios"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#C6C1E9] no-underline transition-colors hover:text-white"
          >
            Explorar todos nuestros servicios
            <ArrowRight size={16} />
          </Link>

          {/* SEPARADOR */}

          <div className="mt-11 h-px w-full max-w-[560px] bg-white/10" />

          {/* SEÑALES DE CONFIANZA */}

          <div className="mt-6 flex max-w-[600px] flex-wrap gap-x-6 gap-y-4">
            {[
              "Trato directo",
              "Diseño responsive",
              "Presupuesto personalizado",
            ].map((item) => (
              <div key={item} className="inline-flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A99BFF]/10 text-[#B8ABFF]">
                  <Check size={13} strokeWidth={2.3} />
                </span>

                <span className="text-xs font-medium text-[#C5C3D2] sm:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* ALCANCE */}

          <p className="mt-8 text-xs leading-6 text-[#89899F]">
            Atención en El Ejido y Almería. Proyectos digitales para toda
            España.
          </p>
        </div>

        {/* ===================================================
            COLUMNA DERECHA - OFERTAS
        ==================================================== */}

        <div className="relative mx-auto w-full max-w-[520px] xl:max-w-none">
          {/* RESPLANDOR */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-5 rounded-[36px] bg-indigo-500/10 blur-[65px]"
          />

          {/* PANEL PRINCIPAL */}

          <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#181824]/95 p-5 shadow-[0_35px_90px_-35px_rgba(0,0,0,0.7)] sm:p-7">
            {/* ENCABEZADO DEL PANEL */}

            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="mb-3 flex items-center gap-2 text-[#AFA3FF]">
                  <Sparkles size={16} />

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs">
                    Oferta de lanzamiento
                  </span>
                </div>

                <h2 className="text-xl font-bold tracking-[-0.035em] text-white sm:text-2xl">
                  Tu negocio en internet
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#A7A6B8]">
                  Dos formas de comenzar con una web profesional.
                </p>
              </div>

              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#B9ADFF] sm:flex">
                <MonitorSmartphone size={21} strokeWidth={1.7} />
              </div>
            </div>

            {/* OFERTAS */}

            <div className="mt-6 space-y-3">
              {webOffers.map((offer) => (
                <Link
                  key={offer.id}
                  href="/contacto"
                  aria-label={`Consultar ${offer.name} desde ${offer.price} euros más IVA`}
                  className={`group block rounded-2xl border p-5 no-underline transition-all duration-200 hover:-translate-y-0.5 sm:p-6 ${
                    offer.highlighted
                      ? "border-[#8F7BFF]/60 bg-[#6952F5] hover:border-[#B7AAFF] hover:bg-[#765FFF]"
                      : "border-white/15 bg-white/[0.045] hover:border-white/35 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-base font-bold text-white sm:text-lg">
                        {offer.name}
                      </p>

                      <p
                        className={`mt-1.5 max-w-[265px] text-xs leading-5 sm:text-sm ${
                          offer.highlighted ? "text-white/80" : "text-[#AAA9BA]"
                        }`}
                      >
                        {offer.description}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        offer.highlighted
                          ? "border-white/35 bg-white/15 text-white"
                          : "border-white/15 bg-white/10 text-[#B8ADFF]"
                      }`}
                    >
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap items-end gap-x-2 gap-y-1">
                    <span
                      className={`text-xs font-medium ${
                        offer.highlighted ? "text-white/80" : "text-[#A5A4B7]"
                      }`}
                    >
                      Desde
                    </span>

                    <span className="text-[clamp(2.1rem,4vw,2.8rem)] font-bold leading-none tracking-[-0.055em] text-white">
                      {offer.price} €
                    </span>

                    <span
                      className={`pb-1 text-xs ${
                        offer.highlighted ? "text-white/80" : "text-[#A5A4B7]"
                      }`}
                    >
                      + IVA
                    </span>
                  </div>

                  <div
                    className={`mt-5 flex items-center gap-2 border-t pt-4 text-xs font-semibold sm:text-sm ${
                      offer.highlighted
                        ? "border-white/20 text-white"
                        : "border-white/10 text-[#D9D5FF]"
                    }`}
                  >
                    Consultar esta opción
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* OTROS PROYECTOS */}

            <div className="mt-6 rounded-xl border border-white/10 bg-[#101019] p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#28233F] text-[#B7AAFF]">
                  <Code2 size={18} />
                </span>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">
                    ¿Necesitas algo más avanzado?
                  </p>

                  <p className="mt-1 text-xs leading-6 text-[#AAA9BA]">
                    Software de gestión, aplicaciones móviles, tiendas online y
                    automatizaciones.
                  </p>

                  <Link
                    href="/contacto"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-[#C7BEFF] no-underline transition-colors hover:text-white"
                  >
                    Cuéntanos qué necesitas
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

            {/* CONDICIONES */}

            <p className="mt-5 text-center text-[11px] leading-5 text-[#8F8DA4]">
              Precios de lanzamiento más IVA. Alcance y condiciones según la
              modalidad contratada.
            </p>
          </div>

          {/* DETALLE INFERIOR */}

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[#A5A2BC]">
            <Globe2 size={15} />
            Soluciones digitales para empresas y profesionales
          </div>
        </div>
      </div>
    </section>
  );
}
