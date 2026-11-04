"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ArrowRight, ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";

/* =========================================================
   NAVEGACIÓN PRINCIPAL
========================================================= */

const navigation = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Ofertas web",
    href: "/#oferta-lanzamiento",
    featured: true,
  },
  {
    label: "Servicios",
    href: "/servicios",
  },
  {
    label: "Proyectos",
    href: "/proyectos",
  },
] as const;

const mobileNavigation = [
  ...navigation,
  {
    label: "Contacto",
    href: "/contacto",
    featured: false,
  },
] as const;

/* =========================================================
   CONTACTO DIRECTO
========================================================= */

const WHATSAPP_URL =
  "https://wa.me/34633560759?text=" +
  encodeURIComponent(
    "Hola, he visitado Novascode y me gustaría consultar un proyecto para mi negocio.",
  );

/* =========================================================
   HEADER - NOVASCODE
========================================================= */

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  function isActiveRoute(href: string) {
    if (href.includes("#")) return false;

    return pathname === href;
  }

  return (
    <header
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
        }
      }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#0D0D15]/95 text-white shadow-[0_12px_35px_-22px_rgba(0,0,0,0.6)] backdrop-blur-xl"
    >
      {/* =====================================================
          BARRA PRINCIPAL
      ====================================================== */}

      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
        {/* ===================================================
            LOGOTIPO
        ==================================================== */}

        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Novascode - Volver al inicio"
          className="group inline-flex shrink-0 items-center gap-4 rounded-lg no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A99BFF]"
        >
          <span className="flex items-center text-[25px] font-extrabold leading-none tracking-[-0.065em] sm:text-[27px]">
            <span className="text-white transition-colors group-hover:text-neutral-200">
              NOVAS
            </span>

            <span className="text-[#A99BFF] transition-colors group-hover:text-[#C2B8FF]">
              CODE
            </span>
          </span>

          {/* IDENTIDAD SECUNDARIA */}

          <span className="hidden border-l border-white/15 pl-4 text-[10px] font-medium uppercase leading-[1.5] tracking-[0.12em] text-[#8E8BA5] xl:block">
            Estudio
            <br />
            digital
          </span>
        </Link>

        {/* ===================================================
            NAVEGACIÓN DESKTOP
        ==================================================== */}

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-1 rounded-full border border-white/[0.09] bg-white/[0.035] p-1.5 lg:flex"
        >
          {navigation.map((item) => {
            const isActive = isActiveRoute(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={closeMenu}
                className={`group relative inline-flex min-h-[40px] items-center justify-center rounded-full px-4 text-[13px] font-semibold no-underline transition-all duration-200 ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-[#AAA8BF] hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {item.label === "Ofertas web" && (
                  <span
                    aria-hidden="true"
                    className="mr-2 h-1.5 w-1.5 rounded-full bg-[#A99BFF]"
                  />
                )}

                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ===================================================
            CTA DESKTOP
        ==================================================== */}

        <div className="hidden shrink-0 items-center lg:flex">
          <Link
            href="/contacto"
            className="group inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-xl bg-[#6952F5] px-5 py-3 text-[13px] font-bold text-white no-underline shadow-[0_12px_30px_-18px_rgba(105,82,245,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#806BFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Solicitar presupuesto
            <ArrowUpRight
              size={17}
              strokeWidth={1.9}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* ===================================================
            ACCIONES MÓVIL Y TABLET
        ==================================================== */}

        <div className="flex items-center gap-3 lg:hidden">
          {/* CTA EN TABLET */}

          <Link
            href="/contacto"
            onClick={closeMenu}
            className="hidden min-h-[42px] items-center justify-center gap-2 rounded-xl bg-[#6952F5] px-4 text-xs font-bold text-white no-underline transition-colors hover:bg-[#806BFF] sm:inline-flex"
          >
            Presupuesto
            <ArrowUpRight size={15} />
          </Link>

          {/* BOTÓN DEL MENÚ */}

          <button
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((previous) => !previous)}
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A99BFF] ${
              isOpen
                ? "border-[#7665F5]/50 bg-[#6952F5] text-white"
                : "border-white/15 bg-white/[0.055] text-white hover:border-white/30 hover:bg-white/10"
            }`}
          >
            {isOpen ? (
              <X size={21} strokeWidth={1.8} />
            ) : (
              <Menu size={21} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {/* =====================================================
          NAVEGACIÓN MÓVIL
      ====================================================== */}

      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`overflow-hidden border-t bg-[#11111B] transition-[max-height,opacity,border-color] duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "max-h-[650px] border-white/10 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 pb-7 pt-5 sm:px-8">
          {/* ENCABEZADO MÓVIL */}

          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#77748D]">
            Explora Novascode
          </p>

          {/* ENLACES */}

          <nav aria-label="Navegación móvil" className="flex flex-col gap-1.5">
            {mobileNavigation.map((item) => {
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex min-h-[49px] items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold no-underline transition-all duration-200 ${
                    isActive
                      ? "bg-[#6952F5]/15 text-[#C5B9FF]"
                      : "featured" in item && item.featured
                        ? "border border-[#8877FF]/20 bg-[#6952F5]/10 text-[#C6BCFF] hover:bg-[#6952F5]/20"
                        : "text-[#CAC8D7] hover:bg-white/[0.07] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {"featured" in item && item.featured && (
                      <span className="h-2 w-2 rounded-full bg-[#A99BFF]" />
                    )}

                    {item.label}
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className={`transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isActive || ("featured" in item && item.featured)
                        ? "text-[#A99BFF]"
                        : "text-[#625F78]"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ===============================================
              CIERRE COMERCIAL MÓVIL
          ================================================ */}

          <div className="mt-6 border-t border-white/10 pt-6">
            <p className="px-1 text-sm font-bold text-white">
              ¿Tienes un proyecto en mente?
            </p>

            <p className="mt-2 px-1 text-xs leading-6 text-[#AAA8BB]">
              Cuéntanos qué necesitas y estudiamos la mejor solución para tu
              negocio.
            </p>

            {/* BOTÓN PRINCIPAL */}

            <Link
              href="/contacto"
              onClick={closeMenu}
              className="group mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#6952F5] px-6 py-4 text-sm font-bold text-white no-underline transition-colors hover:bg-[#806BFF]"
            >
              Solicitar presupuesto
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            {/* WHATSAPP */}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-semibold text-[#E2DEFF] no-underline transition-colors hover:border-[#A99BFF]/40 hover:bg-white/[0.08]"
            >
              <MessageCircle size={18} strokeWidth={1.8} />
              Hablar por WhatsApp
              <ArrowUpRight size={16} className="text-[#AAA0E5]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
