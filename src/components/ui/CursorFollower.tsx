"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.magnetic;

      const isTextElement =
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "H4" ||
        target.tagName === "H5" ||
        target.tagName === "H6" ||
        target.tagName === "P" ||
        target.tagName === "SPAN" ||
        target.tagName === "LABEL";

      if (isInteractive || isTextElement) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          mixBlendMode: isHovering ? "difference" : "normal",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2.5 : 1,
            opacity: isVisible ? (isHovering ? 0.8 : 1) : 0,
          }}
          transition={{ duration: 0.2 }}
          className="relative -left-2 -top-2 h-4 w-4 rounded-full"
          style={{ backgroundColor: isHovering ? "#ffffff" : "#18BCB7" }}
        />
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          mixBlendMode: isHovering ? "difference" : "normal",
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2 : 1,
            opacity: isVisible ? (isHovering ? 0.5 : 0.4) : 0,
          }}
          transition={{ duration: 0.3 }}
          className="relative -left-5 -top-5 h-10 w-10 rounded-full border-2"
          style={{ borderColor: isHovering ? "rgba(255, 255, 255, 0.7)" : "rgba(24, 188, 183, 0.5)" }}
        />
      </motion.div>
    </>
  );
}
