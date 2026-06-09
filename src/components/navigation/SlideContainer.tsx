"use client";

import { type ReactNode } from "react";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { DotNav } from "./DotNav";
import { SLIDES } from "@/lib/constants";

interface SlideContainerProps {
  children: ReactNode[];
}

export function SlideContainer({ children }: SlideContainerProps) {
  const { currentSlide, totalSlides, goToSlide, containerRef, setSlideRef } =
    useSlideNavigation();

  return (
    <>
      <DotNav
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNavigate={goToSlide}
      />
      <div
        ref={containerRef}
        className="h-dvh overflow-y-auto"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {children.map((child, i) => (
          <section
            key={SLIDES[i]?.id ?? i}
            ref={setSlideRef(i)}
            id={SLIDES[i]?.id}
            className="h-dvh relative"
            style={{ scrollSnapAlign: "start" }}
          >
            {child}
          </section>
        ))}
      </div>
    </>
  );
}
