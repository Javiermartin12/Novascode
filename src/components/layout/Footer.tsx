import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

/* =========================================================
   CONFIGURACIÓN
========================================================= */

const WHATSAPP_NUMBER = "34633560759";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    "Hola, he visitado la web de Novascode y me gustaría consultar un proyecto para mi negocio.",
  );

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Ofertas web", href: "/#oferta-lanzamiento" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
] as const;

const legal = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Política de cookies", href: "/cookies" },
] as const;

/* =========================================================
   FOOTER - NOVASCODE
========================================================= */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0D0D15] text-white">
      {/* FONDO DECORATIVO */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-indigo-600/[0.07] blur-[100px]" />

        <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-violet-600/[0.06] blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ===================================================
            CONTENIDO PRINCIPAL
        ==================================================== */}

        <div className="grid gap-12 border-b border-white/10 pb-14 pt-16 sm:gap-14 sm:pb-16 sm:pt-20 lg:grid-cols-[1.35fr_0.7fr_1fr] lg:gap-16">
          {/* =================================================
              MARCA
          ================================================== */}

          <div className="max-w-md">
            {/* LOGOTIPO */}

            <Link
              href="/"
              aria-label="Novascode - Ir al inicio"
              className="inline-flex items-center text-[29px] font-bold leading-none tracking-[-0.055em] no-underline transition-opacity hover:opacity-85"
            >
              <span className="text-white">NOVAS</span>

              <span className="text-[#9D8BFF]">CODE</span>
            </Link>

            {/* PROPUESTA DE VALOR */}

            <h2 className="mt-7 max-w-sm text-xl font-bold leading-[1.35] tracking-[-0.035em] text-white sm:text-2xl">
              Hacemos que la tecnología{" "}
              <span className="text-[#B4A6FF]">trabaje para tu negocio.</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-8 text-[#A9A7BB] sm:text-[15px]">
              Creamos páginas web profesionales, aplicaciones y software a
              medida para ayudarte a presentar tu negocio, organizar mejor tu
              trabajo y desarrollar nuevas ideas.
            </p>

            {/* UBICACIÓN Y ALCANCE */}

            <div className="mt-7 flex items-start gap-2.5 text-sm text-[#AAA8BC]">
              <MapPin
                size={17}
                strokeWidth={1.8}
                className="mt-1 shrink-0 text-[#A99BFF]"
              />

              <span className="leading-6">
                El Ejido, Almería.
                <br />
                Proyectos para toda España.
              </span>
            </div>
          </div>

          {/* =================================================
              NAVEGACIÓN
          ================================================== */}

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.17em] text-[#AFA1FF]">
              Explora Novascode
            </h2>

            <nav
              aria-label="Navegación del pie de página"
              className="mt-7 flex flex-col items-start gap-4"
            >
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group inline-flex min-h-6 items-center gap-2 text-sm font-medium text-[#BDBBCC] no-underline transition-colors hover:text-white"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.8}
                    className="text-[#8577C3] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* =================================================
              CONTACTO
          ================================================== */}

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.17em] text-[#AFA1FF]">
              ¿Hablamos?
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#B7B5C8]">
              ¿Tienes una idea, necesitas una página web o quieres mejorar algún
              proceso de tu negocio? Cuéntanoslo.
            </p>

            {/* WHATSAPP */}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex w-fit items-center gap-3 text-sm font-medium text-white no-underline transition-colors hover:text-[#C9C0FF]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#B7AAFF] transition-colors group-hover:border-[#8572F5]/40 group-hover:bg-indigo-500/15">
                <MessageCircle size={19} strokeWidth={1.8} />
              </span>

              <span>
                <span className="block text-xs text-[#9694A9]">
                  WhatsApp y teléfono
                </span>

                <span className="mt-1 block font-semibold">
                  +34 633 560 759
                </span>
              </span>

              <ArrowUpRight size={15} className="text-[#B7AAFF]" />
            </a>

            {/* CORREO */}

            <a
              href="mailto:contacto@novascode.es"
              className="group mt-5 flex w-fit min-w-0 items-center gap-3 text-sm font-medium text-white no-underline transition-colors hover:text-[#C9C0FF]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#B7AAFF] transition-colors group-hover:border-[#8572F5]/40 group-hover:bg-indigo-500/15">
                <Mail size={19} strokeWidth={1.8} />
              </span>

              <span className="min-w-0">
                <span className="block text-xs text-[#9694A9]">
                  Correo electrónico
                </span>

                <span className="mt-1 block break-all font-semibold">
                  contacto@novascode.es
                </span>
              </span>
            </a>

            {/* BOTÓN DE CONTACTO */}

            <Link
              href="/contacto"
              className="group mt-8 inline-flex min-h-[50px] w-full items-center justify-center gap-3 rounded-xl bg-[#6952F5] px-6 py-3.5 text-sm font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#806BFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Cuéntanos tu proyecto
              <ArrowRight
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* ===================================================
            FRANJA INFERIOR
        ==================================================== */}

        <div className="flex flex-col gap-6 py-7 lg:flex-row lg:items-center lg:justify-between">
          {/* COPYRIGHT */}

          <p className="text-xs leading-6 text-[#89879D]">
            © {new Date().getFullYear()} Novascode. Todos los derechos
            reservados.
          </p>

          {/* LEGALES */}

          <nav
            aria-label="Enlaces legales"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs leading-6 text-[#9E9CAF] no-underline transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* DETALLE FINAL */}

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#6952F5]/45 to-transparent" />
      </div>
    </footer>
  );
}
