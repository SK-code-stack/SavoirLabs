"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Check, ArrowRight, Sparkles, Send } from "lucide-react";

export default function ProjectEstimator() {
  const [selectedDomain, setSelectedDomain] = useState("Custom Web & Mobile");
  const [selectedScale, setSelectedScale] = useState("Startup MVP");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactEmail, setContactEmail] = useState("");

  const domains = [
    { name: "ERP & Automation", baseWeeks: 5 },
    { name: "AI & Machine Learning", baseWeeks: 7 },
    { name: "Custom Web & Mobile", baseWeeks: 3 },
    { name: "Cloud & Security Infrastructure", baseWeeks: 4 },
  ];

  const scales = [
    { name: "Startup MVP", multiplier: 1 },
    { name: "Mid-Market System", multiplier: 1.5 },
    { name: "Enterprise Global", multiplier: 2.2 },
  ];

  const addonsList = [
    "24/7 SLA Support",
    "SOC2 Security Hardening",
    "Legacy Data Migration",
    "High-Performance Load Testing",
  ];

  const toggleAddon = (addon: string) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== addon));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const domainObj = domains.find((d) => d.name === selectedDomain) || domains[0];
  const scaleObj = scales.find((s) => s.name === selectedScale) || scales[2];

  const estimatedWeeks = Math.round((domainObj.baseWeeks + selectedAddons.length * 1.5) * (scaleObj.multiplier * 0.85));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail) return;
    setFormSubmitted(true);
  };

  return (
    <section id="estimator" className="py-28 bg-[#050505] text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#13131d] border border-[#ff0033]/30 text-xs font-mono text-[#ff0033] uppercase tracking-widest mb-4">
            <Calculator className="w-4 h-4" />
            Interactive Scope Estimator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight">
            Estimate Your <span className="text-stroke-red">Project Scope</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Select your architectural needs below for an instant preliminary timeline and resource breakdown.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Container */}
          <div className="lg:col-span-7 bg-[#0d0d16] border border-[#ff0033]/30 rounded-2xl p-6 sm:p-8 flex flex-col gap-8 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            
            {/* 1. Primary Domain Selection */}
            <div>
              <label className="text-xs font-mono text-[#ff0033] uppercase tracking-wider block mb-3 font-bold">
                1. Select Primary Solution Domain
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {domains.map((d) => (
                  <button
                    key={d.name}
                    type="button"
                    onClick={() => setSelectedDomain(d.name)}
                    className={`p-4 rounded-xl text-left border text-sm font-semibold transition-all interactive ${
                      selectedDomain === d.name
                        ? "bg-[#ff0033] text-white border-[#ff0033] shadow-[0_0_20px_rgba(255,0,51,0.5)]"
                        : "bg-[#12121e] text-zinc-300 border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    {d.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. System Scale */}
            <div>
              <label className="text-xs font-mono text-[#ff0033] uppercase tracking-wider block mb-3 font-bold">
                2. Select Project Scale
              </label>
              <div className="grid grid-cols-3 gap-3">
                {scales.map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setSelectedScale(s.name)}
                    className={`py-3 px-2 rounded-xl text-center border text-xs font-bold transition-all interactive ${
                      selectedScale === s.name
                        ? "bg-[#ff0033] text-white border-[#ff0033] shadow-[0_0_20px_rgba(255,0,51,0.5)]"
                        : "bg-[#12121e] text-zinc-300 border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Add-on Features */}
            <div>
              <label className="text-xs font-mono text-[#ff0033] uppercase tracking-wider block mb-3 font-bold">
                3. Additional Enterprise Options
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon);
                  return (
                    <button
                      key={addon}
                      type="button"
                      onClick={() => toggleAddon(addon)}
                      className={`p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all interactive ${
                        isChecked
                          ? "bg-[#181828] border-[#ff0033] text-white"
                          : "bg-[#12121e] border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      <span>{addon}</span>
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center border ${
                          isChecked ? "bg-[#ff0033] border-[#ff0033] text-white" : "border-zinc-700 bg-transparent"
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary Panel */}
          <div className="lg:col-span-5 bg-[#0a0a12] border border-[#ff0033]/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(255,0,51,0.25)] sticky top-28">
            <div>
              <span className="text-xs font-mono text-[#ff0033] uppercase tracking-widest block mb-2 font-bold">
                Specification Output
              </span>
              <h3 className="text-2xl font-bold text-white mb-6">Estimated Timeline</h3>

              <div className="mb-6 p-6 rounded-xl bg-[#12121e] border border-zinc-800 text-center">
                <span
                  className="text-3xl font-bold text-[#ff0033] glow-red-text block tracking-wide"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif", letterSpacing: "0.05em" }}
                >
                  {estimatedWeeks} – {estimatedWeeks + 2} Weeks
                </span>
                <span className="text-xs text-zinc-400 font-mono mt-2 block">
                  Estimated Agile Sprint Duration
                </span>
              </div>

              <div className="flex flex-col gap-2 text-xs font-mono text-zinc-300 mb-8 border-t border-zinc-800/80 pt-4">
                <div className="flex justify-between py-1 border-b border-zinc-900">
                  <span className="text-zinc-500">Domain:</span>
                  <span className="font-bold text-white">{selectedDomain}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-900">
                  <span className="text-zinc-500">Scale:</span>
                  <span className="font-bold text-white">{selectedScale}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500">Addons:</span>
                  <span className="font-bold text-[#ff0033]">{selectedAddons.length} Modules</span>
                </div>
              </div>
            </div>

            {/* Quick Proposal Request Form */}
            {formSubmitted ? (
              <div className="p-4 rounded-xl bg-[#ff0033]/15 border border-[#ff0033] text-center text-sm font-semibold text-white">
                <Sparkles className="w-6 h-6 text-[#ff0033] mx-auto mb-2" />
                Specification Sent! A Lead Architect will email you within 2 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your business email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#12121c] border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#ff0033] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#ff0033] text-white font-bold text-sm shadow-[0_0_25px_rgba(255,0,51,0.5)] hover:bg-[#e6002e] transition-all flex items-center justify-center gap-2 interactive"
                >
                  <Send className="w-4 h-4" />
                  Request Full Proposal
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
