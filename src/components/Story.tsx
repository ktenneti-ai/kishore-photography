import { story, unsplash } from "../data/site";
import { Reveal } from "./Reveal";

export function Story() {
  return (
    <section className="grid grid-cols-1 bg-peach md:grid-cols-2">
      <Reveal className="h-[60vh] md:h-auto">
        <img
          src={unsplash(story.unsplashId, 1200)}
          alt={story.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </Reveal>

      <div className="flex items-center px-6 py-16 md:px-16 md:py-24">
        <Reveal delay={0.1} className="max-w-md">
          <span aria-hidden="true" className="mb-6 block h-px w-16 bg-gold" />
          <h2 className="font-display text-4xl leading-tight text-espresso sm:text-5xl">
            {story.heading}
          </h2>
          <p className="mt-8 font-display text-2xl italic leading-snug text-coral">
            &ldquo;{story.quote}&rdquo;
          </p>
          <p className="mt-8 text-sm leading-relaxed text-espresso/70">{story.body}</p>
          <a
            href="#about"
            className="font-nav mt-10 inline-block border-b border-espresso/30 pb-1 text-xs font-medium uppercase tracking-[0.2em] text-espresso transition-colors hover:border-coral hover:text-coral"
          >
            {story.cta.toUpperCase()}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
