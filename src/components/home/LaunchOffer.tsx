import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

const offers = [
  {
    name: "Web Express",
    price: "100 €",
    total: "121 € IVA incluido",
    description:
      "La solución ideal para autónomos y pequeños negocios que quieren tener presencia en internet.",
    features: [
      "Página web de hasta 3 secciones",
      "Diseño moderno y responsive",
      "Botón de WhatsApp o contacto",
      "Adaptación de textos e imágenes",
      "Una ronda de revisiones",
    ],
    featured: false,
  },
  {
    name: "Web Corporativa",
    price: "400 €",
    total: "484 € IVA incluido",
    description:
      "Una web profesional para presentar tu empresa, mostrar tus servicios y recibir consultas.",
    features: [
      "Hasta 3 páginas independientes",
      "Diseño profesional y responsive",
      "Formulario de contacto",
      "SEO técnico inicial",
      "Una ronda de revisiones",
    ],
    featured: true,
  },
];

export default function LaunchOffer() {
  return (
    <section
      id="oferta-lanzamiento"
      aria-labelledby="launch-offer-title"
      className="relative overflow-hidden bg-[#F7F8FC] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-600">
            <Sparkles size={15} />
            Oferta de lanzamiento
          </div>

          <h2
            id="launch-offer-title"
            className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl"
          >
            Tu negocio merece una{" "}
            <span className="text-indigo-600">web profesional.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            En Novascode queremos ayudarte a dar el salto digital. Por eso
            lanzamos dos opciones accesibles para autónomos, emprendedores y
            pequeñas empresas de toda España.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2 lg:gap-7">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className={`flex flex-col rounded-[30px] border p-7 sm:p-9 ${
                offer.featured
                  ? "border-neutral-950 bg-neutral-950 text-white shadow-2xl"
                  : "border-neutral-200 bg-white text-neutral-950 shadow-sm"
              }`}
            >
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.17em] ${
                    offer.featured ? "text-indigo-300" : "text-indigo-600"
                  }`}
                >
                  Precio de lanzamiento
                </p>

                <h3 className="mt-5 text-2xl font-semibold">{offer.name}</h3>

                <div className="mt-6">
                  <span className="text-5xl font-semibold tracking-tight">
                    {offer.price}
                  </span>
                  <span className="ml-2 text-sm opacity-65">+ IVA</span>
                </div>

                <p className="mt-2 text-sm opacity-65">{offer.total}</p>

                <p className="mt-7 text-sm leading-7 opacity-75 sm:text-base">
                  {offer.description}
                </p>
              </div>

              <div
                className={`mt-8 flex-1 border-t pt-7 ${
                  offer.featured ? "border-white/10" : "border-neutral-200"
                }`}
              >
                <p className="mb-5 text-sm font-semibold">Qué incluye</p>

                <ul className="space-y-4">
                  {offer.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6"
                    >
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                          offer.featured
                            ? "bg-indigo-500/20 text-indigo-300"
                            : "bg-indigo-50 text-indigo-600"
                        }`}
                      >
                        <Check size={14} strokeWidth={2.4} />
                      </span>

                      <span className="opacity-85">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contacto"
                className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition ${
                  offer.featured
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "bg-neutral-950 text-white hover:bg-indigo-600"
                }`}
              >
                Solicitar presupuesto
                <ArrowUpRight size={18} />
              </Link>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-9 max-w-3xl text-center">
          <p className="text-xs leading-6 text-neutral-500 sm:text-sm">
            Precios con IVA general del 21 %. Oferta para proyectos con las
            características indicadas. El cliente facilita los contenidos
            necesarios. Dominio, alojamiento, mantenimiento y funcionalidades
            adicionales no incluidos. Los plazos se acuerdan antes de contratar.
          </p>

          <p className="mt-5 text-sm text-neutral-600">
            ¿Necesitas una aplicación, software a medida o una web con otras
            funcionalidades?{" "}
            <Link
              href="/app/contacto"
              className="font-semibold text-indigo-600 hover:underline"
            >
              Cuéntanos tu proyecto.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
