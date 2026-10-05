export const siteConfig = {
  name: "Novascode",

  description:
    "Desarrollo web, software a medida, aplicaciones móviles, e-commerce y automatización para empresas y profesionales.",

  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  locale: "es_ES",

  email: "contacto@novascode.es",

  phone: "+34633560759",

  location: {
    city: "El Ejido",
    province: "Almería",
    country: "España",
  },

  services: [
    "Desarrollo web",
    "Software a medida",
    "Aplicaciones móviles",
    "E-commerce",
    "Automatización",
    "Integraciones API",
  ],
};
