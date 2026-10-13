"use client";

import { motion } from "framer-motion";
import React from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: "words" | "chars";
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.05,
  type = "words",
}: TextRevealProps) {
  const items = type === "words" ? children.split(" ") : children.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ marginRight: type === "words" ? "0.25em" : "0" }}
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface GradientTextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function GradientTextReveal({
  children,
  className = "",
  delay = 0,
}: GradientTextRevealProps) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`text-gradient bg-clip-text ${className}`}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
      }}
    >
      {children}
    </motion.span>
  );
}

interface LineRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function LineReveal({ children, className = "", delay = 0 }: LineRevealProps) {
  return (
    <span className="relative inline-block overflow-hidden">
      <motion.span
        className={`inline-block ${className}`}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
