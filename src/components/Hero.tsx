"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Play, ShieldCheck, Terminal } from "lucide-react";
import ThreeCanvas from "./ThreeCanvas";

export default function Hero() {

  return (
    <section className="relative min-h-screen w-full bg-[#050505] bg-radar-grid flex items-center justify-center overflow-hidden pt-36 pb-16">
      {/* 3D Interactive Canvas & Graphics Background */}
      <ThreeCanvas />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-4">

        {/* Welcome Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d0d14] border border-[#ff0033]/40 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,0,51,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff0033] animate-ping" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-300 ">
            Welcome to <span className="text-[#ff0033] font-bold">SavoirLabs</span>
          </span>
        </motion.div>

        {/* Main Headline - Solid High-Visibility White & Red */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight uppercase max-w-5xl leading-tight sm:leading-none mb-8 text-center"
        >
          <span className="block text-white transition-all duration-500 cursor-default select-none drop-shadow-md">
            PARTNER FOR
          </span>
          <span className="block text-[#ff0033] transition-all duration-500 cursor-default select-none mt-2">
            YOUR DIGITAL FUTURE
          </span>
        </motion.h1>

        {/* Subtext Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Architecting robust enterprise software, scalable AI infrastructure, and custom cloud-native solutions designed for high-impact global businesses.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#ff0033] text-white font-bold text-base tracking-wide flex items-center justify-center gap-3 hover:bg-[#e6002e] shadow-[0_0_35px_rgba(255,0,51,0.5)] hover:shadow-[0_0_50px_rgba(255,0,51,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 interactive"
          >
            Explore Solutions
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#estimator"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0e0e16] border border-zinc-800 text-zinc-200 font-semibold text-base flex items-center justify-center gap-3 hover:border-[#ff0033]/60 hover:text-white transition-all duration-300 interactive"
          >
            <Terminal className="w-5 h-5 text-[#ff0033]" />
            Project Scope Estimator
          </a>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-zinc-900/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 text-left max-w-4xl w-full"
        >
          {[
            { label: "Enterprise Projects", value: "350+", dotColor: "bg-[#ff0033] shadow-[0_0_10px_#ff0033]" },
            { label: "System Uptime SLA", value: "99.99%", dotColor: "bg-[#10b981] shadow-[0_0_10px_#10b981]" },
            { label: "Global Tech Markets", value: "18+", dotColor: "bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" },
            { label: "Dedicated Engineers", value: "120+", dotColor: "bg-[#a855f7] shadow-[0_0_10px_#a855f7]" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center gap-1.5">
                {stat.value}
                <span className={`w-2 h-2 rounded-full ${stat.dotColor}`} />
              </span>
              <span className="text-xs text-zinc-400 uppercase tracking-wider mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
