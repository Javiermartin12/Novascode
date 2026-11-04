import Link from "next/link";

import {
  MessageCircle,
  ClipboardList,
  Code2,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

/* =========================================================
   PROCESO DE TRABAJO - NOVASCODE
========================================================= */

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Hablamos",
    description:
      "Nos cuentas qué necesitas, qué quieres conseguir y cómo funciona tu negocio. Escuchamos tu idea y resolvemos tus dudas.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Definimos",
    description:
      "Te proponemos una solución clara y acordamos contigo qué incluye, el presupuesto y los plazos antes de empezar.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollamos",
    description:
      "Damos forma a tu proyecto, compartimos los avances necesarios y revisamos contigo el resultado antes de entregarlo.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Publicamos",
    description:
      "Ponemos tu solución en marcha, comprobamos que funciona correctamente y te explicamos las opciones de soporte y futuras mejoras.",
  },
];

/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

export default function Process() {
  return (
    <section
      aria-labelledby="process-title"
      className="bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ENCABEZADO */}

        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
            Cómo trabajamos
          </p>

          <h2
            id="process-title"
            className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl lg:text-6xl"
          >
            Un proceso claro, de la idea a{" "}
            <span className="text-indigo-600">la puesta en marcha.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Queremos que tengas claro qué vamos a hacer, cuánto costará y cómo
            avanzará tu proyecto. Te acompañamos desde la primera conversación
            hasta la entrega.
          </p>
        </div>

        {/* ETAPAS DEL PROCESO */}

        <div className="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Línea conectora en escritorio */}

          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-neutral-200 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative rounded-[28px] border border-neutral-200 bg-neutral-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-[0_25px_60px_-35px_rgba(0,0,0,0.25)]"
              >
                {/* CABECERA */}

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-white transition group-hover:bg-indigo-600">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold text-neutral-300">
                    {step.number}
                  </span>
                </div>

                {/* CONTENIDO */}

                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em] text-neutral-950">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* MENSAJE COMERCIAL FINAL */}

        <div className="mt-12 flex flex-col gap-5 rounded-[28px] bg-neutral-950 px-7 py-8 text-white sm:flex-row sm:items-center sm:justify-between sm:px-9">
          <div className="max-w-2xl">
            <p className="text-sm text-indigo-300">
              Cada proyecto es diferente.
            </p>

            <p className="mt-2 text-lg font-semibold leading-7 sm:text-xl">
              Cuéntanos qué necesitas y encontraremos la mejor forma de llevarlo
              a cabo.
            </p>

            <p className="mt-2 text-sm leading-6 text-neutral-400">
              Hablemos de tu idea, sin compromiso.
            </p>
          </div>

          <Link
            href="/contacto"
            className="group inline-flex min-h-[50px] w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 no-underline transition-all duration-200 hover:bg-indigo-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500"
          >
            Hablemos de tu proyecto
            <ArrowUpRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
