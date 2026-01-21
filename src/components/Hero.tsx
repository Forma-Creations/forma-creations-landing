export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col grain">
      {/* Full width rule at top */}
      <div className="rule-fade mt-20" />

      <div className="flex-1 flex flex-col justify-center mx-auto max-w-[1400px] w-full px-6 md:px-10 pt-20 pb-12">
        {/* Editorial caption */}
        <div>
          <span className="text-caption">Estudio digital / 2026</span>
        </div>

        {/* Typography as Architecture - Massive headline */}
        <div className="mt-8 md:mt-12">
          <h1 className="text-[clamp(3rem,12vw,9rem)] font-medium leading-[0.9] tracking-[-0.05em] text-[#1D1D1F]">
            Damos
          </h1>
          <h1 className="text-[clamp(3rem,12vw,9rem)] font-medium leading-[0.9] tracking-[-0.05em] text-[#1D1D1F] text-bleed-left md:ml-[15vw]">
            forma
          </h1>
          <h1 className="text-[clamp(3rem,12vw,9rem)] font-medium leading-[0.9] tracking-[-0.05em] text-[#1D1D1F] italic">
            a tu idea.
          </h1>
        </div>

        {/* Body text - positioned asymmetrically */}
        <div className="mt-12 md:mt-16 md:ml-auto md:max-w-md">
          <p className="text-[15px] md:text-[16px] text-editorial leading-[1.7] tracking-[-0.01em]">
            Diseñamos y construimos experiencias web claras, funcionales y con
            intención. Una buena interacción no se nota, se siente.
          </p>

          {/* Text-only CTA with underline animation */}
          <div className="mt-8">
            <a
              href="#contacto"
              className="link-editorial inline-flex items-center gap-3 text-[13px] text-[#0066CC] font-medium tracking-[-0.01em] group"
            >
              <span>Iniciar un proyecto</span>
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
