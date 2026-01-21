import { useState } from "react";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="relative py-12 md:py-16">
      <div className="rule-fade" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-12 md:pt-16">
        {/* Section header - editorial style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div>
            <span className="text-caption block mb-6">Servicios</span>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-medium tracking-[-0.04em] text-[#1D1D1F] leading-[0.95]">
              Lo que
              <br />
              hacemos mejor.
            </h2>
          </div>

          <p className="max-w-sm text-[15px] text-editorial leading-[1.7] tracking-[-0.01em] md:text-right">
            Creemos que una buena interacción no debe sentirse complicada. Nos
            enfocamos en soluciones bien hechas.
          </p>
        </div>

        {/* Services list - editorial layout with thin rules */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="rule-fade" />

              <div className="group py-8 md:py-10 cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {/* Left: Number + Title */}
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="text-[11px] text-[#86868B] tracking-[0.08em] font-mono min-w-[2rem]">
                      {service.number}
                    </span>

                    <h3
                      className={`text-[clamp(1.5rem,4vw,2.5rem)] font-medium tracking-[-0.03em] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                        hoveredIndex !== null && hoveredIndex !== index
                          ? "text-[#A1A1A6]"
                          : "text-[#1D1D1F]"
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
                          ? "text-[#A1A1A6]"
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
