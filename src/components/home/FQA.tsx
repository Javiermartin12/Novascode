"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

/* =========================================================
   PREGUNTAS FRECUENTES - NOVASCODE
========================================================= */

const faqs = [
  {
    question: "¿De verdad puedo tener mi página web desde 100 €?",
    answer:
      "Sí. Nuestra oferta de lanzamiento Web Express comienza en 100 € + IVA (121 € en total) e incluye una web profesional de hasta 3 páginas, adaptada a móviles y con opciones de contacto. Si necesitas una web más completa, tenemos una modalidad desde 400 € + IVA. Antes de empezar te explicamos exactamente qué incluye cada opción.",
  },
  {
    question: "¿Qué diferencia hay entre la web de 100 € y la de 400 €?",
    answer:
      "La diferencia está en el alcance del proyecto. La opción de 100 € está pensada para negocios que necesitan una presencia online sencilla, con hasta 3 páginas. La de 400 € permite desarrollar una web más completa, con hasta 5 páginas, formulario de contacto y una presentación más amplia de la empresa. Si tu negocio necesita algo intermedio, también podemos preparar un presupuesto personalizado.",
  },
  {
    question: "¿Tendré que pagar algo más además del precio de la web?",
    answer:
      "El desarrollo tiene el precio acordado antes de comenzar. El dominio y el alojamiento web tienen tarifas propias de sus proveedores, que se abonan aparte. El mantenimiento recurrente, las renovaciones y las funcionalidades adicionales también se presupuestan por separado. Te explicaremos estos costes antes de contratar para que puedas decidir con toda la información.",
  },
  {
    question: "¿Tengo que preparar los textos y las fotografías?",
    answer:
      "Lo habitual es que nos facilites la información de tu negocio, tus servicios y las imágenes que quieras utilizar. Nosotros nos encargamos de adaptarlos al diseño de la web dentro del alcance contratado. Si necesitas ayuda adicional para preparar los contenidos, también podemos valorarlo contigo.",
  },
  {
    question: "¿Cuánto tardará en estar lista mi página web?",
    answer:
      "Depende del número de páginas, los contenidos disponibles y las funcionalidades que necesites. Antes de comenzar acordaremos un plazo de entrega realista. Así sabrás qué vamos a desarrollar y cuándo estará previsto tenerlo preparado.",
  },
  {
    question: "¿Podré pedir cambios antes de publicar la web?",
    answer:
      "Sí. Las dos ofertas de lanzamiento incluyen una ronda de revisiones para ajustar los detalles acordados antes de la entrega. Si después necesitas nuevas páginas, funcionalidades o modificaciones más amplias, podemos prepararte un presupuesto adicional.",
  },
  {
    question: "¿Mi página web aparecerá en Google?",
    answer:
      "Preparamos la configuración técnica inicial para facilitar que los buscadores puedan encontrar e interpretar tu web. También podemos configurar herramientas como Google Search Console. La aparición y la posición en los resultados dependen de Google y de otros factores, por lo que no prometemos primeras posiciones ni resultados inmediatos.",
  },
  {
    question: "¿Qué ocurre si necesito ayuda después de publicar mi web?",
    answer:
      "Seguimos disponibles para valorar nuevas necesidades, resolver incidencias y ofrecer servicios de mantenimiento, soporte o mejoras. Estos servicios se acuerdan por separado según las características de tu proyecto. Así puedes elegir el nivel de acompañamiento que necesitas.",
  },
  {
    question: "¿Podéis mejorar una página web que ya tengo?",
    answer:
      "Sí. Podemos revisar tu web actual y estudiar qué conviene mejorar: el diseño, la experiencia de uso, el rendimiento o alguna funcionalidad. Primero evaluamos su estado para recomendarte si es mejor actualizar lo que tienes o plantear una nueva versión.",
  },
  {
    question: "¿Y si necesito una aplicación o software para mi empresa?",
    answer:
      "También desarrollamos aplicaciones, herramientas de gestión, tiendas online, sistemas de reservas y automatizaciones. No necesitas saber qué tecnología utilizar. Explícanos qué problema quieres resolver o qué te gustaría conseguir y estudiaremos contigo una solución adecuada.",
  },
] as const;

/* =========================================================
   ENLACES DE CONTACTO
========================================================= */

const whatsappMessage =
  "Hola, he estado viendo la web de Novascode y tengo algunas dudas sobre un proyecto. ¿Podemos hablar?";

const whatsappUrl =
  "https://wa.me/34633560759?text=" + encodeURIComponent(whatsappMessage);

