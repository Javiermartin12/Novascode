import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Check,
  Globe2,
  LayoutDashboard,
  Smartphone,
} from "lucide-react";

/* =========================================================
   TIPOS
========================================================= */

type ProjectImages = {
  desktop?: string;
  desktopTwo?: string;

  tablet?: string;

  mobileOne?: string;
  mobileTwo?: string;
  mobileThree?: string;
  mobileFour?: string;
};

type Project = {
  slug: string;
  title: string;
  category: string;
  sector: string;
  description: string;
  technologies: string[];
  highlights: string[];

  type: "mobile" | "software" | "web" | "platform";

  publicUrl?: string;

  images?: ProjectImages;
};

export type ProjectMediaLayout =
  | "auto"
  | "mobile"
  | "desktop"
  | "desktop-mobile"
  | "desktop-stack"
  | "desktop-devices";

export type ProjectTheme = "green" | "violet" | "blue" | "neutral";

type ProjectCardProps = {
  project: Project;

  reverse?: boolean;

  /*
   * Si no indicamos layout,
   * la card detecta automáticamente
   * qué composición utilizar.
   */
  mediaLayout?: ProjectMediaLayout;

  /*
   * Permite elegir el fondo visual
   * desde ProjectsGallery.
   */
  theme?: ProjectTheme;

  /*
   * Texto pequeño que aparece
   * sobre la zona visual.
   */
  mediaLabel?: string;
};

/* =========================================================
   TEMAS VISUALES
========================================================= */

const themeStyles: Record<
  ProjectTheme,
  {
    background: string;
    glowOne: string;
    glowTwo: string;
    label: string;
  }
> = {
  green: {
    background: "bg-gradient-to-br from-emerald-50 via-white to-green-100",
    glowOne: "bg-emerald-200/40",
    glowTwo: "bg-green-100/70",
    label: "text-emerald-700/60",
  },

  violet: {
    background:
      "bg-gradient-to-br from-indigo-950 via-neutral-950 to-violet-950",
    glowOne: "bg-indigo-600/20",
    glowTwo: "bg-violet-600/10",
    label: "text-indigo-300/60",
  },

  blue: {
    background: "bg-gradient-to-br from-blue-50 via-white to-indigo-100",
    glowOne: "bg-blue-200/50",
    glowTwo: "bg-indigo-100/70",
    label: "text-blue-700/60",
  },

  neutral: {
    background: "bg-gradient-to-br from-neutral-100 via-white to-neutral-200",
    glowOne: "bg-neutral-300/40",
    glowTwo: "bg-neutral-200/60",
    label: "text-neutral-500",
  },
};

/* =========================================================
   ICONO SEGÚN TIPO DE PROYECTO
========================================================= */

function ProjectIcon({ type }: { type: Project["type"] }) {
  if (type === "mobile") {
    return <Smartphone size={19} strokeWidth={1.8} />;
  }

  if (type === "software" || type === "platform") {
    return <LayoutDashboard size={19} strokeWidth={1.8} />;
  }

  return <Globe2 size={19} strokeWidth={1.8} />;
}

/* =========================================================
   DETECCIÓN AUTOMÁTICA DEL TIPO DE IMÁGENES
========================================================= */

function detectMediaLayout(images?: ProjectImages): ProjectMediaLayout {
  if (!images) {
    return "desktop";
  }

  const hasDesktop = Boolean(images.desktop);
  const hasSecondDesktop = Boolean(images.desktopTwo);
  const hasTablet = Boolean(images.tablet);

  const hasMobile = Boolean(
    images.mobileOne ||
    images.mobileTwo ||
    images.mobileThree ||
    images.mobileFour,
  );

  if (!hasDesktop && hasMobile) {
    return "mobile";
  }

  if (hasDesktop && hasTablet) {
    return "desktop-devices";
  }

  if (hasDesktop && hasSecondDesktop) {
    return "desktop-stack";
  }

  if (hasDesktop && hasMobile) {
    return "desktop-mobile";
  }

  if (hasDesktop) {
    return "desktop";
  }

  return "desktop";
}

/* =========================================================
   MARCO DE NAVEGADOR
========================================================= */

function BrowserFrame({
  src,
  alt,
  dark = false,
  className = "",
}: {
  src: string;
  alt: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[22px] border ${
        dark ? "border-white/10 bg-neutral-900" : "border-neutral-200 bg-white"
      } shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)] ${className}`}
    >
      {/* Barra superior */}
      <div
        className={`flex items-center gap-2 border-b px-4 py-3 ${
          dark
            ? "border-white/10 bg-neutral-900"
            : "border-neutral-200 bg-neutral-50"
        }`}
      >
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            dark ? "bg-white/20" : "bg-neutral-300"
          }`}
        />

        <span
          className={`h-2.5 w-2.5 rounded-full ${
            dark ? "bg-white/20" : "bg-neutral-300"
          }`}
        />

        <span
          className={`h-2.5 w-2.5 rounded-full ${
            dark ? "bg-white/20" : "bg-neutral-300"
          }`}
        />

        <div
          className={`ml-3 h-6 flex-1 rounded-full ${
            dark ? "bg-white/5" : "bg-white"
          }`}
        />
      </div>

      {/* Captura */}
      <div className="relative aspect-[16/8.4] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

