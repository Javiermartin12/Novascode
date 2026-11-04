import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* =========================================================
   CONFIGURACIÓN DE OFERTAS
========================================================= */

const WHATSAPP_NUMBER = "34633560759";

const offers = [
  {
    id: "web-express",
    name: "Web Express",
    badge: "Para empezar",
    headline: "Empieza a mostrar tu negocio con una buena imagen.",
    description:
      "Una página web profesional y sencilla para que tus clientes conozcan tu negocio, descubran lo que ofreces y puedan contactar contigo.",
    price: "100",
    total: "121 € IVA incluido",
    featured: false,

    benefits: [
      "Presenta tu negocio de forma profesional.",
      "Muestra tus servicios de manera clara.",
      "Facilita que te contacten desde el móvil.",
      "Ten una web adaptada a tu actividad.",
    ],

    features: [
      "Hasta 3 páginas independientes.",
      "Diseño responsive para móviles y ordenadores.",
      "Botón de WhatsApp o contacto directo.",
      "Adaptación de textos e imágenes facilitados.",
      "Una ronda de revisiones.",
      "SEO técnico inicial.",
      "Configuración de Google Analytics y Search Console.",
      "Configuración del Perfil de Empresa en Google, si es elegible.",
      "Certificado SSL.",
      "Optimización inicial de velocidad y rendimiento.",
      "Gestión de dominio y alojamiento durante 1 año, con tarifas del proveedor aparte.",
    ],

    whatsappMessage:
      "Hola, he visto la oferta Web Express de Novascode desde 100 € y me gustaría recibir información para mi negocio.",
  },
  {
    id: "web-corporativa",
    name: "Web Corporativa",
    badge: "Para dar un paso más",
    headline: "Haz que tu empresa transmita toda su profesionalidad.",
    description:
      "Una web más completa para presentar tu empresa, explicar tus servicios, generar confianza y facilitar las solicitudes de presupuesto.",
    price: "400",
    total: "484 € IVA incluido",
    featured: true,

    benefits: [
      "Presenta tu empresa con una imagen más completa.",
      "Explica tus servicios con su propio espacio.",
      "Recibe consultas mediante un formulario.",
      "Ofrece una experiencia profesional en cualquier dispositivo.",
    ],

    features: [
      "Hasta 5 páginas independientes.",
      "Diseño profesional y responsive.",
      "Formulario de contacto.",
      "SEO técnico inicial.",
      "Una ronda de revisiones.",
      "Configuración de Google Analytics y Search Console.",
      "Configuración del Perfil de Empresa en Google, si es elegible.",
      "Certificado SSL.",
      "Optimización inicial de velocidad y rendimiento.",
      "Gestión de dominio y alojamiento durante 2 años, con tarifas del proveedor aparte.",
    ],

    whatsappMessage:
      "Hola, he visto la oferta Web Corporativa de Novascode desde 400 € y me gustaría conocer las opciones para mi empresa.",
  },
] as const;

/* =========================================================
   PASOS DEL PROCESO
========================================================= */

const steps = [
  {
    number: "01",
    title: "Cuéntanos tu negocio",
    description:
      "Nos explicas a qué te dedicas, qué necesitas y cómo quieres que contacten contigo.",
  },
  {
    number: "02",
    title: "Preparamos tu propuesta",
    description:
      "Te explicamos la opción que mejor encaja, qué incluye, el precio y los plazos.",
  },
  {
    number: "03",
    title: "Creamos tu página web",
    description:
      "Desarrollamos tu web, revisamos el resultado contigo y preparamos su publicación.",
  },
] as const;

/* =========================================================
   LAUNCH OFFER
========================================================= */

