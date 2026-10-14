"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";
import GlassCard from "./ui/GlassCard";

const testimonials = [
  {
    quote:
      "SavoirLabs helped us automate our inventory and invoicing processes. What used to take our team days now happens automatically. They understood our business from day one.",
    author: "Operations Director",
    company: "Logistics Company",
  },
  {
    quote:
      "Working with SavoirLabs felt like having an in-house team. They were responsive, explained everything clearly, and delivered exactly what we needed on time.",
    author: "Founder",
    company: "E-commerce Startup",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: idx * 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-teal-primary/10 text-teal-primary"
          >
            Client Feedback
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-4xl font-semibold text-dark-navy"
          >
            What our clients say
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <GlassCard className="p-6 lg:p-8 h-full">
                {/* Quote Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br from-teal-primary/20 to-teal-light/10 flex items-center justify-center"
                >
                  <Quote className="w-7 h-7 text-teal-primary" />
                </motion.div>

                {/* Quote Text */}
                <p className="text-dark-navy/90 text-base leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-3 pt-4 border-t border-dark-navy/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-primary/20 to-teal-light/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-teal-primary">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark-navy">{testimonial.author}</p>
                    <p className="text-xs text-dark-navy/60">{testimonial.company}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
