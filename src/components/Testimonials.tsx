"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Building2, CheckCircle } from "lucide-react";

const testimonials = [
  {
    quote:
      "SavoirLabs completely revolutionized our ERP infrastructure. Their custom automation reduced our transaction processing time from 4 hours to under 30 seconds.",
    author: "Marcus Vance",
    role: "VP of Engineering, Apex Global",
    avatar: "MV",
    rating: 5,
  },
  {
    quote:
      "The engineering depth of the SavoirLabs team is world-class. They delivered our high-throughput AI fraud engine 3 weeks ahead of deadline with zero production bugs.",
    author: "Elena Rostova",
    role: "VP of Enterprise Engineering",
    company: "FinTech Prime",
    rating: 5,
  },
  {
    quote:
      "Their scroll-smooth UX design and microservice architecture set a new standard for our digital product portfolio. Highly recommended tech partner.",
    author: "Tariq Zaman",
    role: "Director of Digital Transformation",
    company: "NexGen Dynamics",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#07070b] text-white relative overflow-hidden" style={{ "--section-bg": "#07070b" } as React.CSSProperties}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#ff0033] uppercase tracking-widest block mb-2 font-bold">
            Executive Endorsements
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            Client <span className="text-stroke-red">Impact & Trust</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl bg-[#0d0d16] border border-[#ff0033]/30 p-8 flex flex-col justify-between hover:border-[#ff0033] hover:shadow-[0_0_35px_rgba(255,0,51,0.3)] interactive smooth-card gpu-accelerated hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center gap-1 mb-6 text-[#ff0033]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ff0033]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#ff0033]/40 mb-4" />

                <p className="text-zinc-300 text-sm font-light leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white">{t.author}</h4>
                  <span className="text-xs font-mono text-[#ff0033] block">{t.role}</span>
                  <span className="text-xs text-zinc-500 font-mono block">{t.company}</span>
                </div>
                <CheckCircle className="w-5 h-5 text-[#ff0033]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
