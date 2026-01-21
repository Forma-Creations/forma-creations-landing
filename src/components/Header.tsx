import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Estudio", href: "#nosotros" },
  ];

  return (
    <>
      {/* Floating Menu - Only appears on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-4">
          <nav
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? "glass-editorial px-6 py-3" : ""
            }`}
          >
            {/* Logo - minimal */}
            <a href="/" className="relative z-10">
              <img
                src="/logo.svg"
                alt="Forma Creations"
                className="h-6 w-auto"
              />
            </a>

            {/* Desktop Navigation - text only, no containers */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="link-editorial text-[13px] text-[#6E6E73] tracking-[-0.01em] transition-colors duration-300 hover:text-[#0066CC]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA - text only with underline */}
            <div className="hidden md:block">
              <a
                href="#contacto"
                className="link-editorial text-[13px] text-[#0066CC] font-medium tracking-[-0.01em]"
              >
                Contacto
              </a>
            </div>

            {/* Mobile Menu Button - ultra-thin hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-10 p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-center gap-[5px]">
                <span
                  className={`w-full h-[0.5px] bg-current transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
                    isMobileMenuOpen ? "rotate-45 translate-y-[2.75px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-[0.5px] bg-current transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-center ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-[2.75px]" : ""
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu - Full screen editorial */}
      <div
        className={`fixed inset-0 z-40 bg-[#F9F9F7] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-6">
          <nav className="flex flex-col">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-5 text-[11px] tracking-[0.1em] uppercase text-[#6E6E73] border-b border-[rgba(29,29,31,0.08)] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] hover:text-[#0066CC] ${
                  isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${150 + index * 75}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pb-12">
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-[11px] tracking-[0.1em] uppercase text-[#0066CC] font-medium transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              Iniciar proyecto
            </a>

            <div className="rule mt-8 mb-8" />

            <p
              className={`text-[11px] tracking-[0.02em] text-[#86868B] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "550ms" }}
            >
              Diseño digital con intención
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
