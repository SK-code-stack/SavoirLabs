"use client";

import { memo, useState, useEffect } from "react";

/**
 * Hero3DVisual - Spline "Clarity Stream" 3D effect via iframe
 */

interface Hero3DVisualProps {
  className?: string;
}

function Hero3DVisualComponent({ className = "" }: Hero3DVisualProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    setShouldRender(!isMobile && !prefersReducedMotion);
  }, []);

  // Fallback for mobile
  if (!shouldRender) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/20 via-teal-light/30 to-teal-primary/10 rounded-2xl" />
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/20 via-teal-light/30 to-teal-primary/10 rounded-2xl animate-pulse z-10" />
      )}

      {/* Spline via iframe */}
      <iframe
        src="https://my.spline.design/claritystream-GDo5M0ccUgNTtZNCbeaLRwBe/"
        frameBorder="0"
        width="100%"
        height="100%"
        onLoad={() => setIsLoaded(true)}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          borderRadius: "16px",
        }}
        title="3D Visual Effect"
        allow="autoplay"
      />
    </div>
  );
}

const Hero3DVisual = memo(Hero3DVisualComponent);
export default Hero3DVisual;
