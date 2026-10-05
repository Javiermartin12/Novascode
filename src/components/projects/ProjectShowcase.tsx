import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Check,
  Globe2,
  LayoutDashboard,
  Smartphone,
} from "lucide-react";

type Project = {
  slug: string;
  title: string;
  category: string;
  sector: string;
  description: string;
  technologies: string[];
  highlights: string[];
  type: "mobile" | "software" | "web";
  publicUrl?: string;

  images?: {
    desktop?: string;
    desktopTwo?: string;
    mobileOne?: string;
    mobileTwo?: string;
    mobileThree?: string;
    mobileFour?: string;
  };
};

type ProjectShowcaseProps = {
  project: Project;
  reverse?: boolean;
};

function ProjectIcon({ type }: { type: Project["type"] }) {
  if (type === "mobile") {
    return <Smartphone size={19} strokeWidth={1.8} />;
  }

  if (type === "software") {
    return <LayoutDashboard size={19} strokeWidth={1.8} />;
  }

  return <Globe2 size={19} strokeWidth={1.8} />;
}

/* =========================================================
   HUELAPP - MOCKUP TEMPORAL
========================================================= */
function MobileVisual({ images }: { images?: Project["images"] }) {
  if (!images) {
    return (
      <div className="flex h-[500px] items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-green-100 sm:h-[520px]">
        <p className="text-sm text-neutral-400">
          Imágenes del proyecto próximamente
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-[500px] overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100 sm:h-[520px]">
      {/* Decoración */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-[280px] w-[280px] rounded-full bg-emerald-200/40 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-24 right-[-80px] h-[300px] w-[300px] rounded-full bg-green-100/70 blur-[100px]" />

      {/* GRUPO DE MÓVILES */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-end justify-center -space-x-14 sm:-space-x-20">
          {/* Móvil izquierdo */}
          {images.mobileOne && (
            <div className="relative z-10 mb-5 w-[145px] -rotate-[3deg] sm:w-[165px]">
              <div className="relative aspect-[9/19.5] w-full">
                <Image
                  src={images.mobileOne}
                  alt="Pantalla de Huellapp"
                  fill
                  sizes="180px"
                  className="object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.18)]"
                />
              </div>
            </div>
          )}

          {/* Móvil central principal */}
          {images.mobileTwo && (
            <div className="relative z-30 w-[180px] sm:w-[205px]">
              <div className="relative aspect-[9/19.5] w-full">
                <Image
                  src={images.mobileTwo}
                  alt="Aplicación Huellapp"
                  fill
                  sizes="220px"
                  className="object-contain drop-shadow-[0_30px_35px_rgba(0,0,0,0.24)]"
                />
              </div>
            </div>
          )}

          {/* Móvil derecho */}
          {images.mobileThree && (
            <div className="relative z-20 mb-5 w-[145px] rotate-[3deg] sm:w-[165px]">
              <div className="relative aspect-[9/19.5] w-full">
                <Image
                  src={images.mobileThree}
                  alt="Otra pantalla de Huellapp"
                  fill
                  sizes="180px"
                  className="object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.18)]"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Etiqueta */}
      <div className="absolute bottom-6 left-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700/60">
          Android · iOS
        </p>
      </div>
    </div>
  );
}
/* =========================================================
   TIMPLY - IMÁGENES REALES
========================================================= */

function SoftwareVisual({ images }: { images?: Project["images"] }) {
  if (!images) {
    return (
      <div className="flex h-[500px] items-center justify-center bg-neutral-950 sm:h-[520px]">
        <p className="text-sm text-neutral-500">
          Imágenes del proyecto próximamente
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-[500px] overflow-hidden bg-gradient-to-br from-indigo-950 via-neutral-950 to-violet-950 p-6 sm:h-[520px] sm:p-8 lg:p-9">
      {/* Luces decorativas */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full bg-indigo-600/20 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-[300px] w-[300px] rounded-full bg-violet-600/10 blur-[100px]" />

      {/* DESKTOP PRINCIPAL */}
      {images.desktop && (
        <div className="relative z-10 mx-auto w-full max-w-[620px] overflow-hidden rounded-[22px] border border-white/10 bg-neutral-900 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)] transition duration-500 group-hover:-translate-y-1">
          {/* Barra navegador */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-neutral-900 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

            <div className="ml-3 h-6 flex-1 rounded-full bg-white/5" />
          </div>

          {/* Captura desktop */}
          <div className="relative aspect-[16/8.4] w-full overflow-hidden">
            <Image
              src={images.desktop}
              alt="Panel principal de Timply"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      )}

      {/* DESKTOP SECUNDARIO */}
      {images.desktopTwo && (
        <div className="absolute bottom-12 left-7 z-20 w-[260px] sm:left-9 sm:w-[300px]">
          <div className="overflow-hidden rounded-[18px] border border-white/10 bg-neutral-900 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.8)]">
            {/* Mini barra navegador */}
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-neutral-900 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>

            <div className="relative aspect-[16/9] w-full">
              <Image
                src={images.desktopTwo}
                alt="Vista secundaria del software Timply"
                fill
                sizes="320px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      )}

      {/* VERSIÓN MÓVIL */}
      {images.mobileOne && (
        <div className="absolute bottom-3 right-7 z-30 w-[135px] sm:right-9 sm:w-[155px]">
          <div className="relative aspect-[9/19.5] w-full">
            <Image
              src={images.mobileOne}
              alt="Versión móvil de Timply"
              fill
              sizes="170px"
              className="object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      )}

      {/* Etiqueta */}
      <div className="absolute bottom-5 left-1/2 z-0 hidden -translate-x-1/2 sm:block">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300/60">
          Software · Responsive
        </p>
      </div>
    </div>
  );
}
/* =========================================================
   SERRESFILM - IMÁGENES REALES
========================================================= */
function SerresfilmVisual({
  images,
}: {
  images: NonNullable<Project["images"]>;
}) {
  return (
    <div className="relative h-[500px] overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-100 p-6 sm:h-[520px] sm:p-8 lg:p-9">
      {/* Decoración */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-[260px] w-[260px] rounded-full bg-emerald-200/40 blur-[90px]" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[280px] w-[280px] rounded-full bg-green-100/70 blur-[100px]" />

      {/* DESKTOP */}
      {images.desktop && (
        <div className="relative z-10 mx-auto w-full max-w-[620px] overflow-hidden rounded-[22px] border border-neutral-200 bg-white shadow-[0_25px_60px_-30px_rgba(0,0,0,0.25)] transition duration-500 group-hover:-translate-y-1">
          {/* Barra navegador */}
          <div className="flex items-center gap-2 border-b border-neutral-200 bg-neutral-50 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />

            <div className="ml-3 h-6 flex-1 rounded-full bg-white" />
          </div>

          {/* Captura desktop */}
          <div className="relative aspect-[16/8.2] w-full overflow-hidden">
            <Image
              src={images.desktop}
              alt="Página web corporativa de Serresfilm"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      )}

      {/* MÓVILES */}
      <div className="absolute bottom-5 right-8 z-20 flex items-end -space-x-10 sm:bottom-4 sm:right-10 sm:-space-x-12">
        {" "}
        {images.mobileOne && (
          <div className="relative w-[145px] sm:w-[165px]">
            <div className="relative aspect-[9/18.7] w-full">
              <Image
                src={images.mobileOne}
                alt="Versión móvil de Serresfilm"
                fill
                sizes="180px"
                className="object-contain drop-shadow-[0_22px_22px_rgba(0,0,0,0.22)]"
              />
            </div>
          </div>
        )}
        {images.mobileTwo && (
          <div className="relative w-[145px] sm:w-[165px]">
            <div className="relative aspect-[9/18.7] w-full">
              <Image
                src={images.mobileTwo}
                alt="Catálogo móvil de Serresfilm"
                fill
                sizes="180px"
                className="object-contain drop-shadow-[0_22px_22px_rgba(0,0,0,0.22)]"
              />
            </div>
          </div>
        )}
      </div>

      {/* Etiqueta */}
      <div className="absolute bottom-6 left-7 hidden sm:block">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700/60">
          Desktop · Responsive
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   WEB GENÉRICA - FALLBACK
========================================================= */

function WebVisual() {
  return (
    <div className="flex min-h-[420px] items-center justify-center overflow-hidden bg-gradient-to-br from-lime-50 via-white to-green-100 p-7 sm:min-h-[500px] sm:p-10">
      <div className="w-full max-w-xl overflow-hidden rounded-[26px] border border-neutral-200 bg-white shadow-2xl transition duration-500 group-hover:-translate-y-2">
        <div className="flex items-center gap-2 border-b border-neutral-100 px-5 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-200" />

          <div className="ml-3 h-7 flex-1 rounded-full bg-neutral-100" />
        </div>

        <div className="grid grid-cols-[1.1fr_0.9fr] gap-5 p-6">
          <div>
            <div className="h-3 w-20 rounded-full bg-lime-200" />

            <div className="mt-4 h-6 rounded-full bg-neutral-900" />
            <div className="mt-3 h-6 w-4/5 rounded-full bg-neutral-900" />

            <div className="mt-6 space-y-2">
              <div className="h-3 rounded-full bg-neutral-100" />
              <div className="h-3 rounded-full bg-neutral-100" />
              <div className="h-3 w-3/4 rounded-full bg-neutral-100" />
            </div>

            <div className="mt-7 h-10 w-28 rounded-full bg-neutral-950" />
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-lime-100 to-green-200" />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SELECCIÓN DEL VISUAL
========================================================= */
function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === "serresfilm" && project.images) {
    return <SerresfilmVisual images={project.images} />;
  }

  if (project.type === "mobile") {
    return <MobileVisual images={project.images} />;
  }

  if (project.type === "software") {
    return <SoftwareVisual images={project.images} />;
  }

  return <WebVisual />;
}
/* =========================================================
   COMPONENTE PRINCIPAL
========================================================= */

export default function ProjectShowcase({
  project,
  reverse = false,
}: ProjectShowcaseProps) {
  return (
    <article className="group overflow-hidden rounded-[34px] border border-neutral-200 bg-white">
      <div className="grid lg:grid-cols-2">
        {/* Content */}
        <div
          className={`flex flex-col justify-between p-8 sm:p-10 lg:p-14 ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          <div>
            {/* Category */}
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <ProjectIcon type={project.type} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  {project.category}
                </p>

                <p className="mt-1 text-sm text-neutral-500">
                  {project.sector}
                </p>
              </div>
            </div>

            {/* Title */}
            <h2 className="mt-8 text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">
              {project.title}
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
              {project.description}
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 text-sm leading-6 text-neutral-600"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <Check size={12} strokeWidth={2.5} />
                  </span>

                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-xs font-medium text-neutral-600"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              {project.publicUrl && (
                <a
                  href={project.publicUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-indigo-600"
                >
                  Visitar proyecto
                  <ArrowUpRight size={16} />
                </a>
              )}

              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 transition hover:text-indigo-600"
              >
                Tengo un proyecto parecido
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className={reverse ? "lg:order-1" : ""}>
          <ProjectVisual project={project} />
        </div>
      </div>
    </article>
  );
}
