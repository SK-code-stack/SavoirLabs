"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

let isClientNavigation = false;

export default function Preloader() {
  const pathname = usePathname();
  const [showPreloader, setShowPreloader] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING CORE ARCHITECTURE...");

  useEffect(() => {
    // 1. Skip on internal SPA route changes (clicking Home <-> Blog)
    if (isClientNavigation) {
      return;
    }
    isClientNavigation = true;

    // 2. Check if page is ALREADY complete right now
    if (document.readyState === "complete") {
      return;
    }

    let isFinished = false;
    let progressInterval: NodeJS.Timeout | null = null;
    let fallbackTimeout: NodeJS.Timeout | null = null;

    // Finish & hide preloader helper
    const finishLoading = () => {
      if (isFinished) return;
      isFinished = true;
      setProgress(100);
      setStatusText("SYSTEM SLA OPERATIONAL [99.99%]");

      setTimeout(() => {
        setShowPreloader(false);
      }, 400);
    };

    // 3. Threshold Timer: Wait 1.5 seconds (1500ms).
    // If page load completes within 1.5s, preloader NEVER shows.
    // Only show preloader if page takes longer than 1.5 seconds.
    const delayTimer = setTimeout(() => {
      if (document.readyState === "complete" || isFinished) {
        return;
      }

      // Page is still loading after 1.5s -> show preloader!
      setShowPreloader(true);

      // Start progress animation once preloader becomes visible
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            if (document.readyState === "complete") {
              if (progressInterval) clearInterval(progressInterval);
              finishLoading();
              return 100;
            }
            return 95;
          }

          const next = prev + Math.floor(Math.random() * 15) + 5;
          if (next >= 30 && prev < 30) {
            setStatusText("LOADING NEURAL AI ENGINE...");
          } else if (next >= 65 && prev < 65) {
            setStatusText("COMPILING KUBERNETES BLUEPRINTS...");
          }

          return next > 95 ? 95 : next;
        });
      }, 90);

      fallbackTimeout = setTimeout(() => {
        if (progressInterval) clearInterval(progressInterval);
        finishLoading();
      }, 2500);
    }, 1500);

    const handleWindowLoad = () => {
      if (isFinished) return;
      if (showPreloader) {
        if (progressInterval) clearInterval(progressInterval);
        finishLoading();
      } else {
        clearTimeout(delayTimer);
      }
    };

    window.addEventListener("load", handleWindowLoad);

    return () => {
      clearTimeout(delayTimer);
      if (progressInterval) clearInterval(progressInterval);
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, [pathname]);

  if (!showPreloader) {
    return null;
  }

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden selection:bg-[#ff0033] selection:text-white"
        >
          {/* Cyber Radar Grid Background */}
          <div className="absolute inset-0 bg-radar-grid opacity-50 pointer-events-none" />

          {/* Red Glowing Laser Scanline */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ff0033] to-transparent shadow-[0_0_25px_#ff0033] opacity-60 pointer-events-none"
          />

          {/* Central Monogram & Branding */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative flex items-center justify-center w-20 h-20 bg-[#0d0d14] border-2 border-[#ff0033] rounded-2xl shadow-[0_0_50px_rgba(255,0,51,0.5)] overflow-hidden"
            >
              <span className="font-extrabold text-3xl text-white tracking-tighter">
                S<span className="text-[#ff0033]">V</span>L
              </span>
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#ff0033] shadow-[0_0_10px_#ff0033]" />
            </motion.div>

            <div className="flex flex-col items-center">
              <span className="font-extrabold text-2xl tracking-widest text-white">
                SAVOIR<span className="text-[#ff0033]">LABS</span>
              </span>
              <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase mt-1">
                ENTERPRISE DIGITAL SYSTEMS
              </span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-72 sm:w-80 mt-6 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#ff0033]" />
                  SYS_BOOT
                </span>
                <span className="font-bold text-[#ff0033]">{progress}%</span>
              </div>

              {/* Bar track */}
              <div className="h-1.5 w-full bg-[#12121c] rounded-full overflow-hidden border border-zinc-800 relative">
                <motion.div
                  className="h-full bg-[#ff0033] shadow-[0_0_15px_#ff0033]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Status Message Logger */}
              <div className="text-[11px] font-mono text-zinc-500 text-center truncate tracking-wide h-4">
                {statusText}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
