import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",

  robots: {
    index: false,
    follow: true,
  },

  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
        >
          ← Volver a Novascode
        </Link>

        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
          Información sobre cookies
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">
          Política de cookies
        </h1>

        <p className="mt-5 text-base leading-7 text-neutral-600">
          En esta página se explica qué son las cookies y cómo pueden utilizarse
          en el sitio web de Novascode.
        </p>

        <div className="mt-14 space-y-12 text-neutral-700">
          <CookieSection title="1. Qué son las cookies">
            <p>
              Las cookies son pequeños archivos o mecanismos de almacenamiento
              que pueden instalarse en el dispositivo del usuario cuando visita
              determinados sitios web.
            </p>
          </CookieSection>

          <CookieSection title="2. Cookies utilizadas actualmente">
            <p>
              En su configuración inicial, Novascode no utiliza cookies con
              fines publicitarios ni de elaboración de perfiles.
            </p>

            <p className="mt-4">
              El sitio podrá utilizar únicamente elementos técnicos
              estrictamente necesarios para garantizar su funcionamiento,
              seguridad o prestación de funcionalidades solicitadas por el
              usuario.
            </p>
          </CookieSection>

          <CookieSection title="3. Cookies de terceros">
            <p>
              En caso de incorporar en el futuro servicios de terceros que
              utilicen cookies, como herramientas de analítica, contenido
              incrustado, mapas, vídeos o servicios publicitarios, esta política
              se actualizará para identificar dichos proveedores, finalidades y
              periodos de conservación.
            </p>
          </CookieSection>

          <CookieSection title="4. Consentimiento">
            <p>
              Las cookies que no sean estrictamente necesarias no se instalarán
              sin haber obtenido previamente el consentimiento del usuario
              cuando dicho consentimiento sea exigible.
            </p>

            <p className="mt-4">
              Si se incorporan este tipo de cookies, el usuario podrá
              aceptarlas, rechazarlas o configurar sus preferencias mediante el
              correspondiente sistema de gestión de cookies.
            </p>
          </CookieSection>

          <CookieSection title="5. Configuración del navegador">
            <p>
              El usuario puede configurar su navegador para bloquear, eliminar o
              limitar el uso de cookies. Estas opciones se encuentran
              habitualmente dentro de los apartados de privacidad o seguridad
              del navegador utilizado.
            </p>
          </CookieSection>

          <CookieSection title="6. Cambios en la política de cookies">
            <p>
              Esta Política de Cookies podrá actualizarse cuando se incorporen
              nuevas herramientas o tecnologías que impliquen el uso de cookies.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              Última actualización: septiembre de 2026.
            </p>
          </CookieSection>
        </div>
      </section>
    </main>
  );
}

function CookieSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-neutral-950">{title}</h2>
      <div className="mt-4 leading-7">{children}</div>
    </section>
  );
}
