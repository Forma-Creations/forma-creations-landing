import { useEffect, useRef } from "react";

export function About() {
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
      id="nosotros"
      ref={containerRef}
      className="relative py-32 md:py-48 grain"
    >
      <div className="rule-fade" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-20 md:pt-32">
        {/* Editorial two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Typography focused */}
          <div>
            <span data-animate className="opacity-0 text-caption block mb-8">
              El estudio
            </span>

            <h2
              data-animate
              className="opacity-0 text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.03em] text-[#000000] leading-[1.15]"
              style={{ animationDelay: "100ms" }}
            >
              Una buena web
              <br />
              no se nota,
              <br />
              <span className="italic">se siente.</span>
            </h2>

            <div
              data-animate
              className="opacity-0 mt-12 md:mt-16 space-y-6"
              style={{ animationDelay: "200ms" }}
            >
              <p className="text-[15px] md:text-[16px] text-editorial leading-[1.75] tracking-[-0.01em]">
                Somos un estudio digital que diseña y construye experiencias web
                claras, funcionales y con intención.
              </p>
              <p className="text-[15px] md:text-[16px] text-editorial leading-[1.75] tracking-[-0.01em]">
                Creemos que una buena interacción no debe sentirse complicada ni
                forzada, sino natural, fluida y pensada para personas reales.
              </p>
            </div>

            {/* Manifesto style statement */}
            <blockquote
              data-animate
              className="opacity-0 mt-16 md:mt-24 pt-8 border-t border-[rgba(0,0,0,0.08)]"
              style={{ animationDelay: "300ms" }}
            >
              <p className="text-[20px] md:text-[24px] font-medium tracking-[-0.02em] text-[#000000] leading-[1.4]">
                &ldquo;Nos enfocamos en dar forma a ideas mediante diseño limpio y
                soluciones bien hechas.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right column - Staggered imagery */}
          <div className="relative lg:pt-24">
            {/* Main image - mockup */}
            <div
              data-animate
              className="opacity-0 relative"
              style={{ animationDelay: "400ms" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden shadow-editorial">
                <img
                  src="/images/insta_post_5.png"
                  alt="Forma Creations - Damos forma a tu idea"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Caption below image */}
              <div className="mt-4 flex justify-between items-start">
                <span className="text-[11px] text-[#737371] tracking-[0.02em]">
                  Mockup de proyecto / 2024
                </span>
                <span className="text-[11px] text-[#737371] tracking-[0.02em]">
                  01
                </span>
              </div>
            </div>

            {/* Secondary smaller image - offset */}
            <div
              data-animate
              className="opacity-0 absolute -bottom-12 -left-8 w-1/2 hidden lg:block"
              style={{ animationDelay: "600ms" }}
            >
              <div className="relative aspect-[3/4] overflow-hidden shadow-editorial">
                <img
                  src="/images/insta_post_3.png"
                  alt="Forma Creations - Mobile design"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values - minimal horizontal layout */}
        <div className="mt-32 md:mt-48">
          <div className="rule-fade mb-12" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                title: "Claridad",
                desc: "Menos ruido, mas sentido. Cada elemento tiene su razon.",
              },
              {
                title: "Funcion",
                desc: "Diseno que trabaja. Experiencias que cumplen objetivos.",
              },
              {
                title: "Cuidado",
                desc: "Cada pixel cuenta. Atencion obsesiva al detalle.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                data-animate
                className="opacity-0"
                style={{ animationDelay: `${(index + 8) * 100}ms` }}
              >
                <h3 className="text-[13px] font-medium tracking-[-0.01em] text-[#000000] mb-3">
                  {value.title}
                </h3>
                <p className="text-[14px] text-editorial leading-[1.65] tracking-[-0.01em]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
