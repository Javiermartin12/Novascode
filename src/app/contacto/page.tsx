import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contacto y presupuesto para tu proyecto",

  description:
    "Contacta con Novascode para solicitar información o presupuesto para tu página web, software a medida, aplicación móvil, e-commerce o proyecto digital.",

  alternates: {
    canonical: "/contacto",
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/contacto",

    title: "Contacto y presupuesto para tu proyecto | Novascode",

    description:
      "Cuéntanos tu idea y solicita información o presupuesto para desarrollar tu web, software, aplicación móvil o solución digital.",
  },

  twitter: {
    card: "summary_large_image",

    title: "Contacto y presupuesto para tu proyecto | Novascode",

    description:
      "Contacta con Novascode para desarrollar tu web, software, app o solución digital a medida.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <Header />

      <main>
        <ContactHero />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
