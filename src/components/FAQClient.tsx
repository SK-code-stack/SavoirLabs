"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Search,
  ChevronDown,
  Workflow,
  Cpu,
  Cloud,
  ShieldCheck,
  ArrowRight,
  Mail,
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
      "Our average engagement ranges from 4 weeks for targeted module automations (e.g., Accounts Payable OCR & approval routing) to 12-16 weeks for end-to-end multi-department ERP replacements. We work in 2-week agile sprints with continuous staging environment previews so your team sees working code early and often.",
  },
  {
    id: "ai-1",
    category: "AI",
    question: "Can SavoirLabs deploy custom LLMs and AI models on private servers?",
    answer:
      "Yes. Data privacy and compliance are paramount. We build and deploy fine-tuned Large Language Models (LLMs), RAG (Retrieval-Augmented Generation) knowledge engines, and predictive ML models on your private cloud infrastructure (AWS, GCP, Azure, or on-premise hardware). Your proprietary data never touches public third-party model APIs unless explicitly requested.",
  },
  {
    id: "ai-2",
    category: "AI",
    question: "What is Agentic AI and how can my company leverage it?",
    answer:
      "Agentic AI systems go beyond generating responses — they autonomously plan, reason, and execute multi-step workflows. For example, an AI agent can ingest a vendor invoice, cross-reference inventory in your ERP, verify line-item pricing against past purchase orders, generate payment vouchers, and alert financial approvers — executing most of the workflow without human intervention.",
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
      "Our cloud architecture designs target high availability with multi-zone replication, automated failover, zero-downtime rolling upgrades, and continuous disaster recovery simulation testing. Specific SLA terms are tailored to each client's requirements.",
  },
  {
    id: "cloud-2",
    category: "Cloud",
    question: "How do you help companies reduce cloud infrastructure costs?",
    answer:
      "Through deep cloud optimization audits: we implement spot instance orchestration, fine-tune container resource limits, eliminate idle database instances, and implement caching layers that significantly cut cloud API overhead and reduce monthly spend.",
  },
  {
    id: "cloud-3",
    category: "Cloud",
    question: "Do you offer post-launch managed maintenance and monitoring?",
    answer:
      "Yes. SavoirLabs provides ongoing site reliability engineering (SRE) support, continuous security patching, infrastructure monitoring, and active incident response retainers tailored to your system uptime requirements.",
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
      "Our systems are built Zero Trust by default. We conform to SOC 2 Type II, ISO 27001, GDPR, and HIPAA compliance standards depending on your industry requirements — enforcing encryption in transit, encryption at rest, and strict RBAC access policies.",
  },
  {
    id: "sec-3",
    category: "Process & Security",
    question: "How do we get started with a project?",
    answer:
      "You can schedule a technical discovery call directly with our engineering team or fill out the contact form on our homepage. We prepare detailed technical proposals and scope documents typically within a few days of our initial conversation.",
  },
];

const categories = [
  { label: "All", value: "All", icon: HelpCircle },
  { label: "Automation", value: "Automation", icon: Workflow },
  { label: "AI", value: "AI", icon: Cpu },
  { label: "Cloud", value: "Cloud", icon: Cloud },
  { label: "Security", value: "Process & Security", icon: ShieldCheck },
];

export default function FAQClient() {
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
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-teal-primary/10 text-teal-primary">
              Support
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-dark-navy mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto mb-8">
              Find answers to common questions about our services, process, and technical capabilities.
            </p>

            {/* Search Input */}
            <div className="max-w-xl mx-auto relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#718096]">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#E2E8F0] bg-white text-dark-navy placeholder:text-[#718096] focus:outline-none focus:border-teal-primary focus:ring-2 focus:ring-teal-primary/10 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-4 flex items-center text-sm text-[#718096] hover:text-dark-navy transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Body */}
      <section className="py-12 lg:py-16 flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const active = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    active
                      ? "bg-teal-primary text-white"
                      : "bg-white text-[#4A5568] border border-[#E2E8F0] hover:border-teal-primary hover:text-teal-primary"
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
            <div className="text-center py-16 px-6 rounded-xl border border-[#E2E8F0] bg-light-gray">
              <HelpCircle className="w-12 h-12 text-[#718096] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-dark-navy mb-2">No matching questions found</h3>
              <p className="text-[#4A5568] text-sm max-w-md mx-auto mb-6">
                We couldn&apos;t find any questions matching &ldquo;{searchQuery}&rdquo;. Try a different keyword or contact us directly.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-4 py-2 rounded-lg bg-white border border-[#E2E8F0] text-sm font-medium text-dark-navy hover:border-teal-primary hover:text-teal-primary transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {filteredFaqs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div
                    key={faq.id}
                    className={`rounded-xl border transition-all overflow-hidden ${
                      isOpen
                        ? "bg-white border-teal-primary/30 shadow-md"
                        : "bg-white border-[#E2E8F0] hover:border-[#CBD5E0]"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 group"
                    >
                      <span className="text-base font-medium text-dark-navy group-hover:text-teal-primary transition-colors leading-snug">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-lg bg-light-gray flex items-center justify-center shrink-0 transition-all ${
                          isOpen ? "rotate-180 bg-teal-primary/10 text-teal-primary" : "text-[#718096]"
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
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-[#4A5568] leading-relaxed border-t border-[#E2E8F0]">
                            <p className="pt-4">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* Still Have Questions CTA */}
          <div className="mt-16 rounded-xl bg-light-gray border border-[#E2E8F0] p-8 lg:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h2 className="text-xl font-semibold text-dark-navy mb-2">
                  Still have questions?
                </h2>
                <p className="text-[#4A5568]">
                  Can&apos;t find what you&apos;re looking for? Our team is happy to help.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-teal-primary to-teal-light hover:shadow-teal transition-all group"
                >
                  <Mail className="w-4 h-4" />
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
