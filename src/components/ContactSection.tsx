"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Radar Arc Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff0033]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono text-[#ff0033] uppercase tracking-widest block mb-2 font-bold">
                Initiate Engagement
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight leading-tight">
                Let's Build Your <span className="text-stroke-red">Digital System</span>
              </h2>
              <p className="text-zinc-400 text-base mt-4 font-light leading-relaxed">
                Connect directly with our Lead Solutions Architect to discuss enterprise ERP integration, custom software engineering, or cloud scaling.
              </p>
            </div>

            {/* <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0d0d16] border border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-[#ff0033]/20 border border-[#ff0033]/40 flex items-center justify-center text-[#ff0033] shrink-0">
                  <Mail className="w-5 h-5" />
                </div> 
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Email Solutions Team</span>
                  <a href="mailto:solutions@softnex.io" className="text-base font-bold text-white hover:text-[#ff0033] transition-colors">
                    solutions@softnex.io
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0d0d16] border border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-[#ff0033]/20 border border-[#ff0033]/40 flex items-center justify-center text-[#ff0033] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Global Enterprise Desk</span>
                  <a href="tel:+18005559021" className="text-base font-bold text-white hover:text-[#ff0033] transition-colors">
                    +1 (800) 555-9021
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0d0d16] border border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-[#ff0033]/20 border border-[#ff0033]/40 flex items-center justify-center text-[#ff0033] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Engineering Headquarters</span>
                  <span className="text-sm font-semibold text-zinc-200">
                    Tech Park Plaza, Sector 5, Digital Hub
                  </span>
                </div>
              </div>
            </div>*/}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0b0b12] border border-[#ff0033]/40 rounded-2xl p-8 sm:p-10 shadow-[0_0_50px_rgba(255,0,51,0.2)]">
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#ff0033] text-white flex items-center justify-center shadow-[0_0_30px_#ff0033]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-zinc-400 text-sm max-w-md font-light">
                  Thank you for reaching out to Softnex. An executive solutions engineer will review your inquiry and contact you within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#12121e] border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#ff0033] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-bold">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#12121e] border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#ff0033] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-bold">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Global Enterprise"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#12121e] border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#ff0033] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-bold">
                    Project Brief & Technical Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your ERP, AI, or custom software requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#12121e] border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#ff0033] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#ff0033] text-white font-bold text-base shadow-[0_0_30px_rgba(255,0,51,0.5)] hover:bg-[#e6002e] hover:shadow-[0_0_45px_rgba(255,0,51,0.7)] transition-all duration-300 flex items-center justify-center gap-2 interactive"
                >
                  <Send className="w-5 h-5" />
                  Submit Engineering Brief
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
