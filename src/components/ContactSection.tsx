"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, ShieldCheck, Loader2, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          from_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          company: formData.company || "N/A",
          message: formData.message,
          reply_to: formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setFormStatus("success");
    } catch (err: unknown) {
      console.error("EmailJS Error:", err);
      setErrorMsg("Something went wrong. Please try again or email us directly.");
      setFormStatus("error");
    }
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
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0b0b12] border border-[#ff0033]/40 rounded-2xl p-8 sm:p-10 shadow-[0_0_50px_rgba(255,0,51,0.2)]">
            {formStatus === "success" ? (
              <div className="py-16 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#ff0033] text-white flex items-center justify-center shadow-[0_0_30px_#ff0033]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-zinc-400 text-sm max-w-md font-light">
                  Thank you for reaching out to SavoirLabs. An executive solutions engineer will review your inquiry and contact you within 2 business hours.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
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
                      disabled={formStatus === "sending"}
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
                      disabled={formStatus === "sending"}
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
                    disabled={formStatus === "sending"}
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-bold">
                    Project Brief &amp; Technical Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your ERP, AI, or custom software requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#12121e] border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#ff0033] transition-colors resize-none"
                    disabled={formStatus === "sending"}
                  />
                </div>

                {/* Error message */}
                {formStatus === "error" && (
                  <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-[#ff0033]/10 border border-[#ff0033]/40 text-sm text-[#ff6680]">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full py-4 rounded-xl bg-[#ff0033] text-white font-bold text-base shadow-[0_0_30px_rgba(255,0,51,0.5)] hover:bg-[#e6002e] hover:shadow-[0_0_45px_rgba(255,0,51,0.7)] transition-all duration-300 flex items-center justify-center gap-2 interactive disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === "sending" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Engineering Brief
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
