import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Política de Privacidad",

  description:
    "Información sobre el tratamiento de datos personales, el formulario de contacto y las herramientas de análisis utilizadas por Novascode.",

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
          Esta Política de Privacidad informa sobre el tratamiento de los datos
          personales de quienes visitan Novascode, utilizan su formulario de
          contacto o solicitan información sobre sus servicios profesionales.
        </p>

        <div className="mt-14 space-y-12 text-neutral-700">
          {/* 1. RESPONSABLE */}

          <PrivacySection title="1. Responsable del tratamiento">
            <p>
              <strong>Responsable:</strong> Javier Martín Ruiz
            </p>

            <p className="mt-2">
              <strong>Nombre comercial:</strong> Novascode
            </p>

            <p className="mt-2">
              <strong>NIF:</strong> 54139729Y
            </p>

            <p className="mt-2">
              <strong>Correo electrónico:</strong>{" "}
              <a
                href="mailto:contacto@novascode.es"
                className="font-medium text-indigo-600 hover:underline"
              >
                contacto@novascode.es
              </a>
            </p>

            <p className="mt-4">
              El responsable determina las finalidades y los medios del
              tratamiento de los datos personales relacionados con la actividad
              de Novascode.
            </p>
          </PrivacySection>

          {/* 2. DATOS TRATADOS */}

          <PrivacySection title="2. Datos personales tratados">
            <p>
              Novascode podrá tratar las siguientes categorías de datos, según
              la forma en que el usuario interactúe con el sitio web.
            </p>

            <h3 className="mt-6 font-semibold text-neutral-950">
              2.1. Datos facilitados mediante el formulario
            </h3>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Nombre de la persona que realiza la consulta.</li>
              <li>Dirección de correo electrónico.</li>
              <li>Número de teléfono, cuando se facilite.</li>
              <li>Nombre de la empresa, cuando corresponda.</li>
              <li>Tipo de proyecto o servicio solicitado.</li>
              <li>Información incluida en el mensaje.</li>
            </ul>

            <p className="mt-4">
              Estos datos son proporcionados voluntariamente por el usuario para
              que Novascode pueda atender su consulta.
            </p>

            <h3 className="mt-7 font-semibold text-neutral-950">
              2.2. Datos de navegación y uso del sitio web
            </h3>

            <p className="mt-3">
              Cuando el usuario acepta las cookies analíticas, Google Analytics
              4 puede recopilar información sobre las páginas visitadas,
              sesiones, interacciones, procedencia del tráfico y características
              generales del dispositivo o navegador.
            </p>

            <p className="mt-4">
              La medición puede utilizar identificadores asociados a cookies. No
              se deben enviar a Google Analytics datos personales
              identificativos introducidos en el formulario de contacto.
            </p>

            <h3 className="mt-7 font-semibold text-neutral-950">
              2.3. Datos técnicos
            </h3>

            <p className="mt-3">
              Los proveedores de infraestructura pueden generar registros
              técnicos relacionados con el acceso y funcionamiento del sitio
              web, incluidos datos de conexión, para mantener la seguridad,
              diagnosticar incidencias y prevenir usos indebidos.
            </p>
          </PrivacySection>

          {/* 3. FINALIDADES */}

          <PrivacySection title="3. Finalidades del tratamiento">
            <p>
              Los datos personales podrán utilizarse para las siguientes
              finalidades:
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>
                Atender consultas y solicitudes de información recibidas
                mediante el formulario de contacto o correo electrónico.
              </li>

              <li>
                Preparar presupuestos y propuestas de servicios tecnológicos
                solicitados por los interesados.
              </li>

              <li>
                Mantener comunicaciones relacionadas con posibles proyectos o
                relaciones profesionales.
              </li>

              <li>
                Gestionar los servicios contratados, cuando exista una relación
                contractual.
              </li>

              <li>
                Analizar, con consentimiento previo, la utilización del sitio
                web mediante Google Analytics 4.
              </li>

              <li>
                Mantener el funcionamiento técnico, la seguridad y la integridad
                del sitio web.
              </li>
            </ul>

            <p className="mt-4">
              El envío de una consulta no supone la suscripción automática a
              comunicaciones comerciales periódicas.
            </p>
          </PrivacySection>

          {/* 4. BASE JURÍDICA */}

          <PrivacySection title="4. Base jurídica del tratamiento">
            <p>
              Las bases jurídicas aplicables dependen de la finalidad del
              tratamiento.
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6">
              <li>
                <strong>Medidas precontractuales o contrato:</strong> cuando el
                interesado solicita un presupuesto o una actuación previa a la
                contratación, o cuando resulta necesario prestar servicios
                contratados.
              </li>

              <li>
                <strong>Interés legítimo:</strong> cuando corresponda para
                atender consultas generales relacionadas con la actividad
                profesional y garantizar la seguridad del sitio web, respetando
                los derechos de los interesados.
              </li>

              <li>
                <strong>Consentimiento:</strong> para utilizar Google Analytics
                4 y las cookies analíticas no necesarias.
              </li>

              <li>
                <strong>Obligación legal:</strong> cuando sea necesario
                conservar o facilitar información para cumplir obligaciones
                normativas aplicables.
              </li>
            </ul>

            <p className="mt-4">
              El consentimiento para las cookies analíticas puede retirarse en
              cualquier momento, sin afectar a la licitud del tratamiento
              realizado previamente.
            </p>
          </PrivacySection>

          {/* 5. CONSERVACIÓN */}

          <PrivacySection title="5. Conservación de los datos">
            <p>
              Los datos de contacto se conservarán durante el tiempo necesario
              para gestionar las consultas, solicitudes de presupuesto y
              comunicaciones relacionadas.
            </p>

            <p className="mt-4">
              Cuando se establezca una relación contractual, los datos
              necesarios para su gestión podrán conservarse durante su vigencia
              y los plazos exigidos por las obligaciones legales aplicables.
            </p>

            <p className="mt-4">
              Los datos analíticos se conservarán conforme a los periodos
              configurados en la propiedad de Google Analytics y a los límites
              establecidos por el propio servicio.
            </p>

            <p className="mt-4">
              Las cookies analíticas tienen sus propios periodos de duración,
              que se detallan en la{" "}
              <Link
                href="/cookies"
                className="font-medium text-indigo-600 hover:underline"
              >
                Política de Cookies
              </Link>
              .
            </p>

            <p className="mt-4">
              Finalizados los plazos aplicables, los datos serán eliminados o,
              cuando proceda legalmente, bloqueados.
            </p>
          </PrivacySection>

          {/* 6. DESTINATARIOS */}

          <PrivacySection title="6. Destinatarios y proveedores tecnológicos">
            <p>
              Novascode utiliza determinados proveedores tecnológicos para
              alojar el sitio web, procesar los formularios de contacto,
              gestionar las comunicaciones electrónicas y obtener estadísticas
              de navegación.
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-6">
              <li>
                <strong>Vercel:</strong> infraestructura de alojamiento,
                publicación y funcionamiento del sitio web.
              </li>

              <li>
                <strong>Resend:</strong> servicio utilizado para transmitir los
                mensajes enviados mediante el formulario de contacto.
              </li>

              <li>
                <strong>OVHcloud / Zimbra:</strong> servicios de correo
                electrónico utilizados para recibir y gestionar las
                comunicaciones.
              </li>

              <li>
                <strong>Google Analytics 4:</strong> servicio proporcionado por
                Google para analizar la utilización del sitio web cuando el
                usuario ha prestado su consentimiento.
              </li>
            </ul>

            <p className="mt-5">
              Estos proveedores podrán acceder a determinados datos en la medida
              necesaria para prestar sus respectivos servicios, con las
              condiciones y garantías aplicables a cada tratamiento.
            </p>

            <p className="mt-4">
              Novascode no comercializa ni vende los datos personales
              facilitados por los usuarios.
            </p>
          </PrivacySection>

          {/* 7. TRANSFERENCIAS */}

          <PrivacySection title="7. Transferencias internacionales de datos">
            <p>
              La utilización de determinados proveedores tecnológicos puede
              implicar el tratamiento o almacenamiento de datos personales fuera
              del Espacio Económico Europeo.
            </p>

            <p className="mt-4">
              En particular, Resend informa de que almacena datos relacionados
              con los mensajes y el funcionamiento de su servicio en Estados
              Unidos.
            </p>

            <p className="mt-4">
              Cuando se produzcan transferencias internacionales de datos,
              deberán aplicarse las garantías previstas en la normativa de
              protección de datos, como decisiones de adecuación o cláusulas
              contractuales tipo de la Comisión Europea, según corresponda.
            </p>

            <p className="mt-4">
              Puede consultarse información adicional sobre las garantías de los
              proveedores en sus respectivas políticas y condiciones de
              privacidad.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="https://resend.com/security/gdpr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-600 hover:underline"
              >
                Protección de datos en Resend ↗
              </a>

              <a
                href="https://policies.google.com/privacy?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-600 hover:underline"
              >
                Política de privacidad de Google ↗
              </a>
            </div>
          </PrivacySection>

          {/* 8. DERECHOS */}

          <PrivacySection title="8. Derechos de los usuarios">
            <p>
              Las personas interesadas pueden ejercer, en los términos previstos
              por la normativa, sus derechos de acceso, rectificación,
              supresión, oposición, limitación del tratamiento y portabilidad.
            </p>

            <p className="mt-4">
              También pueden retirar el consentimiento otorgado para
              tratamientos basados en dicha autorización.
            </p>

            <p className="mt-4">
              Para ejercer estos derechos o solicitar información adicional,
              pueden dirigirse a{" "}
              <a
                href="mailto:contacto@novascode.es"
                className="font-medium text-indigo-600 hover:underline"
              >
                contacto@novascode.es
              </a>
              .
            </p>

            <p className="mt-4">
              Asimismo, pueden presentar una reclamación ante la{" "}
              <a
                href="https://www.aepd.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-600 hover:underline"
              >
                Agencia Española de Protección de Datos
              </a>{" "}
              cuando consideren que el tratamiento de sus datos no se ajusta a
              la normativa aplicable.
            </p>
          </PrivacySection>

          {/* 9. COOKIES */}

          <PrivacySection title="9. Cookies y análisis de navegación">
            <p>
              Novascode utiliza Google Analytics 4 para conocer el uso general
              de la web y disponer de información estadística que ayude a
              mejorar sus contenidos y servicios.
            </p>

            <p className="mt-4">
              Esta herramienta únicamente se carga cuando el visitante acepta
              las cookies analíticas mediante el sistema de consentimiento
              disponible en el sitio web.
            </p>

            <p className="mt-4">
              El usuario puede rechazar su utilización y modificar
              posteriormente sus preferencias mediante el botón{" "}
              <strong>Cookies</strong> disponible en la web.
            </p>

            <p className="mt-4">
              Para obtener información sobre las cookies utilizadas, sus
              finalidades y duración, puede consultar la{" "}
              <Link
                href="/cookies"
                className="font-medium text-indigo-600 hover:underline"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </PrivacySection>

          {/* 10. SEGURIDAD */}

          <PrivacySection title="10. Seguridad de los datos">
            <p>
              Novascode aplica medidas técnicas y organizativas orientadas a
              proteger los datos personales frente a accesos no autorizados,
              pérdida, alteración o divulgación indebida.
            </p>

            <p className="mt-4">
              Para el funcionamiento del sitio web se utilizan conexiones
              seguras y servicios de infraestructura y comunicación con
              mecanismos de protección de la información.
            </p>
          </PrivacySection>

          {/* 11. ACTUALIZACIONES */}

          <PrivacySection title="11. Actualización de esta política">
            <p>
              Esta Política de Privacidad podrá actualizarse para reflejar
              cambios normativos, modificaciones en los servicios tecnológicos o
              nuevas operaciones de tratamiento de datos.
            </p>

            <p className="mt-4 text-sm text-neutral-500">
              Última actualización: 10 de octubre de 2026.
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
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-neutral-950">{title}</h2>

      <div className="mt-4 leading-7">{children}</div>
    </section>
  );
}
