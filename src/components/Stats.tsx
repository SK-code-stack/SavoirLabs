"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Clock, Award } from "lucide-react";
import AnimatedCounter from "./ui/AnimatedCounter";
import GlassCard from "./ui/GlassCard";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    icon: Briefcase,
  },
  {
    value: 30,
    suffix: "+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    icon: Award,
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support Available",
    icon: Clock,
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-teal-primary/10 text-teal-primary">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-dark-navy">
            Numbers that speak for themselves
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="p-6 lg:p-8 text-center h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-teal-primary/20 to-teal-light/10 flex items-center justify-center"
                  >
                    <Icon className="w-7 h-7 text-teal-primary" />
                  </motion.div>

                  {/* Counter */}
                  <div className="text-4xl md:text-5xl font-bold text-dark-navy mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-dark-navy/60 text-sm font-medium">
                    {stat.label}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
