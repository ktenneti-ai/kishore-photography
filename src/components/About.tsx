import { about } from "../data/site";
import kishorePortrait from "../assets/kishore-portrait.jpeg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 bg-sage/25 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
    >
      <Reveal className="relative isolate h-[70vh] p-6 md:h-auto md:order-2 md:p-10">
        <div
          aria-hidden="true"
          className="absolute inset-6 -z-10 -translate-x-3 translate-y-3 bg-blush/60 md:inset-10 md:-translate-x-5 md:translate-y-5"
        />
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={kishorePortrait}
            alt={about.alt}
            loading="lazy"
            className="h-full w-full origin-[54%_78%] scale-[1.4] object-cover [filter:sepia(0.3)_saturate(1.3)_contrast(1.12)_brightness(0.94)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(52,42,39,0.35)_100%)]"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-coral/10 mix-blend-multiply" />
        </div>
      </Reveal>

      <div className="flex items-center px-6 py-16 md:order-1 md:px-16 md:py-24">
        <Reveal delay={0.1} className="max-w-md">
          <p className="font-nav text-xs font-medium uppercase tracking-[0.25em] text-coral">
            {about.heading.toUpperCase()}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-espresso sm:text-5xl">
            {about.greeting}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-espresso/70">{about.body}</p>
          <a
            href="#contact"
            className="font-nav mt-10 inline-block border-b border-espresso/30 pb-1 text-xs font-medium uppercase tracking-[0.2em] text-espresso transition-colors hover:border-coral hover:text-coral"
          >
            {about.cta.toUpperCase()}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
