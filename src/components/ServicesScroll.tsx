"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Cloud,
  Code2,
  ShieldCheck,
  BrainCircuit,
  Database,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    id: "01",
    icon: BrainCircuit,
    title: "Enterprise AI & ERP Automation",
    subtitle: "Custom ERPNext & Neural Workflow Engines",
    description:
      "We design intelligent business automation platforms, real-time analytics engines, and tailored ERP workflows that optimize company resources.",
    features: ["ERPNext Customization", "Predictive Analytics", "Automated Workflows", "NLP Data Processing"],
    gradient: "from-[#ff0033]/25 via-[#111118] to-[#050505]",
  },
  {
    id: "02",
    icon: Cloud,
    title: "Cloud-Native Infrastructure",
    subtitle: "AWS, Kubernetes & High-Uptime Architecture",
    description:
      "Zero-downtime microservice deployments, serverless cloud architectures, and automated CI/CD pipelines built for enterprise resilience.",
    features: ["Kubernetes Orchestration", "Multi-Cloud Strategy", "Serverless Architecture", "DevOps Pipelines"],
    gradient: "from-[#ff0033]/30 via-[#0d0d14] to-[#050505]",
  },
  {
    id: "03",
    icon: Code2,
    title: "Custom Full-Stack Engineering",
    subtitle: "Next.js, Python & High-Scale Systems",
    description:
      "Precision-crafted web & mobile applications designed with ultra-responsive UX, modern component architecture, and lightning-fast APIs.",
    features: ["Next.js App Router", "Python / FastApi Backends", "GraphQL / REST APIs", "WebSockets Realtime"],
    gradient: "from-[#ff0033]/25 via-[#111118] to-[#050505]",
  },
  {
    id: "04",
    icon: ShieldCheck,
    title: "Cybersecurity & System Hardening",
    subtitle: "Zero Trust & ISO 27001 Security",
    description:
      "Comprehensive vulnerability audits, cryptographic data protection, and continuous system monitoring against modern threat vectors.",
    features: ["Zero-Trust Architecture", "Penetration Testing", "SOC2 Compliance", "Data Encryption"],
    gradient: "from-[#ff0033]/35 via-[#0a0a0f] to-[#050505]",
  },
  {
    id: "05",
    icon: Database,
    title: "Data Engineering & Analytics",
    subtitle: "BigData Pipelines & Real-time BI",
    description:
      "Architecting robust data warehouses, streaming ETL pipelines, and executive dashboards for data-driven strategic decisions.",
    features: ["ETL Pipelines", "PostgreSQL / Snowflake", "Executive Dashboards", "Stream Processing"],
    gradient: "from-[#ff0033]/25 via-[#111118] to-[#050505]",
  },
];

export default function ServicesScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const calculateScrollRange = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        // Exact pixel offset to align last card cleanly inside viewport right margin
        setScrollRange(Math.max(0, trackWidth - windowWidth + 64));
      }
    };

    calculateScrollRange();
    window.addEventListener("resize", calculateScrollRange);
    return () => window.removeEventListener("resize", calculateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth transform across full scroll distance (0% to 100% of container height)
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative h-[240vh] bg-[#050505] text-white"
    >
      {/* Sticky Viewport Container - Screen Locks for Exact Track Duration */}
      <div className="sticky top-0 flex flex-col justify-between h-screen overflow-hidden pt-20 pb-8">
        
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900 z-30">
          <motion.div
            style={{ width: progressWidth }}
            className="h-full bg-[#ff0033] shadow-[0_0_15px_#ff0033]"
          />
        </div>

        {/* Fixed Header Title Area */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full z-20 flex flex-col sm:flex-row sm:items-end justify-between shrink-0 mb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff0033] uppercase tracking-widest mb-1.5 font-bold">
              <Sparkles className="w-4 h-4" />
              Capabilities & Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
              Core <span className="text-stroke-red">Engineering</span> Capabilities
            </h2>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest mt-2 sm:mt-0">
            <span>Scroll to explore all capabilities</span>
            <div className="w-8 h-0.5 bg-[#ff0033] animate-pulse" />
          </div>
        </div>

        {/* Dynamic Horizontal Track - Perfect Padding */}
        <div className="flex-1 flex items-center overflow-hidden my-auto py-2">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 sm:gap-8 px-6 sm:px-12 md:px-16 items-center shrink-0"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="relative flex-none w-[320px] sm:w-[380px] md:w-[440px] h-[420px] sm:h-[450px] rounded-2xl bg-[#0c0c12] border border-[#ff0033]/35 p-6 sm:p-8 flex flex-col justify-between overflow-hidden group hover:border-[#ff0033] hover:shadow-[0_0_45px_rgba(255,0,51,0.4)] transition-all duration-500 interactive shrink-0"
                >
                  {/* Card Gradient Surface */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Card Header */}
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#14141f] border border-[#ff0033]/40 flex items-center justify-center text-[#ff0033] group-hover:scale-110 group-hover:bg-[#ff0033] group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,0,51,0.2)]">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span className="font-mono text-2xl sm:text-3xl font-black text-zinc-700 group-hover:text-[#ff0033] transition-colors">
                      {service.id}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 my-auto">
                    <span className="text-[11px] font-mono text-[#ff0033] uppercase tracking-wider block mb-1 font-bold">
                      {service.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 group-hover:text-white transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
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

                  {/* Card Footer */}
                  <div className="relative z-10 pt-3 border-t border-zinc-800/70 flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1">
                      Read Architecture Spec
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#181824] flex items-center justify-center text-zinc-400 group-hover:bg-[#ff0033] group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Status Footer */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full z-20 flex items-center justify-between shrink-0 font-mono text-xs text-zinc-500 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff0033] animate-ping" />
            <span>5 Core Engineering Modules</span>
          </div>
          <span className="hidden sm:inline">Softnex Systems</span>
        </div>
      </div>
    </section>
  );
}
