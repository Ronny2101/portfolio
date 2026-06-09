"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { projects } from "@/lib/data";

function ExternalLinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M6 3h7v7M13 3L6 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProjectsSlide() {
  return (
    <div
      className="flex h-full items-center justify-center px-4 md:px-6"
      style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(199, 210, 254, 0.3) 0%, transparent 70%)" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-sm tracking-[0.3em] uppercase text-text-muted font-display mb-2 text-center"
        >
          Projects
        </motion.p>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-2xl md:text-4xl font-bold font-display text-text mb-4 md:mb-8 text-center"
        >
          Things I&apos;ve built
        </motion.h2>

        {/* Mobile: horizontal scroll, Desktop: 2x2 grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <div className="flex md:hidden gap-3 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
          {projects.map((project, i) => (
            <div key={project.name} className="snap-center shrink-0 w-[85vw]">
              <ProjectCard project={project} index={i} compact />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  compact,
}: {
  project: (typeof projects)[number];
  index: number;
  compact?: boolean;
}) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      custom={index + 2}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      viewport={viewportConfig}
      className={`group rounded-2xl bg-surface border border-text/5 shadow-sm hover:shadow-xl hover:border-accent/20 transition-[shadow,border-color] duration-300 overflow-hidden relative block ${
        compact ? "p-4" : "p-6"
      }`}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: project.accent }}
      />
      <div className="flex items-start justify-between mb-1.5">
        <div>
          <h3 className={`font-bold font-display text-text group-hover:text-accent transition-colors ${compact ? "text-lg" : "text-xl"}`}>
            {project.name}
          </h3>
          <p className="text-xs md:text-sm text-text-muted">{project.tagline}</p>
        </div>
        <span className="text-text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all mt-1">
          <ExternalLinkIcon />
        </span>
      </div>

      <p className={`text-text-muted leading-relaxed ${compact ? "text-xs mb-3" : "text-sm mb-4"}`}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{
              backgroundColor: `${project.accent}10`,
              color: project.accent,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
