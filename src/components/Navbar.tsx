"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, PhoneCall, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Tech Stack", href: "/#tech-stack" },
    { name: "Case Studies", href: "/#projects" },
    { name: "Our Process", href: "/#process" },
    { name: "Estimator", href: "/#estimator" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#050505]/90 backdrop-blur-xl border-b border-[#ff0033]/20 shadow-2xl shadow-black/80"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - SavoirLabs Style Monogram */}
          <Link href="/" className="group flex items-center gap-3 interactive">
            <div className="relative flex items-center justify-center w-10 h-10 bg-[#0d0d14] border border-[#ff0033]/60 rounded-md overflow-hidden group-hover:border-[#ff0033] group-hover:shadow-[0_0_20px_rgba(255,0,51,0.5)] transition-all duration-300">
              <span className="font-extrabold text-lg text-white tracking-tighter">
                S<span className="text-[#ff0033]">V</span>L
              </span>
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#ff0033]" />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-wider text-white flex items-center gap-0.5">
                SAVOIR<span className="text-[#ff0033]">LABS</span>
              </span>
              <span className="text-[10px] tracking-widest text-zinc-500 uppercase -mt-1 font-mono">
                DIGITAL SYSTEMS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 bg-[#0a0a10]/60 border border-zinc-800/80 px-6 py-2 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-[#ff0033] transition-colors relative py-1 group interactive"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff0033] group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#ff0033]" />
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-transparent border border-[#ff0033]/60 overflow-hidden group hover:border-[#ff0033] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,51,0.4)] interactive"
            >
              <span className="absolute inset-0 w-full h-full bg-[#ff0033] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#ff0033] group-hover:text-white transition-colors" />
                Schedule Call
                <ArrowRight className="w-4 h-4 text-[#ff0033] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Menu Icon (NexTash Two-Bar Style) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-zinc-800 bg-[#0c0c12] text-white hover:border-[#ff0033] transition-colors interactive"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#ff0033]" />
            ) : (
              <div className="flex flex-col gap-1.5 w-5">
                <span className="w-full h-0.5 bg-white rounded-full" />
                <span className="w-3/4 h-0.5 bg-[#ff0033] rounded-full self-end" />
              </div>
            )}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-center px-8 pt-24 pb-12 border-b border-[#ff0033]/30 md:hidden"
          >
            <div className="flex flex-col gap-6 max-w-md mx-auto w-full">
              <span className="text-xs tracking-widest text-[#ff0033] font-mono uppercase border-b border-zinc-800 pb-2">
                Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-[#ff0033] transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-[#ff0033] group-hover:translate-x-2 transition-all" />
                </motion.a>
              ))}

              <div className="pt-6 border-t border-zinc-800 flex flex-col gap-4">
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 text-center rounded-xl bg-[#ff0033] text-white font-bold text-lg shadow-[0_0_30px_rgba(255,0,51,0.5)] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
