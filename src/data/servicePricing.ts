/* =========================================================
   TIPOS
========================================================= */

export type PricingItem = {
  name: string;
  price: string;
  description?: string;
};

export type PricingSection = {
  id: string;
  label: string;
  items: PricingItem[];
  note?: string;
};

export type ServicePricing = {
  title: string;
  description: string;
  sections: PricingSection[];
  disclaimer: string;
};

/* =========================================================
   TARIFAS DE NOVASCODE
========================================================= */

export const servicePricing: Record<string, ServicePricing> = {
  /* =======================================================
     DESARROLLO WEB
  ======================================================= */

  "desarrollo-web": {
    title: "Desarrollo web",

    description:
      "Consulta nuestras tarifas orientativas para crear, mantener o mejorar tu página web.",

    sections: [
      /* ---------------------------------------------------
         CREACIÓN WEB
      --------------------------------------------------- */

      {
        id: "creacion",
        label: "Creación web",

        items: [
          {
            name: "Landing page",
            price: "100 €",
            description:
              "Página única de presentación, adaptable a móvil y con opciones de contacto.",
          },
          {
            name: "Web básica",
            price: "200 €",
            description:
              "Web corporativa sencilla de hasta 3 páginas, con diseño responsive.",
          },
          {
            name: "Web profesional",
            price: "449 €",
            description:
              "Hasta 6 páginas, diseño más personalizado y funcionalidades habituales de una web corporativa.",
          },
          {
            name: "Web avanzada",
            price: "700 €",
            description:
              "Hasta 10 páginas, estructura más elaborada y catálogo informativo sencillo.",
          },
          {
            name: "Tienda online",
            price: "A presupuestar",
            description:
              "Desarrollo de comercio electrónico según catálogo, pagos y funcionalidades necesarias.",
          },
          {
            name: "Desarrollo personalizado",
            price: "A presupuestar",
            description:
              "Soluciones web con necesidades específicas, integraciones o funcionalidades a medida.",
          },
        ],

        note: "El alcance, los contenidos, las revisiones y los plazos se concretan antes de comenzar.",
      },

      /* ---------------------------------------------------
         MANTENIMIENTO ANUAL
      --------------------------------------------------- */

      {
        id: "mantenimiento",
        label: "Mantenimiento anual",

        items: [
          {
            name: "Gestión de dominio",
            price: "20 €/año",
            description:
              "Gestión de renovación y configuración DNS básica. El coste del dominio se abona aparte.",
          },
          {
            name: "Plan Esencial",
            price: "60 €/año",
            description:
              "Revisión técnica básica anual para webs corporativas sencillas, según alcance contratado.",
          },
          {
            name: "Plan Profesional",
            price: "100 €/año",
            description:
              "Plan Esencial con pequeñas intervenciones adicionales, dentro de los límites acordados.",
          },
        ],

        note: "Los planes anuales están orientados a webs sencillas. No incluyen cambios ilimitados, alojamiento, licencias ni servicios externos.",
      },

      /* ---------------------------------------------------
         SERVICIOS PUNTUALES
      --------------------------------------------------- */

      {
        id: "puntuales",
        label: "Servicios puntuales",

        items: [
          {
            name: "Modificación pequeña de contenido",
            price: "10 €",
          },
          {
            name: "Incorporar una sección sencilla",
            price: "22,50 €",
          },
          {
            name: "Añadir una página informativa",
            price: "32,50 €",
          },
          {
            name: "Corregir una incidencia sencilla",
            price: "15 €",
          },
          {
            name: "Configuración de dominio y DNS",
            price: "17,50 €",
          },
          {
            name: "Despliegue de una web existente",
            price: "30 €",
          },
          {
            name: "Google Search Console y sitemap",
            price: "25 €",
          },
          {
            name: "Revisión SEO técnica básica",
            price: "45 €",
          },
          {
            name: "Desarrollo y soporte por horas",
            price: "15 €/hora",
          },
        ],

        note: "Los precios de intervenciones puntuales corresponden a tareas sencillas. Los trabajos complejos se presupuestan según su alcance.",
      },
    ],

    disclaimer:
      "Precios orientativos sin IVA. Dominio, alojamiento, licencias y servicios de terceros no incluidos, salvo indicación expresa. El presupuesto definitivo dependerá del alcance acordado.",
  },

  /* =======================================================
   SOFTWARE A MEDIDA
======================================================= */

  "software-a-medida": {
    title: "Software a medida",

    description:
      "Desarrollamos y mejoramos aplicaciones y herramientas empresariales mediante paquetes de horas, funcionalidades y entregas por fases.",

    sections: [
      /* ---------------------------------------------------
       PAQUETES DE HORAS
    --------------------------------------------------- */

      {
        id: "paquetes",
        label: "Paquetes de horas",

        items: [
          {
            name: "Pack Inicio · 10 horas",
            price: "150 €",
            description:
              "Orientado a correcciones, pequeños ajustes, mejoras y tareas de desarrollo concretas.",
          },
          {
            name: "Pack Desarrollo · 30 horas",
            price: "450 €",
            description:
              "Pensado para nuevas funcionalidades, módulos sencillos y ampliaciones de aplicaciones existentes.",
          },
          {
            name: "Pack Proyecto · 100 horas",
            price: "1.500 €",
            description:
              "Bolsa de desarrollo para proyectos que requieren varias funcionalidades y entregas organizadas por fases.",
          },
          {
            name: "Pack Evolución · 300 horas",
            price: "4.500 €",
            description:
              "Pensado para desarrollos de mayor alcance o evolución continuada de software, con planificación y pagos por hitos.",
          },
        ],

        note: "Tarifa de referencia: 15 €/hora. Los paquetes representan horas de trabajo, no funcionalidades garantizadas. En los proyectos grandes se acuerdan las fases, el calendario y los pagos antes de comenzar. No es necesario abonar todas las horas de un proyecto de larga duración por adelantado.",
      },

      /* ---------------------------------------------------
       DESARROLLO POR HITOS
    --------------------------------------------------- */

      {
        id: "hitos",
        label: "Desarrollo por hitos",

        items: [
          {
            name: "Hito 1 · Base del sistema",
            price: "Ejemplo: 150 €",
            description:
              "10 horas ilustrativas para preparar la estructura inicial del proyecto y una primera base funcional.",
          },
          {
            name: "Hito 2 · Primer módulo",
            price: "Ejemplo: 300 €",
            description:
              "20 horas ilustrativas destinadas a desarrollar una funcionalidad o módulo previamente definido.",
          },
          {
            name: "Hito 3 · Ampliación funcional",
            price: "Ejemplo: 450 €",
            description:
              "30 horas ilustrativas para incorporar nuevas operaciones, pantallas o funcionalidades acordadas.",
          },
          {
            name: "Hito 4 · Integración y entrega",
            price: "Ejemplo: 600 €",
            description:
              "40 horas ilustrativas para completar funcionalidades, realizar pruebas, integrar componentes y preparar la entrega.",
          },
        ],

        note: "Ejemplo de planificación: 100 horas y 1.500 € en total, sin IVA. Estas fases y horas son únicamente ilustrativas y no constituyen un presupuesto de software real. Cada hito tendrá funcionalidades, entregables, criterios de aceptación y precio acordados. Tras su validación se realiza el pago correspondiente según las condiciones pactadas.",
      },

      /* ---------------------------------------------------
       COSTES Y SOPORTE
    --------------------------------------------------- */

      {
        id: "costes",
        label: "Costes y soporte",

        items: [
          {
            name: "Desarrollo y mejoras por horas",
            price: "15 €/hora",
            description:
              "Corrección de errores, nuevas funcionalidades, cambios en aplicaciones y trabajos de desarrollo previamente acordados.",
          },
          {
            name: "Bolsa mensual · 10 horas",
            price: "150 €/mes",
            description:
              "Horas de desarrollo o soporte reservadas durante el mes, para tareas y mejoras planificadas.",
          },
          {
            name: "Bolsa mensual · 30 horas",
            price: "450 €/mes",
            description:
              "Modalidad de colaboración continuada para empresas que necesitan desarrollo y evolución periódica.",
          },
          {
            name: "Mantenimiento de software",
            price: "A presupuestar",
            description:
              "Revisiones, actualizaciones, mantenimiento técnico y soporte según las necesidades y características de cada aplicación.",
          },
          {
            name: "Alojamiento y servidores",
            price: "Coste aparte",
            description:
              "Los servidores, servicios cloud y recursos de infraestructura se contratan según los requisitos del proyecto.",
          },
          {
            name: "Bases de datos y almacenamiento",
            price: "Coste aparte",
            description:
              "Los servicios externos de base de datos y almacenamiento se valoran según el proveedor y los recursos necesarios.",
          },
          {
            name: "Dominios, licencias y APIs",
            price: "Coste aparte",
            description:
              "Los dominios, licencias y servicios de terceros no están incluidos en las tarifas de desarrollo, salvo acuerdo expreso.",
          },
          {
            name: "Configuración y despliegue",
            price: "A presupuestar",
            description:
              "Preparación de entornos, configuración de infraestructura, publicación y puesta en producción.",
          },
        ],

        note: "Las bolsas mensuales requieren un acuerdo sobre disponibilidad, planificación y horas no utilizadas. Los costes de infraestructura se presupuestan de forma independiente. Las nuevas funcionalidades no se consideran correcciones de defectos cubiertos por la garantía acordada.",
      },
    ],

    disclaimer:
      "Tarifas orientativas de lanzamiento, sin IVA. Precio de referencia: 15 €/hora. Las funcionalidades, horas y entregables se definen antes de contratar. Los ejemplos de hitos no son presupuestos cerrados. Alojamiento, servidores, bases de datos, licencias y servicios externos no incluidos salvo indicación expresa.",
  },
};
