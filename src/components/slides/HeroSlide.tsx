"use client";

import { easeOut, motion } from "framer-motion";
import SceneWrapper from "@/components/three/SceneWrapper";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.8, ease: [easeOut] },
  }),
};

export function HeroSlide() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <SceneWrapper />

      <div className="relative z-10 text-center px-6">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-sm md:text-base tracking-[0.3em] uppercase text-text-muted mb-4 font-display"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight font-display text-text"
        >
          Dilshod <br />
           Daminov
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-lg md:text-xl text-text-muted max-w-lg mx-auto leading-relaxed"
        >
          Building scalable web applications with React, Next.js, NestJS, TypeScript and MongoDB.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-text/15 rounded-full text-sm font-medium text-text hover:bg-text/5 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 md:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-text-muted">
            <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
