import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ClipboardList,
  MessageCircle,
  MessagesSquare,
  Sparkles,
  Workflow,
} from "lucide-react";

/* =========================================================
   SITUACIONES DE NEGOCIO
========================================================= */

const scenarios = [
  {
    id: "contacto",
    number: "01",
    icon: MessagesSquare,
    category: "Atención al cliente",
    problem: "Tus clientes te preguntan siempre lo mismo.",
    current:
      "Te escriben para consultar qué servicios ofreces, dónde trabajas, tus horarios o cómo pueden pedirte presupuesto.",
    solution:
      "Una web donde encuentren la información que necesitan y puedan contactar contigo directamente.",
    benefit: "Información clara y contacto más sencillo.",
  },
  {
    id: "reservas",
    number: "02",
    icon: CalendarDays,
    category: "Reservas y organización",
    problem: "Organizas tus citas entre llamadas y mensajes.",
    current:
      "Tienes que comprobar la disponibilidad, responder consultas y anotar cada reserva manualmente.",
    solution:
      "Un sistema de reservas que centralice tu agenda y facilite a los clientes solicitar una cita.",
    benefit: "Una agenda más organizada y fácil de gestionar.",
  },
  {
    id: "gestion",
    number: "03",
    icon: ClipboardList,
    category: "Gestión empresarial",
    problem: "Tu equipo pierde tiempo con tareas repetitivas.",
    current:
      "La información está repartida entre hojas de cálculo, correos y programas que no se comunican entre sí.",
    solution:
      "Una herramienta de gestión o automatización que reúna la información y simplifique los procesos.",
    benefit: "Menos trabajo manual y más control.",
  },
] as const;

/* =========================================================
   TARJETA DE SITUACIÓN
========================================================= */

type Scenario = (typeof scenarios)[number];

type ScenarioCardProps = {
  scenario: Scenario;
};

function ScenarioCard({ scenario }: ScenarioCardProps) {
  const Icon = scenario.icon;

  return (
    <article className="group overflow-hidden rounded-[26px] border border-[#E4E5EF] bg-white shadow-[0_20px_60px_-45px_rgba(20,20,50,0.18)] transition-all duration-300 hover:border-indigo-200 hover:shadow-[0_25px_65px_-40px_rgba(60,45,150,0.17)]">
      {/* CABECERA */}

      <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <Icon size={22} strokeWidth={1.8} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-indigo-600">
              {scenario.category}
            </p>

            <span className="text-xs font-semibold text-neutral-300">
              {scenario.number}
            </span>
          </div>

          <h3 className="mt-4 max-w-2xl text-[clamp(1.4rem,2vw,1.8rem)] font-bold leading-[1.2] tracking-[-0.04em] text-neutral-950">
            {scenario.problem}
          </h3>
        </div>
      </div>

      {/* ANTES Y POSIBLE SOLUCIÓN */}

      <div className="grid border-t border-[#E9EAF2] md:grid-cols-2">
        {/* SITUACIÓN ACTUAL */}

        <div className="bg-[#FAFAFC] p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neutral-400" />

            <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-neutral-500">
              Lo que ocurre ahora
            </p>
          </div>

          <p className="max-w-lg text-sm leading-7 text-neutral-600 sm:text-[15px]">
            {scenario.current}
          </p>
        </div>

        {/* SOLUCIÓN */}

        <div className="relative border-t border-[#E9EAF2] bg-[#F2F0FF] p-6 md:border-l md:border-t-0 sm:p-8">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white">
              <Check size={12} strokeWidth={2.5} />
            </span>

            <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-indigo-700">
              Cómo podemos ayudarte
            </p>
          </div>

          <p className="max-w-lg text-sm leading-7 text-[#37334E] sm:text-[15px]">
            {scenario.solution}
          </p>

          <p className="mt-5 inline-flex items-center gap-2 text-xs font-bold leading-6 text-indigo-700 sm:text-sm">
            <ArrowRight size={16} strokeWidth={2} />
            {scenario.benefit}
          </p>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   SOLUTIONS - NOVASCODE
========================================================= */

export default function Solutions() {
  return (
    <section
      id="soluciones"
      aria-labelledby="novascode-solutions-title"
      className="relative isolate overflow-hidden bg-[#F7F8FC] py-20 text-neutral-950 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          FONDO DECORATIVO
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-indigo-200/25 blur-[110px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-200/25 blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ===================================================
            ENCABEZADO
        ==================================================== */}

        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 text-indigo-600">
              <Sparkles size={18} strokeWidth={1.8} />

              <span className="text-xs font-bold uppercase tracking-[0.16em]">
                Aplicaciones para tu negocio
              </span>
            </div>

            <h2
              id="novascode-solutions-title"
              className="text-[clamp(2.35rem,4.5vw,4.3rem)] font-bold leading-[1.1] tracking-[-0.055em]"
            >
              Menos complicaciones.
              <br />
              <span className="text-indigo-600">
                Más tiempo para tu negocio.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:pb-2">
            <p className="text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
              A veces sabes que algo podría funcionar mejor, pero no tienes
              claro cómo solucionarlo. Aquí tienes algunos ejemplos de
              situaciones habituales en las que una herramienta digital puede
              ayudarte.
            </p>
          </div>
        </div>

        {/* ===================================================
            LISTADO DE SITUACIONES
        ==================================================== */}

        <div className="mt-12 space-y-5 sm:mt-14">
          {scenarios.map((scenario) => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
        </div>

        {/* ===================================================
            CIERRE COMERCIAL
        ==================================================== */}

        <div className="relative mt-14 overflow-hidden rounded-[28px] bg-[#141420] p-7 text-white sm:p-10 lg:mt-16 lg:p-12">
          {/* DECORACIÓN */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-indigo-600/20 blur-[90px]"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-2 text-[#B8ACFF]">
                <Workflow size={17} strokeWidth={1.8} />

                <p className="text-xs font-bold uppercase tracking-[0.16em]">
                  Tu negocio es diferente
                </p>
              </div>

              <h3 className="text-2xl font-bold leading-[1.2] tracking-[-0.04em] sm:text-3xl">
                ¿Hay algo que te gustaría hacer más fácil?
              </h3>

              <p className="mt-5 text-sm leading-8 text-[#BDBBCC] sm:text-base">
                No hace falta que tengas una idea técnica ni una solución
                definida. Explícanos qué te está dando problemas y podremos
                valorar contigo qué opciones existen.
              </p>
            </div>

            {/* ACCIONES */}

            <div className="flex w-full flex-col gap-3 sm:w-auto">
              <Link
                href="/contacto"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl bg-[#6952F5] px-7 py-4 text-sm font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#806BFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Cuéntanos qué necesitas
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <a
                href="https://wa.me/34633560759?text=Hola%2C%20tengo%20una%20idea%20para%20mejorar%20la%20gesti%C3%B3n%20de%20mi%20negocio%20y%20me%20gustar%C3%ADa%20consultarla."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 text-sm font-semibold text-[#C7BDFF] no-underline transition-colors hover:text-white"
              >
                <MessageCircle size={18} strokeWidth={1.8} />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* NOTA FINAL */}

        <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-neutral-500">
          Los ejemplos muestran posibles aplicaciones de nuestros servicios.
          Cada proyecto se estudia según las necesidades y características de la
          empresa.
        </p>
      </div>
    </section>
  );
}