export default function LaunchOffer() {
  return (
    <section
      id="oferta-lanzamiento"
      aria-labelledby="novascode-launch-title"
      className="relative isolate overflow-hidden bg-[#F7F8FC] py-20 text-neutral-950 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          FONDO
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-indigo-200/35 blur-[100px]" />

        <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-violet-200/25 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ===================================================
            PRESENTACIÓN COMERCIAL
        ==================================================== */}

        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-indigo-600">
            <Sparkles size={16} strokeWidth={1.8} />
            Oferta de lanzamiento
          </div>

          <h2
            id="novascode-launch-title"
            className="mx-auto mt-7 max-w-4xl text-[clamp(2.4rem,4.5vw,4.2rem)] font-bold leading-[1.1] tracking-[-0.055em] text-neutral-950"
          >
            Tu negocio en internet.
            <br />
            <span className="text-indigo-600">Sin complicaciones.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
            Sabemos que quieres dedicar tu tiempo a tu negocio, no a complicarte
            con cuestiones técnicas. Nosotros nos encargamos de desarrollar una
            web profesional para que puedas presentar tus servicios y facilitar
            que tus clientes contacten contigo.
          </p>

          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-7 text-neutral-800 sm:text-base">
            Tú nos cuentas qué necesitas. Nosotros te ayudamos a hacerlo
            realidad.
          </p>

          {/* MENSAJE DE CONFIANZA */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {["Trato directo", "Precios claros", "Diseño profesional"].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 sm:text-sm"
                >
                  <Check
                    size={16}
                    strokeWidth={2.4}
                    className="text-indigo-600"
                  />

                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        {/* ===================================================
            TARJETAS COMERCIALES
        ==================================================== */}

        <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {offers.map((offer) => {
            const dark = offer.featured;

            const whatsappUrl =
              `https://wa.me/${WHATSAPP_NUMBER}?text=` +
              encodeURIComponent(offer.whatsappMessage);

            return (
              <article
                key={offer.id}
                className={`relative flex min-w-0 flex-col overflow-hidden rounded-[28px] border p-6 sm:p-8 lg:p-9 ${
                  dark
                    ? "border-[#252239] bg-[#11111B] text-white shadow-[0_25px_65px_-30px_rgba(16,13,40,0.55)]"
                    : "border-[#E5E6EF] bg-white text-neutral-950 shadow-[0_20px_55px_-35px_rgba(25,25,50,0.2)]"
                }`}
              >
                {/* FONDO DE LA OPCIÓN DESTACADA */}

                {dark && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/15 blur-[75px]"
                  />
                )}

                <div className="relative flex h-full flex-col">
                  {/* ETIQUETA */}

                  <div
                    className={`inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] ${
                      dark
                        ? "bg-indigo-500/15 text-[#C3B9FF]"
                        : "bg-indigo-50 text-indigo-700"
                    }`}
                  >
                    {offer.badge}
                  </div>

                  {/* NOMBRE Y PROMESA */}

                  <p
                    className={`mt-7 text-xs font-bold uppercase tracking-[0.14em] ${
                      dark ? "text-[#B5A9FF]" : "text-indigo-600"
                    }`}
                  >
                    {offer.name}
                  </p>

                  <h3 className="mt-3 min-h-[88px] text-[clamp(1.55rem,2.5vw,2rem)] font-bold leading-[1.2] tracking-[-0.045em]">
                    {offer.headline}
                  </h3>

                  <p
                    className={`mt-5 min-h-[112px] text-sm leading-7 sm:text-[15px] ${
                      dark ? "text-[#BCBAC9]" : "text-neutral-600"
                    }`}
                  >
                    {offer.description}
                  </p>

                  {/* PRECIO */}

                  <div
                    className={`mt-7 border-t pt-7 ${
                      dark ? "border-white/10" : "border-neutral-200"
                    }`}
                  >
                    <p
                      className={`text-xs font-medium uppercase tracking-[0.12em] ${
                        dark ? "text-[#A6A4B9]" : "text-neutral-500"
                      }`}
                    >
                      Inversión desde
                    </p>

                    <div className="mt-4 flex flex-wrap items-end gap-x-2 gap-y-1">
                      <span className="text-[clamp(3.7rem,5vw,5rem)] font-bold leading-none tracking-[-0.075em]">
                        {offer.price} €
                      </span>

                      <span
                        className={`pb-1.5 text-sm ${
                          dark ? "text-[#ACAABB]" : "text-neutral-500"
                        }`}
                      >
                        + IVA
                      </span>
                    </div>

                    <p
                      className={`mt-3 text-sm ${
                        dark ? "text-[#AAA8BB]" : "text-neutral-500"
                      }`}
                    >
                      {offer.total}
                    </p>
                  </div>

                  {/* BENEFICIOS PARA EL CLIENTE */}

                  <div className="mt-8">
                    <p className="text-sm font-bold">¿Qué vas a conseguir?</p>

                    <ul className="mt-5 space-y-4">
                      {offer.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                              dark
                                ? "bg-indigo-500/20 text-[#BDB2FF]"
                                : "bg-indigo-50 text-indigo-600"
                            }`}
                          >
                            <Check size={14} strokeWidth={2.4} />
                          </span>

                          <span
                            className={`text-sm leading-6 ${
                              dark ? "text-[#E2DFED]" : "text-neutral-700"
                            }`}
                          >
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* =================================================
                      ACCIONES DE CONTACTO
                  ================================================== */}

                  <div className="mt-auto pt-9">
                    <Link
                      href="/contacto"
                      className={`group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-bold no-underline transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 ${
                        dark
                          ? "bg-[#6952F5] text-white hover:bg-[#806BFF] focus-visible:outline-white"
                          : "bg-neutral-950 text-white hover:bg-indigo-600 focus-visible:outline-indigo-600"
                      }`}
                    >
                      Quiero mi página web
                      <ArrowUpRight
                        size={19}
                        strokeWidth={1.8}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 text-sm font-semibold no-underline transition-colors ${
                        dark
                          ? "text-[#C6BBFF] hover:text-white"
                          : "text-indigo-700 hover:text-indigo-900"
                      }`}
                    >
                      <MessageCircle size={17} strokeWidth={1.8} />
                      Prefiero hablar por WhatsApp
                      <ArrowRight size={15} />
                    </a>

                    <p
                      className={`mt-3 text-center text-xs leading-5 ${
                        dark ? "text-neutral-400" : "text-neutral-500"
                      }`}
                    >
                      Cuéntanos tu idea y te orientamos antes de contratar.
                    </p>
                  </div>

                  {/* =================================================
                      CARACTERÍSTICAS TÉCNICAS
                  ================================================== */}

                  <details
                    className={`group mt-8 overflow-hidden rounded-xl border ${
                      dark
                        ? "border-white/10 bg-white/[0.035]"
                        : "border-neutral-200 bg-[#FAFAFD]"
                    }`}
                  >
                    <summary
                      className={`flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-sm font-semibold [&::-webkit-details-marker]:hidden ${
                        dark ? "text-[#C7BEFF]" : "text-indigo-700"
                      }`}
                    >
                      Ver todo lo que incluye
                      <ChevronDown
                        size={18}
                        className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                      />
                    </summary>

                    <div
                      className={`border-t px-4 pb-5 pt-5 ${
                        dark ? "border-white/10" : "border-neutral-200"
                      }`}
                    >
                      <ul className="space-y-3.5">
                        {offer.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check
                              size={16}
                              strokeWidth={2}
                              className={`mt-1 shrink-0 ${
                                dark ? "text-[#B9AEFF]" : "text-indigo-600"
                              }`}
                            />

                            <span
                              className={`text-[13px] leading-6 ${
                                dark ? "text-[#CAC7D8]" : "text-neutral-600"
                              }`}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                </div>
              </article>
            );
          })}
        </div>

        {/* ===================================================
            PROCESO COMERCIAL
        ==================================================== */}

        <div className="mx-auto mt-20 max-w-6xl border-t border-[#DFE1EC] pt-14 sm:mt-24 sm:pt-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-600">
              Así trabajamos
            </p>

            <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-neutral-950 sm:text-3xl">
              Tú conoces tu negocio.
              <br />
              Nosotros nos encargamos de la web.
            </h3>

            <p className="mt-5 text-sm leading-7 text-neutral-600 sm:text-base">
              Queremos que contratar tu página web sea un proceso sencillo, con
              comunicación directa y sin dudas sobre lo que vas a recibir.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-[#E5E6EF] bg-white p-6 sm:p-7"
              >
                <span className="text-sm font-bold tracking-[0.08em] text-indigo-600">
                  {step.number}
                </span>

                <h4 className="mt-5 text-base font-bold text-neutral-950">
                  {step.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================
            INFORMACIÓN Y CONDICIONES
        ==================================================== */}

        <div className="mx-auto mt-12 max-w-6xl rounded-2xl border border-[#E4E5EF] bg-white p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <ShieldCheck size={22} strokeWidth={1.8} />
            </span>

            <div className="min-w-0">
              <h3 className="text-base font-bold text-neutral-950">
                Precio claro desde el principio
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                Las ofertas corresponden a proyectos con las características
                indicadas y los precios se muestran sin IVA. Antes de empezar,
                acordamos contigo el alcance del trabajo, el presupuesto y los
                plazos.
              </p>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                El cliente facilita los contenidos necesarios. La gestión
                técnica de dominio y alojamiento se ofrece durante el periodo
                indicado en cada modalidad, con las tarifas de los proveedores
                aparte. El mantenimiento recurrente y las funcionalidades
                adicionales se presupuestan por separado.
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            OTROS SERVICIOS
        ==================================================== */}

        <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-[26px] bg-[#151521] px-6 py-9 text-white sm:px-9 sm:py-11">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#B7AAFF]">
                Soluciones a medida
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                ¿Tu proyecto necesita algo diferente?
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#BEBCCA] sm:text-base">
                También desarrollamos tiendas online, aplicaciones, software de
                gestión y soluciones digitales adaptadas a las necesidades de tu
                empresa. Cuéntanos qué quieres conseguir y estudiamos la mejor
                forma de desarrollarlo.
              </p>
            </div>

            <Link
              href="/contacto"
              className="group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-3 rounded-xl bg-[#6952F5] px-6 py-4 text-sm font-bold text-white no-underline transition-all duration-200 hover:bg-[#806BFF]"
            >
              Hablemos de tu proyecto
              <ArrowUpRight
                size={19}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
