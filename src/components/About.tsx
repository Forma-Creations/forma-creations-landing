export function About() {
  return (
    <section
      id="nosotros"
      className="relative py-12 md:py-16 grain"
    >
      <div className="rule-fade" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-12 md:pt-16">
        {/* Single column layout */}
        <div className="max-w-3xl">
          <span className="text-caption block mb-8">
            El estudio
          </span>

          <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.03em] text-[#1D1D1F] leading-[1.15]">
            Una buena web
            <br />
            no se nota,
            <br />
            <span className="italic">se siente.</span>
          </h2>

          <div className="mt-12 md:mt-16 space-y-6">
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
          <blockquote className="mt-16 md:mt-20 pt-8 border-t border-[rgba(29,29,31,0.08)]">
            <p className="text-[20px] md:text-[24px] font-medium tracking-[-0.02em] text-[#1D1D1F] leading-[1.4]">
              &ldquo;Nos enfocamos en dar forma a ideas mediante diseño limpio y
              soluciones bien hechas.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Values - minimal horizontal layout */}
        <div className="mt-20 md:mt-24">
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
            ].map((value) => (
              <div key={value.title}>
                <h3 className="text-[13px] font-medium tracking-[-0.01em] text-[#1D1D1F] mb-3">
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
