import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    phase: "Descubrimiento",
    title: "Entender",
    description:
      "Escuchamos tu idea, analizamos el contexto y definimos juntos el camino hacia el resultado.",
  },
  {
    number: "02",
    phase: "Concepto",
    title: "Diseñar",
    description:
      "Wireframes, prototipos, sistemas visuales. Iteramos hasta que cada detalle tenga sentido.",
  },
  {
    number: "03",
    phase: "Producción",
    title: "Construir",
    description:
      "Código limpio, arquitectura sólida. Transformamos diseño en experiencia funcional.",
  },
  {
    number: "04",
    phase: "Entrega",
    title: "Lanzar",
    description: "Publicamos y acompañamos. Tu proyecto vive, crece, evoluciona.",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-liquid-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="proceso"
      ref={containerRef}
      className="relative py-32 md:py-48 bg-[#000000] text-[#F9F9F7]"
    >
      {/* Grain texture on dark */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Editorial header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 md:mb-40">
          <div>
            <span
              data-animate
              className="opacity-0 text-[11px] text-[#737371] tracking-[0.08em] uppercase block mb-6"
            >
              Proceso
            </span>
            <h2
              data-animate
              className="opacity-0 text-[clamp(2.5rem,6vw,4.5rem)] font-medium tracking-[-0.04em] leading-[0.95]"
              style={{ animationDelay: "100ms" }}
            >
              De la idea
              <br />
              <span className="italic">al resultado.</span>
            </h2>
          </div>

          {/* Current step indicator - large */}
          <div
            data-animate
            className="opacity-0"
            style={{ animationDelay: "200ms" }}
          >
            <span className="text-[clamp(4rem,10vw,8rem)] font-medium tracking-[-0.05em] text-[#262626] leading-none">
              {steps[activeStep].number}
            </span>
          </div>
        </div>

        {/* Steps - horizontal layout on desktop */}
        <div className="grid md:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              data-animate
              className="opacity-0 group relative cursor-pointer"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
              onMouseEnter={() => setActiveStep(index)}
            >
              {/* Top border */}
              <div
                className={`h-[0.5px] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  activeStep === index ? "bg-[#F9F9F7]" : "bg-[#333333]"
                }`}
              />

              <div className="py-10 md:py-12 md:pr-8">
                {/* Phase label */}
                <span
                  className={`text-[11px] tracking-[0.08em] uppercase transition-colors duration-500 ${
                    activeStep === index ? "text-[#F9F9F7]" : "text-[#525252]"
                  }`}
                >
                  {step.phase}
                </span>

                {/* Title */}
                <h3
                  className={`mt-4 text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-0.03em] transition-colors duration-500 ${
                    activeStep === index ? "text-[#F9F9F7]" : "text-[#525252]"
                  }`}
                >
                  {step.title}
                </h3>

                {/* Description - reveals on active */}
                <div
                  className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    activeStep === index
                      ? "max-h-32 opacity-100 mt-4"
                      : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <p className="text-[14px] text-[#A3A3A1] leading-[1.65] tracking-[-0.01em]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-20 md:mt-32">
          <div className="h-[0.5px] bg-[#262626]" />

          <div className="pt-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <p
              data-animate
              className="opacity-0 text-[14px] text-[#737371] tracking-[-0.01em] max-w-md"
              style={{ animationDelay: "700ms" }}
            >
              Cada proyecto es un proceso de colaboración. Trabajamos juntos
              desde el primer concepto hasta el lanzamiento final.
            </p>

            {/* Progress indicator */}
            <div
              data-animate
              className="opacity-0 flex items-center gap-3"
              style={{ animationDelay: "800ms" }}
            >
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`h-[2px] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    activeStep === index
                      ? "w-8 bg-[#F9F9F7]"
                      : "w-4 bg-[#404040]"
                  }`}
                  aria-label={`Paso ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
