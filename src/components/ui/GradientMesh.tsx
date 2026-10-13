"use client";

import { motion } from "framer-motion";

interface GradientMeshProps {
  className?: string;
  variant?: "hero" | "section" | "subtle";
}

export default function GradientMesh({
  className = "",
  variant = "section",
}: GradientMeshProps) {
  const variants = {
    hero: (
      <>
        {/* Primary teal blob */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-primary/20 blur-[120px]"
        />
        {/* Secondary teal light blob */}
        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -30, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-teal-light/15 blur-[100px]"
        />
        {/* Accent blob */}
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -20, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-[#0a2540]/10 blur-[80px]"
        />
      </>
    ),
    section: (
      <>
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-teal-primary/10 blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 0.95, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-teal-light/10 blur-[120px]"
        />
      </>
    ),
    subtle: (
      <>
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-teal-primary/5 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-teal-light/5 blur-[120px]" />
      </>
    ),
  };

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {variants[variant]}
    </div>
  );
}

// Animated gradient border effect
export function GradientBorder({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative p-[1px] rounded-2xl overflow-hidden ${className}`}>
      {/* Animated gradient border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-conic from-teal-primary via-teal-light to-teal-primary"
        style={{ margin: "-50%" }}
      />
      {/* Content with background */}
      <div className="relative bg-white dark:bg-dark-navy rounded-2xl">
        {children}
      </div>
    </div>
  );
}
