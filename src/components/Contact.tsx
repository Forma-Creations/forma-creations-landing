import { useState } from "react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <section
      id="contacto"
      className="relative py-12 md:py-16 grain"
    >
      <div className="rule-fade" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-12 md:pt-16">
        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div>
            <span className="text-caption block mb-8">
              Contacto
            </span>

            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.03em] text-[#1D1D1F] leading-[1.1]">
              Hablemos de
              <br />
              <span className="italic">tu proyecto.</span>
            </h2>

            <p className="mt-8 text-[15px] text-editorial leading-[1.7] tracking-[-0.01em] max-w-sm">
              Cuentanos sobre tu idea y juntos encontraremos la mejor manera de
              hacerla realidad.
            </p>

            {/* Contact details - minimal */}
            <div className="mt-12 space-y-6">
              <div>
                <span className="text-[11px] text-[#86868B] tracking-[0.08em] uppercase block mb-2">
                  Email
                </span>
                <a
                  href="mailto:formacreationsmx@gmail.com"
                  className="link-editorial text-[15px] text-[#0066CC] tracking-[-0.01em]"
                >
                  formacreationsmx@gmail.com
                </a>
              </div>

              <div className="rule-fade max-w-[200px]" />

              <div>
                <span className="text-[11px] text-[#86868B] tracking-[0.08em] uppercase block mb-2">
                  Instagram
                </span>
                <a
                  href="https://instagram.com/formacreations.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-editorial text-[15px] text-[#0066CC] tracking-[-0.01em]"
                >
                  @formacreations.mx
                </a>
              </div>

              <div className="rule-fade max-w-[200px]" />

              <div>
                <span className="text-[11px] text-[#86868B] tracking-[0.08em] uppercase block mb-2">
                  Respuesta
                </span>
                <span className="text-[15px] text-[#1D1D1F] tracking-[-0.01em]">
                  En menos de 24h
                </span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Name */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none ${
                    focusedField === "name" || formState.name
                      ? "text-[11px] text-[#86868B] -top-6 tracking-[0.08em] uppercase"
                      : "text-[15px] text-[#A1A1A6] top-3"
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
                  className="w-full py-3 bg-transparent border-b border-[rgba(29,29,31,0.08)] text-[#1D1D1F] text-[15px] tracking-[-0.01em] focus:outline-none focus:border-[#0066CC] transition-colors duration-500"
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none ${
                    focusedField === "email" || formState.email
                      ? "text-[11px] text-[#86868B] -top-6 tracking-[0.08em] uppercase"
                      : "text-[15px] text-[#A1A1A6] top-3"
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
                  className="w-full py-3 bg-transparent border-b border-[rgba(29,29,31,0.08)] text-[#1D1D1F] text-[15px] tracking-[-0.01em] focus:outline-none focus:border-[#0066CC] transition-colors duration-500"
                  required
                />
              </div>

              {/* Project type */}
              <div className="relative">
                <label
                  htmlFor="project"
                  className={`absolute left-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none ${
                    focusedField === "project" || formState.project
                      ? "text-[11px] text-[#86868B] -top-6 tracking-[0.08em] uppercase"
                      : "text-[15px] text-[#A1A1A6] top-3"
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
                  className="w-full py-3 bg-transparent border-b border-[rgba(29,29,31,0.08)] text-[#1D1D1F] text-[15px] tracking-[-0.01em] focus:outline-none focus:border-[#0066CC] transition-colors duration-500"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none ${
                    focusedField === "message" || formState.message
                      ? "text-[11px] text-[#86868B] -top-6 tracking-[0.08em] uppercase"
                      : "text-[15px] text-[#A1A1A6] top-3"
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
                  className="w-full py-3 bg-transparent border-b border-[rgba(29,29,31,0.08)] text-[#1D1D1F] text-[15px] tracking-[-0.01em] focus:outline-none focus:border-[#0066CC] transition-colors duration-500 resize-none"
                  required
                />
              </div>

              {/* Submit - text only CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 text-[15px] text-[#0066CC] font-medium tracking-[-0.01em]"
                >
                  <span className="relative">
                    Enviar mensaje
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0066CC] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-left group-hover:scale-x-0" />
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
