import { useEffect, useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      ref={containerRef}
      className="relative min-h-screen flex flex-col grain"
    >
      {/* Full width rule at top */}
      <div className="rule-fade mt-20" />

      <div className="flex-1 flex flex-col justify-center mx-auto max-w-[1400px] w-full px-6 md:px-10 pt-32 pb-20">
        {/* Editorial caption */}
        <div
          data-animate
          className="opacity-0"
          style={{ animationDelay: "200ms" }}
        >
          <span className="text-caption">Estudio digital / 2024</span>
        </div>

        {/* Typography as Architecture - Massive headline */}
        <div className="mt-8 md:mt-12">
          <h1
            data-animate
            className="opacity-0 text-[clamp(3rem,12vw,9rem)] font-medium leading-[0.9] tracking-[-0.05em] text-[#000000]"
            style={{ animationDelay: "400ms" }}
          >
            Damos
          </h1>
          <h1
            data-animate
            className="opacity-0 text-[clamp(3rem,12vw,9rem)] font-medium leading-[0.9] tracking-[-0.05em] text-[#000000] text-bleed-left md:ml-[15vw]"
            style={{ animationDelay: "500ms" }}
          >
            forma
          </h1>
          <h1
            data-animate
            className="opacity-0 text-[clamp(3rem,12vw,9rem)] font-medium leading-[0.9] tracking-[-0.05em] text-[#000000] italic"
            style={{ animationDelay: "600ms" }}
          >
            a tu idea.
          </h1>
        </div>

        {/* Body text - positioned asymmetrically */}
        <div className="mt-16 md:mt-24 md:ml-auto md:max-w-md">
          <p
            data-animate
            className="opacity-0 text-[15px] md:text-[16px] text-editorial leading-[1.7] tracking-[-0.01em]"
            style={{ animationDelay: "800ms" }}
          >
            Diseñamos y construimos experiencias web claras, funcionales y con
            intención. Una buena interacción no se nota, se siente.
          </p>

          {/* Text-only CTA with underline animation */}
          <div
            data-animate
            className="opacity-0 mt-10"
            style={{ animationDelay: "1000ms" }}
          >
            <a
              href="#contacto"
              className="link-editorial inline-flex items-center gap-3 text-[13px] text-[#000000] font-medium tracking-[-0.01em] group"
            >
              <span>Iniciar un proyecto</span>
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section with thin rule */}
      <div className="mx-auto max-w-[1400px] w-full px-6 md:px-10 pb-10">
        <div className="rule-fade mb-10" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Minimal stats - no boxes */}
          <div
            data-animate
            className="opacity-0 flex gap-16"
            style={{ animationDelay: "1200ms" }}
          >
            <div>
              <span className="block text-[11px] text-[#737371] tracking-[0.08em] uppercase mb-1">
                Proyectos
              </span>
              <span className="text-[24px] font-medium tracking-[-0.03em]">
                50+
              </span>
            </div>
            <div>
              <span className="block text-[11px] text-[#737371] tracking-[0.08em] uppercase mb-1">
                Clientes
              </span>
              <span className="text-[24px] font-medium tracking-[-0.03em]">
                30+
              </span>
            </div>
            <div className="hidden md:block">
              <span className="block text-[11px] text-[#737371] tracking-[0.08em] uppercase mb-1">
                Desde
              </span>
              <span className="text-[24px] font-medium tracking-[-0.03em]">
                2021
              </span>
            </div>
          </div>

          {/* Scroll indicator - minimal */}
          <div
            data-animate
            className="opacity-0"
            style={{ animationDelay: "1400ms" }}
          >
            <span className="text-[11px] text-[#737371] tracking-[0.08em] uppercase">
              Scroll para explorar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
