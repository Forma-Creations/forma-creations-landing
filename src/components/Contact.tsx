import { useEffect, useRef, useState } from "react";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <section
      id="contacto"
      ref={containerRef}
      className="relative py-32 md:py-48 grain"
    >
      <div className="rule-fade" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-20 md:pt-32">
        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left - Info */}
          <div>
            <span data-animate className="opacity-0 text-caption block mb-8">
              Contacto
            </span>

            <h2
              data-animate
              className="opacity-0 text-[clamp(2rem,4vw,3rem)] font-medium tracking-[-0.03em] text-[#000000] leading-[1.1]"
              style={{ animationDelay: "100ms" }}
            >
              Hablemos de
              <br />
              <span className="italic">tu proyecto.</span>
            </h2>

            <p
              data-animate
              className="opacity-0 mt-8 text-[15px] text-editorial leading-[1.7] tracking-[-0.01em] max-w-sm"
              style={{ animationDelay: "200ms" }}
            >
              Cuentanos sobre tu idea y juntos encontraremos la mejor manera de
              hacerla realidad.
            </p>

            {/* Contact details - minimal */}
            <div
              data-animate
              className="opacity-0 mt-16 space-y-6"
              style={{ animationDelay: "300ms" }}
            >
              <div>
                <span className="text-[11px] text-[#737371] tracking-[0.08em] uppercase block mb-2">
                  Email
                </span>
                <a
                  href="mailto:hola@formacreations.com"
                  className="link-editorial text-[15px] text-[#000000] tracking-[-0.01em]"
                >
                  hola@formacreations.com
                </a>
              </div>

              <div className="rule-fade max-w-[200px]" />

              <div>
                <span className="text-[11px] text-[#737371] tracking-[0.08em] uppercase block mb-2">
                  Instagram
                </span>
                <a
                  href="https://instagram.com/formacreations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-editorial text-[15px] text-[#000000] tracking-[-0.01em]"
                >
                  @formacreations
                </a>
              </div>

              <div className="rule-fade max-w-[200px]" />

              <div>
                <span className="text-[11px] text-[#737371] tracking-[0.08em] uppercase block mb-2">
                  Respuesta
                </span>
                <span className="text-[15px] text-[#000000] tracking-[-0.01em]">
                  En menos de 24h
                </span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div
            data-animate
            className="opacity-0"
            style={{ animationDelay: "400ms" }}
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Name */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none ${
                    focusedField === "name" || formState.name
                      ? "text-[11px] text-[#737371] -top-6 tracking-[0.08em] uppercase"
                      : "text-[15px] text-[#A3A3A1] top-3"
                  }`}
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full py-3 bg-transparent border-b border-[rgba(0,0,0,0.08)] text-[#000000] text-[15px] tracking-[-0.01em] focus:outline-none focus:border-[#000000] transition-colors duration-500"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none ${
                    focusedField === "email" || formState.email
                      ? "text-[11px] text-[#737371] -top-6 tracking-[0.08em] uppercase"
                      : "text-[15px] text-[#A3A3A1] top-3"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full py-3 bg-transparent border-b border-[rgba(0,0,0,0.08)] text-[#000000] text-[15px] tracking-[-0.01em] focus:outline-none focus:border-[#000000] transition-colors duration-500"
                  required
                />
              </div>

              {/* Project type */}
              <div className="relative">
                <label
                  htmlFor="project"
                  className={`absolute left-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none ${
                    focusedField === "project" || formState.project
                      ? "text-[11px] text-[#737371] -top-6 tracking-[0.08em] uppercase"
                      : "text-[15px] text-[#A3A3A1] top-3"
                  }`}
                >
                  Tipo de proyecto
                </label>
                <input
                  type="text"
                  id="project"
                  name="project"
                  value={formState.project}
                  onChange={(e) =>
                    setFormState({ ...formState, project: e.target.value })
                  }
                  onFocus={() => setFocusedField("project")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full py-3 bg-transparent border-b border-[rgba(0,0,0,0.08)] text-[#000000] text-[15px] tracking-[-0.01em] focus:outline-none focus:border-[#000000] transition-colors duration-500"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none ${
                    focusedField === "message" || formState.message
                      ? "text-[11px] text-[#737371] -top-6 tracking-[0.08em] uppercase"
                      : "text-[15px] text-[#A3A3A1] top-3"
                  }`}
                >
                  Cuentanos sobre tu proyecto
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full py-3 bg-transparent border-b border-[rgba(0,0,0,0.08)] text-[#000000] text-[15px] tracking-[-0.01em] focus:outline-none focus:border-[#000000] transition-colors duration-500 resize-none"
                  required
                />
              </div>

              {/* Submit - text only CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 text-[15px] text-[#000000] font-medium tracking-[-0.01em]"
                >
                  <span className="relative">
                    Enviar mensaje
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#000000] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-left group-hover:scale-x-0" />
                  </span>
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1">
                    &rarr;
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
