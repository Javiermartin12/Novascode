import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",

  robots: {
    index: false,
    follow: true,
  },

  alternates: {
    canonical: "/privacidad",
  },
};

export default function PrivacidadPage() {
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
          Protección de datos
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">
          Política de privacidad
        </h1>

        <p className="mt-5 text-base leading-7 text-neutral-600">
          Esta política explica cómo se tratarán los datos personales que los
          usuarios faciliten a través de Novascode.
        </p>

        <div className="mt-14 space-y-12 text-neutral-700">
          <PrivacySection title="1. Responsable del tratamiento">
            <p>
              <strong>Responsable:</strong> Javier Martín Ruiz
            </p>
            <p>
              <strong>Nombre comercial:</strong> Novascode
            </p>
            <p>
              <strong>NIF:</strong> 54139729Y
            </p>
            <p>
              <strong>Correo electrónico:</strong>{" "}
              <a
                href="mailto:javiermartinruiz21@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                javiermartinruiz21@gmail.com
              </a>
            </p>
          </PrivacySection>

          <PrivacySection title="2. Qué datos podemos tratar">
            <p>
              Cuando un usuario contacte con Novascode podremos tratar los datos
              que facilite voluntariamente, como nombre, correo electrónico,
              teléfono, empresa y la información incluida en su consulta o
              solicitud de presupuesto.
            </p>
          </PrivacySection>

          <PrivacySection title="3. Finalidad del tratamiento">
            <p>Los datos podrán utilizarse para:</p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Responder consultas y solicitudes de información.</li>
              <li>Preparar y gestionar solicitudes de presupuesto.</li>
              <li>
                Mantener comunicaciones relacionadas con un proyecto o posible
                relación profesional.
              </li>
              <li>
                Gestionar, cuando corresponda, la prestación de los servicios
                contratados.
              </li>
            </ul>
          </PrivacySection>

          <PrivacySection title="4. Base jurídica">
            <p>
              Cuando el usuario realiza una consulta voluntariamente, el
              tratamiento se basa en la solicitud realizada por el propio
              interesado y, cuando corresponda, en la aplicación de medidas
              precontractuales o en la ejecución de una relación contractual.
            </p>
          </PrivacySection>

          <PrivacySection title="5. Conservación de los datos">
            <p>
              Los datos se conservarán durante el tiempo necesario para
              responder a la consulta, gestionar la relación profesional o
              cumplir las obligaciones legales que resulten aplicables.
            </p>

            <p className="mt-4">
              Cuando los datos dejen de ser necesarios, serán eliminados o
              bloqueados conforme a las obligaciones legales aplicables.
            </p>
          </PrivacySection>

          <PrivacySection title="6. Destinatarios">
            <p>
              Los datos personales no serán vendidos ni cedidos a terceros,
              salvo cuando resulte necesario para prestar un servicio, exista
              una obligación legal o el usuario lo haya autorizado expresamente.
            </p>

            <p className="mt-4">
              Determinados proveedores tecnológicos utilizados para el
              alojamiento, correo electrónico o funcionamiento del sitio web
              podrán actuar como encargados del tratamiento cuando proceda.
            </p>
          </PrivacySection>

          <PrivacySection title="7. Derechos de los usuarios">
            <p>
              El usuario puede solicitar el acceso a sus datos personales, su
              rectificación, supresión, limitación del tratamiento, oposición y,
              cuando corresponda, portabilidad.
            </p>

            <p className="mt-4">
              Para ejercer estos derechos puede enviar una solicitud a{" "}
              <a
                href="mailto:javiermartinruiz21@gmail.com"
                className="text-indigo-600 hover:underline"
              >
                javiermartinruiz21@gmail.com
              </a>
              .
            </p>

            <p className="mt-4">
              Asimismo, puede presentar una reclamación ante la Agencia Española
              de Protección de Datos cuando considere que el tratamiento de sus
              datos no se ajusta a la normativa aplicable.
            </p>
          </PrivacySection>

          <PrivacySection title="8. Seguridad">
            <p>
              Se aplicarán medidas técnicas y organizativas razonables para
              proteger los datos personales frente a pérdida, acceso no
              autorizado, modificación o divulgación indebida.
            </p>
          </PrivacySection>

          <PrivacySection title="9. Actualización de esta política">
            <p>
              La presente Política de Privacidad podrá modificarse para
              adaptarse a cambios normativos, técnicos o relacionados con los
              servicios prestados.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              Última actualización: septiembre de 2026.
            </p>
          </PrivacySection>
        </div>
      </section>
    </main>
  );
}

function PrivacySection({
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
