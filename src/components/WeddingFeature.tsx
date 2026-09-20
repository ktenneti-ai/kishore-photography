import { featuredWedding, unsplash } from "../data/site";
import { Reveal } from "./Reveal";

export function WeddingFeature() {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-espresso">
      <img
        src={unsplash(featuredWedding.unsplashId, 1920)}
        srcSet={`${unsplash(featuredWedding.unsplashId, 900)} 900w, ${unsplash(
          featuredWedding.unsplashId,
          1920,
        )} 1920w`}
        sizes="100vw"
        alt={featuredWedding.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/15 to-transparent" />

      <Reveal className="relative z-10 px-6 pb-20 md:px-16 md:pb-28">
        <p className="font-nav text-xs font-medium uppercase tracking-[0.25em] text-gold">
          {featuredWedding.eyebrow.toUpperCase()}
        </p>
        <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl md:text-7xl">
          {featuredWedding.couple}
        </h2>
        <p className="mt-3 text-sm tracking-[0.1em] text-cream/75">{featuredWedding.location}</p>
        <a
          href="#portfolio"
          className="font-nav mt-8 inline-block border-b border-cream/40 pb-1 text-xs font-medium uppercase tracking-[0.2em] text-cream transition-colors hover:border-coral hover:text-coral"
        >
          {featuredWedding.cta.toUpperCase()} &rarr;
        </a>
      </Reveal>
    </section>
  );
}
