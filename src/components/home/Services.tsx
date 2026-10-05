import {
  AppWindow,
  CalendarDays,
  ChartNoAxesCombined,
  Code2,
  ShoppingCart,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: AppWindow,
    title: "Webs corporativas",
    description:
      "Webs modernas, rápidas y responsive para empresas y profesionales que quieren transmitir una imagen sólida y profesional.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Software de gestión",
    description:
      "Herramientas a medida para gestionar empleados, clientes, inventario, procesos internos, datos y operaciones del negocio.",
  },
  {
    icon: Code2,
    title: "Apps móviles",
    description:
      "Aplicaciones para Android e iOS diseñadas para ofrecer una experiencia sencilla, rápida y adaptada a tus usuarios.",
  },
  {
    icon: CalendarDays,
    title: "Reservas y citas",
    description:
      "Sistemas de agenda y reservas para gestionar disponibilidad, citas, servicios y clientes de forma más eficiente.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Tiendas online preparadas para vender productos o servicios con una experiencia de compra clara, rápida y responsive.",
  },
  {
    icon: Workflow,
    title: "Integraciones y automatización",
    description:
      "Conectamos herramientas, APIs y procesos para reducir tareas manuales y hacer que tu negocio funcione de forma más eficiente.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-neutral-950 py-24 text-white sm:py-28"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-400">
            Qué podemos hacer por tu negocio
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Soluciones digitales pensadas para{" "}
            <span className="text-indigo-400">necesidades reales.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
            Desde una nueva página web hasta una aplicación o herramienta de
            gestión completa. Diseñamos cada solución alrededor de los objetivos
            y procesos de tu negocio.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative min-h-[270px] overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/[0.07]"
              >
                {/* Number */}
                <span className="absolute right-6 top-5 text-sm font-medium text-white/15">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-indigo-300 transition group-hover:border-indigo-400/30 group-hover:bg-indigo-500/10">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-neutral-400 sm:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-indigo-500 transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Small footer line */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            ¿No ves exactamente lo que necesitas? También desarrollamos
            soluciones completamente a medida.
          </p>

          <a
            href="/contacto"
            className="font-medium text-white transition hover:text-indigo-300"
          >
            Cuéntanos tu idea →
          </a>
        </div>
      </div>
    </section>
  );
}
