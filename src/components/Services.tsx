"use client";

import { motion } from "framer-motion";
import { Cog, Code2, Database, Cloud, ArrowRight } from "lucide-react";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";

const services = [
  {
    icon: Cog,
    title: "Business Automation",
    description:
      "We configure and customize ERPNext, build workflow automations, and connect your existing tools so your team spends less time on repetitive tasks.",
    features: [
      "ERPNext implementation and customization",
      "Workflow automation with Python",
      "System integrations (APIs, webhooks)",
      "Process optimization consulting",
    ],
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "From web applications to internal tools, we build software tailored to your business needs using modern technologies that scale with you.",
    features: [
      "Web applications (Next.js, React)",
      "Backend systems (Python, Node.js)",
      "APIs and integrations",
      "Mobile-responsive design",
    ],
  },
  {
    icon: Database,
    title: "AI & Data Solutions",
    description:
      "We help you make sense of your data with custom dashboards, analytics pipelines, and AI-powered features that give you real insights.",
    features: [
      "Custom analytics dashboards",
      "Data pipeline development",
      "AI/ML feature integration",
      "Business intelligence tools",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Whether you need to set up, migrate, or optimize your cloud infrastructure, we design systems that are reliable, secure, and cost-effective.",
    features: [
      "Cloud setup and migration",
      "Infrastructure as code",
      "DevOps and CI/CD pipelines",
      "Monitoring and maintenance",
    ],
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

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-light-gray">
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
            What We Do
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-4xl font-semibold text-dark-navy mb-4"
          >
            Services built around{" "}
            <span className="text-gradient">your needs</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#4A5568]"
          >
            We focus on solving real business problems with practical solutions.
            No buzzwords, just results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px -15px rgba(24, 188, 183, 0.15)",
                  borderColor: "#18BCB7",
                }}
                transition={{ duration: 0.2 }}
                className="group bg-white rounded-xl border border-[#E2E8F0] p-6 lg:p-8"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-primary to-teal-light flex items-center justify-center mb-5"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-dark-navy mb-3 group-hover:text-teal-primary transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#4A5568] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <motion.li
                      key={fIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + fIdx * 0.05, duration: 0.3 }}
                      className="flex items-start gap-2 text-sm text-[#4A5568]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-primary mt-2 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Learn more link */}
                <motion.a
                  href="#contact"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-primary"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
