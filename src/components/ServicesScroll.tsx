"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Code2,
  ShieldCheck,
  BrainCircuit,
  Database,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
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
    gradient: "from-[#ff0033]/25 via-[#111118] to-[#08080d]",
    codeSample: "doc.workflow_state = 'Approved_By_AI'",
  },
  {
    id: "02",
    category: "Cloud Native",
    icon: Cloud,
    title: "Cloud-Native Infrastructure",
    subtitle: "AWS, Kubernetes & High-Uptime Architecture",
    description:
      "Zero-downtime microservice deployments, serverless cloud architectures, and automated CI/CD pipelines built for enterprise resilience.",
    features: ["Kubernetes Orchestration", "Multi-Cloud Strategy", "Serverless Architecture", "DevOps Pipelines"],
    metrics: "99.999% SLA Uptime",
    gradient: "from-[#ff0033]/30 via-[#0d0d14] to-[#08080d]",
    codeSample: "kubectl apply -f softnex-cluster.yaml",
  },
  {
    id: "03",
    category: "Full-Stack",
    icon: Code2,
    title: "Custom Full-Stack Engineering",
    subtitle: "Next.js, Python & High-Scale Systems",
    description:
      "Precision-crafted web & mobile applications designed with ultra-responsive UX, modern component architecture, and lightning-fast APIs.",
    features: ["Next.js App Router", "Python / FastApi Backends", "GraphQL / REST APIs", "WebSockets Realtime"],
    metrics: "< 0.2s Avg Response",
    gradient: "from-[#ff0033]/25 via-[#111118] to-[#08080d]",
    codeSample: "export default async function Page()",
  },
  {
    id: "04",
    category: "Cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity & System Hardening",
    subtitle: "Zero Trust & ISO 27001 Security",
    description:
      "Comprehensive vulnerability audits, cryptographic data protection, and continuous system monitoring against modern threat vectors.",
    features: ["Zero-Trust Architecture", "Penetration Testing", "SOC2 Compliance", "Data Encryption"],
    metrics: "Zero Penetration Flaws",
    gradient: "from-[#ff0033]/35 via-[#0a0a0f] to-[#08080d]",
    codeSample: "vault.read('secret/data/production')",
  },
  {
    id: "05",
    category: "Data Engine",
    icon: Database,
    title: "Data Engineering & Analytics",
    subtitle: "BigData Pipelines & Real-time BI",
    description:
      "Architecting robust data warehouses, streaming ETL pipelines, and executive dashboards for data-driven strategic decisions.",
    features: ["ETL Pipelines", "PostgreSQL / Snowflake", "Executive Dashboards", "Stream Processing"],
    metrics: "50,000+ Events / Sec",
    gradient: "from-[#ff0033]/25 via-[#111118] to-[#08080d]",
    codeSample: "stream.pipe(kafkaProducer.publish)",
  },
];

const filterTabs = ["All Capabilities", "AI & Automation", "Cloud Native", "Full-Stack", "Cybersecurity", "Data Engine"];

export default function ServicesScroll() {
  const [activeTab, setActiveTab] = useState("All Capabilities");
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const filteredServices = activeTab === "All Capabilities"
    ? services
    : services.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-[#050505] text-white relative border-b border-zinc-900/80 overflow-hidden">
      {/* Subtle Background Radial Beam */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff0033]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff0033] uppercase tracking-widest mb-2 font-bold">
              <Sparkles className="w-4 h-4" />
              Capabilities & Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
              Core <span className="text-stroke-red">Engineering</span> Capabilities
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
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
              const isExpanded = activeCardId === service.id;

              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="group relative rounded-2xl bg-[#0c0c12] border border-[#ff0033]/30 p-7 flex flex-col justify-between overflow-hidden hover:border-[#ff0033] hover:shadow-[0_0_40px_rgba(255,0,51,0.35)] transition-all duration-300 interactive"
                >
                  {/* Card Background Red Glow Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-35 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Top Card Header */}
                  <div>
                    <div className="relative z-10 flex items-start justify-between mb-6">
                      <div className="w-13 h-13 rounded-xl bg-[#14141f] border border-[#ff0033]/40 flex items-center justify-center text-[#ff0033] group-hover:scale-110 group-hover:bg-[#ff0033] group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,0,51,0.2)]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-2xl font-black text-zinc-700 group-hover:text-[#ff0033] transition-colors">
                        {service.id}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <span className="text-[11px] font-mono text-[#ff0033] uppercase tracking-wider block mb-1 font-bold">
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
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#13131c] text-zinc-300 border border-zinc-800/80 group-hover:border-[#ff0033]/40 transition-colors"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Interactive Spec Bar */}
                  <div className="relative z-10 pt-4 border-t border-zinc-800/80 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-semibold">
                        <Zap className="w-3.5 h-3.5 text-[#ff0033]" />
                        {service.metrics}
                      </span>
                      
                      <button
                        onClick={() => setActiveCardId(isExpanded ? null : service.id)}
                        className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        {isExpanded ? "Hide Code" : "Inspect Code"}
                        <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-90 text-[#ff0033]" : ""}`} />
                      </button>
                    </div>

                    {/* Expandable Live Code Snippet */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="rounded-lg bg-[#06060a] border border-zinc-800 p-3 text-[11px] font-mono text-zinc-300 overflow-x-auto"
                        >
                          <div className="flex items-center gap-1.5 text-zinc-500 mb-1.5 border-b border-zinc-800/80 pb-1 text-[10px]">
                            <Terminal className="w-3 h-3 text-[#ff0033]" />
                            <span>spec_{service.id.toLowerCase()}.ts</span>
                          </div>
                          <code className="text-[#ff0033]">{service.codeSample}</code>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
