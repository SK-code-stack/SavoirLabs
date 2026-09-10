"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Search,
  ChevronDown,
  Sparkles,
  Cpu,
  Workflow,
  Cloud,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  PhoneCall,
} from "lucide-react";

interface FAQItem {
  id: string;
  category: "Automation" | "AI" | "Cloud" | "Process & Security";
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "auto-1",
    category: "Automation",
    question: "What is Intelligent Process Automation (IPA) and how does it differ from standard RPA?",
    answer:
      "Traditional Robotic Process Automation (RPA) strictly follows rigid, rule-based scripts and breaks when encountering unexpected data formats. Intelligent Process Automation (IPA) integrates Machine Learning and AI into core workflows. This allows our systems to parse unstructured documents (like scanned PDFs, paper receipts, or unstructured emails), make context-aware routing decisions, and continuously self-correct without crashing.",
  },
  {
    id: "auto-2",
    category: "Automation",
    question: "Why does SavoirLabs specialize in ERPNext for enterprise automation?",
    answer:
      "ERPNext provides an open-source, highly modular framework built on Python and MariaDB. Unlike legacy ERPs (SAP, Oracle) that lock companies into seven-figure licensing fees and rigid codebases, ERPNext allows total ownership, custom DocType engineering, server script automations, and direct API integrations at a fraction of the total cost of ownership while delivering enterprise-grade performance.",
  },
  {
    id: "auto-3",
    category: "Automation",
    question: "How long does a typical ERP or process automation deployment take?",
    answer:
      "Our average engagement lifecycle ranges from 4 weeks for targeted module automations (e.g., Accounts Payable OCR & approval routing) to 12-16 weeks for end-to-end multi-department ERP replacements. We work in 2-week agile sprints with continuous staging environment previews so your team sees working code early and often.",
  },
  {
    id: "ai-1",
    category: "AI",
    question: "Can SavoirLabs deploy custom LLMs and AI models on private enterprise servers?",
    answer:
      "Yes. Data privacy and compliance are paramount. We build and deploy fine-tuned Large Language Models (LLMs), RAG (Retrieval-Augmented Generation) knowledge engines, and predictive ML models on your private cloud infrastructure (AWS EKS, GCP, Azure, or on-premise hardware). Your proprietary enterprise data never touches public third-party model APIs unless explicitly requested.",
  },
  {
    id: "ai-2",
    category: "AI",
    question: "What is Agentic AI and how can my company leverage it?",
    answer:
      "Agentic AI systems go beyond generating responses — they autonomously plan, reason, and execute multi-step workflows. For example, an AI agent designed by SavoirLabs can ingest a vendor invoice, cross-reference inventory in ERPNext, verify line-item pricing against past purchase orders, generate payment vouchers, and alert financial approvers on Slack or Teams — executing 90% of the workflow without human intervention.",
  },
  {
    id: "ai-3",
    category: "AI",
    question: "How do you ensure AI accuracy and prevent model hallucination?",
    answer:
      "We implement strict deterministic guardrails, vector database grounding (using hybrid BM25 + dense embedding search), real-time evaluation benchmarks, and human-in-the-loop validation checkpoints for high-risk financial or operational decisions.",
  },
  {
    id: "cloud-1",
    category: "Cloud",
    question: "What uptime guarantees and SLA standards do you provide?",
    answer:
      "Our cloud architecture designs target 99.99% uptime SLAs (less than 52 minutes of unplanned downtime per year). We engineer auto-scaling Kubernetes clusters with multi-AZ replication, automated failover, zero-downtime rolling upgrades, and continuous disaster recovery simulation testing.",
  },
  {
    id: "cloud-2",
    category: "Cloud",
    question: "How do you help companies reduce escalating cloud infrastructure costs?",
    answer:
      "Through deep cloud optimization audits: we implement spot instance orchestration (saving up to 70% on compute), fine-tune container resource limits using KEDA and Karpenter, eliminate idle database instances, and implement caching layers that cut cloud API overhead by 40–60%.",
  },
  {
    id: "cloud-3",
    category: "Cloud",
    question: "Do you offer post-launch managed cloud maintenance and monitoring?",
    answer:
      "Yes. SavoirLabs provides 24/7/365 site reliability engineering (SRE) support, continuous security patching, infrastructure monitoring via Prometheus/Grafana, and active incident response retainers tailored to your system uptime requirements.",
  },
  {
    id: "sec-1",
    category: "Process & Security",
    question: "How does SavoirLabs handle intellectual property and source code ownership?",
    answer:
      "100% of custom code, architecture diagrams, scripts, and documentation engineered for your project are fully assigned to your business upon milestone delivery. We sign comprehensive Non-Disclosure Agreements (NDAs) before any technical discovery begins.",
  },
  {
    id: "sec-2",
    category: "Process & Security",
    question: "What security compliance frameworks do your solutions adhere to?",
    answer:
      "Our systems are built Zero Trust by default. We conform to SOC 2 Type II, ISO 27001, GDPR, and HIPAA compliance standards depending on your industry requirements — enforcing mTLS encryption in transit, AES-256 encryption at rest, and strict RBAC access policies.",
  },
  {
    id: "sec-3",
    category: "Process & Security",
    question: "How do we get started with a project proposal?",
    answer:
      "You can use our interactive Project Scope Estimator on the home page, schedule a technical discovery call directly with our engineering founders, or fill out the contact form below. We prepare detailed technical blueprints and fixed-scope proposals within 48 hours.",
  },
];

