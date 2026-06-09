"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SLIDES } from "@/lib/constants";

export function useSlideNavigation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);
  const totalSlides = SLIDES.length;

  const goToSlide = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, totalSlides - 1));
    slideRefs.current[clamped]?.scrollIntoView({ behavior: "smooth" });
  }, [totalSlides]);

  const goNext = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const goPrev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  // IntersectionObserver to track current slide
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    slideRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setCurrentSlide(index);
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  // Touch gestures (swipe up/down)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startY = 0;
    let startX = 0;

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const deltaY = startY - e.changedTouches[0].clientY;
      const deltaX = Math.abs(startX - e.changedTouches[0].clientX);

      // Only trigger on vertical swipes (not horizontal)
      if (Math.abs(deltaY) > 50 && deltaX < Math.abs(deltaY)) {
        if (deltaY > 0) goNext();
        else goPrev();
      }
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [goNext, goPrev]);

  const setSlideRef = useCallback((index: number) => (el: HTMLElement | null) => {
    slideRefs.current[index] = el;
  }, []);

  return { currentSlide, totalSlides, goToSlide, goNext, goPrev, containerRef, setSlideRef };
}
