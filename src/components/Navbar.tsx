import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand, navLinks } from "../data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "border-b border-gold/25 bg-cream/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        <a
          href="#home"
          className={`leading-tight transition-colors ${solid ? "text-espresso" : "text-cream"}`}
        >
          <span className="font-signature block text-3xl leading-none sm:text-4xl">
            {brand.signatureName}
          </span>
          <span className="font-nav mt-1 block text-[0.65rem] tracking-[0.35em] text-gold">
            {brand.wordmarkBottom}
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-nav group relative text-sm font-medium uppercase tracking-[0.2em] transition-colors ${
                solid ? "text-espresso/80 hover:text-espresso" : "text-cream/90 hover:text-cream"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-coral transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className={`font-nav border px-5 py-2.5 text-sm font-medium uppercase tracking-[0.2em] transition-colors ${
              solid
                ? "border-gold text-espresso hover:bg-gold/15"
                : "border-cream/50 text-cream hover:border-gold hover:text-gold"
            }`}
          >
            Book a Session
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={`md:hidden ${solid ? "text-espresso" : "text-cream"}`}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col gap-6 bg-cream px-6 pb-10 pt-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-nav text-lg font-medium uppercase tracking-[0.18em] text-espresso"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="font-nav mt-2 border border-gold px-5 py-3 text-center text-sm font-medium uppercase tracking-[0.2em] text-espresso"
            >
              Book a Session
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