/* =========================================================
   MÓVIL
========================================================= */

function PhoneFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[9/19.5] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="220px"
        className="object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.25)]"
      />
    </div>
  );
}

/* =========================================================
   ESTADO SIN IMÁGENES
========================================================= */

function EmptyMedia() {
  return (
    <div className="flex h-full min-h-[500px] items-center justify-center sm:min-h-[520px]">
      <p className="text-sm text-neutral-400">
        Imágenes del proyecto próximamente
      </p>
    </div>
  );
}

/* =========================================================
   LAYOUT: SOLO MÓVILES
========================================================= */

function MobileMedia({
  images,
  title,
}: {
  images?: ProjectImages;
  title: string;
}) {
  const mobileImages = [
    images?.mobileOne,
    images?.mobileTwo,
    images?.mobileThree,
    images?.mobileFour,
  ].filter((image): image is string => Boolean(image));

  if (mobileImages.length === 0) {
    return <EmptyMedia />;
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className={`relative flex items-end justify-center ${
          mobileImages.length > 1 ? "-space-x-14 sm:-space-x-20" : ""
        }`}
      >
        {mobileImages.slice(0, 3).map((image, index) => {
          const isCenter = mobileImages.length === 1 || index === 1;

          let phoneStyle = "z-20 w-[145px] sm:w-[165px]";

          if (isCenter) {
            phoneStyle = "z-30 w-[180px] sm:w-[205px]";
          } else if (index === 0) {
            phoneStyle = "z-10 mb-5 w-[145px] -rotate-[3deg] sm:w-[165px]";
          } else {
            phoneStyle = "z-20 mb-5 w-[145px] rotate-[3deg] sm:w-[165px]";
          }

          return (
            <PhoneFrame
              key={image}
              src={image}
              alt={`${title} - captura móvil ${index + 1}`}
              className={phoneStyle}
            />
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   LAYOUT: SOLO DESKTOP
========================================================= */

function DesktopMedia({
  images,
  title,
  dark,
}: {
  images?: ProjectImages;
  title: string;
  dark: boolean;
}) {
  if (!images?.desktop) {
    return <EmptyMedia />;
  }

  return (
    <div className="flex h-full items-center justify-center p-6 sm:p-8 lg:p-9">
      <BrowserFrame
        src={images.desktop}
        alt={`${title} - versión escritorio`}
        dark={dark}
        className="w-full max-w-[620px] transition duration-500 group-hover:-translate-y-1"
      />
    </div>
  );
}

function DesktopDevicesMedia({
  images,
  title,
  dark,
}: {
  images?: ProjectImages;
  title: string;
  dark: boolean;
}) {
  if (!images?.desktop) {
    return <EmptyMedia />;
  }

  return (
    <div className="relative h-full min-h-[500px] sm:min-h-[520px]">
      {/* Desktop principal */}
      <div className="p-6 sm:p-8 lg:p-9">
        <BrowserFrame
          src={images.desktop}
          alt={`${title} - versión escritorio`}
          dark={dark}
          className="relative z-10 mx-auto w-full max-w-[620px] transition duration-500 group-hover:-translate-y-1"
        />
      </div>

      {/* Tablet */}
      {images.tablet && (
        <div className="absolute bottom-5 left-6 z-20 w-[210px] sm:left-8 sm:w-[250px]">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={images.tablet}
              alt={`${title} - versión tablet`}
              fill
              sizes="260px"
              className="object-contain drop-shadow-[0_24px_30px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      )}

      {/* Móvil */}
      {images.mobileOne && (
        <div className="absolute bottom-3 right-7 z-30 sm:right-9">
          <PhoneFrame
            src={images.mobileOne}
            alt={`${title} - versión móvil`}
            className="w-[125px] sm:w-[145px]"
          />
        </div>
      )}
    </div>
  );
}
/* =========================================================
   LAYOUT: DESKTOP + MÓVILES
========================================================= */

function DesktopMobileMedia({
  images,
  title,
  dark,
}: {
  images?: ProjectImages;
  title: string;
  dark: boolean;
}) {
  if (!images?.desktop) {
    return <EmptyMedia />;
  }

  const mobiles = [
    images.mobileOne,
    images.mobileTwo,
    images.mobileThree,
  ].filter((image): image is string => Boolean(image));

  return (
    <>
      <div className="p-6 sm:p-8 lg:p-9">
        <BrowserFrame
          src={images.desktop}
          alt={`${title} - versión escritorio`}
          dark={dark}
          className="relative z-10 mx-auto w-full max-w-[620px] transition duration-500 group-hover:-translate-y-1"
        />
      </div>

      {mobiles.length > 0 && (
        <div className="absolute bottom-4 right-7 z-20 flex items-end -space-x-10 sm:right-9 sm:-space-x-12">
          {mobiles.slice(0, 2).map((image, index) => (
            <PhoneFrame
              key={image}
              src={image}
              alt={`${title} - versión móvil ${index + 1}`}
              className="w-[145px] sm:w-[165px]"
            />
          ))}
        </div>
      )}
    </>
  );
}

/* =========================================================
   LAYOUT: DESKTOP PRINCIPAL + SECUNDARIO + MÓVIL
========================================================= */

function DesktopStackMedia({
  images,
  title,
  dark,
}: {
  images?: ProjectImages;
  title: string;
  dark: boolean;
}) {
  if (!images?.desktop) {
    return <EmptyMedia />;
  }

  return (
    <>
      <div className="p-6 sm:p-8 lg:p-9">
        <BrowserFrame
          src={images.desktop}
          alt={`${title} - panel principal`}
          dark={dark}
          className="relative z-10 mx-auto w-full max-w-[620px] transition duration-500 group-hover:-translate-y-1"
        />
      </div>

      {images.desktopTwo && (
        <div className="absolute bottom-12 left-7 z-20 w-[260px] sm:left-9 sm:w-[300px]">
          <BrowserFrame
            src={images.desktopTwo}
            alt={`${title} - vista secundaria`}
            dark={dark}
          />
        </div>
      )}

      {images.mobileOne && (
        <div className="absolute bottom-3 right-7 z-30 sm:right-9">
          <PhoneFrame
            src={images.mobileOne}
            alt={`${title} - versión móvil`}
            className="w-[135px] sm:w-[155px]"
          />
        </div>
      )}
    </>
  );
}

/* =========================================================
   ZONA VISUAL UNIVERSAL
========================================================= */

function ProjectMedia({
  project,
  mediaLayout,
  theme,
  mediaLabel,
}: {
  project: Project;
  mediaLayout: ProjectMediaLayout;
  theme: ProjectTheme;
  mediaLabel?: string;
}) {
  const selectedTheme = themeStyles[theme];

  const resolvedLayout =
    mediaLayout === "auto" ? detectMediaLayout(project.images) : mediaLayout;

  const isDark = theme === "violet";

  return (
    <div
      className={`relative h-full min-h-[500px] overflow-hidden sm:min-h-[520px] ${selectedTheme.background}`}
    >
      {/* Luces decorativas */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full blur-[90px] ${selectedTheme.glowOne}`}
      />

      <div
        className={`pointer-events-none absolute -bottom-24 -left-20 h-[300px] w-[300px] rounded-full blur-[100px] ${selectedTheme.glowTwo}`}
      />

      {/* Layout automático o elegido */}
      {resolvedLayout === "mobile" && (
        <MobileMedia images={project.images} title={project.title} />
      )}

      {resolvedLayout === "desktop" && (
        <DesktopMedia
          images={project.images}
          title={project.title}
          dark={isDark}
        />
      )}
      {resolvedLayout === "desktop-devices" && (
        <DesktopDevicesMedia
          images={project.images}
          title={project.title}
          dark={isDark}
        />
      )}

      {resolvedLayout === "desktop-mobile" && (
        <DesktopMobileMedia
          images={project.images}
          title={project.title}
          dark={isDark}
        />
      )}

      {resolvedLayout === "desktop-stack" && (
        <DesktopStackMedia
          images={project.images}
          title={project.title}
          dark={isDark}
        />
      )}

      {/* Etiqueta inferior */}
      {mediaLabel && (
        <div className="absolute bottom-6 left-7 z-40">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.18em] ${selectedTheme.label}`}
          >
            {mediaLabel}
          </p>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

export default function ProjectCard({
  project,
  reverse = false,
  mediaLayout = "auto",
  theme = "neutral",
  mediaLabel,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[34px] bg-white shadow-[0_20px_60px_-40px_rgba(0,0,0,0.55)]">
      <div className="grid items-stretch lg:grid-cols-2">
        {/* ==================================================
            ZONA 1 — CONTENIDO
        ================================================== */}

        <div
          className={`flex h-full flex-col justify-between p-8 sm:p-10 lg:p-14 ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          <div>
            {/* Categoría */}
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

            {/* Título */}
            <h2 className="mt-8 text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">
              {project.title}
            </h2>

            {/* Descripción */}
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

          {/* ==================================================
              ZONA 2 — TECNOLOGÍAS Y ENLACES
          ================================================== */}

          <div className="mt-10">
            {/* Tecnologías */}
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

            {/* Acciones */}
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

        {/* ==================================================
            ZONA 3 — IMÁGENES
        ================================================== */}

        <div className={`h-full ${reverse ? "lg:order-1" : ""}`}>
          <ProjectMedia
            project={project}
            mediaLayout={mediaLayout}
            theme={theme}
            mediaLabel={mediaLabel}
          />
        </div>
      </div>
    </article>
  );
}
