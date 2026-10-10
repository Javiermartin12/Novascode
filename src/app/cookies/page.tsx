import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",

  description:
    "Información sobre las cookies utilizadas por Novascode, Google Analytics y las opciones para gestionar el consentimiento.",

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
          Esta política informa sobre las cookies y tecnologías similares
          utilizadas en Novascode, sus finalidades y las opciones disponibles
          para gestionar su uso.
        </p>

        <div className="mt-14 space-y-12 text-neutral-700">
          {/* 1. QUÉ SON LAS COOKIES */}

          <CookieSection title="1. Qué son las cookies">
            <p>
              Las cookies son pequeños archivos de información que los sitios
              web pueden almacenar en el dispositivo del usuario durante su
              navegación. Permiten, entre otras funciones, recordar
              preferencias, facilitar determinadas operaciones y obtener
              estadísticas de utilización.
            </p>

            <p className="mt-4">
              También existen tecnologías similares, como el almacenamiento
              local del navegador (localStorage), que permiten conservar
              determinadas preferencias sin utilizar cookies.
            </p>
          </CookieSection>

          {/* 2. TIPOS DE COOKIES */}

          <CookieSection title="2. Tecnologías utilizadas por Novascode">
            <p>
              Novascode utiliza mecanismos necesarios para recordar las
              preferencias de privacidad del usuario y, únicamente cuando este
              lo autoriza, herramientas de análisis estadístico.
            </p>

            <h3 className="mt-6 font-semibold text-neutral-950">
              2.1. Almacenamiento de preferencias
            </h3>

            <p className="mt-3">
              Se utiliza el almacenamiento local del navegador para recordar si
              el usuario ha aceptado o rechazado las cookies analíticas. Esta
              información permite respetar su elección durante las siguientes
              visitas.
            </p>

            <p className="mt-4">
              La clave utilizada es{" "}
              <code className="break-all rounded bg-neutral-100 px-1.5 py-1 text-sm">
                novascode-analytics-consent
              </code>
              .
            </p>

            <p className="mt-4">
              Este almacenamiento no se utiliza para publicidad ni para realizar
              un seguimiento comercial del usuario.
            </p>

            <h3 className="mt-7 font-semibold text-neutral-950">
              2.2. Cookies analíticas
            </h3>

            <p className="mt-3">
              Novascode utiliza Google Analytics 4, un servicio de análisis de
              tráfico web proporcionado por Google.
            </p>

            <p className="mt-4">
              Esta herramienta permite conocer, entre otros datos, el número de
              visitas, las páginas consultadas, la procedencia general del
              tráfico y determinadas interacciones con el sitio web.
            </p>

            <p className="mt-4">
              Google Analytics solo se carga después de que el usuario haya
              aceptado expresamente las cookies analíticas.
            </p>

            <h3 className="mt-7 font-semibold text-neutral-950">
              2.3. Cookies publicitarias
            </h3>

            <p className="mt-3">
              Novascode no utiliza actualmente cookies destinadas a campañas de
              remarketing o publicidad personalizada.
            </p>
          </CookieSection>

          {/* 3. DETALLE DE COOKIES */}

          <CookieSection title="3. Detalle de las cookies analíticas">
            <p>
              Cuando el usuario presta su consentimiento, Google Analytics 4
              puede instalar las siguientes cookies:
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-200">
              <table className="w-full min-w-[570px] text-left text-sm">
                <thead className="bg-neutral-50 text-neutral-950">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Cookie</th>
                    <th className="px-5 py-4 font-semibold">Finalidad</th>
                    <th className="px-5 py-4 font-semibold">Duración</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-5 py-4 font-medium">_ga</td>
                    <td className="px-5 py-4">
                      Distinguir usuarios para elaborar estadísticas de
                      utilización.
                    </td>
                    <td className="px-5 py-4">Hasta 2 años</td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium">_ga_*</td>
                    <td className="px-5 py-4">
                      Mantener el estado de la sesión asociado a Google
                      Analytics 4.
                    </td>
                    <td className="px-5 py-4">Hasta 2 años</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-neutral-500">
              Los periodos indicados corresponden a la configuración
              predeterminada de Google Analytics. La duración efectiva puede
              depender de la configuración del servicio y de las restricciones
              del navegador.
            </p>
          </CookieSection>

          {/* 4. TERCEROS */}

          <CookieSection title="4. Servicios de terceros">
            <p>
              El proveedor de la herramienta analítica utilizada es Google,
              mediante su servicio Google Analytics 4.
            </p>

            <p className="mt-4">
              Cuando el usuario autoriza su utilización, Google puede tratar la
              información recogida de acuerdo con las condiciones y garantías
              aplicables al servicio.
            </p>

            <p className="mt-4">
              Para obtener información adicional sobre el tratamiento de datos,
              las cookies y las posibles transferencias internacionales, pueden
              consultarse los siguientes recursos:
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://policies.google.com/privacy?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-600 hover:underline"
              >
                Política de privacidad de Google ↗
              </a>

              <a
                href="https://support.google.com/analytics/answer/11397207?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-600 hover:underline"
              >
                Información sobre cookies de Google Analytics ↗
              </a>
            </div>
          </CookieSection>

          {/* 5. CONSENTIMIENTO */}

          <CookieSection title="5. Consentimiento y gestión de preferencias">
            <p>
              Al acceder a Novascode por primera vez, el usuario dispone de un
              aviso que le permite aceptar o rechazar las cookies analíticas.
            </p>

            <p className="mt-4">
              Las cookies analíticas no se activan mientras el usuario no haya
              prestado su consentimiento.
            </p>

            <p className="mt-4">
              La decisión puede modificarse en cualquier momento mediante el
              botón <strong>Cookies</strong> disponible en la parte inferior de
              la web.
            </p>

            <p className="mt-4">
              Al retirar el consentimiento, Novascode deja de cargar la
              herramienta analítica y aplica los mecanismos previstos para
              eliminar las cookies analíticas accesibles desde el sitio web.
            </p>

            <p className="mt-4">
              Rechazar las cookies analíticas no impide acceder a los contenidos
              ni utilizar las funcionalidades principales de Novascode.
            </p>
          </CookieSection>

          {/* 6. NAVEGADOR */}

          <CookieSection title="6. Configuración del navegador">
            <p>
              El usuario también puede configurar su navegador para bloquear o
              eliminar cookies y otros datos almacenados por los sitios web.
            </p>

            <p className="mt-4">
              Estas opciones suelen encontrarse en los apartados de privacidad,
              seguridad o configuración de datos del navegador.
            </p>

            <p className="mt-4">
              La eliminación de los datos del sitio también puede borrar las
              preferencias de consentimiento previamente guardadas.
            </p>
          </CookieSection>

          {/* 7. PRIVACIDAD */}

          <CookieSection title="7. Protección de datos y contacto">
            <p>
              La información sobre el tratamiento de datos personales, los
              derechos de los usuarios y las vías de contacto está disponible en
              nuestra{" "}
              <Link
                href="/privacidad"
                className="font-medium text-indigo-600 hover:underline"
              >
                Política de Privacidad
              </Link>
              .
            </p>

            <p className="mt-4">
              Para cualquier consulta relacionada con esta política, puede
              escribirse a{" "}
              <a
                href="mailto:contacto@novascode.es"
                className="font-medium text-indigo-600 hover:underline"
              >
                contacto@novascode.es
              </a>
              .
            </p>
          </CookieSection>

          {/* 8. ACTUALIZACIONES */}

          <CookieSection title="8. Actualizaciones de esta política">
            <p>
              Esta Política de Cookies podrá actualizarse cuando se incorporen
              nuevas herramientas, cambien sus finalidades o se modifique la
              configuración de las tecnologías utilizadas.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              Última actualización: 10 de octubre de 2026.
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
