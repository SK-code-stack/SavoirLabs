"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";

const projects = [
  {
    id: "proj-1",
    title: "Logistics Company Workflow Automation",
    category: "Business Automation",
    description:
      "Implemented ERPNext and custom automation tools for a logistics company processing hundreds of shipments daily.",
    challenge:
      "Manual invoice processing and inventory tracking was creating bottlenecks and errors, with staff spending hours on data entry.",
    solution:
      "We configured ERPNext to match their workflow, built custom automations for invoice processing, and integrated their existing shipping APIs.",
    results: [
      "Reduced manual data entry by 80%",
      "Invoice processing time cut from 3 days to 4 hours",
      "Real-time inventory visibility across locations",
    ],
    tech: ["ERPNext", "Python", "PostgreSQL", "REST APIs"],
  },
  {
    id: "proj-2",
    title: "E-commerce Platform Rebuild",
    category: "Custom Software",
    description:
      "Rebuilt an outdated e-commerce platform for a growing retail brand, improving performance and enabling new features.",
    challenge:
      "The existing platform was slow, difficult to update, and couldn't handle growing traffic during sales events.",
    solution:
      "We built a modern Next.js storefront with a headless CMS, optimized checkout flow, and scalable infrastructure.",
    results: [
      "Page load times improved by 60%",
      "Conversion rate increased by 25%",
      "Zero downtime during peak sales",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "proj-3",
    title: "Analytics Dashboard for SaaS Company",
    category: "Data Solutions",
    description:
      "Built a custom analytics dashboard for a SaaS company to help them understand user behavior and track key metrics.",
    challenge:
      "The team was using multiple tools and spreadsheets to track metrics, making it hard to get a unified view of their business.",
    solution:
      "We built a centralized dashboard pulling data from their product database, Stripe, and customer support tools into one view.",
    results: [
      "Single source of truth for all metrics",
      "Daily reporting time reduced from 2 hours to 5 minutes",
      "Enabled data-driven decision making",
    ],
    tech: ["React", "Python", "Metabase", "PostgreSQL"],
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

const expandVariants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      opacity: { duration: 0.2, delay: 0.1 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.2 },
      opacity: { duration: 0.1 },
    },
  },
};

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-light-gray">
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
            Our Work
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl md:text-4xl font-semibold text-dark-navy mb-4"
          >
            Projects that{" "}
            <span className="text-gradient">delivered results</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#4A5568]"
          >
            Here are some examples of how we&apos;ve helped businesses solve real problems.
          </motion.p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className={`bg-light-gray rounded-xl border overflow-hidden transition-all duration-300 ${
                expandedId === project.id
                  ? "border-teal-primary/30 shadow-lg"
                  : "border-[#E2E8F0]"
              }`}
            >
              {/* Project Header - Always Visible */}
              <motion.button
                onClick={() => toggleExpand(project.id)}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                }}
                className="w-full p-6 lg:p-8 text-left flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                    className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-teal-primary/10 text-teal-primary mb-3"
                  >
                    {project.category}
                  </motion.span>
                  <h3 className="text-xl font-semibold text-dark-navy mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#4A5568]">{project.description}</p>
                </div>
                <motion.div
                  animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 text-teal-primary"
                >
                  <span className="text-sm font-medium">
                    {expandedId === project.id ? "Hide details" : "View details"}
                  </span>
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    variants={expandVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-[#E2E8F0] pt-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Challenge & Solution */}
                        <div className="space-y-6">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <h4 className="text-sm font-semibold text-dark-navy uppercase tracking-wider mb-2">
                              The Challenge
                            </h4>
                            <p className="text-[#4A5568] text-sm leading-relaxed">
                              {project.challenge}
                            </p>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                          >
                            <h4 className="text-sm font-semibold text-dark-navy uppercase tracking-wider mb-2">
                              Our Solution
                            </h4>
                            <p className="text-[#4A5568] text-sm leading-relaxed">
                              {project.solution}
                            </p>
                          </motion.div>
                        </div>

                        {/* Results & Tech */}
                        <div className="space-y-6">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <h4 className="text-sm font-semibold text-dark-navy uppercase tracking-wider mb-3">
                              Results
                            </h4>
                            <ul className="space-y-2">
                              {project.results.map((result, rIdx) => (
                                <motion.li
                                  key={rIdx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.25 + rIdx * 0.05 }}
                                  className="flex items-start gap-2 text-sm text-[#4A5568]"
                                >
                                  <CheckCircle className="w-4 h-4 text-teal-primary flex-shrink-0 mt-0.5" />
                                  {result}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                          >
                            <h4 className="text-sm font-semibold text-dark-navy uppercase tracking-wider mb-3">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, tIdx) => (
                                <motion.span
                                  key={tIdx}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.4 + tIdx * 0.03 }}
                                  whileHover={{ scale: 1.05, borderColor: "#18BCB7" }}
                                  className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-[#E2E8F0] text-[#4A5568] transition-colors"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-[#4A5568] mb-4">
            Have a similar project in mind?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-medium bg-gradient-to-r from-teal-primary to-teal-light hover:shadow-teal transition-shadow"
          >
            <span className="text-white">Let&apos;s discuss your project</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
