import { motion, useReducedMotion } from "framer-motion";
import { brand, galleryImages, unsplash } from "../data/site";

const heroImage = galleryImages[0];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-espresso">
      <div className="absolute inset-0">
        <img
          src={unsplash(heroImage.unsplashId, 1920)}
          srcSet={`${unsplash(heroImage.unsplashId, 900)} 900w, ${unsplash(
            heroImage.unsplashId,
            1600,
          )} 1600w, ${unsplash(heroImage.unsplashId, 2400)} 2400w`}
          sizes="100vw"
          alt={heroImage.alt}
          className={`h-full w-full object-cover object-[50%_20%] ${reduceMotion ? "" : "animate-ken-burns"}`}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-espresso/15 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 pb-24 md:px-12 md:pb-32">
        <div className="max-w-2xl">
          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-nav mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gold"
          >
            {brand.name}
          </motion.p>

          <motion.h1
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display leading-[1.05] text-cream"
          >
            <span className="block text-6xl sm:text-7xl md:text-8xl">Stories.</span>
            <span className="font-signature block text-7xl leading-none text-gold sm:text-8xl md:text-9xl">
              Emotions.
            </span>
            <span className="block text-6xl sm:text-7xl md:text-8xl">Moments.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-md text-lg leading-relaxed text-cream/85"
          >
            Timeless photography for the moments you'll never want to forget.
          </motion.p>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#portfolio"
              className="font-nav bg-coral px-8 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-cream transition-colors hover:bg-coral/85"
            >
              VIEW PORTFOLIO
            </a>
            <a
              href="#contact"
              className="font-nav border border-gold px-8 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold/15"
            >
              BOOK A SESSION
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 right-6 z-10 flex flex-col items-center gap-2 text-cream/80 md:right-12"
      >
        <span className="font-nav text-xs uppercase tracking-[0.2em]">Scroll to Explore</span>
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gold/70"
        />
      </motion.div>
    </section>
  );
}
