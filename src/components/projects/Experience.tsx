import {
  Blocks,
  Database,
  GraduationCap,
  RefreshCw,
  ServerCog,
  Workflow,
} from "lucide-react";

const experienceItems = [
  {
    icon: Blocks,
    title: "ERP y software empresarial",
    description:
      "Experiencia en desarrollo y mantenimiento de módulos, servicios, integraciones y bases de datos dentro de plataformas de gestión empresarial.",
  },
  {
    icon: ServerCog,
    title: "Marketplaces B2B",
    description:
      "Participación en el desarrollo de plataformas orientadas a operaciones entre empresas, trabajando sobre funcionalidades, lógica de negocio y evolución del producto.",
  },
  {
    icon: Workflow,
    title: "APIs e integraciones",
    description:
      "Desarrollo e integración de APIs para conectar aplicaciones, servicios y sistemas externos de forma segura y mantenible.",
  },
  {
    icon: Database,
    title: "Aplicaciones internas",
    description:
      "Desarrollo de herramientas para la gestión de usuarios, datos, procesos internos y operativa empresarial.",
  },
  {
    icon: RefreshCw,
    title: "Mantenimiento y evolución",
    description:
      "Trabajo sobre aplicaciones existentes para corregir errores, mejorar funcionalidades, optimizar procesos y añadir nuevas capacidades.",
  },
  {
    icon: GraduationCap,
    title: "Moodle y plataformas formativas",
    description:
      "Experiencia en configuración, administración, mantenimiento y soporte técnico de entornos Moodle, cursos, usuarios, permisos y seguimiento.",
  },
];

export default function Experience() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Experiencia profesional
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">
              Experiencia más allá de los proyectos mostrados.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-base leading-7 text-neutral-600 sm:text-lg">
              Además de los proyectos presentados, contamos con experiencia
              profesional participando en el desarrollo, mantenimiento y
              evolución de distintas soluciones digitales y plataformas
              empresariales.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experienceItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-[0_25px_60px_-35px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm transition group-hover:bg-indigo-600 group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-semibold text-neutral-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-neutral-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-neutral-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Clarification */}
        <div className="mt-10 rounded-[24px] border border-neutral-200 bg-neutral-50 px-6 py-5 sm:px-7">
          <p className="text-sm leading-6 text-neutral-500">
            Esta experiencia corresponde a trabajos profesionales y
            colaboraciones realizadas en distintos entornos y proyectos, y no
            implica que todos ellos sean proyectos desarrollados íntegramente
            por Novascode.
          </p>
        </div>
      </div>
    </section>
  );
}
