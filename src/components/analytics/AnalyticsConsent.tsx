"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

/* =========================================================
   CONFIGURACIÓN
========================================================= */

const GA_ID = "G-2D01RSFZ43";

const STORAGE_KEY = "novascode-analytics-consent";
const CONSENT_EVENT = "novascode-consent-updated";

type Consent = "accepted" | "rejected" | "unset" | "loading";

let memoryConsent: Consent = "unset";

/* =========================================================
   CONSULTAR CONSENTIMIENTO
========================================================= */

function getConsentSnapshot(): Consent {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved === "accepted" || saved === "rejected") {
      return saved;
    }

    return memoryConsent;
  } catch {
    return memoryConsent;
  }
}

function getServerSnapshot(): Consent {
  return "loading";
}

/* =========================================================
   SUSCRIPCIÓN A CAMBIOS
========================================================= */

function subscribeToConsent(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/* =========================================================
   ELIMINAR COOKIES ANALÍTICAS AL RETIRAR CONSENTIMIENTO
========================================================= */

function clearAnalyticsCookies() {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter(
      (name) =>
        name === "_ga" ||
        name.startsWith("_ga_") ||
        name === "_gid" ||
        name.startsWith("_gat") ||
        name.startsWith("_gac_"),
    );

  const hostname = window.location.hostname;

  const domains = ["", `; domain=${hostname}`, `; domain=.${hostname}`];

  if (hostname === "novascode.es" || hostname.endsWith(".novascode.es")) {
    domains.push("; domain=.novascode.es");
  }

  for (const name of cookieNames) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
    }
  }
}

/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

export default function AnalyticsConsent() {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerSnapshot,
  );

  const [settingsOpen, setSettingsOpen] = useState(false);

  const showBanner = consent === "unset" || settingsOpen;

  /* =======================================================
     GUARDAR PREFERENCIAS
  ======================================================= */

  function saveConsent(value: "accepted" | "rejected") {
    const wasAccepted = consent === "accepted";

    memoryConsent = value;

    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // La elección se mantiene durante esta sesión.
    }

    if (value === "rejected" && wasAccepted) {
      clearAnalyticsCookies();

      // Reiniciar elimina los scripts analíticos ya cargados.
      window.location.reload();
      return;
    }

    window.dispatchEvent(new Event(CONSENT_EVENT));

    setSettingsOpen(false);
  }

  /* =======================================================
     RENDERIZADO
  ======================================================= */

  return (
    <>
      {/* Google Analytics solo después de aceptar */}

      {consent === "accepted" && <GoogleAnalytics gaId={GA_ID} />}

      {/* ===================================================
          BANNER DE COOKIES
      =================================================== */}

      {showBanner && (
        <div
          role="dialog"
          aria-label="Preferencias de cookies"
          className="fixed bottom-4 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white p-5 shadow-2xl sm:p-6"
        >
          <h2 className="text-lg font-semibold text-neutral-950">
            Privacidad y cookies
          </h2>

          <p className="mt-3 text-sm leading-6 text-neutral-600">
            Utilizamos almacenamiento necesario para el funcionamiento de la web
            y, si lo autorizas, Google Analytics para conocer las visitas y
            mejorar nuestros servicios.
          </p>

          <Link
            href="/cookies"
            className="mt-2 inline-block text-sm font-medium text-indigo-600 hover:underline"
          >
            Consultar la política de cookies
          </Link>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => saveConsent("rejected")}
              className="rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              Rechazar
            </button>

            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}

      {/* ===================================================
          CAMBIAR PREFERENCIAS
      =================================================== */}

      {consent !== "loading" && !showBanner && (
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          className="fixed bottom-4 left-4 z-[90] rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-600 shadow-md transition hover:text-indigo-600"
        >
          Cookies
        </button>
      )}
    </>
  );
}