/* =========================================================
   COMPONENTE FAQ
========================================================= */

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="preguntas-frecuentes"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
          {/* =================================================
              COLUMNA IZQUIERDA
          ================================================== */}

          <div className="lg:sticky lg:top-28 lg:self-start">
            {/* ETIQUETA */}

            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-600" />

              <p className="text-xs font-bold uppercase tracking-[0.17em] text-indigo-600">
                Preguntas frecuentes
              </p>
            </div>

            {/* TITULAR */}

            <h2
              id="faq-title"
              className="mt-6 max-w-xl text-[clamp(2.4rem,4vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.055em] text-neutral-950"
            >
              Todo claro.
              <br />
              <span className="text-indigo-600">Desde el principio.</span>
            </h2>

            {/* DESCRIPCIÓN */}

            <p className="mt-6 max-w-md text-base leading-8 text-neutral-600 sm:text-lg">
              Queremos que sepas qué estás contratando, cuánto va a costar y
              cómo vamos a trabajar contigo. Aquí resolvemos algunas de las
              dudas más habituales.
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-neutral-600 sm:text-base">
              Y si tu caso es diferente, hablamos directamente y buscamos la
              mejor opción para tu negocio.
            </p>

            {/* ACCIONES */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contacto"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#161620] px-6 py-4 text-sm font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#6952F5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 sm:w-auto"
              >
                Resolver mis dudas
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-4 text-sm font-semibold text-neutral-800 no-underline transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 sm:w-auto"
              >
                <MessageCircle size={18} strokeWidth={1.8} />
                WhatsApp
              </a>
            </div>

            {/* MENSAJE DE CONFIANZA */}

            <div className="mt-10 max-w-md rounded-2xl border border-indigo-100 bg-[#F7F6FF] p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600">
                  <ShieldCheck size={20} strokeWidth={1.8} />
                </span>

                <div>
                  <p className="text-sm font-bold text-neutral-950">
                    Sin sorpresas en el presupuesto
                  </p>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Antes de empezar, concretamos qué incluye tu proyecto, su
                    precio y los plazos acordados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              COLUMNA DERECHA - ACORDEÓN
          ================================================== */}

          <div className="min-w-0">
            <div className="overflow-hidden rounded-[24px] border border-[#E5E6EF] bg-white sm:rounded-[28px]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                const questionId = `faq-question-${index}`;
                const answerId = `faq-answer-${index}`;

                return (
                  <div
                    key={faq.question}
                    className={index > 0 ? "border-t border-[#E9EAF1]" : ""}
                  >
                    {/* PREGUNTA */}

                    <h3>
                      <button
                        id={questionId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className={`group flex w-full items-center justify-between gap-5 px-5 py-6 text-left transition-colors duration-200 hover:bg-[#FAFAFD] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-indigo-600 sm:gap-7 sm:px-7 sm:py-7 ${
                          isOpen ? "bg-[#FAF9FF]" : "bg-white"
                        }`}
                      >
                        <span className="flex min-w-0 items-start gap-3 sm:gap-4">
                          <span
                            className={`mt-1 shrink-0 text-xs font-bold tabular-nums ${
                              isOpen ? "text-indigo-600" : "text-neutral-300"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span
                            className={`text-base font-semibold leading-7 tracking-[-0.02em] transition-colors sm:text-lg ${
                              isOpen
                                ? "text-indigo-700"
                                : "text-neutral-950 group-hover:text-indigo-700"
                            }`}
                          >
                            {faq.question}
                          </span>
                        </span>

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                            isOpen
                              ? "border-indigo-600 bg-indigo-600 text-white"
                              : "border-neutral-200 bg-white text-neutral-500 group-hover:border-indigo-200 group-hover:text-indigo-600"
                          }`}
                        >
                          <ChevronDown
                            size={17}
                            strokeWidth={2}
                            className={`transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>
                    </h3>

                    {/* RESPUESTA */}

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      hidden={!isOpen}
                      className="bg-[#FAF9FF]"
                    >
                      <div className="px-5 pb-7 sm:px-7">
                        <div className="pl-0 sm:pl-8">
                          <p className="max-w-2xl text-sm leading-8 text-neutral-600 sm:text-[15px]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                CIERRE DE LAS FAQ
            ================================================== */}

            <div className="mt-6 rounded-2xl border border-[#E7E7F0] bg-[#F7F8FC] p-6 sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-md">
                  <div className="flex items-center gap-2 text-indigo-600">
                    <Check size={17} strokeWidth={2.2} />

                    <p className="text-sm font-bold">
                      ¿Te queda alguna pregunta?
                    </p>
                  </div>

                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    Cuéntanos qué necesitas y te ayudamos a entender las
                    opciones antes de decidir.
                  </p>
                </div>

                <Link
                  href="/contacto"
                  className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 text-sm font-bold text-indigo-600 no-underline transition-colors hover:text-indigo-800"
                >
                  Hacer una consulta
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
