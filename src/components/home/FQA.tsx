"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto cuesta desarrollar una web, aplicación o software?",
    answer:
      "Depende del alcance, las funcionalidades y el nivel de personalización. Antes de comenzar analizamos lo que necesitas y preparamos una propuesta clara para que sepas qué incluye el proyecto y cuánto va a costar.",
  },
  {
    question: "¿Cuánto tiempo tarda un proyecto?",
    answer:
      "Cada proyecto tiene sus propios tiempos. Una web corporativa puede estar lista en pocas semanas, mientras que una aplicación o software a medida puede requerir más tiempo. Definimos los plazos antes de empezar y trabajamos por fases para que puedas ver avances desde el principio.",
  },
  {
    question: "¿Puedo pedir cambios durante el desarrollo?",
    answer:
      "Sí. Durante el proyecto compartimos avances y revisamos contigo las partes principales. De esta forma podemos ajustar detalles antes de llegar a la versión final.",
  },
  {
    question: "¿Trabajáis con proyectos que ya están empezados?",
    answer:
      "Sí. Podemos revisar una web, aplicación o software existente, corregir errores, añadir nuevas funcionalidades, mejorar el rendimiento o continuar un desarrollo que ya esté en marcha.",
  },
  {
    question: "¿Ofrecéis mantenimiento después de publicar el proyecto?",
    answer:
      "Sí. Podemos seguir ayudándote con mantenimiento, actualizaciones, soporte técnico, nuevas funcionalidades y mejoras una vez que el proyecto esté en producción.",
  },
  {
    question: "¿Desarrolláis aplicaciones para Android y iOS?",
    answer:
      "Sí. Podemos desarrollar aplicaciones móviles para Android e iOS, adaptando la solución a las necesidades del proyecto y al tipo de usuarios que vaya a utilizarla.",
  },
  {
    question:
      "Tengo una idea, pero no sé exactamente qué necesito. ¿Podéis ayudarme?",
    answer:
      "Por supuesto. No necesitas tener la parte técnica definida. Puedes contarnos qué quieres conseguir o qué problema quieres resolver y te ayudaremos a plantear la solución más adecuada.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Preguntas frecuentes
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-5xl">
              Algunas dudas antes de empezar.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-neutral-600">
              Si tienes una pregunta diferente, cuéntanos tu caso y te
              responderemos directamente.
            </p>

            <a
              href="/contacto"
              className="mt-8 inline-flex items-center text-sm font-semibold text-neutral-950 transition hover:text-indigo-600"
            >
              Hacer una consulta →
            </a>
          </div>

          {/* Questions */}
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="text-lg font-semibold tracking-[-0.015em] text-neutral-950 sm:text-xl">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${
                        isOpen
                          ? "border-indigo-600 bg-indigo-600 text-white"
                          : "border-neutral-200 bg-white text-neutral-500"
                      }`}
                    >
                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pr-12 text-base leading-7 text-neutral-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
