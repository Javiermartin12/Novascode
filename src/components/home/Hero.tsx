import Link from "next/link";
import { ArrowRight, Code2, Smartphone, LayoutDashboard } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* FONDO DECORATIVO */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl sm:h-96 sm:w-96" />

        <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 pb-16 pt-14 sm:min-h-[calc(100vh-81px)] sm:px-6 sm:py-20 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:items-center xl:gap-10 xl:px-8 xl:py-24">
        {/* =====================================================
            CONTENIDO IZQUIERDO
        ====================================================== */}
        <div className="min-w-0 max-w-3xl">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700 sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.22em]">
            Web · Software · Apps
          </div>

          {/* Título */}
          <h1 className="max-w-4xl break-words text-[42px] font-semibold leading-[0.98] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-6xl xl:text-7xl">
            Creamos soluciones digitales para hacer crecer{" "}
            <span className="text-indigo-600">tu negocio.</span>
          </h1>

          {/* Descripción */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl">
            Diseñamos y desarrollamos páginas web, aplicaciones móviles y
            software a medida para empresas y profesionales.
          </p>

          {/* BOTONES */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-600 sm:w-auto"
            >
              Cuéntame tu proyecto
              <ArrowRight size={17} />
            </Link>

            <Link
              href="#servicios"
              className="inline-flex w-full items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-800 transition hover:border-neutral-300 hover:bg-neutral-50 sm:w-auto"
            >
              Conoce nuestros servicios
            </Link>
          </div>

          {/* SERVICIOS - MÓVIL */}
          <div className="mt-8 grid grid-cols-2 gap-2 sm:hidden">
            {[
              "Webs corporativas",
              "E-commerce",
              "Software de gestión",
              "Apps móviles",
              "Automatización",
            ].map((service) => (
              <span
                key={service}
                className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-center text-[11px] font-medium text-neutral-500"
              >
                {service}
              </span>
            ))}
          </div>

          {/* SERVICIOS - TABLET Y DESKTOP */}
          <div className="mt-10 hidden flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-500 sm:flex">
            <span>Webs corporativas</span>
            <span>·</span>
            <span>E-commerce</span>
            <span>·</span>
            <span>Software de gestión</span>
            <span>·</span>
            <span>Apps móviles</span>
            <span>·</span>
            <span>Automatización</span>
          </div>
        </div>

        {/* =====================================================
            VISUAL MÓVIL
        ====================================================== */}
        <div className="relative mx-auto w-full max-w-[380px] sm:hidden">
          <div className="relative h-[390px]">
            {/* WEB */}
            <article className="absolute left--20 top-10 z-10 w-[76%] rounded-[24px] border border-neutral-200 bg-white p-4 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.22)]">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                    Desarrollo web
                  </p>

                  <p className="mt-2 text-[17px] font-semibold leading-[1.25] text-neutral-950">
                    Presencia digital que trabaja por tu negocio
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Code2 size={17} />
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="h-2.5 w-full rounded-full bg-neutral-100" />
                <div className="h-2.5 w-4/5 rounded-full bg-neutral-100" />
                <div className="h-2.5 w-3/5 rounded-full bg-indigo-100" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="h-14 rounded-xl bg-neutral-100" />
                <div className="h-14 rounded-xl bg-neutral-100" />
                <div className="h-14 rounded-xl bg-indigo-50" />
              </div>
            </article>

            {/* SOFTWARE */}
            <article className="absolute top-50 left-[5%] z-20 w-[82%] rounded-[24px] bg-neutral-950 p-4 text-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.5)]">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                    Software a medida
                  </p>

                  <p className="mt-2 pr-4 text-[17px] font-semibold leading-[1.25]">
                    Herramientas pensadas para tu forma de trabajar
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-indigo-300">
                  <LayoutDashboard size={17} />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-[9px] text-neutral-400">Procesos</p>

                  <p className="mt-1 text-xl font-semibold">24</p>
                </div>

                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-[9px] text-neutral-400">Automatizados</p>

                  <p className="mt-1 text-xl font-semibold">78%</p>
                </div>

                <div className="rounded-xl bg-indigo-500 p-3">
                  <p className="text-[9px] text-indigo-100">Estado</p>

                  <p className="mt-1 text-xs font-semibold">Activo</p>
                </div>
              </div>
            </article>

            {/* APP MÓVIL */}
            <article className="absolute right-0 top-0 z-30 w-[42%] rounded-[25px] border border-neutral-200 bg-white p-3 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.3)]">
              <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-neutral-200" />

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Smartphone size={17} />
              </div>

              <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                Apps móviles
              </p>

              <p className="mt-2 text-[15px] font-semibold leading-[1.3] text-neutral-950">
                Tu negocio también en el bolsillo
              </p>

              <div className="mt-5 space-y-2">
                <div className="h-12 rounded-xl bg-neutral-100" />
                <div className="h-8 rounded-xl bg-indigo-50" />
              </div>
            </article>
          </div>
        </div>

        {/* =====================================================
            VISUAL TABLET
            Mantiene una columna completa para evitar cortes.
        ====================================================== */}
        <div className="relative mx-auto hidden w-full max-w-xl sm:block xl:hidden">
          <div className="relative min-h-[520px]">
            {/* WEB */}
            <article className="absolute left-0 top-10 w-[68%] rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.22)]">
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                    Desarrollo web
                  </p>

                  <p className="mt-2 text-xl font-semibold text-neutral-950">
                    Presencia digital que trabaja por tu negocio
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Code2 size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-3 w-full rounded-full bg-neutral-100" />
                <div className="h-3 w-4/5 rounded-full bg-neutral-100" />
                <div className="h-3 w-3/5 rounded-full bg-indigo-100" />
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="h-20 rounded-2xl bg-neutral-100" />
                <div className="h-20 rounded-2xl bg-neutral-100" />
                <div className="h-20 rounded-2xl bg-indigo-50" />
              </div>
            </article>

            {/* SOFTWARE */}
            <article className="absolute bottom-0 right-40 w-[70%] rounded-[28px] bg-neutral-950 p-6 text-white shadow-[0_35px_90px_-30px_rgba(0,0,0,0.45)]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                    Software a medida
                  </p>

                  <p className="mt-2 text-xl font-semibold">
                    Herramientas pensadas para tu forma de trabajar
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-indigo-300">
                  <LayoutDashboard size={20} />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-neutral-400">Procesos</p>

                  <p className="mt-2 text-2xl font-semibold">24</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-neutral-400">Automatizados</p>

                  <p className="mt-2 text-2xl font-semibold">78%</p>
                </div>

                <div className="rounded-2xl bg-indigo-500 p-4">
                  <p className="text-xs text-indigo-100">Estado</p>

                  <p className="mt-2 text-sm font-semibold">Activo</p>
                </div>
              </div>
            </article>

            {/* APP */}
            <article className="absolute right-0 top-15 w-[42%] max-w-[210px] rounded-[30px] border border-neutral-200 bg-white p-4 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.28)]">
              <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-neutral-200" />

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                <Smartphone size={20} />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                Apps móviles
              </p>

              <p className="mt-2 text-lg font-semibold text-neutral-950">
                Tu negocio también en el bolsillo
              </p>

              <div className="mt-7 space-y-3">
                <div className="h-16 rounded-2xl bg-neutral-100" />
                <div className="h-10 rounded-2xl bg-indigo-50" />
              </div>
            </article>
          </div>
        </div>

        {/* =====================================================
            VISUAL DESKTOP
        ====================================================== */}
        <div className="relative mx-auto hidden min-w-0 w-full xl:block">
          <div className="relative min-h-[520px]">
            {/* WEB */}
            <article className="absolute right--28 top--20 w-[68%] rounded-[28px] border border-neutral-200 bg-white p-6 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.22)]">
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                    Desarrollo web
                  </p>

                  <p className="mt-2 text-xl font-semibold text-neutral-950">
                    Presencia digital que trabaja por tu negocio
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Code2 size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-3 w-full rounded-full bg-neutral-100" />
                <div className="h-3 w-4/5 rounded-full bg-neutral-100" />
                <div className="h-3 w-3/5 rounded-full bg-indigo-100" />
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="h-20 rounded-2xl bg-neutral-100" />
                <div className="h-20 rounded-2xl bg-neutral-100" />
                <div className="h-20 rounded-2xl bg-indigo-50" />
              </div>
            </article>

            {/* SOFTWARE */}
            <article className="absolute bottom-1 right-38 w-[70%] rounded-[28px] bg-neutral-950 p-6 text-white shadow-[0_35px_90px_-30px_rgba(0,0,0,0.45)]">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                    Software a medida
                  </p>

                  <p className="mt-2 text-xl font-semibold">
                    Herramientas pensadas para tu forma de trabajar
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-indigo-300">
                  <LayoutDashboard size={20} />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-neutral-400">Procesos</p>

                  <p className="mt-2 text-2xl font-semibold">24</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-neutral-400">Automatizados</p>

                  <p className="mt-2 text-2xl font-semibold">78%</p>
                </div>

                <div className="rounded-2xl bg-indigo-500 p-4">
                  <p className="text-xs text-indigo-100">Estado</p>

                  <p className="mt-2 text-sm font-semibold">Activo</p>
                </div>
              </div>
            </article>

            {/* APP */}
            <article className="absolute right-0 top-0 w-[42%] max-w-[210px] rounded-[30px] border border-neutral-200 bg-white p-4 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.28)]">
              <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-neutral-200" />

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                <Smartphone size={20} />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                Apps móviles
              </p>

              <p className="mt-2 text-lg font-semibold text-neutral-950">
                Tu negocio también en el bolsillo
              </p>

              <div className="mt-7 space-y-3">
                <div className="h-16 rounded-2xl bg-neutral-100" />
                <div className="h-10 rounded-2xl bg-indigo-50" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
