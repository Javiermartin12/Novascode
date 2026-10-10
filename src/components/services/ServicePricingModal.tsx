"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Tag, X } from "lucide-react";

import type { ServicePricing } from "@/data/servicePricing";

/* =========================================================
   PROPS
========================================================= */

type ServicePricingModalProps = {
  pricing: ServicePricing;
  onClose: () => void;
};

/* =========================================================
   MODAL DE TARIFAS
========================================================= */

export default function ServicePricingModal({
  pricing,
  onClose,
}: ServicePricingModalProps) {
  const [activeTab, setActiveTab] = useState(pricing.sections[0]?.id ?? "");

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const activeSection = pricing.sections.find(
    (section) => section.id === activeTab,
  );

  /* =======================================================
     BLOQUEAR SCROLL Y PERMITIR CERRAR CON ESCAPE
  ======================================================= */

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [onClose]);

  /* =======================================================
     MANTENER EL FOCO DENTRO DEL MODAL
  ======================================================= */

  function handleTabKey(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") return;

    const focusable = dialogRef.current?.querySelectorAll<
      HTMLButtonElement | HTMLAnchorElement
    >("button:not([disabled]), a[href]");

    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-neutral-950/75 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* =====================================================
          CONTENEDOR DEL MODAL
      ===================================================== */}

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pricing-modal-title"
        aria-describedby="pricing-modal-description"
        onKeyDown={handleTabKey}
        className="flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-[24px] border border-neutral-200 bg-white shadow-2xl sm:rounded-[30px]"
      >
        {/* ===================================================
            CABECERA
        =================================================== */}

        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-neutral-100 px-5 py-5 sm:px-8 sm:py-7">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-indigo-600">
              <Tag size={16} strokeWidth={1.8} />

              <p className="text-xs font-semibold uppercase tracking-[0.17em]">
                Servicios y tarifas
              </p>
            </div>

            <h2
              id="pricing-modal-title"
              className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-3xl"
            >
              {pricing.title}
            </h2>

            <p
              id="pricing-modal-description"
              className="mt-3 max-w-xl text-sm leading-6 text-neutral-500"
            >
              {pricing.description}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar tarifas"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-950"
          >
            <X size={20} />
          </button>
        </div>

        {/* ===================================================
            PESTAÑAS
        =================================================== */}

        <div className="shrink-0 border-b border-neutral-100 px-5 sm:px-8">
          <div
            role="tablist"
            aria-label="Tipos de tarifas"
            className="flex gap-2 overflow-x-auto py-4"
          >
            {pricing.sections.map((section) => {
              const isActive = activeTab === section.id;

              return (
                <button
                  key={section.id}
                  id={`pricing-tab-${section.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="pricing-panel"
                  onClick={() => setActiveTab(section.id)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-semibold transition sm:text-sm ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            CONTENIDO CON SCROLL
        =================================================== */}

        <div
          id="pricing-panel"
          role="tabpanel"
          aria-labelledby={`pricing-tab-${activeTab}`}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-8 sm:py-7"
        >
          {activeSection && (
            <div className="space-y-3">
              {activeSection.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="max-w-md text-sm font-semibold text-neutral-950 sm:text-base">
                      {item.name}
                    </h3>

                    <span className="shrink-0 rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700">
                      {item.price}
                    </span>
                  </div>

                  {item.description && (
                    <p className="mt-3 text-sm leading-6 text-neutral-600">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}

              {activeSection.note && (
                <p className="pt-3 text-xs leading-6 text-neutral-500">
                  {activeSection.note}
                </p>
              )}
            </div>
          )}
        </div>

        {/* ===================================================
            PIE DEL MODAL
        =================================================== */}

        <div className="shrink-0 border-t border-neutral-200 bg-white px-5 py-4 sm:px-8 sm:py-5">
          <p className="mb-4 text-xs leading-5 text-neutral-500">
            {pricing.disclaimer}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-neutral-500">
              ¿Necesitas un presupuesto personalizado?
            </p>

            <Link
              href="/contacto"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
            >
              Solicitar presupuesto
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
