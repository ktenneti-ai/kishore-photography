import { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "../data/site";
import { unsplash } from "../data/site";

interface LightboxProps {
  images: GalleryImage[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, activeIndex, onClose, onNavigate }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const image = images[activeIndex];

  const goNext = useCallback(
    () => onNavigate((activeIndex + 1) % images.length),
    [activeIndex, images.length, onNavigate],
  );
  const goPrev = useCallback(
    () => onNavigate((activeIndex - 1 + images.length) % images.length),
    [activeIndex, images.length, onNavigate],
  );

  useEffect(() => {
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, goNext, goPrev]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${image.title}, ${image.category}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/97 px-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute right-5 top-5 text-cream/80 transition-colors hover:text-gold"
        >
          <X size={28} />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous photograph"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/70 transition-colors hover:text-gold md:left-8"
        >
          <ChevronLeft size={36} />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next photograph"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/70 transition-colors hover:text-gold md:right-8"
        >
          <ChevronRight size={36} />
        </button>

        <motion.figure
          key={image.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex max-h-[85vh] max-w-5xl flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={unsplash(image.unsplashId, 1600)}
            alt={image.alt}
            className="max-h-[75vh] w-auto object-contain"
          />
          <figcaption className="mt-4 text-center">
            <p className="font-nav text-xs uppercase tracking-[0.2em] text-gold">{image.category.toUpperCase()}</p>
            <p className="mt-1 font-display text-xl text-cream">{image.title}</p>
            <p className="text-xs text-cream/50">{image.location}</p>
          </figcaption>
        </motion.figure>
      </motion.div>
    </AnimatePresence>
  );
}
