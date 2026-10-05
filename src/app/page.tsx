import type { Metadata } from "next";

import FAQ from "@/components/home/FQA";
import HelpCTA from "@/components/home/HelpCTA";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Solutions from "@/components/home/Solutions";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Desarrollo web, software y apps en Almería",

  description:
    "Desarrollo de páginas web, software a medida, aplicaciones móviles, e-commerce y automatización para empresas y profesionales en Almería y toda España.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",

    title: "Desarrollo web, software y apps en Almería | Novascode",

    description:
      "Creamos páginas web, software a medida, aplicaciones móviles y soluciones digitales para empresas y profesionales en Almería y toda España.",
  },

  twitter: {
    card: "summary_large_image",

    title: "Desarrollo web, software y apps en Almería | Novascode",

    description:
      "Páginas web, software a medida, aplicaciones móviles y soluciones digitales para empresas y profesionales.",
  },
};

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Hero />

        <Services />

        <Solutions />

        <Process />

        <HelpCTA />

        <FAQ />
      </main>

      <Footer />
    </>
  );
}
