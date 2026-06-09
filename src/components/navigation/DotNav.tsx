"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SLIDES } from "@/lib/constants";

interface DotNavProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (index: number) => void;
}

export function DotNav({ currentSlide, totalSlides, onNavigate }: DotNavProps) {
  return (
    <>
      {/* Desktop: vertical dots on right */}
      <nav
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-3"
        aria-label="Slide navigation"
      >
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            aria-label={`Go to ${SLIDES[i]?.label ?? `slide ${i + 1}`}`}
            aria-current={currentSlide === i ? "true" : undefined}
            className="group relative flex items-center gap-3 h-8"
          >
            <AnimatePresence>
              {currentSlide === i && (
                <motion.span
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs font-medium text-accent whitespace-nowrap"
                >
                  {SLIDES[i]?.label}
                </motion.span>
              )}
            </AnimatePresence>

            {currentSlide !== i && (
              <span className="absolute right-10 whitespace-nowrap rounded bg-text px-2 py-1 text-xs text-surface opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {SLIDES[i]?.label}
              </span>
            )}

            <motion.div
              className="rounded-full"
              animate={{
                width: currentSlide === i ? 10 : 6,
                height: currentSlide === i ? 10 : 6,
                backgroundColor:
                  currentSlide === i
                    ? "var(--color-accent)"
                    : "rgba(26, 26, 26, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          </button>
        ))}
      </nav>

      {/* Mobile: horizontal dots at bottom */}
      <nav
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex md:hidden gap-2 items-center"
        aria-label="Slide navigation"
      >
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            aria-label={`Go to ${SLIDES[i]?.label ?? `slide ${i + 1}`}`}
            className="p-1"
          >
            <motion.div
              className="rounded-full"
              animate={{
                width: currentSlide === i ? 20 : 6,
                height: 6,
                backgroundColor:
                  currentSlide === i
                    ? "var(--color-accent)"
                    : "rgba(26, 26, 26, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          </button>
        ))}
      </nav>
    </>
  );
}
