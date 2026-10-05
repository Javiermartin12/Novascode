"use client";

import {
  AppWindow,
  CalendarDays,
  LayoutDashboard,
  ShoppingBag,
  Smartphone,
  Workflow,
} from "lucide-react";

export default function Solutions() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
            De la idea a una solución real
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl lg:text-6xl">
            Tecnología adaptada a{" "}
            <span className="text-indigo-600">cada negocio.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
            Desde una web corporativa hasta una aplicación completa. Diseñamos
            cada solución según lo que realmente necesita tu empresa.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {/* WEB */}
          <article className="group relative overflow-hidden rounded-[30px] border border-neutral-200 bg-neutral-50 p-7 lg:col-span-7 lg:min-h-[430px]">
            <div className="relative z-10 max-w-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm">
                <AppWindow size={20} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Web corporativa
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-neutral-950">
                Convierte tu presencia digital en una herramienta de negocio.
              </h3>
            </div>

            {/* Fake browser */}
            <div className="mt-10 overflow-hidden rounded-[24px] border border-neutral-200 bg-white shadow-xl transition duration-500 group-hover:-translate-y-1">
              <div className="flex items-center gap-2 border-b border-neutral-100 px-5 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
                <div className="ml-3 h-7 flex-1 rounded-full bg-neutral-100" />
              </div>

              <div className="grid grid-cols-[1.2fr_0.8fr] gap-5 p-6">
                <div>
                  <div className="h-4 w-24 rounded-full bg-indigo-100" />
                  <div className="mt-4 h-6 w-full rounded-full bg-neutral-900" />
                  <div className="mt-3 h-6 w-4/5 rounded-full bg-neutral-900" />
                  <div className="mt-5 h-3 w-full rounded-full bg-neutral-100" />
                  <div className="mt-2 h-3 w-3/4 rounded-full bg-neutral-100" />

                  <div className="mt-6 h-10 w-32 rounded-full bg-indigo-600" />
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100" />
              </div>
            </div>
          </article>

          {/* MOBILE APP */}
          <article className="relative overflow-hidden rounded-[30px] bg-indigo-600 p-7 text-white lg:col-span-5 lg:min-h-[430px]">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Smartphone size={20} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
                Apps móviles
              </p>

              <h3 className="mt-2 max-w-sm text-2xl font-semibold tracking-[-0.025em]">
                Lleva tus servicios directamente al bolsillo de tus clientes.
              </h3>
            </div>

            {/* Phone mockup */}
            <div className="mx-auto mt-8 w-[190px] rounded-[34px] border-4 border-white/20 bg-white p-3 shadow-2xl">
              <div className="mx-auto h-1.5 w-12 rounded-full bg-neutral-200" />

              <div className="mt-5 rounded-2xl bg-neutral-950 p-4">
                <div className="h-3 w-16 rounded-full bg-indigo-400" />
                <div className="mt-4 h-16 rounded-xl bg-white/10" />
                <div className="mt-3 h-10 rounded-xl bg-indigo-500" />
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="h-16 rounded-xl bg-white/10" />
                  <div className="h-16 rounded-xl bg-white/10" />
                </div>
              </div>
            </div>
          </article>

          {/* BOOKING */}
          <article className="rounded-[30px] border border-neutral-200 bg-white p-7 lg:col-span-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <CalendarDays size={20} />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Reservas y citas
            </p>

            <h3 className="mt-2 text-xl font-semibold text-neutral-950">
              Menos llamadas. Más control de tu agenda.
            </h3>

            <div className="mt-7 grid grid-cols-4 gap-2">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-10 rounded-xl ${
                    index === 5 || index === 9
                      ? "bg-indigo-600"
                      : "bg-neutral-100"
                  }`}
                />
              ))}
            </div>
          </article>

          {/* SOFTWARE */}
          <article className="rounded-[30px] bg-neutral-950 p-7 text-white lg:col-span-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-indigo-300">
              <LayoutDashboard size={20} />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Software de gestión
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              Centraliza procesos y datos en un solo lugar.
            </h3>

            <div className="mt-7 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white/5 p-4">
                <span className="text-xs text-neutral-500">Clientes</span>
                <p className="mt-2 text-2xl font-semibold">428</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <span className="text-xs text-neutral-500">Tareas</span>
                <p className="mt-2 text-2xl font-semibold">86%</p>
              </div>

              <div className="rounded-2xl bg-indigo-600 p-4">
                <span className="text-xs text-indigo-200">Estado</span>
                <p className="mt-2 text-sm font-semibold">Online</p>
              </div>
            </div>
          </article>

          {/* ECOMMERCE */}
          <article className="rounded-[30px] border border-neutral-200 bg-neutral-50 p-7 lg:col-span-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm">
              <ShoppingBag size={20} />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              E-commerce
            </p>

            <h3 className="mt-2 text-xl font-semibold text-neutral-950">
              Vende productos y servicios online.
            </h3>

            <div className="mt-7 space-y-3">
              <div className="flex gap-3 rounded-2xl bg-white p-3">
                <div className="h-12 w-12 rounded-xl bg-indigo-50" />
                <div className="flex-1">
                  <div className="h-3 w-4/5 rounded-full bg-neutral-200" />
                  <div className="mt-2 h-3 w-1/2 rounded-full bg-neutral-100" />
                </div>
              </div>

              <div className="flex gap-3 rounded-2xl bg-white p-3">
                <div className="h-12 w-12 rounded-xl bg-violet-50" />
                <div className="flex-1">
                  <div className="h-3 w-3/4 rounded-full bg-neutral-200" />
                  <div className="mt-2 h-3 w-1/2 rounded-full bg-neutral-100" />
                </div>
              </div>
            </div>
          </article>

          {/* AUTOMATION */}
          <article className="rounded-[30px] border border-neutral-200 bg-white p-7 lg:col-span-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <Workflow size={20} />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Integraciones y automatización
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-neutral-950">
                  Haz que tus herramientas trabajen juntas.
                </h3>

                <p className="mt-3 text-neutral-600">
                  Conectamos procesos, plataformas y APIs para reducir tareas
                  manuales y ahorrar tiempo.
                </p>
              </div>

              {/* Flow */}
              <div className="flex flex-wrap items-center gap-3">
                {["Formulario", "API", "Software", "Notificación"].map(
                  (item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-sm font-medium text-neutral-700">
                        {item}
                      </div>

                      {index < 3 && <span className="text-neutral-300">→</span>}
                    </div>
                  ),
                )}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
