"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Cpu,
  Server,
  Lock,
  Terminal,
  CheckCircle2,
  Zap,
  Box,
} from "lucide-react";

const architectureLayers = [
  {
    id: "layer-1",
    title: "1. Ultra-Responsive UX & Web Frontend",
    tag: "CLIENT PRESENTATION LAYER",
    icon: Layers,
    metrics: "100/100 Lighthouse • <0.2s LCP",
    description:
      "Server-rendered Next.js components paired with Framer Motion scroll mechanics, WebGL canvas accelerations, and seamless cross-device responsiveness.",
    tech: ["Next.js App Router", "React 19", "Tailwind CSS v4", "Canvas / Three.js"],
    codeSnippet: `// Softnex High-Speed SSR Engine
export async function generateMetadata() {
  return { title: "Softnex Enterprise", themeColor: "#ff0033" };
}`,
  },
  {
    id: "layer-2",
    title: "2. Microservices & API Gateway",
    tag: "DISTRIBUTED BACKEND ENGINE",
    icon: Server,
    metrics: "50,000+ Requests/sec • 12ms Latency",
    description:
      "High-throughput Python FastAPI & Rust microservices orchestrated via gRPC and GraphQL gateways, providing rock-solid reliability under peak traffic spikes.",
    tech: ["FastAPI / Python", "gRPC / Protobuf", "Redis Caching", "GraphQL Gateway"],
    codeSnippet: `@app.get("/api/v1/telemetry")
async def get_system_health():
    return {"status": "OPERATIONAL", "sla": 99.999}`,
  },
  {
    id: "layer-3",
    title: "3. AI Neural & Business Automation",
    tag: "INTELLIGENCE & ERP WORKFLOWS",
    icon: Cpu,
    metrics: "Real-time Inference • ERPNext Sync",
    description:
      "Tailored machine learning pipelines integrated directly into enterprise ERP systems for automated resource planning, fraud detection, and predictive forecasting.",
    tech: ["ERPNext Engine", "PyTorch / Transformers", "Vector DB (Qdrant)", "Celery Workers"],
    codeSnippet: `def process_erp_workflow(doc):
    prediction = ai_model.predict(doc.financial_data)
    doc.update_status(prediction.approval_code)`,
  },
  {
    id: "layer-4",
    title: "4. Multi-Cloud & Zero-Trust Security",
    tag: "INFRASTRUCTURE & HARDENING",
    icon: Lock,
    metrics: "ISO 27001 • Automated Pen-Tested",
    description:
      "Terraform-managed multi-cloud infrastructure running on AWS & Kubernetes clusters with automated TLS encryption, zero-trust network access, and instant failover.",
    tech: ["Kubernetes (EKS)", "Terraform IaC", "AWS CloudFront", "Vault Security"],
    codeSnippet: `resource "aws_eks_cluster" "softnex_main" {
  name     = "softnex-production-v4"
  role_arn = aws_iam_role.cluster.arn
}`,
  },
];

export default function InteractiveShowcase() {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const currentLayer = architectureLayers[activeLayerIndex];

  return (
    <section id="tech-stack" className="py-28 bg-[#07070b] relative overflow-hidden text-white">
      {/* Red Ambient Glow Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff0033]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#13131d] border border-[#ff0033]/30 text-xs font-mono text-[#ff0033] uppercase tracking-widest mb-4">
            <Box className="w-4 h-4" />
            Interactive System Topology
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            Architectural <span className="text-stroke-red">Stack & Blueprint</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 font-light">
            Click through our 4-tier enterprise system stack to inspect the live technology components and infrastructure blueprints.
          </p>
        </div>

        {/* Interactive Layer Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Layer Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {architectureLayers.map((layer, idx) => {
              const Icon = layer.icon;
              const isActive = idx === activeLayerIndex;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayerIndex(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 interactive ${
                    isActive
                      ? "bg-[#11111a] border-[#ff0033] shadow-[0_0_30px_rgba(255,0,51,0.35)]"
                      : "bg-[#09090e] border-zinc-800/80 hover:border-zinc-700 hover:bg-[#0e0e16]"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-[#ff0033] text-white shadow-[0_0_15px_#ff0033]" : "bg-[#14141e] text-zinc-400"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#ff0033] tracking-widest block uppercase">
                      {layer.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">{layer.title}</h3>
                    <span className="text-xs text-zinc-500 font-mono block mt-1">
                      {layer.metrics}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Code & Architecture Detail Preview */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLayer.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="bg-[#0b0b12] border border-[#ff0033]/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#ff0033] animate-pulse" />
                    <span className="font-mono text-sm text-zinc-300 font-bold uppercase tracking-wider">
                      {currentLayer.tag}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#ff0033] bg-[#ff0033]/10 px-3 py-1 rounded-full border border-[#ff0033]/30">
                    {currentLayer.metrics}
                  </span>
                </div>

                <p className="text-zinc-300 text-base leading-relaxed mb-6 font-light">
                  {currentLayer.description}
                </p>

                {/* Tech Badges */}
                <div className="mb-6">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentLayer.tech.map((t, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141420] border border-zinc-800 text-sm text-zinc-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#ff0033]" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Code Snippet Terminal */}
                <div className="rounded-xl bg-[#050508] border border-zinc-800 p-4 font-mono text-xs overflow-x-auto">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3 text-zinc-500">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-[#ff0033]" />
                      <span>Architecture_Specification.ts</span>
                    </div>
                    <span className="text-[10px] text-[#ff0033]">LIVE BLUEPRINT</span>
                  </div>
                  <pre className="text-zinc-300 leading-relaxed">
                    <code>{currentLayer.codeSnippet}</code>
                  </pre>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
