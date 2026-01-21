import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Diseño UI/UX",
    description:
      "Interfaces que conectan con personas reales. Cada pixel pensado, cada interacción con propósito.",
  },
  {
    number: "02",
    title: "Desarrollo Web",
    description:
      "Código limpio y arquitectura sólida. Next.js, React, y las mejores tecnologías del ecosistema.",
  },
  {
    number: "03",
    title: "Identidad Digital",
    description:
      "Sistemas visuales coherentes que comunican esencia. Marcas que se entienden y perduran.",
  },
  {
    number: "04",
    title: "Estrategia Digital",
    description:
      "De la idea al producto. Acompañamos cada fase con visión clara y ejecución precisa.",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <section id="servicios" ref={containerRef} className="relative py-32 md:py-48">
      {/* Full width rule */}
      <div className="rule-fade" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-20 md:pt-32">
        {/* Section header - editorial style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32">
          <div>
            <span data-animate className="opacity-0 text-caption block mb-6">
              Servicios
            </span>
            <h2
              data-animate
              className="opacity-0 text-[clamp(2.5rem,6vw,4.5rem)] font-medium tracking-[-0.04em] text-[#000000] leading-[0.95]"
              style={{ animationDelay: "100ms" }}
            >
              Lo que
              <br />
              hacemos mejor.
            </h2>
          </div>

          <p
            data-animate
            className="opacity-0 max-w-sm text-[15px] text-editorial leading-[1.7] tracking-[-0.01em] md:text-right"
            style={{ animationDelay: "200ms" }}
          >
            Creemos que una buena interacción no debe sentirse complicada. Nos
            enfocamos en soluciones bien hechas.
          </p>
        </div>

        {/* Services list - editorial layout with thin rules */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-animate
              className="opacity-0"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="rule-fade" />

              <div className="group py-10 md:py-14 cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {/* Left: Number + Title */}
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="text-[11px] text-[#737371] tracking-[0.08em] font-mono min-w-[2rem]">
                      {service.number}
                    </span>

                    <h3
                      className={`text-[clamp(1.5rem,4vw,2.5rem)] font-medium tracking-[-0.03em] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                        hoveredIndex !== null && hoveredIndex !== index
                          ? "text-[#A3A3A1]"
                          : "text-[#000000]"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Right: Description + Arrow */}
                  <div className="md:max-w-sm flex items-start gap-8 md:ml-auto">
                    <p
                      className={`text-[15px] leading-[1.65] tracking-[-0.01em] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                        hoveredIndex !== null && hoveredIndex !== index
                          ? "text-[#A3A3A1]"
                          : "text-editorial"
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Arrow - appears on hover */}
                    <span
                      className={`hidden md:block text-[20px] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                        hoveredIndex === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2"
                      }`}
                    >
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Final rule */}
          <div className="rule-fade" />
        </div>
      </div>
    </section>
  );
}
