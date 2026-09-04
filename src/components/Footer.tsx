"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Github, Linkedin, Twitter, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030305] border-t border-[#ff0033]/20 pt-16 pb-12 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-zinc-900">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="SavoirLabs Logo"
                width={180}
                height={56}
                className=" object-contain"
              />
            </div>

            <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-sm">
              Architecting high-scale enterprise software, ERP automation systems, and high-availability cloud infrastructure for industry leaders worldwide.
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 bg-[#07130b] px-3 py-1.5 rounded-lg border border-emerald-900/60 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              SYSTEM SLA STATUS: OPERATIONAL (99.999%)
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono text-[#ff0033] uppercase tracking-widest block mb-4 font-bold">
              Engineering Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-zinc-400 font-light">
              <li><a href="/#services" className="hover:text-[#ff0033] transition-colors">ERP & Business Automation</a></li>
              <li><a href="/#services" className="hover:text-[#ff0033] transition-colors">Enterprise AI & Neural Systems</a></li>
              <li><a href="/#services" className="hover:text-[#ff0033] transition-colors">Cloud Native & Kubernetes</a></li>
              <li><a href="/#services" className="hover:text-[#ff0033] transition-colors">Cybersecurity & Hardening</a></li>
              <li><a href="/#services" className="hover:text-[#ff0033] transition-colors">Data Engineering & Analytics</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono text-[#ff0033] uppercase tracking-widest block mb-4 font-bold">
              Company & Resources
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-zinc-400 font-light mb-6">
              <li><a href="/#projects" className="hover:text-[#ff0033] transition-colors">Enterprise Case Studies</a></li>
              <li><a href="/#tech-stack" className="hover:text-[#ff0033] transition-colors">Architectural Blueprint</a></li>
              <li><a href="/#process" className="hover:text-[#ff0033] transition-colors">Execution Lifecycle</a></li>
              <li><a href="/#estimator" className="hover:text-[#ff0033] transition-colors">Project Scope Estimator</a></li>
              <li><a href="/blog" className="hover:text-[#ff0033] transition-colors">Blog & Insights</a></li>
              <li><a href="/faq" className="hover:text-[#ff0033] transition-colors">Frequently Asked Questions (FAQ)</a></li>
            </ul>

            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-[#0f0f18] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ff0033] hover:border-[#ff0033] transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#0f0f18] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ff0033] hover:border-[#ff0033] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#0f0f18] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#ff0033] hover:border-[#ff0033] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} SavoirLabs Technologies Inc. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-[#ff0033] transition-colors group interactive"
          >
            Back to Top
            <div className="w-7 h-7 rounded-full bg-[#0d0d16] border border-zinc-800 flex items-center justify-center group-hover:border-[#ff0033] group-hover:bg-[#ff0033] group-hover:text-white transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
