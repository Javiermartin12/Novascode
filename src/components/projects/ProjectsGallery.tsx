"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

import { projects } from "@/data/projects";

import ProjectCard, {
  type ProjectMediaLayout,
  type ProjectTheme,
} from "./ProjectCard";

/* =========================================================
   CONFIGURACIÓN VISUAL DE CADA PROYECTO
========================================================= */

type ProjectVisualConfig = {
  mediaLayout: ProjectMediaLayout;
  theme: ProjectTheme;
  mediaLabel?: string;
};

const projectVisualConfig: Record<string, ProjectVisualConfig> = {
  huellapp: {
    mediaLayout: "mobile",
    theme: "green",
    mediaLabel: "Android · iOS",
  },

  timply: {
    mediaLayout: "desktop-stack",
    theme: "violet",
    mediaLabel: "Software · Responsive",
  },

  serresfilm: {
    mediaLayout: "desktop-mobile",
    theme: "green",
    mediaLabel: "Desktop · Responsive",
  },

  "edutec-a": {
    mediaLayout: "desktop-devices",
    theme: "blue",
    mediaLabel: "Desktop · Tablet · Mobile",
  },
  moodle: {
    mediaLayout: "desktop-stack",
    theme: "blue",
    mediaLabel: "Campus virtual · E-learning",
  },
};

/* =========================================================
   NOMBRES DE LOS FILTROS
========================================================= */

const FILTER_LABELS: Record<string, string> = {
  web: "Web",
  software: "Software",
  apps: "Apps",
  platforms: "Plataformas",
  automation: "Automatización",
  ai: "IA",
  ecommerce: "E-commerce",
};

/* =========================================================
   CONFIGURACIÓN GENERAL
========================================================= */

const INITIAL_VISIBLE_PROJECTS = 3;

/* =========================================================
   PROJECTS GALLERY
========================================================= */

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  /* =======================================================
     FILTROS DISPONIBLES

     Solo aparecen categorías que realmente tengan proyectos.
  ======================================================= */

  const availableFilters = useMemo(() => {
    const projectFilters = Array.from(
      new Set(projects.map((project) => project.filter)),
    );

    return [
      {
        id: "all",
        label: "Todos",
      },

      ...projectFilters.map((filter) => ({
        id: filter,
        label: FILTER_LABELS[filter] ?? filter,
      })),
    ];
  }, []);

  /* =======================================================
     PROYECTOS FILTRADOS
  ======================================================= */

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.filter === activeFilter);
  }, [activeFilter]);

  /* =======================================================
     PROYECTOS VISIBLES

     En "Todos" mostramos inicialmente tres.
     En un filtro concreto mostramos todos los de esa categoría.
  ======================================================= */

  const visibleProjects =
    activeFilter === "all" && !showAll
      ? filteredProjects.slice(0, INITIAL_VISIBLE_PROJECTS)
      : filteredProjects;

  const hasMoreProjects =
    activeFilter === "all" &&
    !showAll &&
    filteredProjects.length > INITIAL_VISIBLE_PROJECTS;

  function handleFilterChange(filter: string) {
    setActiveFilter(filter);
    setShowAll(false);
  }

  return (
    <div className="w-full">
      {/* =====================================================
          FILTROS
      ===================================================== */}

      <div className="mb-12 sm:mb-14">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
          Explorar proyectos
        </p>

        <div className="overflow-x-auto pb-1">
          <div className="inline-flex min-w-max items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.05] p-1.5">
            {availableFilters.map((filter) => {
              const isActive = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => handleFilterChange(filter.id)}
                  className={`whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-[0_8px_25px_-10px_rgba(79,70,229,0.8)]"
                      : "text-neutral-400 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          PROYECTOS
      ===================================================== */}

      {visibleProjects.length > 0 ? (
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {visibleProjects.map((project) => {
            /*
             * Conservamos la posición original del proyecto
             * para mantener la alternancia izquierda/derecha
             * aunque filtremos.
             */
            const originalIndex = projects.findIndex(
              (item) => item.slug === project.slug,
            );

            /*
             * Recuperamos la configuración visual.
             * Si no existe, ProjectCard utilizará
             * sus valores genéricos.
             */
            const visualConfig = projectVisualConfig[project.slug];

            return (
              <ProjectCard
                key={project.slug}
                project={project}
                reverse={originalIndex % 2 !== 0}
                mediaLayout={visualConfig?.mediaLayout ?? "auto"}
                theme={visualConfig?.theme ?? "neutral"}
                mediaLabel={visualConfig?.mediaLabel}
              />
            );
          })}
        </div>
      ) : (
        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] px-6 py-16 text-center">
          <p className="text-sm font-medium text-neutral-400">
            Próximamente añadiremos proyectos en esta categoría.
          </p>
        </div>
      )}

      {/* =====================================================
          VER MÁS
      ===================================================== */}

      {hasMoreProjects && (
        <div className="mt-12 flex justify-center sm:mt-14">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.1]"
          >
            Ver más proyectos
            <ChevronDown size={16} strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
}
