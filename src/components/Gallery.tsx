import { useMemo, useState } from "react";
import { categories, galleryImages, unsplash, type Category } from "../data/site";
import { Reveal } from "./Reveal";
import { Lightbox } from "./Lightbox";

const imageSizes = "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="portfolio" className="relative overflow-hidden bg-cream px-6 py-24 md:px-12 md:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-0 select-none font-display text-[6rem] leading-none text-peach/70 sm:text-[9rem] md:-top-10 md:text-[12rem]"
      >
        Stories
      </span>

      <Reveal className="relative mx-auto max-w-3xl text-left md:text-left">
        <h2 className="font-display text-5xl text-espresso sm:text-6xl">Selected Stories</h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-espresso/70">
          A collection of moments, emotions, and stories captured through my lens.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="relative mt-10 flex flex-wrap gap-x-6 gap-y-2">
        {(["All", ...categories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`font-nav text-sm font-medium uppercase tracking-[0.15em] transition-colors ${
              activeCategory === cat ? "text-coral" : "text-espresso/40 hover:text-espresso"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </Reveal>

      <div className="relative mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {filtered.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="group relative aspect-square overflow-hidden text-left"
          >
            <img
              src={unsplash(img.unsplashId, 900)}
              srcSet={`${unsplash(img.unsplashId, 450)} 450w, ${unsplash(img.unsplashId, 900)} 900w, ${unsplash(
                img.unsplashId,
                1400,
              )} 1400w`}
              sizes={imageSizes}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-espresso/85 via-espresso/0 to-espresso/0 p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
              <p className="font-nav text-xs uppercase tracking-[0.15em] text-gold">{img.category.toUpperCase()}</p>
              <p className="font-display text-xl text-cream">{img.title}</p>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
