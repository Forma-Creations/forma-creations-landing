export function CTA() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="rule-fade" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-12 md:pt-16">
        {/* Editorial full-width headline */}
        <div className="max-w-4xl">
          <span className="text-caption block mb-8">
            Siguiente paso
          </span>

          <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-semibold tracking-[-0.04em] text-[#1D1D1F] leading-[0.95]">
            ¿Listo para dar
            <br />
            <span className="italic">forma a tu idea?</span>
          </h2>

          <p className="mt-10 md:mt-12 text-[15px] md:text-[17px] text-editorial leading-[1.7] tracking-[-0.01em] max-w-md">
            Transforma visitas en clientes con un sitio web claro y efectivo.
            Hablemos de tu proyecto.
          </p>

          {/* Text-only CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-8">
            <a
              href="#contacto"
              className="link-editorial text-[15px] text-[#0066CC] font-medium tracking-[-0.01em] group inline-flex items-center gap-3"
            >
              <span>Iniciar un proyecto</span>
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1">
                &rarr;
              </span>
            </a>

            <a
              href="mailto:formacreationsmx@gmail.com"
              className="link-editorial text-[15px] text-[#86868B] tracking-[-0.01em]"
            >
              formacreationsmx@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
