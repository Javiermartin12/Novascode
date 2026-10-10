"use client";

import { useCallback, useState } from "react";
import Link from "next/link";

import {
  ArrowUpRight,
  Check,
  Tag,
  Globe2,
  MonitorCog,
  Smartphone,
  Layers3,
  Workflow,
  Wrench,
  PlusCircle,
  RefreshCw,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import {
  serviceCategories,
  type ServiceCategory,
  type ServiceIcon,
} from "@/data/services";

import { servicePricing } from "@/data/servicePricing";

import ServicePricingModal from "./ServicePricingModal";

/* =========================================================
   ICONOS
========================================================= */

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  web: Globe2,
  software: MonitorCog,
  mobile: Smartphone,
  platform: Layers3,
  automation: Workflow,
  support: Wrench,
};

/* =========================================================
   TARJETA REUTILIZABLE
========================================================= */

function ServiceCard({
  service,
  index,
  onShowPricing,
}: {
  service: ServiceCategory;
  index: number;
  onShowPricing: (serviceId: string) => void;
}) {
  const Icon = serviceIcons[service.icon];

  const hasPricing = Boolean(servicePricing[service.id]);

  return (
    <article
      id={service.id}
      className="group flex h-full scroll-mt-28 flex-col rounded-[28px] border border-white/10 bg-white/[0.045] p-6 transition-all duration-300 hover:border-indigo-400/30 hover:bg-white/[0.065] sm:p-8 lg:p-9"
    >
      {/* =====================================================
          CABECERA
      ===================================================== */}

      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/15 bg-indigo-500/10 text-indigo-300">
          <Icon size={26} strokeWidth={1.7} />
        </div>

        <span className="text-sm font-semibold tracking-[0.12em] text-white/25">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* =====================================================
          INFORMACIÓN
      ===================================================== */}

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
          {service.eyebrow}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white sm:text-[28px]">
          {service.title}
        </h3>

        <p className="mt-5 text-sm leading-7 text-neutral-400 sm:text-base">
          {service.description}
        </p>
      </div>

      {/* =====================================================
          FUNCIONALIDADES
      ===================================================== */}

      <div className="mt-8 flex-1 border-t border-white/10 pt-7">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">
          Qué podemos hacer
        </p>

        <ul className="space-y-4">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm leading-6 text-neutral-300"
            >
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-300">
                <Check size={12} strokeWidth={2.4} />
              </span>

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* =====================================================
          ACCIONES
      ===================================================== */}

      <div className="mt-9 border-t border-white/10 pt-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* ENLACE A CONTACTO */}

          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-300"
          >
            Consultar este servicio
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          {/* BOTÓN TARIFAS */}

          {hasPricing && (
            <button
              type="button"
              onClick={() => onShowPricing(service.id)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2.5 text-sm font-semibold text-indigo-200 transition hover:border-indigo-300/50 hover:bg-indigo-500/20"
            >
              <Tag size={15} strokeWidth={1.8} />
              Ver tarifas
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   CREAR, MEJORAR Y MANTENER
========================================================= */

const workingModes = [
  {
    icon: PlusCircle,
    number: "01",
    title: "Crear",
    description:
      "Desarrollamos nuevas páginas web, aplicaciones, software y plataformas a partir de una idea o necesidad concreta.",
  },
  {
    icon: RefreshCw,
    number: "02",
    title: "Mejorar",
    description:
      "Incorporamos funcionalidades, corregimos errores, conectamos herramientas y modernizamos proyectos existentes.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Mantener",
    description:
      "Ofrecemos soporte, mantenimiento y evolución técnica para acompañar el funcionamiento de tus soluciones digitales.",
  },
];

/* =========================================================
   SERVICES CATALOG
========================================================= */

export default function ServicesCatalog() {
  /* =======================================================
     CONTROL DEL MODAL
  ======================================================= */

  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null,
  );

  const closePricing = useCallback(() => {
    setSelectedServiceId(null);
  }, []);

  const activePricing = selectedServiceId
    ? servicePricing[selectedServiceId]
    : undefined;

  /* =======================================================
     RENDERIZADO
  ======================================================= */

  return (
    <>
      {/* =====================================================
          CATÁLOGO OSCURO
      ===================================================== */}

      <section
        id="catalogo"
        className="scroll-mt-20 bg-neutral-950 py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* INTRODUCCIÓN */}

          <div className="mb-12 max-w-3xl sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Nuestros servicios
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Soluciones para cada necesidad digital.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
              Desde el desarrollo de nuevas herramientas hasta la mejora y el
              mantenimiento de sistemas existentes. Descubre cómo podemos
              ayudarte a impulsar tu proyecto.
            </p>
          </div>

          {/* GRID DE SERVICIOS */}

          <div className="grid items-stretch gap-5 md:grid-cols-2 lg:gap-6">
            {serviceCategories.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onShowPricing={setSelectedServiceId}
              />
            ))}
          </div>

          {/* CIERRE DEL CATÁLOGO */}

          <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-neutral-400">
              ¿No encuentras exactamente lo que necesitas? También estudiamos
              proyectos personalizados y necesidades técnicas específicas.
            </p>

            <Link
              href="/contacto"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition hover:text-indigo-300"
            >
              Cuéntanos tu idea
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECCIÓN CLARA — CREAR, MEJORAR Y MANTENER
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F7F8FC] py-20 sm:py-24 lg:py-28">
        {/* DECORACIÓN */}

        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-indigo-100/50 blur-[110px]" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* ENCABEZADO */}

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Nos adaptamos a tu proyecto
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
              No necesitas empezar de cero.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
              Tanto si necesitas desarrollar una solución nueva como si ya
              tienes algo en funcionamiento, podemos ayudarte a dar el siguiente
              paso.
            </p>
          </div>

          {/* MODALIDADES */}

          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-6">
            {workingModes.map((mode) => {
              const Icon = mode.icon;

              return (
                <article
                  key={mode.title}
                  className="flex h-full flex-col rounded-[26px] border border-neutral-200 bg-white p-7 shadow-[0_20px_60px_-45px_rgba(25,25,75,0.2)] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-semibold text-neutral-300">
                      {mode.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-neutral-950">
                    {mode.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-600">
                    {mode.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* TEXTO FINAL */}

          <p className="mt-10 max-w-3xl text-sm leading-7 text-neutral-500">
            Cada proyecto se estudia de forma individual para definir las
            funcionalidades, el alcance y las necesidades técnicas antes de
            comenzar.
          </p>
        </div>
      </section>

      {/* =====================================================
          MODAL DE TARIFAS
      ===================================================== */}

      {activePricing && (
        <ServicePricingModal
          key={selectedServiceId}
          pricing={activePricing}
          onClose={closePricing}
        />
      )}
    </>
  );
}
