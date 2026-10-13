
"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  const features = [
    "Custom software development",
    "ERPNext implementation",
    "Workflow automation",
  ];

  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-white px-4 pb-16 pt-24 sm:px-6 sm:pb-20 lg:px-8">

      {/* Three.js animated background */}
      <HeroBackground />

      {/* Overlay keeps the text readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/20 via-white/40 to-white/70"
      />

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full bg-teal-primary/10 px-3 py-1.5"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-primary"
            />

            <span className="text-xs font-medium text-teal-primary sm:text-sm">
              Software Engineering & Automation
            </span>
          </motion.div>

          {/* Original headline */}
          <motion.h1
            variants={fadeInUp}
            className="mb-6 max-w-5xl font-display text-3xl font-semibold leading-tight tracking-tight text-dark-navy sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Software that runs your business,{" "}
            <span className="text-gradient">
              built by engineers
            </span>{" "}
            who understand it
          </motion.h1>

          {/* Original description */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#4A5568] sm:text-lg md:text-xl"
          >
            We build custom software and automate workflows for growing
            businesses. No templates. No offshore teams. Just experienced
            engineers working directly with you.
          </motion.p>

          {/* Original features */}
          <motion.ul
            variants={fadeInUp}
            className="mb-9 flex w-full flex-col items-center justify-center gap-x-6 gap-y-3 sm:mb-10 sm:flex-row sm:flex-wrap"
          >
            {features.map((feature, idx) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + idx * 0.1,
                  duration: 0.3,
                }}
                className="flex items-center justify-center gap-2 text-[#4A5568]"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-teal-primary" />

                <span className="text-sm font-medium sm:text-base">
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Original CTA buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-primary to-teal-light px-6 py-3.5 text-base font-medium text-white transition-shadow duration-200 hover:shadow-teal sm:w-auto"
            >
              Start a Project
              <ArrowRight className="h-5 w-5" />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.02, borderColor: "#18BCB7" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] px-6 py-3.5 text-base font-medium text-dark-navy transition-colors duration-200 hover:text-teal-primary sm:w-auto"
            >
              View Our Services
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-16 bg-gradient-to-t from-white/80 to-transparent sm:h-24"
      />
    </section>
  );
}
