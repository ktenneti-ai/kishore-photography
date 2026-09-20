import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/site";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setIndex((i) => (i + 1) % testimonials.length);
  const goPrev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-blush/45 px-6 py-24 md:px-12 md:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-0 select-none font-display text-[6rem] leading-none text-cream sm:text-[9rem] md:text-[12rem]"
      >
        Moments
      </span>

      <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="relative flex min-h-[220px] w-full items-center justify-center">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 text-espresso/40 transition-colors hover:text-coral"
          >
            <ChevronLeft size={22} />
          </button>

          <AnimatePresence mode="wait">
            <motion.figure
              key={current.author}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="px-10"
            >
              <blockquote className="font-display text-2xl italic leading-snug text-espresso sm:text-3xl">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <figcaption className="font-nav mt-6 text-xs font-medium uppercase tracking-[0.15em] text-coral">
                {current.author.toUpperCase()}
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-0 text-espresso/40 transition-colors hover:text-coral"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="mt-6 flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.author}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.author}`}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === index ? "bg-coral" : "bg-espresso/20"
              }`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
