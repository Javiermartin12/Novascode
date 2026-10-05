import Link from "next/link";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",

  robots: {
    index: false,
    follow: true,
  },

  alternates: {
    canonical: "/aviso-legal",
  },
};

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        {/* Volver */}
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
        >
          ← Volver a Novascode
        </Link>

        {/* Header */}
        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
            Información legal
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">
            Aviso legal
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg">
            En esta página se recoge la información identificativa del titular
            de Novascode, así como las condiciones generales de acceso y
            utilización de este sitio web.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 space-y-12 text-neutral-700">
          <LegalSection title="1. Datos identificativos del titular">
            <p>
              En cumplimiento de la normativa aplicable a los servicios de la
              sociedad de la información, se informa de los siguientes datos:
            </p>

            <div className="mt-5 space-y-2 rounded-[24px] border border-neutral-200 bg-neutral-50 p-6">
              <p>
                <strong className="font-semibold text-neutral-950">
                  Nombre comercial:
                </strong>{" "}
                Novascode
              </p>

              <p>
                <strong className="font-semibold text-neutral-950">
                  Titular:
                </strong>{" "}
                Javier Martín Ruiz
              </p>

              <p>
                <strong className="font-semibold text-neutral-950">NIF:</strong>{" "}
                54139729Y
              </p>

              <p>
                <strong className="font-semibold text-neutral-950">
                  Domicilio:
                </strong>{" "}
                Calle Descubrimiento, Ático C, 04700 El Ejido (Almería), España
              </p>

              <p>
                <strong className="font-semibold text-neutral-950">
                  Correo electrónico:
                </strong>{" "}
                <a
                  href="mailto:contacto@novascode.es"
                  className="text-indigo-600 transition hover:text-indigo-700 hover:underline"
                >
                  contacto@novascode.es
                </a>
              </p>

              <p>
                <strong className="font-semibold text-neutral-950">
                  Teléfono:
                </strong>{" "}
                <a
                  href="tel:+34633560759"
                  className="text-indigo-600 transition hover:text-indigo-700 hover:underline"
                >
                  +34 633 560 759
                </a>
              </p>
            </div>
          </LegalSection>

          <LegalSection title="2. Objeto del sitio web">
            <p>
              El presente sitio web tiene como finalidad proporcionar
              información sobre Novascode y sobre los servicios profesionales
              ofrecidos en el ámbito del desarrollo web, desarrollo de software,
              aplicaciones móviles, sistemas de gestión, comercio electrónico,
              integraciones, automatización y otras soluciones digitales.
            </p>

            <p className="mt-4">
              Asimismo, el sitio web permite a los usuarios ponerse en contacto
              con Novascode para realizar consultas, solicitar información o
              plantear posibles proyectos profesionales.
            </p>
          </LegalSection>

          <LegalSection title="3. Condiciones de acceso y utilización">
            <p>
              El acceso y navegación por este sitio web atribuyen la condición
              de usuario e implican la aceptación de las condiciones recogidas
              en el presente Aviso Legal.
            </p>

            <p className="mt-4">
              El usuario se compromete a utilizar el sitio web, sus contenidos y
              servicios de forma lícita, responsable y conforme a la buena fe,
              absteniéndose de realizar cualquier actividad que pueda afectar al
              funcionamiento del sitio web, a los derechos de su titular o a los
              derechos de terceros.
            </p>

            <p className="mt-4">
              Queda prohibido utilizar este sitio web con fines ilícitos,
              fraudulentos o que puedan provocar daños, interrupciones o
              alteraciones en los sistemas informáticos utilizados para su
              funcionamiento.
            </p>
          </LegalSection>

          <LegalSection title="4. Propiedad intelectual e industrial">
            <p>
              Salvo que se indique expresamente lo contrario, los textos,
              diseños, elementos gráficos, interfaces, estructura, identidad
              visual, código y demás contenidos propios incluidos en este sitio
              web pertenecen a su titular o se utilizan con las correspondientes
              autorizaciones, licencias o derechos de uso.
            </p>

            <p className="mt-4">
              No se permite la reproducción, distribución, transformación,
              comunicación pública o utilización comercial de dichos contenidos
              sin la autorización correspondiente, salvo en aquellos casos en
              los que la legislación aplicable lo permita.
            </p>

            <p className="mt-4">
              Las marcas, nombres comerciales, logotipos y demás elementos
              pertenecientes a terceros que puedan aparecer en el sitio web son
              propiedad de sus respectivos titulares.
            </p>
          </LegalSection>

          <LegalSection title="5. Proyectos y trabajos mostrados">
            <p>
              El sitio web puede incluir referencias, imágenes, descripciones o
              información relativa a proyectos profesionales desarrollados por
              el titular.
            </p>

            <p className="mt-4">
              Cuando aparezcan marcas, nombres, imágenes o contenidos
              pertenecientes a clientes, colaboradores o terceros, estos se
              utilizarán únicamente con fines informativos o demostrativos y
              respetando los derechos correspondientes.
            </p>
          </LegalSection>

          <LegalSection title="6. Enlaces a sitios web de terceros">
            <p>
              Este sitio web puede incluir enlaces a páginas, plataformas o
              servicios externos gestionados por terceros.
            </p>

            <p className="mt-4">
              Novascode no controla el contenido, disponibilidad, seguridad,
              funcionamiento o políticas de dichos sitios externos, por lo que
              no asume responsabilidad por los contenidos o servicios ofrecidos
              directamente por terceros.
            </p>
          </LegalSection>

          <LegalSection title="7. Exclusión de responsabilidad">
            <p>
              Se procura mantener la información publicada en este sitio web
              actualizada y garantizar su correcto funcionamiento. No obstante,
              no puede garantizarse la inexistencia absoluta de errores,
              interrupciones, fallos técnicos o indisponibilidades temporales.
            </p>

            <p className="mt-4">
              El titular no será responsable de los daños que puedan derivarse
              de circunstancias ajenas a su control, del uso indebido del sitio
              web por parte del usuario o de incidencias provocadas por
              servicios externos.
            </p>
          </LegalSection>

          <LegalSection title="8. Protección de datos personales">
            <p>
              El tratamiento de los datos personales facilitados por los
              usuarios se realizará conforme a la normativa aplicable en materia
              de protección de datos.
            </p>

            <p className="mt-4">
              Puede consultarse información detallada sobre el tratamiento de
              datos personales en nuestra{" "}
              <Link
                href="/privacidad"
                className="font-medium text-indigo-600 transition hover:text-indigo-700 hover:underline"
              >
                Política de Privacidad
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection title="9. Uso de cookies">
            <p>
              La información relativa a las cookies y tecnologías similares
              utilizadas en este sitio web puede consultarse en nuestra{" "}
              <Link
                href="/cookies"
                className="font-medium text-indigo-600 transition hover:text-indigo-700 hover:underline"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection title="10. Modificaciones">
            <p>
              Novascode se reserva el derecho a modificar o actualizar el
              presente Aviso Legal cuando sea necesario para adaptarlo a cambios
              normativos, técnicos, operativos o relacionados con los servicios
              ofrecidos.
            </p>

            <p className="mt-4">
              Se recomienda revisar periódicamente esta página para conocer la
              versión vigente.
            </p>
          </LegalSection>

          <LegalSection title="11. Legislación aplicable">
            <p>
              El presente sitio web y las relaciones derivadas de su utilización
              se regirán por la legislación española que resulte aplicable.
            </p>
          </LegalSection>

          {/* Last update */}
          <div className="border-t border-neutral-200 pt-8">
            <p className="text-sm text-neutral-500">
              Última actualización: septiembre de 2026.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-[-0.015em] text-neutral-950 sm:text-2xl">
        {title}
      </h2>

      <div className="mt-4 text-base leading-7 text-neutral-700">
        {children}
      </div>
    </section>
  );
}
