"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

/* =========================================================
   ENLACES DE NAVEGACIÓN
========================================================= */

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        {/* ==================================================
            LOGO
        ================================================== */}

        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-neutral-950"
          onClick={closeMenu}
        >
          NOVAS
          <span className="text-indigo-600">CODE</span>
        </Link>

        {/* ==================================================
            NAVEGACIÓN DESKTOP
        ================================================== */}

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-indigo-600"
                    : "text-neutral-600 hover:text-neutral-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ==================================================
            CTA DESKTOP
        ================================================== */}

        <div className="hidden md:block">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-600"
          >
            Cuéntame tu proyecto
          </Link>
        </div>

        {/* ==================================================
            BOTÓN MENÚ MÓVIL
        ================================================== */}

        <button
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 transition hover:bg-neutral-100 md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ======================================================
          NAVEGACIÓN MÓVIL
      ====================================================== */}

      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`overflow-hidden border-t border-neutral-100 bg-white transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav
          aria-label="Navegación móvil"
          className="flex flex-col gap-1 px-5 py-5 sm:px-6"
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* CTA móvil */}

          <Link
            href="/contacto"
            onClick={closeMenu}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-600"
          >
            Cuéntame tu proyecto
          </Link>
        </nav>
      </div>
    </header>
  );
}
