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

  /* =======================================================
   APLICACIONES MÓVILES
======================================================= */

  "aplicaciones-moviles": {
    title: "Aplicaciones móviles",

    description:
      "Desarrollamos, mejoramos y mantenemos aplicaciones móviles para Android e iOS. Trabajamos por horas o por fases, adaptando el presupuesto a las funcionalidades de cada proyecto.",

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
              "Pequeñas mejoras, correcciones de errores, ajustes visuales y tareas concretas sobre aplicaciones existentes.",
          },
          {
            name: "Pack Desarrollo · 30 horas",
            price: "450 €",
            description:
              "Desarrollo de pantallas, nuevas funcionalidades, integraciones sencillas y mejoras previamente definidas.",
          },
          {
            name: "Pack Proyecto · 100 horas",
            price: "1.500 €",
            description:
              "Bolsa de desarrollo para aplicaciones con varias funcionalidades, organizada mediante fases y entregas parciales.",
          },
          {
            name: "Pack Evolución · 300 horas",
            price: "4.500 €",
            description:
              "Proyectos de mayor alcance o evolución continuada de aplicaciones, con planificación, entregables y pagos por hitos.",
          },
        ],

        note: "Tarifa de referencia: 15 €/hora. Los paquetes representan horas de trabajo, no una aplicación completa ni funcionalidades garantizadas. Los proyectos de mayor duración podrán dividirse en fases con pagos acordados.",
      },

      /* ---------------------------------------------------
       DESARROLLO POR HITOS
    --------------------------------------------------- */

      {
        id: "hitos",
        label: "Desarrollo por hitos",

        items: [
          {
            name: "Hito 1 · Estructura y navegación",
            price: "A presupuestar",
            description:
              "Definición de requisitos, estructura de la aplicación, configuración inicial y desarrollo de las primeras pantallas.",
          },
          {
            name: "Hito 2 · Funcionalidades principales",
            price: "A presupuestar",
            description:
              "Implementación de las funciones acordadas, gestión de datos, formularios, navegación y operaciones de usuario.",
          },
          {
            name: "Hito 3 · Backend e integraciones",
            price: "A presupuestar",
            description:
              "Conexión con APIs, bases de datos, autenticación, servicios externos y otras funcionalidades necesarias.",
          },
          {
            name: "Hito 4 · Pruebas y entrega",
            price: "A presupuestar",
            description:
              "Verificación en los dispositivos acordados, corrección de defectos y preparación de la versión de entrega.",
          },
        ],

        note: "Cada hito tendrá un presupuesto calculado según las horas estimadas, las funcionalidades y los criterios de aceptación. Las entregas se revisan y validan con el cliente. Los pagos y condiciones se acuerdan antes de comenzar cada fase.",
      },

      /* ---------------------------------------------------
       PUBLICACIÓN Y SOPORTE
    --------------------------------------------------- */

      {
        id: "soporte",
        label: "Publicación y soporte",

        items: [
          {
            name: "Publicación en Google Play",
            price: "A presupuestar",
            description:
              "Preparación de la aplicación Android y asistencia en el proceso de publicación. La cuenta de desarrollador se contrata aparte.",
          },
          {
            name: "Publicación en App Store",
            price: "A presupuestar",
            description:
              "Preparación de la aplicación iOS y asistencia en el proceso de revisión y publicación de Apple. La cuenta de desarrollador se contrata aparte.",
          },
          {
            name: "Corrección de errores",
            price: "15 €/hora",
            description:
              "Diagnóstico y resolución de incidencias en aplicaciones móviles existentes, fuera de las correcciones cubiertas por la garantía acordada.",
          },
          {
            name: "Nuevas funcionalidades",
            price: "15 €/hora",
            description:
              "Ampliación de pantallas, operaciones, integraciones y funcionalidades de una aplicación.",
          },
          {
            name: "Actualizaciones Android e iOS",
            price: "15 €/hora",
            description:
              "Adaptaciones de compatibilidad, dependencias y ajustes derivados de nuevas versiones del sistema operativo.",
          },
          {
            name: "Bolsa mensual · 10 horas",
            price: "150 €/mes",
            description:
              "Desarrollo, mejoras y soporte periódico según una planificación mensual acordada.",
          },
          {
            name: "Mantenimiento de aplicaciones",
            price: "A presupuestar",
            description:
              "Supervisión, actualizaciones, soporte y evolución técnica según las características de cada aplicación.",
          },
          {
            name: "Backend, servidores y bases de datos",
            price: "Costes aparte",
            description:
              "Alojamiento, almacenamiento, infraestructura y servicios externos según las necesidades del proyecto. La configuración técnica se presupuesta cuando corresponda.",
          },
        ],

        note: "Los costes de las cuentas de desarrollador, servidores, bases de datos, licencias y APIs externas no están incluidos. La aceptación de una aplicación en las tiendas está sujeta a las políticas de Google y Apple.",
      },
    ],

    disclaimer:
      "Precios orientativos de lanzamiento, sin IVA. Tarifa de referencia: 15 €/hora. El desarrollo puede realizarse para Android e iOS mediante tecnologías multiplataforma como React Native. Los proyectos que requieran desarrollo nativo específico, funcionalidades complejas o infraestructura adicional se presupuestarán individualmente.",
  },

  /* =======================================================
   PLATAFORMAS DIGITALES
======================================================= */

  "plataformas-digitales": {
    title: "Plataformas digitales",

    description:
      "Implantamos, configuramos, personalizamos y mantenemos plataformas digitales como Moodle, WordPress, WooCommerce y Shopify, adaptándolas a las necesidades de cada proyecto.",

    sections: [
      /* ---------------------------------------------------
       IMPLANTACIÓN Y CONFIGURACIÓN
    --------------------------------------------------- */

      {
        id: "implantacion",
        label: "Implantación",

        items: [
          {
            name: "Instalación básica de WordPress",
            price: "Desde 60 €",
            description:
              "Instalación del CMS, configuración inicial, ajustes generales y preparación del entorno para comenzar a trabajar.",
          },
          {
            name: "Implantación básica de Moodle",
            price: "Desde 150 €",
            description:
              "Instalación, configuración inicial, creación de la estructura básica y puesta en funcionamiento de un campus virtual.",
          },
          {
            name: "Configuración inicial de WooCommerce",
            price: "Desde 150 €",
            description:
              "Instalación y configuración básica de la tienda, ajustes generales y preparación de las funciones esenciales de comercio electrónico.",
          },
          {
            name: "Configuración inicial de Shopify",
            price: "Desde 150 €",
            description:
              "Configuración inicial de la tienda, ajustes generales, estructura básica y preparación del entorno comercial.",
          },
          {
            name: "Implantación avanzada de plataformas",
            price: "A presupuestar",
            description:
              "Configuraciones complejas, múltiples usuarios, personalizaciones, módulos adicionales, integraciones y necesidades específicas.",
          },
        ],

        note: "Los precios corresponden a configuraciones iniciales delimitadas. No incluyen el desarrollo completo de una web, la creación de una tienda online terminada, la carga masiva de productos o cursos ni funcionalidades avanzadas. El alcance se define previamente.",
      },

      /* ---------------------------------------------------
       PERSONALIZACIÓN Y MEJORAS
    --------------------------------------------------- */

      {
        id: "mejoras",
        label: "Mejoras",

        items: [
          {
            name: "Configuración de plugins y extensiones",
            price: "Desde 15 €/hora",
            description:
              "Instalación, configuración y ajustes de plugins, módulos y extensiones compatibles con la plataforma.",
          },
          {
            name: "Personalización de temas y plantillas",
            price: "Desde 15 €/hora",
            description:
              "Modificaciones visuales, adaptación de diseños, ajustes responsive y personalización de elementos existentes.",
          },
          {
            name: "Nuevas funcionalidades",
            price: "Desde 15 €/hora",
            description:
              "Ampliación de funciones, configuración de herramientas y mejoras adaptadas a las necesidades del proyecto.",
          },
          {
            name: "Configuración avanzada de Moodle",
            price: "Desde 15 €/hora",
            description:
              "Gestión de cursos, categorías, usuarios, roles, permisos, actividades, cuestionarios, evaluaciones y seguimiento.",
          },
          {
            name: "Integraciones con servicios externos",
            price: "A presupuestar",
            description:
              "Conexión con APIs, sistemas de gestión, pasarelas de pago, plataformas externas y otras herramientas.",
          },
          {
            name: "Migración de plataformas",
            price: "A presupuestar",
            description:
              "Traslado de instalaciones, contenidos y bases de datos entre servidores o entornos, previa revisión de compatibilidad.",
          },
          {
            name: "Restauración y resolución de incidencias",
            price: "Desde 15 €/hora",
            description:
              "Diagnóstico de errores, recuperación de instalaciones, corrección de configuraciones y resolución de problemas técnicos.",
          },
        ],

        note: "Las intervenciones se presupuestan según su dificultad y el tiempo estimado. Las funcionalidades complejas podrán organizarse por fases o hitos, con entregables y pagos acordados.",
      },

      /* ---------------------------------------------------
       MANTENIMIENTO Y SOPORTE
    --------------------------------------------------- */

      {
        id: "soporte",
        label: "Soporte",

        items: [
          {
            name: "Mantenimiento de WordPress",
            price: "A presupuestar",
            description:
              "Actualizaciones, revisión de plugins, compatibilidad, copias de seguridad y mantenimiento técnico según el alcance contratado.",
          },
          {
            name: "Mantenimiento de Moodle",
            price: "A presupuestar",
            description:
              "Administración técnica, actualizaciones planificadas, revisión de funcionamiento, incidencias y soporte de la plataforma.",
          },
          {
            name: "Mantenimiento de WooCommerce",
            price: "A presupuestar",
            description:
              "Actualizaciones, revisión de extensiones, comprobaciones de funcionamiento y soporte técnico de la tienda.",
          },
          {
            name: "Soporte de Shopify",
            price: "A presupuestar",
            description:
              "Configuración, personalización, mantenimiento de aplicaciones instaladas y mejoras del entorno comercial.",
          },
          {
            name: "Administración de plataformas",
            price: "15 €/hora",
            description:
              "Gestión técnica, ajustes, resolución de incidencias y tareas administrativas acordadas.",
          },
          {
            name: "Bolsa de soporte · 10 horas",
            price: "150 €",
            description:
              "Horas destinadas a mantenimiento, configuraciones, mejoras y resolución de incidencias previamente acordadas.",
          },
          {
            name: "Bolsa de soporte · 30 horas",
            price: "450 €",
            description:
              "Soporte ampliado para plataformas que requieren actuaciones periódicas y evolución técnica.",
          },
          {
            name: "Alojamiento, dominios y licencias",
            price: "Costes aparte",
            description:
              "Hosting, dominios, suscripciones, licencias, plugins de pago y servicios externos, según el proveedor contratado.",
          },
        ],

        note: "Los planes de mantenimiento se adaptan al tipo de plataforma y a su complejidad. Las bolsas de horas y los tiempos de respuesta se acuerdan previamente. Los costes de infraestructura y servicios de terceros se presupuestan por separado.",
      },
    ],

    disclaimer:
      "Tarifas orientativas de lanzamiento, sin IVA. Los precios de implantación corresponden a configuraciones básicas, no a proyectos completos. Las personalizaciones, migraciones e integraciones se presupuestan según el alcance. Hosting, dominios, licencias, suscripciones y servicios externos no incluidos salvo acuerdo expreso.",
  },

  /* =======================================================
   AUTOMATIZACIÓN, INTEGRACIONES E IA
======================================================= */

  "automatizacion-ia": {
    title: "Automatización, integraciones e IA",

    description:
      "Automatizamos procesos, conectamos herramientas y desarrollamos chatbots y asistentes virtuales. Ofrecemos instalación, mantenimiento y soluciones adaptadas a cada negocio.",

    sections: [
      /* ---------------------------------------------------
       DESARROLLO E INSTALACIÓN
    --------------------------------------------------- */

      {
        id: "instalacion",
        label: "Desarrollo e instalación",

        items: [
          {
            name: "Automatización sencilla",
            price: "Desde 45 €",
            description:
              "Automatización de una tarea repetitiva mediante herramientas existentes o código. Por ejemplo, procesar un formulario y enviar una notificación automática. Incluye un flujo sencillo previamente definido.",
          },
          {
            name: "Integración sencilla de API",
            price: "Desde 75 €",
            description:
              "Conexión básica entre una aplicación y un servicio externo mediante su API. Incluye una integración delimitada y las pruebas de funcionamiento acordadas.",
          },
          {
            name: "Chatbot web sin IA",
            price: "Desde 75 €",
            description:
              "Chat de respuestas predefinidas para resolver preguntas frecuentes, mostrar información o dirigir al visitante hacia un formulario de contacto.",
          },
          {
            name: "Chatbot web con inteligencia artificial",
            price: "Desde 150 €",
            description:
              "Asistente básico integrado en una página web, conectado a una API de IA y configurado para responder preguntas a partir de instrucciones e información limitada de la empresa. No incluye consultas complejas a bases de datos ni integraciones adicionales.",
          },
          {
            name: "Asistente virtual con documentos",
            price: "Desde 300 €",
            description:
              "Asistente capaz de consultar un conjunto delimitado de documentos o información de la empresa para responder preguntas. Incluye una configuración inicial de recuperación de información y conexión con una API de IA.",
          },
          {
            name: "Chatbot para WhatsApp",
            price: "A presupuestar",
            description:
              "Integración de un asistente con WhatsApp Business Platform mediante las APIs y servicios necesarios. El precio depende del tipo de conversación, las funcionalidades y las integraciones.",
          },
          {
            name: "Automatización empresarial avanzada",
            price: "A presupuestar",
            description:
              "Automatizaciones con varios procesos, aplicaciones, bases de datos, sistemas de gestión o servicios externos.",
          },
          {
            name: "Integración de IA en software existente",
            price: "A presupuestar",
            description:
              "Incorporación de asistentes inteligentes, procesamiento de información o funcionalidades de IA en aplicaciones empresariales existentes.",
          },
          {
            name: "Desarrollo personalizado",
            price: "15 €/hora",
            description:
              "Desarrollo, configuración e integración de funcionalidades específicas, con estimación previa de horas y presupuesto según alcance.",
          },
        ],

        note: "Los precios desde corresponden a implementaciones básicas y delimitadas. Cada proyecto se revisa previamente para definir funcionalidades, horas de trabajo y requisitos técnicos. Las integraciones avanzadas pueden contratarse por fases o hitos.",
      },

      /* ---------------------------------------------------
       PLANES MENSUALES
    --------------------------------------------------- */

      {
        id: "mensualidades",
        label: "Planes mensuales",

        items: [
          {
            name: "Mantenimiento Esencial",
            price: "25 €/mes",
            description:
              "Comprobación periódica del funcionamiento del chatbot o automatización y hasta 30 minutos mensuales de soporte técnico o pequeños ajustes. Orientado a soluciones sencillas.",
          },
          {
            name: "Mantenimiento Profesional",
            price: "45 €/mes",
            description:
              "Comprobaciones periódicas, revisión básica de incidencias y hasta 2 horas mensuales de soporte o ajustes sobre la solución contratada.",
          },
          {
            name: "Mantenimiento Avanzado",
            price: "A presupuestar",
            description:
              "Servicio personalizado para asistentes con varias integraciones, sistemas empresariales, necesidades de supervisión ampliada o actuaciones frecuentes.",
          },
          {
            name: "Bolsa de soporte · 10 horas",
            price: "150 €",
            description:
              "Horas de soporte, mejora y mantenimiento para funcionalidades ya desarrolladas. Las actuaciones se planifican y acuerdan con el cliente.",
          },
          {
            name: "Soporte y modificaciones puntuales",
            price: "15 €/hora",
            description:
              "Corrección de incidencias, ajustes, mejoras e incorporación de nuevas funcionalidades sin contratar un plan mensual.",
          },
        ],

        note: "Los planes mensuales son opcionales y no incluyen consumo de IA, servidores ni servicios externos. Las horas incluidas no se acumulan entre meses. El soporte se presta en el horario acordado y no incluye asistencia permanente 24/7 ni desarrollo ilimitado de nuevas funcionalidades.",
      },

      /* ---------------------------------------------------
       CONSUMO Y COSTES EXTERNOS
    --------------------------------------------------- */

      {
        id: "costes",
        label: "Consumo y costes",

        items: [
          {
            name: "Consumo de inteligencia artificial",
            price: "Coste variable",
            description:
              "Las APIs de IA pueden facturar según los tokens procesados, el modelo utilizado y otras operaciones. El consumo depende de las consultas realizadas y de la configuración del asistente.",
          },
          {
            name: "Hosting y servidores",
            price: "Coste aparte",
            description:
              "Alojamiento del backend, ejecución de automatizaciones y otros recursos de infraestructura, cuando sean necesarios.",
          },
          {
            name: "WhatsApp Business Platform",
            price: "Coste aparte",
            description:
              "Los servicios oficiales de mensajería de WhatsApp pueden generar cargos según las condiciones y tarifas vigentes. Los proveedores intermediarios pueden aplicar costes adicionales.",
          },
          {
            name: "Bases de datos y almacenamiento",
            price: "Coste aparte",
            description:
              "Almacenamiento de documentos, conversaciones y otra información necesaria para el funcionamiento de la solución.",
          },
          {
            name: "Herramientas y licencias externas",
            price: "Coste aparte",
            description:
              "Suscripciones a plataformas de automatización, conectores, servicios SaaS, APIs comerciales o extensiones de pago.",
          },
          {
            name: "Configuración de controles de consumo",
            price: "A presupuestar",
            description:
              "Configuración de alertas, límites de uso, restricciones de acceso y medidas para reducir el riesgo de gastos imprevistos.",
          },
          {
            name: "Gestión de infraestructura externa",
            price: "A presupuestar",
            description:
              "Administración de los servicios utilizados por la solución, según el proveedor, la infraestructura y las necesidades de mantenimiento.",
          },
        ],

        note: "Los costes externos son independientes de los honorarios de Novascode. Siempre que sea posible, el cliente será titular de sus cuentas y pagará directamente a los proveedores. Antes de contratar se informará de los servicios necesarios, sus tarifas y las opciones disponibles para controlar el consumo.",
      },
    ],

    disclaimer:
      "Precios orientativos de lanzamiento, sin IVA. La instalación, el mantenimiento mensual y el consumo de servicios externos son conceptos diferentes. Las tarifas desde corresponden a desarrollos sencillos con alcance limitado. Los costes de IA, servidores, WhatsApp, licencias y APIs se presupuestan aparte. No se incluyen consultas ilimitadas ni disponibilidad 24/7.",
  },

  /* =======================================================
   MANTENIMIENTO Y SOPORTE TÉCNICO
======================================================= */

  "mantenimiento-soporte": {
    title: "Mantenimiento y soporte técnico",

    description:
      "Ofrecemos mantenimiento, asistencia y evolución técnica para páginas web, software, aplicaciones móviles, plataformas digitales, automatizaciones, soluciones con IA e infraestructuras.",

    sections: [
      /* ---------------------------------------------------
       PLANES DE MANTENIMIENTO
    --------------------------------------------------- */

      {
        id: "planes",
        label: "Planes de mantenimiento",

        items: [
          {
            name: "Gestión anual de dominio",
            price: "20 €/año",
            description:
              "Gestión administrativa de renovación del dominio y ajustes DNS básicos. El coste de registro o renovación del dominio se factura aparte.",
          },
          {
            name: "Mantenimiento Web Esencial",
            price: "60 €/año",
            description:
              "Para páginas corporativas sencillas. Incluye una revisión técnica anual del funcionamiento general y comprobaciones básicas previamente acordadas.",
          },
          {
            name: "Mantenimiento Web Profesional",
            price: "100 €/año",
            description:
              "Incluye el mantenimiento Web Esencial y hasta una hora anual adicional de pequeñas modificaciones o ajustes técnicos acordados.",
          },
          {
            name: "Soporte Mensual Esencial",
            price: "25 €/mes",
            description:
              "Servicio periódico con comprobación básica del funcionamiento y hasta 30 minutos mensuales de soporte o pequeños ajustes. Aplicable a sistemas sencillos tras una revisión inicial.",
          },
          {
            name: "Soporte Mensual Profesional",
            price: "45 €/mes",
            description:
              "Soporte periódico y hasta 2 horas mensuales de asistencia, correcciones o mejoras previamente acordadas. La cobertura depende del sistema contratado.",
          },
          {
            name: "Mantenimiento Avanzado",
            price: "A presupuestar",
            description:
              "Para software empresarial, aplicaciones móviles, plataformas complejas, servidores, tiendas online e integraciones que requieren actuaciones o supervisión especializadas.",
          },
          {
            name: "Bolsa de soporte · 10 horas",
            price: "150 €",
            description:
              "Horas destinadas a correcciones, asistencia, actualizaciones y mejoras técnicas en proyectos existentes.",
          },
          {
            name: "Bolsa de soporte · 30 horas",
            price: "450 €",
            description:
              "Bolsa ampliada para empresas que necesitan soporte o evolución técnica de forma continuada.",
          },
        ],

        note: "Los planes anuales de 60 € y 100 € están destinados exclusivamente a webs sencillas. Los planes mensuales pueden aplicarse a distintas tecnologías, previa valoración. Las horas mensuales no se acumulan salvo acuerdo expreso. No se incluyen cambios ilimitados, atención 24/7 ni costes de terceros. Cada contrato define sus actuaciones y tiempos de respuesta.",
      },

      /* ---------------------------------------------------
       SOPORTE POR TECNOLOGÍA
    --------------------------------------------------- */

      {
        id: "tecnologias",
        label: "Soporte por tecnología",

        items: [
          {
            name: "Páginas web y tiendas online",
            price: "Desde 15 €/hora",
            description:
              "Corrección de errores, modificaciones, actualizaciones, optimización, configuración de formularios y mejoras en webs corporativas, catálogos y comercios electrónicos.",
          },
          {
            name: "Software web y de escritorio",
            price: "15 €/hora",
            description:
              "Mantenimiento de aplicaciones empresariales, diagnóstico de incidencias, modificaciones de código, bases de datos, autenticación y nuevas funcionalidades.",
          },
          {
            name: "Aplicaciones Android e iOS",
            price: "15 €/hora",
            description:
              "Corrección de errores, actualizaciones de dependencias, mejoras, adaptaciones de compatibilidad y preparación de nuevas versiones.",
          },
          {
            name: "Moodle y campus virtuales",
            price: "15 €/hora",
            description:
              "Administración técnica, cursos, usuarios, roles, permisos, actividades, evaluaciones, calificaciones, incidencias y mantenimiento del entorno.",
          },
          {
            name: "WordPress y WooCommerce",
            price: "15 €/hora",
            description:
              "Actualizaciones, compatibilidad de plugins, configuración, revisión de errores, ajustes visuales, mejoras y mantenimiento de instalaciones existentes.",
          },
          {
            name: "Shopify",
            price: "15 €/hora",
            description:
              "Configuración, ajustes de temas, administración técnica, revisión de aplicaciones instaladas y soporte sobre la tienda.",
          },
          {
            name: "Automatizaciones e integraciones",
            price: "15 €/hora",
            description:
              "Revisión de flujos automáticos, conexiones API, errores de integración, cambios de configuración y evolución de procesos.",
          },
          {
            name: "Chatbots y asistentes con IA",
            price: "15 €/hora",
            description:
              "Revisión del funcionamiento, actualización de instrucciones y fuentes de información, corrección de errores y ajustes de integraciones.",
          },
          {
            name: "Servidores e infraestructura",
            price: "A presupuestar",
            description:
              "Configuración, administración, despliegues, DNS, bases de datos, copias de seguridad, diagnóstico y actuaciones técnicas sobre servidores.",
          },
        ],

        note: "Podemos estudiar el mantenimiento de proyectos desarrollados por Novascode o por terceros. Antes de intervenir se revisan las tecnologías, accesos, estado del sistema y alcance. Los proyectos complejos pueden requerir un presupuesto por fases o un contrato específico.",
      },

      /* ---------------------------------------------------
       SERVICIOS PUNTUALES
    --------------------------------------------------- */

      {
        id: "puntuales",
        label: "Servicios puntuales",

        items: [
          {
            name: "Diagnóstico de incidencia sencilla",
            price: "Desde 15 €",
            description:
              "Revisión inicial de un problema técnico delimitado. La resolución puede requerir un presupuesto adicional.",
          },
          {
            name: "Instalación o configuración de plugin",
            price: "Desde 15 €",
            description:
              "Instalación y configuración sencilla de plugins, extensiones o módulos compatibles. Licencias aparte.",
          },
          {
            name: "Actualización de plugins y extensiones",
            price: "Desde 15 €",
            description:
              "Actualización puntual, previa comprobación de requisitos y compatibilidad. Las reparaciones adicionales se presupuestan aparte.",
          },
          {
            name: "Configuración de dominio y DNS",
            price: "Desde 17,50 €",
            description:
              "Configuración básica de registros DNS, conexión con alojamiento, correo o servicios externos.",
          },
          {
            name: "Despliegue de página web",
            price: "Desde 30 €",
            description:
              "Publicación de una web existente en un entorno de alojamiento compatible, con requisitos previamente definidos.",
          },
          {
            name: "Migración de web o plataforma",
            price: "A presupuestar",
            description:
              "Traslado de archivos, bases de datos, configuraciones y servicios a un nuevo entorno.",
          },
          {
            name: "Configuración de servidor",
            price: "A presupuestar",
            description:
              "Preparación de infraestructura, servicios, permisos, dependencias y configuración técnica necesaria para un proyecto.",
          },
          {
            name: "Copias de seguridad y restauración",
            price: "A presupuestar",
            description:
              "Configuración de copias, recuperación de información o restauración de sistemas según la infraestructura disponible.",
          },
          {
            name: "Actualización de software",
            price: "15 €/hora",
            description:
              "Actualizaciones de dependencias, versiones, configuraciones y componentes técnicos.",
          },
          {
            name: "Administración de bases de datos",
            price: "15 €/hora",
            description:
              "Consultas, ajustes, mantenimiento, corrección de incidencias y tareas técnicas previamente delimitadas.",
          },
          {
            name: "Desarrollo y soporte personalizado",
            price: "15 €/hora",
            description:
              "Trabajos técnicos específicos, modificaciones y nuevas funcionalidades con estimación previa.",
          },
        ],

        note: "No es obligatorio contratar un mantenimiento periódico para solicitar una intervención puntual. Los precios desde corresponden a tareas sencillas. Las actuaciones complejas, urgentes o que requieran varias horas se presupuestan individualmente.",
      },
    ],

    disclaimer:
      "Tarifas orientativas de lanzamiento, sin IVA. El mantenimiento se adapta al tipo de sistema y al alcance contratado. Dominios, hosting, servidores, licencias, plugins de pago, consumo de IA y servicios externos se facturan aparte. Las correcciones cubiertas por garantías legales o contractuales aplicables no se facturan como soporte adicional.",
  },
};
