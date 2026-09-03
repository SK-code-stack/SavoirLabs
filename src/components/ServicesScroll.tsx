"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Database,
  Sparkles,
  Zap,
} from "lucide-react";

const services = [
  {
    id: "01",
    category: "AI & Automation",
    icon: BrainCircuit,
    title: "Enterprise AI & ERP Automation",
    subtitle: "Custom ERPNext & Neural Workflow Engines",
    description:
      "We design intelligent business automation platforms, real-time analytics engines, and tailored ERP workflows that optimize company resources.",
    features: ["ERPNext Customization", "Predictive Analytics", "Automated Workflows", "NLP Data Processing"],
    metrics: "99.8% Automation Accuracy",
    accentColor: "text-purple-400",
    badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    borderColor: "border-purple-500/30 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]",
    iconBg: "bg-purple-950/40 text-purple-400 border-purple-500/40 group-hover:bg-purple-600 group-hover:text-white",
    gradient: "from-purple-900/20 via-[#111118] to-[#08080d]",
  },
  {
    id: "02",
    category: "Full-Stack",
    icon: Code2,
    title: "Custom Full-Stack Engineering",
    subtitle: "Next.js, Python & High-Scale Systems",
    description:
      "Precision-crafted web & mobile applications designed with ultra-responsive UX, modern component architecture, and lightning-fast APIs.",
    features: ["Next.js App Router", "Python / FastAPI Backends", "GraphQL / REST APIs", "WebSockets Realtime"],
    metrics: "< 0.2s Avg Response",
    accentColor: "text-sky-400",
    badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    borderColor: "border-sky-500/30 hover:border-sky-500 hover:shadow-[0_0_40px_rgba(56,189,248,0.35)]",
    iconBg: "bg-sky-950/40 text-sky-400 border-sky-500/40 group-hover:bg-sky-600 group-hover:text-white",
    gradient: "from-sky-900/20 via-[#111118] to-[#08080d]",
  },
  {
    id: "03",
    category: "Data Engine",
    icon: Database,
    title: "Data Engineering & Analytics",
    subtitle: "BigData Pipelines & Real-time BI",
    description:
      "Architecting robust data warehouses, streaming ETL pipelines, and executive dashboards for data-driven strategic decisions.",
    features: ["ETL Pipelines", "PostgreSQL / Snowflake", "Executive Dashboards", "Stream Processing"],
    metrics: "50,000+ Events / Sec",
    accentColor: "text-emerald-400",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    borderColor: "border-emerald-500/30 hover:border-emerald-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]",
    iconBg: "bg-emerald-950/40 text-emerald-400 border-emerald-500/40 group-hover:bg-emerald-600 group-hover:text-white",
    gradient: "from-emerald-900/20 via-[#111118] to-[#08080d]",
  },
];

const filterTabs = ["All Capabilities", "AI & Automation", "Full-Stack", "Data Engine"];

export default function ServicesScroll() {
  const [activeTab, setActiveTab] = useState("All Capabilities");

  const filteredServices = activeTab === "All Capabilities"
    ? services
    : services.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-[#050505] text-white relative border-b border-zinc-900/80 overflow-hidden">
      {/* Subtle Background Radial Beams */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#13131d] border border-[#ff0033]/30 text-xs font-mono text-[#ff0033] uppercase tracking-widest mb-3 font-bold">
            <Sparkles className="w-4 h-4" />
            Capabilities & Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            Core <span className="text-stroke-red">Engineering</span> Capabilities
          </h2>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 interactive ${
                  activeTab === tab
                    ? "bg-[#ff0033] text-white shadow-[0_0_20px_rgba(255,0,51,0.5)]"
                    : "bg-[#0e0e16] text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative rounded-2xl bg-[#0c0c12] border p-7 flex flex-col justify-between overflow-hidden interactive smooth-card gpu-accelerated hover:-translate-y-1.5 ${service.borderColor}`}
                >
                  {/* Card Background Color Glow Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Top Card Header */}
                  <div>
                    <div className="relative z-10 flex items-start justify-between mb-6">
                      <div className={`w-13 h-13 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-md ${service.iconBg}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`font-mono text-2xl font-black transition-colors ${service.accentColor} opacity-70`}>
                        {service.id}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <span className={`text-[11px] font-mono uppercase tracking-wider block mb-1 font-bold ${service.accentColor}`}>
                        {service.subtitle}
                      </span>
                      <h3 className="text-xl font-extrabold text-white mb-2.5 group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-5">
                        {service.description}
                      </p>

                      {/* Feature Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.features.map((feat, fIdx) => (
                          <span
                            key={fIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#13131c] text-zinc-300 border border-zinc-800/80 group-hover:border-zinc-700 transition-colors"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Metrics Bar */}
                  <div className="relative z-10 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <span className={`text-xs font-mono flex items-center gap-1.5 font-semibold ${service.accentColor}`}>
                      <Zap className="w-3.5 h-3.5" />
                      {service.metrics}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
