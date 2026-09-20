import { brand, instagramStrip, unsplash } from "../data/site";
import { Reveal } from "./Reveal";
import { InstagramIcon } from "./SocialIcons";

export function InstagramStrip() {
  return (
    <section className="bg-cream px-6 py-20 md:px-12">
      <Reveal className="mb-8 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
        <h2 className="font-display text-3xl text-espresso sm:text-4xl">Follow the Journey</h2>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="font-nav flex items-center gap-2 text-sm text-espresso/60 transition-colors hover:text-coral"
        >
          <InstagramIcon width={16} height={16} />
          {brand.instagramHandle}
        </a>
      </Reveal>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
        {instagramStrip.map((id) => (
          <a
            key={id}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group aspect-square overflow-hidden"
          >
            <img
              src={unsplash(id, 400)}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
