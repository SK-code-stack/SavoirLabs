"use client";

interface NoiseTextureProps {
  opacity?: number;
  className?: string;
}

export default function NoiseTexture({
  opacity = 0.03,
  className = ""
}: NoiseTextureProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[1] ${className}`}
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}

// Animated grain effect
export function AnimatedGrain({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9990]"
      style={{ opacity }}
    >
      <svg className="w-full h-full">
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency="0.8" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainy)" />
      </svg>
    </div>
  );
}
