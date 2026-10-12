"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";

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
    <section className="py-20 lg:py-28 bg-dark-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-white/10 text-teal-light"
          >
            Client Feedback
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-4xl font-semibold text-white"
          >
            What our clients say
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              whileHover={{
                y: -4,
                boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.3)",
                borderColor: "rgba(46, 230, 214, 0.3)",
              }}
              transition={{ duration: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.2 + idx * 0.1,
                }}
              >
                <Quote className="w-10 h-10 text-teal-primary/50 mb-6" />
              </motion.div>

              {/* Quote Text */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="text-white/90 text-lg leading-relaxed mb-6"
              >
                &ldquo;{testimonial.quote}&rdquo;
              </motion.p>

              {/* Attribution */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="pt-4 border-t border-white/10"
              >
                <p className="font-medium text-white">{testimonial.author}</p>
                <p className="text-sm text-white/60">{testimonial.company}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
