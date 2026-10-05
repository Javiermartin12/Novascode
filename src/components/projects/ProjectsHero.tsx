import Link from "next/link";
import { ArrowLeft, ArrowDown } from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute right-[-120px] top-[-150px] h-[420px] w-[420px] rounded-full bg-indigo-100/70 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-indigo-600"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>

        {/* Main content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">
              Proyectos
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] text-neutral-950 sm:text-6xl lg:text-7xl">
              Soluciones digitales creadas para{" "}
              <span className="text-indigo-600">necesidades reales.</span>
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
              Una selección de aplicaciones, plataformas y sitios web
              desarrollados desde la idea inicial hasta su puesta en producción.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-600">
                Aplicaciones móviles
              </span>

              <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-600">
                Software
              </span>

              <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-600">
                Desarrollo web
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-7">
          <p className="text-sm text-neutral-500">
            Algunos de nuestros trabajos
          </p>

          <div className="flex items-center gap-2 text-sm font-medium text-neutral-500">
            Descubre los proyectos
            <ArrowDown size={16} />
          </div>
        </div>
      </div>
    </section>
  );
}
