import Link from "next/link";

import {
  AppWindow,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChartNoAxesCombined,
  Code2,
  MessageCircle,
  ShoppingCart,
  Sparkles,
  Workflow,
} from "lucide-react";

/* =========================================================
   SERVICIOS - NOVASCODE
========================================================= */

const services = [
  {
    id: "desarrollo-web",
    icon: AppWindow,
    category: "Desarrollo web",
    title: "Que tu negocio cause una buena primera impresión.",
    description:
      "Creamos páginas web profesionales para que tus clientes conozcan tu empresa, entiendan qué ofreces y puedan contactar contigo fácilmente.",
    detail: "Webs corporativas y profesionales",
  },
  {
    id: "software-gestion",
    icon: ChartNoAxesCombined,
    category: "Software de gestión",
    title: "Organiza tu negocio y trabaja con más control.",
    description:
      "Desarrollamos herramientas para gestionar clientes, empleados, inventario, tareas y procesos. Todo adaptado a la forma de trabajar de tu empresa.",
    detail: "Herramientas y plataformas a medida",
  },
  {
    id: "aplicaciones-moviles",
    icon: Code2,
    category: "Aplicaciones móviles",
    title: "Lleva tus servicios donde están tus usuarios.",
    description:
      "Creamos aplicaciones móviles con funciones útiles, una experiencia sencilla y un diseño pensado para quienes van a utilizarlas.",
    detail: "Aplicaciones para Android e iOS",
  },
  {
    id: "reservas-citas",
    icon: CalendarDays,
    category: "Reservas y citas",
    title: "Tu agenda organizada, sin tantas complicaciones.",
    description:
      "Implementamos sistemas para gestionar reservas, disponibilidad, citas y clientes desde una única herramienta.",
    detail: "Agendas y sistemas de reservas",
  },
  {
    id: "tiendas-online",
    icon: ShoppingCart,
    category: "Comercio electrónico",
    title: "Empieza a vender también por internet.",
    description:
      "Diseñamos tiendas online donde tus clientes puedan descubrir tus productos, realizar pedidos y comprar de forma cómoda y segura.",
    detail: "Tiendas online y e-commerce",
  },
  {
    id: "automatizacion",
    icon: Workflow,
    category: "Automatización e integraciones",
    title: "Dedica menos tiempo a repetir tareas.",
    description:
      "Conectamos aplicaciones y automatizamos procesos habituales para reducir trabajo manual, evitar errores y facilitar el día a día de tu negocio.",
    detail: "Integraciones, APIs y automatización",
  },
] as const;

/* =========================================================
   TARJETA DE SERVICIO
========================================================= */

type Service = (typeof services)[number];

type ServiceCardProps = {
  service: Service;
  index: number;
};

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8877FF]/45 hover:bg-white/[0.06] sm:p-8">
      {/* RESPLANDOR AL HOVER */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-500/0 blur-[70px] transition-colors duration-500 group-hover:bg-indigo-500/10"
      />

      {/* CABECERA */}

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-[#7463D8]/25 bg-[#5141A5]/15 text-[#B5A8FF] transition-colors duration-300 group-hover:border-[#9586FF]/45 group-hover:bg-[#6952F5]/20">
          <Icon size={23} strokeWidth={1.7} />
        </div>

        <span className="text-xs font-semibold tracking-[0.12em] text-white/20">
          0{index + 1}
        </span>
      </div>

      {/* CONTENIDO */}

      <div className="relative mt-9">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#AFA1FF]">
          {service.category}
        </p>

        <h3 className="mt-4 max-w-sm text-[clamp(1.45rem,2vw,1.75rem)] font-bold leading-[1.2] tracking-[-0.04em] text-white">
          {service.title}
        </h3>

        <p className="mt-5 text-sm leading-7 text-[#ACACBF] sm:text-[15px]">
          {service.description}
        </p>
      </div>

      {/* DETALLE DEL SERVICIO */}

      <div className="relative mt-auto pt-9">
        <div className="border-t border-white/10 pt-5">
          <p className="text-xs font-medium leading-6 text-[#85859E]">
            {service.detail}
          </p>
        </div>

        {/* CONTACTO */}

        <Link
          href="/contacto"
          aria-label={`Consultar servicio de ${service.category}`}
          className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#C6BCFF] no-underline transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AFA1FF]"
        >
          Hablemos de esta solución
          <ArrowUpRight
            size={17}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>

      {/* LÍNEA INFERIOR */}

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#6952F5] to-[#B5A8FF] transition-transform duration-500 group-hover:scale-x-100"
      />
    </article>
  );
}

