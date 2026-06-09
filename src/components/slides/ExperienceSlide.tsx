"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { experience } from "@/lib/data";

export function ExperienceSlide() {
  return (
    <div
      className="flex h-full items-center justify-center px-6"
      style={{ background: "radial-gradient(ellipse at 20% 60%, rgba(209, 250, 229, 0.3) 0%, transparent 70%)" }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-sm tracking-[0.3em] uppercase text-text-muted font-display mb-2"
        >
          Experience
        </motion.p>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-2xl md:text-4xl font-bold font-display text-text mb-6 md:mb-10"
        >
          Where I&apos;ve worked
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportConfig}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-accent/15 origin-top"
          />

          {experience.map((item, i) => (
            <motion.div
              key={item.company}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="relative pl-8 md:pl-10 pb-6 md:pb-10 last:pb-0"
            >
              {/* Dot */}
              <div
                className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full ${
                  item.type === "work"
                    ? "bg-accent"
                    : "border-2 border-accent bg-surface"
                }`}
              />

              <span className="text-xs font-medium text-accent">{item.period}</span>
              <h3 className="text-lg font-bold font-display text-text mt-0.5">
                {item.title}
              </h3>
              <p className="text-sm text-text-muted">{item.company}</p>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">
                {item.description}
              </p>

              {item.tech.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-accent-soft text-accent font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
