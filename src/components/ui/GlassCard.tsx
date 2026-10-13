"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: "teal" | "white";
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  glowColor = "teal",
}: GlassCardProps) {
  const glowStyles = {
    teal: "hover:shadow-[0_8px_32px_rgba(24,188,183,0.15)]",
    white: "hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]",
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/70 dark:bg-white/5
        backdrop-blur-xl
        border border-white/20 dark:border-white/10
        shadow-[0_4px_24px_rgba(0,0,0,0.04)]
        ${hoverEffect ? glowStyles[glowColor] : ""}
        transition-all duration-300
        ${className}
      `}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// Dark glass variant for dark backgrounds
export function DarkGlassCard({
  children,
  className = "",
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={`
        relative overflow-hidden rounded-2xl
        bg-dark-navy/40
        backdrop-blur-xl
        border border-white/10
        shadow-[0_4px_24px_rgba(0,0,0,0.2)]
        hover:border-teal-primary/30
        hover:shadow-[0_8px_32px_rgba(24,188,183,0.15)]
        transition-all duration-300
        ${className}
      `}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-teal-primary/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
