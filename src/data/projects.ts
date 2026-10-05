export const projects = [
  {
    slug: "huellapp",
    title: "Huellapp",
    category: "Aplicación móvil",
    sector: "Agricultura · Medioambiente",
    description:
      "Aplicación móvil desarrollada para facilitar el cálculo y seguimiento de indicadores ambientales asociados a la producción agrícola.",
    technologies: ["React Native", "Node.js", "AWS"],
    highlights: [
      "Aplicación para Android e iOS",
      "Backend y lógica de negocio",
      "Infraestructura cloud en AWS",
      "Publicación en producción",
    ],
    type: "mobile" as const,
    images: {
      mobileOne: "/images/projects/huellapp/huellapp1.png",
      mobileTwo: "/images/projects/huellapp/huellapp2.png",
      mobileThree: "/images/projects/huellapp/huellapp3.png",
      mobileFour: "/images/projects/huellapp/huellapp4.png",
    },
  },
  {
    slug: "timply",
    title: "Timply",
    category: "Software de gestión",
    sector: "Gestión empresarial",
    description:
      "Plataforma web para gestionar empleados, empresas, control horario y diferentes procesos internos desde un único entorno.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "AWS"],
    highlights: [
      "Gestión de empleados",
      "Control horario",
      "Autenticación y áreas privadas",
      "Paneles e información de gestión",
    ],
    type: "software" as const,
    images: {
      desktop: "/images/projects/timply/desktop1.png",
      desktopTwo: "/images/projects/timply/desktop2.png",
      mobileOne: "/images/projects/timply/mobile1.png",
    },
  },
  {
    slug: "serresfilm",
    title: "Serresfilm",
    category: "Web corporativa",
    sector: "Sector agrícola",
    description:
      "Web corporativa y catálogo digital desarrollados para presentar los productos, soluciones y actividad de una empresa especializada en el sector de los invernaderos.",
    technologies: ["Next.js", "TypeScript", "Cloudinary"],
    highlights: [
      "Diseño responsive",
      "Catálogo de productos",
      "Gestión de recursos multimedia",
      "Web publicada en producción",
    ],
    type: "web" as const,
    publicUrl: "https://www.serresfilminvernaderos.com/",
    images: {
      desktop: "/images/projects/serresfilm/desktop1.webp",
      mobileOne: "/images/projects/serresfilm/mobile1.png",
      mobileTwo: "/images/projects/serresfilm/mobile2.png",
    },
  },
];
