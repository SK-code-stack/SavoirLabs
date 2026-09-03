"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, ShieldAlert, Rocket, GitBranch, Sparkles } from "lucide-react";

const steps = [
  {
    phase: "PHASE 01",
    title: "System Architecture & Discovery",
    icon: GitBranch,
    description:
      "Deep technical audit, database schema modeling, and infrastructure capacity planning to guarantee scalability before writing code.",
    deliverable: "System Design Document & API Specs",
  },
  {
    phase: "PHASE 02",
    title: "Agile Development & CI Sprints",
    icon: Terminal,
    description:
      "Iterative 2-week development sprints with continuous integration, automated unit testing, and real-time client preview environments.",
    deliverable: "Staging Builds & Automated Test Logs",
  },
  {
    phase: "PHASE 03",
    title: "Security Hardening & QA Audit",
    icon: ShieldAlert,
    description:
      "Vulnerability assessment, stress loading (50k+ virtual users), and automated security penetration testing to enforce ISO 27001 readiness.",
    deliverable: "Penetration Audit Report & SLA Guarantee",
  },
  {
    phase: "PHASE 04",
    title: "Production Deployment & Support",
    icon: Rocket,
    description:
      "Zero-downtime Kubernetes cluster deployment backed by 24/7 telemetry monitoring, automated database replication, and instant escalation SLA.",
    deliverable: "Live Production Cluster & Telemetry Portal",
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="process" className="py-28 bg-[#07070b] text-white relative" style={{ "--section-bg": "#07070b" } as React.CSSProperties}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#13131d] border border-[#ff0033]/30 text-xs font-mono text-[#ff0033] uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4" />
            Execution Methodology
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            Engineering <span className="text-stroke-red">Lifecycle</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Red Beam */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-[#ff0033] shadow-[0_0_20px_#ff0033]"
            />
          </div>

          {/* Timeline Step Items */}
          <div className="flex flex-col gap-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              const phaseColors = [
                { text: "text-sky-400", border: "border-sky-500", shadow: "shadow-[0_0_25px_rgba(56,189,248,0.4)]", bg: "bg-sky-500/10", dot: "bg-sky-400 shadow-[0_0_8px_#38bdf8]" },
                { text: "text-purple-400", border: "border-purple-500", shadow: "shadow-[0_0_25px_rgba(168,85,247,0.4)]", bg: "bg-purple-500/10", dot: "bg-purple-400 shadow-[0_0_8px_#a855f7]" },
                { text: "text-emerald-400", border: "border-emerald-500", shadow: "shadow-[0_0_25px_rgba(16,185,129,0.4)]", bg: "bg-emerald-500/10", dot: "bg-emerald-400 shadow-[0_0_8px_#10b981]" },
                { text: "text-[#ff0033]", border: "border-[#ff0033]", shadow: "shadow-[0_0_25px_rgba(255,0,51,0.4)]", bg: "bg-[#ff0033]/10", dot: "bg-[#ff0033] shadow-[0_0_8px_#ff0033]" },
              ][idx % 4];

              return (
                <div
                  key={step.phase}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node Button */}
                  <div className={`absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 z-10 w-10 h-10 rounded-full bg-[#0d0d16] border-2 flex items-center justify-center ${phaseColors.border} ${phaseColors.text} ${phaseColors.shadow}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Step Card Content */}
                  <div className={`w-full sm:w-[calc(50%-3rem)] pl-12 sm:pl-0 ${isEven ? "sm:pr-8" : "sm:pl-8"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 sm:p-8 rounded-2xl bg-[#0d0d16] border border-zinc-800 hover:${phaseColors.border} hover:${phaseColors.shadow} transition-all duration-300 interactive`}
                    >
                      <span className={`text-xs font-mono tracking-widest block mb-1 font-bold ${phaseColors.text}`}>
                        {step.phase}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div className="pt-3 border-t border-zinc-800 text-xs font-mono text-zinc-300 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${phaseColors.dot}`} />
                        Deliverable: {step.deliverable}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
