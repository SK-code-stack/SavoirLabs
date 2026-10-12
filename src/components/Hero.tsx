"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { useState, useEffect } from "react";

export default function Hero() {
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [shouldRenderSpline, setShouldRenderSpline] = useState(false);

  useEffect(() => {
    // Check if device can handle Spline (not mobile, no reduced motion preference)
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setShouldRenderSpline(!isMobile && !prefersReducedMotion);
  }, []);

  const features = [
    "Custom software development",
    "ERPNext implementation",
    "Workflow automation",
  ];

  return (
    <section className="relative min-h-screen w-full bg-white flex items-center overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">
      {/* Spline Background Animation */}
      {shouldRenderSpline && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Loading state gradient */}
          {!splineLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-teal-light/10 via-white to-teal-primary/5 animate-pulse" />
          )}
          {/* Spline iframe - full background */}
          <iframe
            src="https://my.spline.design/claritystream-GDo5M0ccUgNTtZNCbeaLRwBe/"
            frameBorder="0"
            width="100%"
            height="100%"
            onLoad={() => setSplineLoaded(true)}
            style={{
              opacity: splineLoaded ? 0.6 : 0,
              transition: "opacity 0.8s ease-in-out",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="Background Animation"
            allow="autoplay"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/40" />
        </div>
      )}

      {/* Fallback gradient for mobile/reduced motion */}
      {!shouldRenderSpline && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-teal-light/20 to-teal-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-teal-primary/10 to-teal-light/5 rounded-full blur-3xl"
          />
        </div>
      )}

      {/* Bottom blur/fade to merge with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Wave-like blur effect at bottom edges */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="0.8" />
              <stop offset="100%" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-center">
          {/* Center Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-center"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-primary/10 mb-6"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-teal-primary"
              />
              <span className="text-sm font-medium text-teal-primary">
                Software Engineering & Automation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-dark-navy leading-tight tracking-tight mb-6"
            >
              Software that runs your business,{" "}
              <span className="text-gradient">built by engineers</span>{" "}
              who understand it
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#4A5568] leading-relaxed mb-8 max-w-2xl mx-auto"
            >
              We build custom software and automate workflows for growing businesses.
              No templates. No offshore teams. Just experienced engineers working directly with you.
            </motion.p>

            {/* Feature list */}
            <motion.ul
              variants={fadeInUp}
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-6 gap-y-3 mb-10"
            >
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.3 }}
                  className="flex items-center gap-2 text-[#4A5568]"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-medium text-white bg-gradient-to-r from-teal-primary to-teal-light hover:shadow-teal transition-shadow duration-200"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02, borderColor: "#18BCB7" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-medium text-dark-navy bg-white/80 backdrop-blur-sm border border-[#E2E8F0] hover:text-teal-primary transition-colors duration-200"
              >
                View Our Services
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
