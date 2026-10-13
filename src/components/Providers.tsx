"use client";

import { useEffect, useState } from "react";
import CursorFollower from "./ui/CursorFollower";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  useEffect(() => {
    // Check if it's a desktop device (not touch)
    const isDesktop =
      typeof window !== "undefined" &&
      !window.matchMedia("(pointer: coarse)").matches &&
      !("ontouchstart" in window);

    setShowCustomCursor(isDesktop);

    // Hide native cursor on desktop
    if (isDesktop) {
      document.body.style.cursor = "none";

      // Add style to hide cursor on all elements
      const style = document.createElement("style");
      style.id = "custom-cursor-style";
      style.textContent = `
        * { cursor: none !important; }
        a, button, [role="button"], input, textarea, select { cursor: none !important; }
      `;
      document.head.appendChild(style);

      return () => {
        document.body.style.cursor = "";
        const existingStyle = document.getElementById("custom-cursor-style");
        if (existingStyle) existingStyle.remove();
      };
    }
  }, []);

  return (
    <>
      {showCustomCursor && <CursorFollower />}
      {children}
    </>
  );
}
