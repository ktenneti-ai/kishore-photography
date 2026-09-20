import { galleryImages, services, unsplash } from "../data/site";
import { Reveal } from "./Reveal";

const thumbnailByService: Record<string, string> = {
  Weddings: galleryImages.find((i) => i.category === "Weddings")!.unsplashId,
  Portraits: galleryImages.find((i) => i.category === "Portraits")!.unsplashId,
  Events: galleryImages.find((i) => i.category === "Events")!.unsplashId,
  Engagements: galleryImages.find((i) => i.category === "Couples")!.unsplashId,
};

export function Services() {
  return (
    <section id="services" className="bg-cream px-6 py-24 md:px-12 md:py-32">
      <Reveal className="max-w-xl">
        <h2 className="font-display text-4xl text-espresso sm:text-5xl">Services</h2>
      </Reveal>

      <div className="mt-14 divide-y divide-gold/30 border-t border-gold/30">
        {services.map((service, i) => (
          <Reveal key={service.name} delay={i * 0.05}>
            <div className="group flex flex-col items-start gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-10">
              <div className="max-w-lg">
                <h3 className="font-display text-3xl text-espresso transition-colors group-hover:text-coral sm:text-4xl">
                  {service.name}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-espresso/60">
                  {service.description}
                </p>
              </div>
              <img
                src={unsplash(thumbnailByService[service.name], 400)}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-24 w-32 flex-shrink-0 object-cover grayscale transition-all duration-500 group-hover:grayscale-0 md:h-28 md:w-40"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
