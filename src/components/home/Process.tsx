import { MessageCircle, ClipboardList, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Hablamos",
    description:
      "Nos cuentas qué necesitas, qué quieres mejorar y cuáles son los objetivos de tu negocio.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Definimos",
    description:
      "Planteamos la solución, concretamos funcionalidades, alcance, tiempos y forma de trabajo.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollamos",
    description:
      "Construimos la solución de forma progresiva, compartiendo avances y realizando revisiones contigo.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Publicamos",
    description:
      "Ponemos el proyecto en producción, comprobamos que todo funciona y seguimos disponibles para soporte y mejoras.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
            Cómo trabajamos
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl lg:text-6xl">
            Un proceso claro, de la idea a{" "}
            <span className="text-indigo-600">la puesta en marcha.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Sin complicaciones innecesarias. Definimos contigo lo que necesitas,
            desarrollamos por fases y te mantenemos al tanto durante todo el
            proyecto.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Line desktop */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-neutral-200 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative rounded-[28px] border border-neutral-200 bg-neutral-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-[0_25px_60px_-35px_rgba(0,0,0,0.25)]"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-white transition group-hover:bg-indigo-600">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold text-neutral-300">
                    {step.number}
                  </span>
                </div>

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

        {/* Bottom message */}
        <div className="mt-12 flex flex-col gap-4 rounded-[28px] bg-neutral-950 px-7 py-7 text-white sm:flex-row sm:items-center sm:justify-between sm:px-9">
          <div>
            <p className="text-sm text-neutral-400">
              Cada proyecto es diferente.
            </p>

            <p className="mt-1 text-lg font-semibold">
              Adaptamos el proceso a lo que realmente necesita tu negocio.
            </p>
          </div>

          <a
            href="/contacto"
            className="inline-flex w-fit items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-indigo-500 hover:text-white"
          >
            Cuéntame tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
