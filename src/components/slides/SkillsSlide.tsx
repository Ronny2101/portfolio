"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { skillCategories } from "@/lib/data";

export function SkillsSlide() {
  return (
    <div
      className="flex h-full items-center justify-center px-4 md:px-6"
      style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(237, 233, 254, 0.3) 0%, transparent 70%)" }}
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
          Skills
        </motion.p>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-2xl md:text-4xl font-bold font-display text-text mb-4 md:mb-10 text-center"
        >
          What I work with
        </motion.h2>

        {/* Mobile: 2x3 compact grid, Desktop: 3x2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              custom={catIndex + 2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="rounded-xl md:rounded-2xl bg-surface p-3 md:p-5 border border-text/5"
              style={{ borderLeftWidth: 3, borderLeftColor: category.border }}
            >
              <h3 className="text-xs md:text-sm font-semibold font-display text-text mb-2 md:mb-3 uppercase tracking-wider">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-1 md:gap-1.5">
                {category.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportConfig}
                    transition={{
                      delay: (catIndex + 2) * 0.15 + itemIndex * 0.03,
                      duration: 0.4,
                    }}
                    className="text-[10px] md:text-xs px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-md md:rounded-lg bg-bg text-text-muted border border-text/5 hover:border-accent/30 hover:text-accent hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
