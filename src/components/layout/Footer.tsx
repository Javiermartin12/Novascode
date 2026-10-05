import Link from "next/link";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

const legal = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Cookies", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-14 border-b border-white/10 py-16 sm:py-20 lg:grid-cols-[1.5fr_0.7fr_0.8fr]">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center text-2xl font-bold tracking-[-0.04em]"
            >
              <span className="text-white">NOVAS</span>
              <span className="text-indigo-500">CODE</span>
            </Link>

            <p className="mt-6 max-w-sm text-base leading-7 text-neutral-400">
              Desarrollo web, software y aplicaciones digitales pensadas para
              ayudar a empresas y profesionales a crecer, optimizar procesos y
              convertir ideas en soluciones reales.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-neutral-400">
                Desarrollo web
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-neutral-400">
                Software
              </span>

              <span className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-neutral-400">
                Apps
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Navegación
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-neutral-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Contacto
            </p>

            <div className="mt-6 space-y-5">
              <a
                href="mailto:contacto@novascode.es"
                className="group flex items-start gap-3 text-sm text-neutral-300 transition hover:text-white"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-indigo-400" />

                <span className="break-all">contacto@novascode.es</span>
              </a>

              <a
                href="https://wa.me/34633560759"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm text-neutral-300 transition hover:text-white"
              >
                <MessageCircle size={18} className="shrink-0 text-indigo-400" />

                <span>+34 633 560 759</span>

                <ArrowUpRight
                  size={14}
                  className="text-neutral-600 transition group-hover:text-white"
                />
              </a>
            </div>

            <Link
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-indigo-500 hover:text-white"
            >
              Cuéntame tu proyecto
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 py-7 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Novascode. Todos los derechos reservados.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-neutral-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
