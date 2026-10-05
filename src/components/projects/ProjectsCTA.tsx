import Link from "next/link";
import { ArrowRight, Code2, MessageCircle, Sparkles } from "lucide-react";

export default function ProjectsCTA() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-neutral-950 px-7 py-14 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[380px] w-[380px] rounded-full bg-indigo-600/20 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            {/* Content */}
            <div className="max-w-3xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-indigo-400">
                <Sparkles size={21} strokeWidth={1.8} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-400">
                Tu proyecto puede ser el siguiente
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                ¿Tienes una idea que quieres convertir en una{" "}
                <span className="text-indigo-400">solución real?</span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
                Cuéntanos qué necesitas, qué problema quieres resolver o qué
                quieres mejorar en tu negocio. Estudiaremos contigo la mejor
                forma de llevarlo a cabo.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition hover:bg-indigo-500 hover:text-white"
                >
                  Cuéntame tu proyecto
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="https://wa.me/34633560759"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <MessageCircle size={17} />
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            {/* Right block */}
            <div className="lg:flex lg:justify-end">
              <div className="w-full max-w-sm rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300">
                    <Code2 size={18} />
                  </div>

                  <p className="font-semibold">Empecemos por tu idea</p>
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    "Una nueva web",
                    "Software para tu empresa",
                    "Una aplicación móvil",
                    "Automatizar un proceso",
                    "Mejorar un proyecto existente",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />

                      <span className="text-sm text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-xs leading-5 text-neutral-500">
                  No necesitas tener definida la parte técnica. Podemos ayudarte
                  a plantearla desde el principio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
