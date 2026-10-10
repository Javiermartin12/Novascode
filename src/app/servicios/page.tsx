import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesCatalog from "@/components/services/ServicesCatalog";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Servicios de desarrollo web, software y aplicaciones",

  description:
    "Servicios tecnológicos de Novascode: desarrollo web, software a medida, aplicaciones móviles, plataformas digitales, automatización, inteligencia artificial y mantenimiento.",

  alternates: {
    canonical: "/servicios",
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/servicios",

    title: "Servicios de desarrollo y soluciones digitales | Novascode",

    description:
      "Desarrollo web, software a medida, aplicaciones móviles, plataformas digitales, integraciones y automatización para empresas.",
  },

  twitter: {
    card: "summary_large_image",

    title: "Servicios tecnológicos | Novascode",

    description:
      "Soluciones digitales, desarrollo de software, aplicaciones y mantenimiento para empresas.",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <Header />

      <main>
        <ServicesHero />

        <ServicesCatalog />
          <ServicesCTA />

      </main>

      <Footer />
    </>
  );
}
