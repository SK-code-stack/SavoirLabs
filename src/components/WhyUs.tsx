"use client";

import { motion } from "framer-motion";
import { Users, FileCode, Headphones, Shield } from "lucide-react";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";

const reasons = [
  {
    icon: Users,
    title: "Engineers, Not Salespeople",
    description:
      "You'll work directly with the engineers building your software. No account managers, no communication barriers - just technical experts who understand your requirements.",
  },
  {
    icon: FileCode,
    title: "You Own Everything",
    description:
      "Every line of code, all documentation, and complete infrastructure access belongs to you. No vendor lock-in, no proprietary systems - it's your software.",
  },
  {
    icon: Headphones,
    title: "Long-term Partnership",
    description:
      "We don't disappear after launch. We provide ongoing support, maintenance, and improvements because we're invested in your success, not just the project.",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description:
      "Clear proposals with fixed pricing or time-based rates - your choice. No hidden fees, no surprise invoices. You know exactly what you're paying for.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: idx * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-light-gray">
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
            Why SavoirLabs
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-4xl font-semibold text-dark-navy mb-4"
          >
            What makes us{" "}
            <span className="text-gradient">different</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#4A5568]"
          >
            We&apos;re a small team by design. That means you get senior engineers on your project, not juniors learning on your dime.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                whileHover={{
                  y: -4,
                  borderColor: "#18BCB7",
                  boxShadow: "0 15px 30px -10px rgba(24, 188, 183, 0.12)",
                }}
                transition={{ duration: 0.2 }}
                className="flex gap-5 p-6 lg:p-8 bg-white rounded-xl border border-[#E2E8F0] group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex-shrink-0"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal-primary/10 flex items-center justify-center group-hover:bg-teal-primary/20 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-teal-primary" />
                  </div>
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-dark-navy mb-2 group-hover:text-teal-primary transition-colors duration-200">
                    {reason.title}
                  </h3>
                  <p className="text-[#4A5568] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
