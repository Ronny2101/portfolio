"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, viewportConfig } from "@/lib/animations";

const facts = ["South Korea", "E-9-1 Visa", "EN Intermediate/ KR Fluent", "Devex Academy"];
const interests = ["Web Development", "System Design", "Cyber Security", "Linux & CLI", "Cloud Computing"];

export function AboutSlide() {
  return (
    <div className="flex h-full items-center justify-center px-6 md:px-16"
      style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(219, 234, 254, 0.4) 0%, transparent 70%)" }}
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-5xl w-full">
        {/* Photo */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative shrink-0"
        >
          <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-accent/20 to-purple-400/20 -rotate-3 blur-sm" />
          <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-accent-soft to-purple-100 -rotate-2" />
          <Image
            src="/images/ronny.jpg"
            alt="Dilshod Daminov"
            width={340}
            height={420}
            className="relative rounded-2xl shadow-xl object-cover w-[200px] h-[250px] md:w-[340px] md:h-[420px]"
            priority
          />
        </motion.div>

        {/* Text */}
        <div className="space-y-5 text-center md:text-left">
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-sm tracking-[0.3em] uppercase text-text-muted font-display"
          >
            About
          </motion.p>

          <motion.h2
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-text leading-tight"
          >
            I build modern web applications
            <br />
            that solve real problems.
          </motion.h2>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-base md:text-lg text-text-muted leading-relaxed max-w-lg"
          >
            I&apos;m Dilshod - Full Stack Developer focused on building sacalable web 
            applications with React, Next.js, NestJS, TypeScript and MongoDB.
            I enjoy creating clean user experiences, designing robust APIs and
            delivering production-ready solutions.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {facts.map((fact) => (
              <span
                key={fact}
                className="text-xs px-3 py-1.5 rounded-full bg-accent-soft text-accent font-medium"
              >
                {fact}
              </span>
            ))}
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="pt-2"
          >
            <p className="text-xs uppercase tracking-widest text-text-muted mb-2 font-display">Interests</p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="text-xs px-3 py-1.5 rounded-full border border-text/10 text-text-muted"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
