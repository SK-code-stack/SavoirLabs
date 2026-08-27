"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("interactive"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer Target Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#ff0033]/60 mix-blend-screen hidden lg:block"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          scale: isClicking ? 0.75 : isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(255, 0, 51, 0.15)" : "rgba(255, 0, 51, 0)",
          borderColor: isHovered ? "#ff0033" : "rgba(255, 0, 51, 0.5)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.5 }}
        style={{
          width: 32,
          height: 32,
          boxShadow: isHovered ? "0 0 20px rgba(255, 0, 51, 0.6)" : "none",
        }}
      />

      {/* Inner Crimson Center Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-[#ff0033] hidden lg:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicking ? 1.8 : isHovered ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 900, damping: 40 }}
        style={{
          width: 8,
          height: 8,
          boxShadow: "0 0 10px #ff0033",
        }}
      />
    </>
  );
}
