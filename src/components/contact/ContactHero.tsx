import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute right-[-120px] top-[-150px] h-[420px] w-[420px] rounded-full bg-indigo-100/70 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition hover:text-indigo-600"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          {/* Main text */}
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600">
              Contacto
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.045em] text-neutral-950 sm:text-6xl lg:text-7xl">
              Cuéntame qué tienes{" "}
              <span className="text-indigo-600">en mente.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
              Una nueva web, una aplicación, software para tu empresa o una idea
              que todavía no sabes cómo desarrollar. Cuéntanos qué necesitas y
              veremos juntos la mejor forma de convertirlo en una solución real.
            </p>
          </div>

          {/* Quick contact */}
          <div className="lg:pb-1">
            <p className="text-sm font-medium text-neutral-950">
              También puedes contactar directamente
            </p>

            <div className="mt-5 space-y-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/34633560759"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-indigo-200 hover:bg-neutral-50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <MessageCircle size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium text-neutral-400">
                    WhatsApp
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-neutral-950">
                    +34 633 560 759
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contacto@novascode.es"
                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-indigo-200 hover:bg-neutral-50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <Mail size={19} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium text-neutral-400">Email</p>

                  <p className="mt-0.5 break-all text-sm font-semibold text-neutral-950">
                    contacto@novascode.es
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+34633560759"
                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-indigo-200 hover:bg-neutral-50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-xs font-medium text-neutral-400">
                    Teléfono
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-neutral-950">
                    +34 633 560 759
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-neutral-200 pt-7">
          <p className="max-w-2xl text-sm leading-6 text-neutral-500">
            No necesitas tener definida la parte técnica. Puedes contarnos
            simplemente qué quieres conseguir y te ayudaremos a plantear la
            solución.
          </p>
        </div>
      </div>
    </section>
  );
}
