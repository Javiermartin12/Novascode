/* =========================================================
   TIPOS DE SERVICIOS
========================================================= */

export type ServiceIcon =
  | "web"
  | "software"
  | "mobile"
  | "platform"
  | "automation"
  | "support";

export type ServiceCategory = {
  id: string;
  icon: ServiceIcon;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
};

/* =========================================================
   CATÁLOGO DE SERVICIOS NOVASCODE
========================================================= */

export const serviceCategories: ServiceCategory[] = [
  {
    id: "desarrollo-web",
    icon: "web",
    eyebrow: "Presencia digital",
    title: "Desarrollo web",
    description:
      "Diseñamos y desarrollamos sitios web adaptados a cada negocio, cuidando la experiencia de usuario, el rendimiento y la presentación de sus productos y servicios.",
    features: [
      "Landing pages y webs corporativas",
      "Catálogos digitales y tiendas online",
      "Rediseño y modernización de sitios existentes",
      "Optimización, nuevas secciones y funcionalidades",
    ],
  },

  {
    id: "software-a-medida",
    icon: "software",
    eyebrow: "Soluciones empresariales",
    title: "Software a medida",
    description:
      "Creamos herramientas digitales para organizar procesos, gestionar información y resolver necesidades específicas de empresas y profesionales.",
    features: [
      "Aplicaciones web y software de gestión",
      "Dashboards y paneles de administración",
      "Herramientas internas y bases de datos",
      "Software de escritorio y evolución de sistemas",
    ],
  },

  {
    id: "aplicaciones-moviles",
    icon: "mobile",
    eyebrow: "Soluciones móviles",
    title: "Aplicaciones móviles",
    description:
      "Desarrollamos aplicaciones móviles orientadas a ofrecer servicios, digitalizar procesos y conectar a las empresas con sus usuarios.",
    features: [
      "Aplicaciones para Android e iOS",
      "Desarrollo multiplataforma con React Native",
      "Integración con APIs y servicios backend",
      "Mejoras, publicación y mantenimiento de apps",
    ],
  },

  {
    id: "plataformas-digitales",
    icon: "platform",
    eyebrow: "Implantación y gestión de plataformas",
    title: "Plataformas digitales",
    description:
      "Implantamos, configuramos y mantenemos plataformas como Moodle, WordPress, WooCommerce y Shopify. Adaptamos soluciones existentes a las necesidades de cada negocio.",
    features: [
      "Campus virtuales y plataformas Moodle",
      "WordPress, WooCommerce y Shopify",
      "Personalización, migraciones e integraciones",
      "Administración, mantenimiento y soporte",
    ],
  },

  {
    id: "automatizacion-ia",
    icon: "automation",
    eyebrow: "Procesos inteligentes",
    title: "Automatización, integraciones e IA",
    description:
      "Conectamos sistemas y desarrollamos soluciones que ayudan a reducir tareas repetitivas, aprovechar la información y mejorar los flujos de trabajo.",
    features: [
      "Integraciones entre aplicaciones mediante APIs",
      "Automatización de procesos y tareas",
      "Chatbots y asistentes virtuales con IA",
      "Funcionalidades inteligentes en sistemas existentes",
    ],
  },

  {
    id: "mantenimiento-soporte",
    icon: "support",
    eyebrow: "Continuidad tecnológica",
    title: "Mantenimiento y soporte",
    description:
      "Ayudamos a mantener, mejorar y evolucionar las soluciones digitales para que sigan respondiendo a las necesidades de cada negocio.",
    features: [
      "Resolución de errores e incidencias",
      "Actualizaciones y nuevas funcionalidades",
      "Despliegues, servidores, dominios y DNS",
      "Mantenimiento técnico y soporte continuado",
    ],
  },
];
