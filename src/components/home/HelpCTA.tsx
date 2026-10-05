import Link from "next/link";
import { ArrowRight, MessageCircleMore, Check } from "lucide-react";

const benefits = [
  {
    title: "Trato directo",
    description: "Hablas directamente con quien desarrolla tu proyecto.",
  },
  {
    title: "Sin tecnicismos",
    description: "Te explicamos cada decisión de forma clara y sencilla.",
  },
  {
    title: "Solución a medida",
    description: "Solo desarrollamos lo que realmente necesitas.",
  },
];

const ideas = [
  "Necesito una web",
  "Quiero automatizar un proceso",
  "Necesito una app",
  "Tengo una idea",
];

export default function HelpCTA() {
  return (
    <section className="bg-neutral-50 py-14 sm:py-20 xl:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white sm:rounded-[34px] xl:grid xl:grid-cols-[1.1fr_0.9fr]">
          {/* =====================================================
              CONTENIDO
          ====================================================== */}
          <div className="p-6 sm:p-10 xl:p-14">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 sm:h-12 sm:w-12">
              <MessageCircleMore size={21} strokeWidth={1.8} />
            </div>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600 sm:mt-8 sm:text-xs sm:tracking-[0.22em]">
              Hablemos
            </p>

            <h2 className="mt-3 max-w-2xl text-[32px] font-semibold leading-[1.02] tracking-[-0.035em] text-neutral-950 sm:mt-4 sm:text-5xl">
              ¿No sabes exactamente qué necesita tu negocio?
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-neutral-600 sm:mt-6 sm:text-lg">
              Cuéntame qué quieres mejorar, qué problema necesitas resolver o
              qué idea tienes en mente. Te ayudaré a definir una solución clara,
              realista y adaptada a tu negocio.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600 sm:w-auto"
              >
                Cuéntame tu proyecto
                <ArrowRight size={17} />
              </Link>

              <a
                href="https://wa.me/34633560759"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-800 transition hover:border-neutral-300 hover:bg-neutral-50 sm:w-auto"
              >
                Hablar por WhatsApp
              </a>
            </div>

            {/* =====================================================
                BENEFICIOS
            ====================================================== */}

            {/* MÓVIL */}
            <div className="mt-8 space-y-3 border-t border-neutral-100 pt-6 sm:hidden">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-3 rounded-2xl bg-neutral-50 p-4"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <Check size={13} strokeWidth={2.4} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-neutral-950">
                      {benefit.title}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-neutral-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* TABLET / DESKTOP */}
            <div className="mt-10 hidden gap-5 border-t border-neutral-100 pt-8 sm:grid sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title}>
                  <p className="text-sm font-semibold text-neutral-950">
                    {benefit.title}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-neutral-500">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              VISUAL
          ====================================================== */}
          <div className="relative overflow-hidden bg-neutral-950">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(99,102,241,0.28),transparent_42%)]" />

            {/* =====================================================
                MÓVIL
            ====================================================== */}
            <div className="relative p-5 sm:hidden">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-5 text-white backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Novascode
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                  Cuéntanos qué quieres mejorar.
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  Una nueva web, una aplicación, un sistema de reservas, una
                  herramienta interna o simplemente una idea que todavía no
                  sabes cómo llevar a la práctica.
                </p>

                <div className="mt-5 space-y-2.5">
                  {ideas.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-neutral-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* =====================================================
                TABLET
            ====================================================== */}
            <div className="relative hidden p-8 sm:block xl:hidden">
              <div className="mx-auto max-w-xl rounded-[28px] border border-white/10 bg-white/[0.06] p-7 text-white backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Novascode
                </p>

                <h3 className="mt-4 text-3xl font-semibold">
                  Cuéntanos qué quieres mejorar.
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-neutral-400">
                  Una nueva web, una aplicación, un sistema de reservas, una
                  herramienta interna o simplemente una idea que todavía no
                  sabes cómo llevar a la práctica.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {ideas.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-neutral-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* =====================================================
                DESKTOP
            ====================================================== */}
            <div className="relative hidden min-h-full items-center justify-center p-10 xl:flex xl:p-12">
              <div className="w-full max-w-sm rounded-[28px] border border-white/10 bg-white/[0.06] p-6 text-white backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Novascode
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  Cuéntanos qué quieres mejorar.
                </h3>

                <p className="mt-4 text-sm leading-6 text-neutral-400">
                  Una nueva web, una aplicación, un sistema de reservas, una
                  herramienta interna o simplemente una idea que todavía no
                  sabes cómo llevar a la práctica.
                </p>

                <div className="mt-8 space-y-3">
                  {ideas.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-neutral-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
