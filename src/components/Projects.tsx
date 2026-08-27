"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, ArrowUpRight, Check, X, Shield, Cpu, Activity } from "lucide-react";

const projectsData = [
  {
    id: "proj-1",
    title: "NexERP Automation Suite",
    category: "ERP & Automation",
    client: "Global Logistics Corp",
    impact: "+340% Workflow Efficiency",
    imageGrad: "from-[#ff0033]/30 to-[#0a0a14]",
    summary:
      "Engineered an enterprise-grade ERPNext platform integrating custom inventory forecasting, automated invoice processing, and real-time fleet telemetry across 14 countries.",
    tech: ["ERPNext", "Python", "PostgreSQL", "Docker"],
    results: ["Automated 85% of manual approvals", "Reduced inventory discrepancy to <0.01%", "Sub-second response across 12,000 active users"],
  },
  {
    id: "proj-2",
    title: "NeuralSight AI Predictive Engine",
    category: "AI & ML",
    client: "Fintech Enterprise",
    impact: "$14.2M Fraud Prevented",
    imageGrad: "from-[#ff0033]/40 to-[#050509]",
    summary:
      "Built a real-time anomaly detection & fraud mitigation neural model processing over 45,000 transaction events per second with 99.8% precision.",
    tech: ["PyTorch", "FastAPI", "Redis Cluster", "Kafka"],
    results: ["Reduced false positive rate by 62%", "Real-time decisioning under 18ms", "SOC2 Type II certified pipeline"],
  },
  {
    id: "proj-3",
    title: "AeroCloud Multi-Region Infrastructure",
    category: "Cloud Native",
    client: "Aviation Tech System",
    impact: "99.999% SLA Guaranteed",
    imageGrad: "from-[#ff0033]/25 to-[#11111a]",
    summary:
      "Migrated legacy monolithic infrastructure into Kubernetes EKS multi-region clusters with zero downtime and automated failover capabilities.",
    tech: ["AWS EKS", "Terraform", "Istio Mesh", "Grafana"],
    results: ["Zero unplanned outages over 24 months", "Cut AWS infrastructure bill by 38%", "Automated deployment pipeline under 4 mins"],
  },
  {
    id: "proj-4",
    title: "CyberVault Banking Gateway",
    category: "Fintech & Security",
    client: "National Banking Consortium",
    impact: "ISO 27001 & PCI-DSS Level 1",
    imageGrad: "from-[#ff0033]/35 to-[#08080f]",
    summary:
      "Designed an ultra-secure cryptographic payload gateway protecting core interbank transfers against Quantum-adjacent decrypt attempts.",
    tech: ["Rust", "Zero Trust SDK", "AWS Vault", "Next.js"],
    results: ["Zero security breaches recorded", "End-to-end payload encryption", "Passed 4 independent third-party penetration audits"],
  },
];

const categories = ["All", "ERP & Automation", "AI & ML", "Cloud Native", "Fintech & Security"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState<typeof projectsData[0] | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-28 bg-[#050505] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-[#ff0033] uppercase tracking-widest block mb-2">
              Featured Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
              Enterprise <span className="text-stroke-red">Deployments</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all interactive ${
                  selectedCategory === cat
                    ? "bg-[#ff0033] text-white shadow-[0_0_20px_rgba(255,0,51,0.5)]"
                    : "bg-[#0e0e16] text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveModalProject(project)}
              className="group relative rounded-2xl bg-[#0b0b12] border border-[#ff0033]/30 p-8 flex flex-col justify-between overflow-hidden cursor-pointer hover:border-[#ff0033] hover:shadow-[0_0_40px_rgba(255,0,51,0.3)] transition-all duration-500 interactive"
            >
              {/* Gradient Banner */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.imageGrad} opacity-30 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#ff0033] bg-[#ff0033]/15 px-3 py-1 rounded-full border border-[#ff0033]/30">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {project.client}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#ff0033] transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#141420] text-zinc-300 border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Result Highlight */}
              <div className="relative z-10 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-[#ff0033]">
                  <Activity className="w-4 h-4" />
                  {project.impact}
                </div>
                <div className="w-8 h-8 rounded-full bg-[#181824] flex items-center justify-center text-white group-hover:bg-[#ff0033] transition-all">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#0d0d16] border border-[#ff0033] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-[0_0_60px_rgba(255,0,51,0.5)] relative overflow-hidden text-white"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#161622] text-zinc-400 hover:text-white hover:bg-[#ff0033] flex items-center justify-center transition-all interactive"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono text-[#ff0033] uppercase tracking-wider block mb-1">
                {activeModalProject.category} Case Study
              </span>
              <h3 className="text-3xl font-extrabold text-white mb-2">
                {activeModalProject.title}
              </h3>
              <span className="text-xs font-mono text-zinc-400 block mb-6">
                Deployed for: {activeModalProject.client}
              </span>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                {activeModalProject.summary}
              </p>

              {/* Key Results Achieved */}
              <div className="mb-6 bg-[#06060a] p-4 rounded-xl border border-zinc-800">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-3">
                  Key Metrics & Outcomes
                </span>
                <div className="flex flex-col gap-2">
                  {activeModalProject.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2 text-sm text-zinc-200">
                      <Check className="w-4 h-4 text-[#ff0033]" />
                      {res}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t border-zinc-800">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#ff0033] text-white font-bold text-sm shadow-[0_0_20px_rgba(255,0,51,0.4)] hover:bg-[#e6002e] transition-all interactive"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
