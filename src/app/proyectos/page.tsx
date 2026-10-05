import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import Experience from "@/components/projects/Experience";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proyectos de desarrollo web, software y apps",

  description:
    "Conoce proyectos reales de desarrollo web, software a medida y aplicaciones móviles realizados con tecnologías como Next.js, React Native, Node.js, PostgreSQL y AWS.",

  alternates: {
    canonical: "/proyectos",
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/proyectos",

    title: "Proyectos de desarrollo web, software y apps | Novascode",

    description:
      "Descubre proyectos reales de aplicaciones móviles, software de gestión y desarrollo web realizados por Novascode.",
  },

  twitter: {
    card: "summary_large_image",

    title: "Proyectos de desarrollo web, software y apps | Novascode",

    description:
      "Aplicaciones móviles, software de gestión y páginas web desarrolladas para necesidades reales.",
  },
};

const projectsStructuredData = {
  "@context": "https://schema.org",

  "@type": "CollectionPage",

  "@id": `${siteConfig.url}/proyectos/#collection`,

  url: `${siteConfig.url}/proyectos`,

  name: "Proyectos de desarrollo web, software y aplicaciones | Novascode",

  description:
    "Selección de proyectos de desarrollo web, software a medida y aplicaciones móviles realizados por Novascode.",

  inLanguage: "es-ES",

  isPartOf: {
    "@id": `${siteConfig.url}/#website`,
  },

  about: {
    "@id": `${siteConfig.url}/#organization`,
  },

  mainEntity: {
    "@type": "ItemList",

    numberOfItems: projects.length,

    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",

      position: index + 1,

      item: {
        "@type": "CreativeWork",

        name: project.title,

        description: project.description,

        genre: project.category,

        keywords: project.technologies.join(", "),
      },
    })),
  },
};

export default function ProyectosPage() {
  return (
    <>
      <Header />

      <main>
        <ProjectsHero />

        <section className="bg-neutral-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl space-y-8 px-5 sm:px-6 lg:px-8">
            <ProjectShowcase project={projects[0]} />

            <ProjectShowcase project={projects[1]} reverse />

            <ProjectShowcase project={projects[2]} />
          </div>
        </section>

        <Experience />

        <ProjectsCTA />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
    </>
  );
}
