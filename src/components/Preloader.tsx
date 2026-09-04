"use client";

import React, { useState, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Terminal } from "lucide-react";

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING CORE ARCHITECTURE...");

  // useLayoutEffect runs synchronously before the browser paints anything.
  // Combined with the inline script in layout.tsx that hides the document,
  // this ensures the preloader is visible BEFORE any page content appears.
  useLayoutEffect(() => {
    // Skip if this session already saw the preloader (SPA navigations, etc.)
    const alreadyLoaded = sessionStorage.getItem("svl_preloader_done");
    if (alreadyLoaded) {
      // Ensure visibility is restored in case it was hidden
      document.documentElement.style.visibility = "";
      return;
    }

    // If somehow the page is already done loading, skip gracefully
    if (document.readyState === "complete") {
      sessionStorage.setItem("svl_preloader_done", "1");
      document.documentElement.style.visibility = "";
      return;
    }

    // Show the preloader — the document is still hidden by the inline script
    setShowPreloader(true);
    // Reveal the document now — the preloader is fixed on top, hiding content
    document.documentElement.style.visibility = "";

    let isFinished = false;
    let progressInterval: NodeJS.Timeout | null = null;

    const finishLoading = () => {
      if (isFinished) return;
      isFinished = true;
      if (progressInterval) clearInterval(progressInterval);
      setProgress(100);
      setStatusText("SYSTEM SLA OPERATIONAL [99.99%]");
      sessionStorage.setItem("svl_preloader_done", "1");
      setTimeout(() => setShowPreloader(false), 500);
    };

    // Animate the progress bar
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return 95;
        const next = prev + Math.floor(Math.random() * 12) + 4;
        if (next >= 30 && prev < 30) setStatusText("LOADING NEURAL AI ENGINE...");
        else if (next >= 65 && prev < 65) setStatusText("COMPILING KUBERNETES BLUEPRINTS...");
        return next > 95 ? 95 : next;
      });
    }, 80);

    // Dismiss as soon as all assets are loaded
    window.addEventListener("load", finishLoading);

    // Hard fallback: dismiss after 2.5s no matter what
    const fallback = setTimeout(finishLoading, 2500);

    return () => {
      if (progressInterval) clearInterval(progressInterval);
      window.removeEventListener("load", finishLoading);
      clearTimeout(fallback);
    };
  }, []); // Runs once — on first client mount only

  if (!showPreloader) return null;

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
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

          {/* Central Logo */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <Image
                src="/logo.png"
                alt="SavoirLabs Logo"
                width={320}
                height={128}
                className="h-32 w-auto object-contain drop-shadow-[0_0_40px_rgba(255,0,51,0.6)]"
                priority
              />
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-72 sm:w-96 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#ff0033]" />
                  SYS_BOOT
                </span>
                <span className="font-bold text-[#ff0033]">{progress}%</span>
              </div>

              {/* Bar track */}
              <div className="h-1.5 w-full bg-[#12121c] rounded-full overflow-hidden border border-zinc-800">
                <motion.div
                  className="h-full bg-[#ff0033] shadow-[0_0_15px_#ff0033]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Status Message */}
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
