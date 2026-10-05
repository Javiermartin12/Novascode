import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import { siteConfig } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  applicationName: siteConfig.name,

  title: {
    default: "Novascode | Desarrollo web, software y apps en Almería",
    template: "%s | Novascode",
  },

  description:
    "Desarrollo de páginas web, software a medida, aplicaciones móviles, e-commerce y soluciones digitales para empresas y profesionales en Almería y toda España.",

  category: "technology",

  creator: "Novascode",
  publisher: "Novascode",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    siteName: "Novascode",

    title: "Novascode | Desarrollo web, software y apps en Almería",

    description:
      "Desarrollo web, software a medida, aplicaciones móviles y soluciones digitales para empresas y profesionales.",
  },

  twitter: {
    card: "summary_large_image",

    title: "Novascode | Desarrollo web, software y apps",

    description:
      "Desarrollo web, software a medida, aplicaciones móviles y soluciones digitales para empresas y profesionales.",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",

      "@id": `${siteConfig.url}/#organization`,

      name: siteConfig.name,

      url: siteConfig.url,

      description: siteConfig.description,

      email: siteConfig.email,

      telephone: siteConfig.phone,

      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.province,
        addressCountry: "ES",
      },

      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Almería",
        },
        {
          "@type": "Country",
          name: "España",
        },
      ],

      knowsAbout: siteConfig.services,
    },

    {
      "@type": "WebSite",

      "@id": `${siteConfig.url}/#website`,

      url: siteConfig.url,

      name: siteConfig.name,

      description: siteConfig.description,

      inLanguage: "es-ES",

      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