const categories = [
  { label: "All Questions", value: "All", icon: HelpCircle },
  { label: "Intelligent Automation", value: "Automation", icon: Workflow },
  { label: "Enterprise AI", value: "AI", icon: Cpu },
  { label: "Cloud Native", value: "Cloud", icon: Cloud },
  { label: "Process & Security", value: "Process & Security", icon: ShieldCheck },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ "auto-1": true });

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      {/* ── Nav spacer ── */}
      <div className="h-24" />

      {/* ── Header Section ── */}
      <section className="relative py-20 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ff0033]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#13131d] border border-[#ff0033]/30 text-xs font-mono text-[#ff0033] uppercase tracking-widest mb-6 font-bold shadow-[0_0_15px_rgba(255,0,51,0.2)]">
              <Sparkles className="w-4 h-4" />
              Knowledge Base & Support
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight leading-tight mb-6">
              Frequently Asked <span className="text-stroke-red">Questions</span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed mb-10">
              Clear answers to your technical, architectural, and operational questions about SavoirLabs engineering services.
            </p>

            {/* Live Search Input */}
            <div className="w-full max-w-xl relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-500">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search questions by keyword (e.g. ERPNext, LLM, Kubernetes, NDA)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#0d0d16] border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ff0033]/60 focus:ring-1 focus:ring-[#ff0033]/60 transition-all text-sm shadow-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-4 flex items-center text-xs font-mono text-zinc-500 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main FAQ Body ── */}
      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const active = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 border ${
                    active
                      ? "bg-[#ff0033] text-white border-[#ff0033] shadow-[0_0_25px_rgba(255,0,51,0.4)]"
                      : "bg-[#0d0d16] text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* FAQ Accordion List */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 px-6 rounded-2xl border border-zinc-800 bg-[#0b0b12]">
              <HelpCircle className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">No matching questions found</h3>
              <p className="text-zinc-500 text-sm max-w-md mx-auto mb-6 font-light">
                We couldn't find any questions matching "{searchQuery}". Try a different keyword or contact our engineering team directly.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-4 py-2 rounded-lg bg-[#151520] border border-zinc-700 text-xs font-mono text-[#ff0033] hover:bg-[#ff0033] hover:text-white transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filteredFaqs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-[#0c0c16] border-[#ff0033]/50 shadow-[0_0_30px_rgba(255,0,51,0.08)]"
                        : "bg-[#0b0b12] border-zinc-800/80 hover:border-zinc-700"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 group"
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`w-2 h-2 rounded-full transition-colors shrink-0 ${
                            isOpen ? "bg-[#ff0033] shadow-[0_0_10px_#ff0033]" : "bg-zinc-700"
                          }`}
                        />
                        <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#ff0033] transition-colors leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-lg bg-[#12121c] border border-zinc-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 border-[#ff0033]/40 text-[#ff0033]" : "text-zinc-400"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-1 text-zinc-300 text-sm sm:text-base font-light leading-relaxed border-t border-zinc-900/80 pl-11">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* ── Still Have Questions CTA Banner ── */}
          <div className="mt-20 rounded-3xl border border-[#ff0033]/30 bg-gradient-to-r from-[#0d0d18] via-[#090910] to-[#0d0d18] p-8 sm:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(255,0,51,0.1)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff0033]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="flex flex-col gap-2 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ff0033] uppercase tracking-widest font-bold">
                  <MessageSquare className="w-4 h-4" />
                  Have a specific enterprise requirement?
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Speak Directly With Our Engineering Leadership
                </h2>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  We don't put non-technical sales reps on discovery calls. You'll converse directly with senior software architects and AI systems engineers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
                <a
                  href="/#contact"
                  className="px-6 py-3.5 rounded-xl bg-[#ff0033] text-white font-bold text-sm shadow-[0_0_25px_rgba(255,0,51,0.4)] hover:bg-[#e6002e] transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/#estimator"
                  className="px-6 py-3.5 rounded-xl bg-[#12121d] border border-zinc-800 text-white font-bold text-sm hover:border-[#ff0033]/50 transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#ff0033]" />
                  Project Estimator
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
