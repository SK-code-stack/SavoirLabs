"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import HeroBackground from "./HeroBackground";
import MagneticButton from "./ui/MagneticButton";
import { useEffect, useState } from "react";

// Text reveal animation for individual words
const WordReveal = ({ children, delay = 0 }: { children: string; delay?: number }) => {
  const words = children.split(" ");

  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </>
  );
};

// Floating particles that follow cursor slightly
const FloatingParticle = ({
  size,
  initialX,
  initialY,
  mouseX,
  mouseY,
  strength = 0.02,
  delay = 0,
}: {
  size: number;
  initialX: string;
  initialY: string;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  strength?: number;
  delay?: number;
}) => {
  const x = useTransform(mouseX, (value) => value * strength);
  const y = useTransform(mouseY, (value) => value * strength);
  const springX = useSpring(x, { stiffness: 50, damping: 20 });
  const springY = useSpring(y, { stiffness: 50, damping: 20 });

  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-br from-teal-primary/20 to-teal-light/10 backdrop-blur-sm"
      style={{
        width: size,
        height: size,
        left: initialX,
        top: initialY,
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: 1,
      }}
      transition={{
        opacity: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.5,
          delay,
        }
      }}
    />
  );
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const features = [
    "Custom software development",
    "ERPNext implementation",
    "Workflow automation",
  ];

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-white px-4 pb-16 pt-24 sm:px-6 sm:pb-20 lg:px-8">

      {/* Three.js animated background */}
      <HeroBackground />

      {/* Floating particles that react to cursor */}
      {mounted && (
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <FloatingParticle size={80} initialX="10%" initialY="20%" mouseX={mouseX} mouseY={mouseY} strength={0.03} delay={0.1} />
          <FloatingParticle size={60} initialX="85%" initialY="15%" mouseX={mouseX} mouseY={mouseY} strength={0.04} delay={0.2} />
          <FloatingParticle size={100} initialX="75%" initialY="70%" mouseX={mouseX} mouseY={mouseY} strength={0.02} delay={0.3} />
          <FloatingParticle size={50} initialX="15%" initialY="75%" mouseX={mouseX} mouseY={mouseY} strength={0.05} delay={0.4} />
          <FloatingParticle size={70} initialX="50%" initialY="10%" mouseX={mouseX} mouseY={mouseY} strength={0.025} delay={0.5} />
        </div>
      )}

      {/* Overlay keeps the text readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/20 via-white/40 to-white/70"
      />

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full bg-teal-primary/10 px-3 py-1.5"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-primary"
            />

            <span className="text-xs font-medium text-teal-primary sm:text-sm">
              Software Engineering & Automation
            </span>
          </motion.div>

          {/* Headline with word reveal animation */}
          <h1 className="mb-6 max-w-5xl font-display text-3xl font-semibold leading-tight tracking-tight text-dark-navy sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <WordReveal delay={0.2}>Software that runs your business,</WordReveal>{" "}
            <motion.span
              className="text-gradient inline-block"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              built by engineers
            </motion.span>{" "}
            <WordReveal delay={1}>who understand it</WordReveal>
          </h1>

          {/* Description with fade in */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#4A5568] sm:text-lg md:text-xl"
          >
            We build custom software and automate workflows for growing
            businesses. No templates. No offshore teams. Just experienced
            engineers working directly with you.
          </motion.p>

          {/* Features with staggered animation */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mb-9 flex w-full flex-col items-center justify-center gap-x-6 gap-y-3 sm:mb-10 sm:flex-row sm:flex-wrap"
          >
            {features.map((feature, idx) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 1.5 + idx * 0.15,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="flex items-center justify-center gap-2 text-[#4A5568]"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1.6 + idx * 0.15,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-teal-primary" />
                </motion.div>

                <span className="text-sm font-medium sm:text-base">
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA buttons with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <MagneticButton
              href="#contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-primary to-teal-light px-6 py-3.5 text-base font-medium transition-shadow duration-200 hover:shadow-teal sm:w-auto"
              strength={0.2}
            >
              <span className="text-white">Start a Project</span>
              <ArrowRight className="h-5 w-5 text-white" />
            </MagneticButton>

            <MagneticButton
              href="#services"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-6 py-3.5 text-base font-medium text-dark-navy transition-colors duration-200 hover:border-teal-primary hover:text-teal-primary sm:w-auto"
              strength={0.2}
            >
              View Our Services
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-16 bg-gradient-to-t from-white/80 to-transparent sm:h-24"
      />
    </section>
  );
}
