import Link from "next/link";

import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

/* =========================================================
   SERVICES CTA
   Cierre comercial de la página de Servicios
========================================================= */

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          CONTENEDOR GENERAL
      ===================================================== */}

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ===================================================
            TARJETA PRINCIPAL
        =================================================== */}

        <div className="group relative isolate overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-indigo-950 via-[#211C42] to-[#14141F] px-7 py-12 shadow-[0_30px_100px_-50px_rgba(35,25,110,0.45)] sm:rounded-[36px] sm:p-12 lg:p-16">
          {/* Decoración superior */}
          <div className="pointer-events-none absolute -right-28 -top-36 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-[100px]" />

          {/* Decoración inferior */}
          <div className="pointer-events-none absolute -bottom-44 -left-28 h-[360px] w-[360px] rounded-full bg-violet-600/15 blur-[110px]" />

          {/* =================================================
              CONTENIDO
          ================================================= */}

          <div className="relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_270px] lg:gap-16">
              {/* =============================================
                  ZONA IZQUIERDA — MENSAJE
              ============================================= */}

              <div>
                {/* Identificador */}
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300/20 bg-white/[0.06] px-4 py-2">
                  <MessageCircle
                    size={15}
                    strokeWidth={1.8}
                    className="text-indigo-300"
                  />

                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-200">
                    Hablemos de tu proyecto
                  </span>
                </div>

                {/* Título */}
                <h2 className="mt-8 max-w-2xl text-3xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                  ¿Tienes una idea?
                  <span className="mt-2 block text-indigo-300">
                    Hagámosla realidad.
                  </span>
                </h2>

                {/* Descripción */}
                <p className="mt-6 max-w-xl text-base leading-8 text-neutral-300 sm:text-lg">
                  Tanto si quieres desarrollar una solución nueva como mejorar
                  un proyecto existente, cuéntanos qué necesitas. Estudiaremos
                  tu idea para encontrar la solución tecnológica adecuada.
                </p>
              </div>

              {/* =============================================
                  ZONA DERECHA — ACCIONES
              ============================================= */}

              <div className="flex w-full flex-col gap-4">
                {/* CTA principal */}
                <Link
                  href="/contacto"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-center text-sm font-semibold text-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-100"
                >
                  Solicitar presupuesto
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>

                {/* CTA secundario */}
                <Link
                  href="/proyectos"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.05] px-6 py-4 text-center text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.1]"
                >
                  Ver nuestros proyectos
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>

                {/* Texto secundario */}
                <p className="mt-2 text-center text-xs leading-6 text-neutral-400">
                  Cada proyecto se estudia de forma individual.
                </p>
              </div>
            </div>

            {/* =================================================
                PIE DE LA TARJETA
            ================================================= */}

            <div className="mt-12 border-t border-white/10 pt-7 sm:mt-14">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] text-indigo-200">
                    <Mail size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="text-xs text-neutral-400">
                      También puedes escribirnos
                    </p>

                    <a
                      href="mailto:contacto@novascode.es"
                      className="mt-1 inline-block break-all text-sm font-medium text-white transition hover:text-indigo-300"
                    >
                      contacto@novascode.es
                    </a>
                  </div>
                </div>

                {/* Marca */}
                <p className="text-xs font-medium tracking-[0.12em] text-white/35">
                  NOVASCODE · SOLUCIONES DIGITALES
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
