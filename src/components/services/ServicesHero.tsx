import Link from "next/link";

import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Desarrollo",
    description: "Web, software y aplicaciones",
  },
  {
    icon: Layers3,
    title: "Soluciones",
    description: "Plataformas y herramientas",
  },
  {
    icon: Workflow,
    title: "Evolución",
    description: "Integraciones, IA y soporte",
  },
];

export default function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F7F8FC]">
      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[420px] w-[420px] rounded-full bg-violet-100/50 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* CONTENIDO */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Nuestros servicios
            </div>

            <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-[64px]">
              Tecnología para hacer{" "}
              <span className="text-indigo-600">crecer tu negocio.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg">
              Diseñamos, desarrollamos y mejoramos soluciones digitales
              adaptadas a cada proyecto. Desde páginas web y aplicaciones hasta
              software empresarial, plataformas y automatización de procesos.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-500">
              Tanto si partes de una idea como si necesitas evolucionar una
              solución existente, te ayudamos a encontrar el enfoque tecnológico
              adecuado.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600"
              >
                Cuéntanos tu proyecto
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="#catalogo"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-neutral-700 transition hover:text-indigo-600"
              >
                Explorar servicios
                <ArrowDownRight size={17} />
              </Link>
            </div>
          </div>

          {/* VISUAL */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-indigo-100/60 via-white/30 to-violet-100/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white bg-white/80 p-5 shadow-[0_30px_100px_-50px_rgba(50,45,120,0.25)] backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-indigo-600">
                    Novascode
                  </p>

                  <p className="mt-2 text-lg font-semibold text-neutral-950">
                    Soluciones digitales
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Code2 size={22} strokeWidth={1.8} />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex items-center gap-4 rounded-2xl border border-neutral-100 bg-white p-4 transition hover:border-indigo-100 hover:shadow-sm sm:p-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-neutral-950 sm:text-base">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-neutral-500 sm:text-sm">
                          {item.description}
                        </p>
                      </div>

                      <span className="text-xs font-semibold text-neutral-300">
                        0{index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-2xl bg-neutral-950 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-300">
                  Nuestro enfoque
                </p>

                <p className="mt-2 text-base font-medium leading-6 text-white">
                  Crear, mejorar y mantener.
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  Soluciones preparadas para acompañar la evolución de cada
                  negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
