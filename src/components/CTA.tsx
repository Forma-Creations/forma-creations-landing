import { useEffect, useRef } from "react";

export function CTA() {
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
    <section ref={containerRef} className="relative py-32 md:py-48">
      <div className="rule-fade" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-20 md:pt-32">
        {/* Editorial full-width headline */}
        <div className="max-w-4xl">
          <span data-animate className="opacity-0 text-caption block mb-8">
            Siguiente paso
          </span>

          <h2
            data-animate
            className="opacity-0 text-[clamp(2.5rem,8vw,6rem)] font-medium tracking-[-0.04em] text-[#000000] leading-[0.95]"
            style={{ animationDelay: "100ms" }}
          >
            ¿Listo para dar
            <br />
            <span className="italic">forma a tu idea?</span>
          </h2>

          <p
            data-animate
            className="opacity-0 mt-10 md:mt-16 text-[15px] md:text-[17px] text-editorial leading-[1.7] tracking-[-0.01em] max-w-md"
            style={{ animationDelay: "200ms" }}
          >
            Transforma visitas en clientes con un sitio web claro y efectivo.
            Hablemos de tu proyecto.
          </p>

          {/* Text-only CTAs */}
          <div
            data-animate
            className="opacity-0 mt-12 flex flex-col sm:flex-row items-start gap-8"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#contacto"
              className="link-editorial text-[15px] text-[#000000] font-medium tracking-[-0.01em] group inline-flex items-center gap-3"
            >
              <span>Iniciar un proyecto</span>
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1">
                &rarr;
              </span>
            </a>

            <a
              href="mailto:hola@formacreations.com"
              className="link-editorial text-[15px] text-[#737371] tracking-[-0.01em]"
            >
              hola@formacreations.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
