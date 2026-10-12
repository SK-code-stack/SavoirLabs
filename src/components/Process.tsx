"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and challenges. No assumptions - just listening and asking the right questions.",
    details: [
      "Initial consultation call",
      "Requirements gathering",
      "Technical feasibility review",
    ],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Planning",
    description:
      "Together, we define the scope, timeline, and approach. You'll know exactly what we're building and when to expect it.",
    details: [
      "Project roadmap",
      "Technical specifications",
      "Clear milestones",
    ],
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description:
      "We build in iterative cycles, keeping you involved throughout. You'll see progress weekly and provide feedback as we go.",
    details: [
      "Weekly progress updates",
      "Staging environment access",
      "Continuous refinement",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We deploy your solution, train your team, and provide ongoing support. We're here for the long run, not just the launch.",
    details: [
      "Smooth deployment",
      "Team training",
      "Ongoing maintenance",
    ],
  },
];

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: idx * 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: (idx: number) => ({
    scaleX: 1,
    transition: {
      duration: 0.6,
      delay: 0.3 + idx * 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-teal-primary/10 text-teal-primary"
          >
            How We Work
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-4xl font-semibold text-dark-navy mb-4"
          >
            A straightforward process,{" "}
            <span className="text-gradient">no surprises</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#4A5568]"
          >
            We believe in transparency at every step. Here&apos;s how we take your project from idea to reality.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                custom={idx}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="relative group"
              >
                {/* Connector line (desktop only) */}
                {idx < steps.length - 1 && (
                  <motion.div
                    custom={idx}
                    variants={lineVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    style={{ originX: 0 }}
                    className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-teal-primary/30 to-transparent -z-10"
                  />
                )}

                {/* Step content */}
                <div className="text-center lg:text-left">
                  {/* Number & Icon */}
                  <div className="flex flex-col items-center lg:items-start mb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="relative"
                    >
                      <motion.div
                        whileHover={{
                          boxShadow: "0 10px 30px -10px rgba(24, 188, 183, 0.4)",
                        }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-primary to-teal-light flex items-center justify-center mb-3"
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                          delay: 0.2 + idx * 0.1,
                        }}
                        className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-dark-navy text-white text-xs font-bold flex items-center justify-center"
                      >
                        {step.number}
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-dark-navy mb-2 group-hover:text-teal-primary transition-colors duration-200">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-1.5">
                    {step.details.map((detail, dIdx) => (
                      <motion.li
                        key={dIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 + dIdx * 0.05, duration: 0.3 }}
                        className="flex items-center justify-center lg:justify-start gap-2 text-sm text-[#718096]"
                      >
                        <span className="w-1 h-1 rounded-full bg-teal-primary" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
