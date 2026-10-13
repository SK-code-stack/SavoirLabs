"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) =>
    current.toFixed(decimals)
  );

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, spring, hasAnimated]);

  useEffect(() => {
    const unsubscribe = display.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [display]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

// Stats counter with label
interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
}

export function StatCounter({
  value,
  label,
  suffix = "",
  prefix = "",
  icon,
}: StatCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      {icon && (
        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-teal-primary/10 flex items-center justify-center text-teal-primary">
          {icon}
        </div>
      )}
      <div className="text-4xl md:text-5xl font-bold text-dark-navy mb-2">
        <AnimatedCounter
          value={value}
          prefix={prefix}
          suffix={suffix}
          duration={2.5}
        />
      </div>
      <p className="text-[#4A5568] text-sm font-medium">{label}</p>
    </motion.div>
  );
}