/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

export default function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="novascode-services-title"
      className="relative isolate overflow-hidden bg-[#0D0D15] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* =====================================================
          FONDO DECORATIVO
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[430px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/[0.08] blur-[110px]" />

        <div className="absolute -bottom-48 -right-32 h-[440px] w-[440px] rounded-full bg-violet-600/[0.07] blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ===================================================
            ENCABEZADO
        ==================================================== */}

        <div className="grid items-end gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-3xl">
            {/* ETIQUETA */}

            <div className="mb-6 inline-flex items-center gap-2 text-[#B8AAFF]">
              <Sparkles size={17} strokeWidth={1.8} />

              <span className="text-xs font-bold uppercase tracking-[0.17em]">
                Mucho más que páginas web
              </span>
            </div>

            {/* TITULAR */}

            <h2
              id="novascode-services-title"
              className="text-[clamp(2.4rem,4.5vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.055em] text-white"
            >
              Cada negocio tiene sus retos.
              <br />
              <span className="text-[#A99BFF]">Buscamos cómo resolverlos.</span>
            </h2>
          </div>

          {/* PRESENTACIÓN */}

          <div className="max-w-xl lg:pb-2">
            <p className="text-base leading-8 text-[#B7B5C8] sm:text-lg sm:leading-9">
              Puede que necesites vender online, organizar mejor tu trabajo o
              automatizar tareas que te quitan tiempo. Cuéntanos qué quieres
              conseguir y estudiaremos cómo ayudarte con la tecnología adecuada.
            </p>

            <p className="mt-5 text-sm font-medium leading-7 text-[#D6D0FF]">
              Una solución pensada para tu negocio, no al revés.
            </p>
          </div>
        </div>

        {/* ===================================================
            SEPARADOR
        ==================================================== */}

        <div className="mt-12 flex items-center gap-4 sm:mt-14">
          <span className="h-px w-12 bg-[#A99BFF]" />

          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9290A7]">
            En qué podemos ayudarte
          </p>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* ===================================================
            LISTADO DE SERVICIOS
        ==================================================== */}

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* ===================================================
            CIERRE COMERCIAL
        ==================================================== */}

        <div className="relative mt-14 overflow-hidden rounded-[28px] border border-[#7966F5]/25 bg-[#1A1829] p-7 sm:p-9 lg:mt-16 lg:p-11">
          {/* DECORACIÓN */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-indigo-600/15 blur-[90px]"
          />

          <div className="relative flex flex-col gap-9 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
            {/* MENSAJE */}

            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#B5A8FF]">
                Hablemos de tu proyecto
              </p>

              <h3 className="mt-4 text-2xl font-bold leading-[1.2] tracking-[-0.04em] text-white sm:text-3xl">
                No hace falta que sepas qué tecnología necesitas.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#B7B5C8] sm:text-base sm:leading-8">
                Explícanos qué quieres mejorar en tu negocio. Te ayudaremos a
                valorar las opciones, el alcance y una solución ajustada a tus
                necesidades y presupuesto.
              </p>
            </div>

            {/* BOTONES */}

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
              <Link
                href="/contacto"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#6952F5] px-6 py-4 text-sm font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#806BFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
              >
                Cuéntanos tu idea
                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <a
                href="https://wa.me/34633560759?text=Hola%2C%20quiero%20consultar%20una%20soluci%C3%B3n%20digital%20para%20mi%20negocio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 text-sm font-semibold text-[#C9C0FF] no-underline transition-colors hover:text-white sm:w-auto"
              >
                <MessageCircle size={17} strokeWidth={1.8} />
                Hablar por WhatsApp
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
