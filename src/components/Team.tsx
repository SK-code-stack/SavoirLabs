"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  BrainCircuit,
  Layers,
  Sparkles,
  Github,
  Linkedin,
  Globe,
  Cpu,
} from "lucide-react";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";

const founders = [
  {
    id: "founder-01",
    name: "Muhammad Salman Khan",
    title: "Co-Founder & CEO",
    roles: ["Full Stack Engineer", "AI Engineer"],
    image: "/founder2.png",
    imageScale: 1.15,
    bio: "Strategic leader driving SavoirLabs's growth with expertise in full-stack development and AI solutions.",
    skills: [
      { label: "System Architecture", icon: Layers },
      { label: "Machine Learning", icon: BrainCircuit },
      { label: "Node / Django", icon: Code2 },
      { label: "AI Solutions", icon: Cpu },
    ],
    socials: {
      github: "https://github.com/SK-code-stack",
      linkedin: "https://www.linkedin.com/in/salman-khan-cw/",
      portfolio: "https://mskhan.me",
    },
  },
  {
    id: "founder-02",
    name: "Syed Muhammad Areeb",
    title: "Co-Founder & CTO",
    roles: ["Full Stack Engineer", "AI Engineer"],
    image: "/founder1.png",
    imageScale: 1,
    bio: "Visionary engineer behind SavoirLabs's core tech, building scalable AI platforms and modern web systems.",
    skills: [
      { label: "React / Next.js", icon: Layers },
      { label: "AI & Deep Learning", icon: BrainCircuit },
      { label: "Python / FastAPI", icon: Code2 },
      { label: "LLM Engineering", icon: Cpu },
    ],
    socials: {
      github: "https://github.com/sdareeb06",
      linkedin: "https://linkedin.com/in/syed-areeb-473597351",
      portfolio: "https://syed-areeb-portfolio-xi.vercel.app",
    },
  },
];

export default function Team() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="team"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-primary/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-light/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-primary/10 text-sm font-medium text-teal-primary uppercase tracking-wider mb-5"
          >
            <Sparkles className="w-4 h-4" />
            The Founding Team
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-dark-navy mb-4"
          >
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary to-teal-light">
              Founders
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-[#4A5568] text-lg leading-relaxed"
          >
            Two engineers. One mission. SavoirLabs was founded by a duo of
            full-stack and AI engineers passionate about building world-class
            digital products.
          </motion.p>
        </motion.div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {founders.map((founder, idx) => {
            const isHovered = hoveredId === founder.id;

            return (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onMouseEnter={() => setHoveredId(founder.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-xl overflow-hidden border border-[#E2E8F0] bg-white hover:border-teal-primary hover:shadow-lg transition-all duration-300"
              >
                {/* Top Image Section - Dark with animations */}
                <div className="relative w-full h-60 bg-gradient-to-b from-[#0a1f2e] to-[#051824] overflow-hidden">
                  {/* Modern Animated Cyber Halo & Ambient Aura Background - centered on image */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full flex items-center justify-center pointer-events-none" style={{ paddingBottom: '10%' }}>
                    {/* Outer Rotating Dashed Ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                      }}
                      className="w-52 h-52 rounded-full border border-dashed border-teal-primary/20 absolute"
                    />

                    {/* Counter-Rotating Orbital Ring with Teal Nodes */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                      }}
                      className="w-40 h-40 rounded-full border border-teal-primary/25 absolute flex items-center justify-between px-1"
                    >
                      <span className="w-2 h-2 rounded-full bg-teal-primary shadow-[0_0_10px_#18BCB7]" />
                      <span className="w-2 h-2 rounded-full bg-teal-light shadow-[0_0_10px_#2EE6D6]" />
                    </motion.div>

                    {/* Breathing Ambient Radial Pulse Ring */}
                    <motion.div
                      animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.35, 0.75, 0.35],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4.5,
                        ease: "easeInOut",
                      }}
                      className="w-32 h-32 rounded-full border border-teal-primary/40 absolute shadow-[0_0_25px_rgba(24,188,183,0.25)]"
                    />

                    {/* Inner glow ring */}
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-primary/20 to-teal-light/10 absolute blur-sm"
                    />
                  </div>

                  {/* Dynamic Teal Glow Beam Under Image */}
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.25 : 1,
                      opacity: isHovered ? 0.9 : 0.6,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-teal-primary/30 rounded-full blur-2xl pointer-events-none"
                  />

                  {/* Profile image */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 h-56">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-contain object-bottom drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 208px, 208px"
                      style={{ transform: `scale(${founder.imageScale})` }}
                    />
                  </div>

                  {/* Role pill */}
                  <div className="absolute top-3 left-3">
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-dark-navy/80 border border-teal-primary/40 text-teal-light backdrop-blur-sm"
                    >
                      {founder.roles[0]}
                    </motion.span>
                  </div>
                </div>

                {/* Bottom Info Section - Light bg like blog cards */}
                <div className="p-5">
                  {/* Title badge */}
                  <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-teal-primary/10 text-teal-primary mb-2">
                    {founder.title}
                  </span>

                  {/* Name */}
                  <h3 className="font-semibold text-dark-navy text-lg leading-snug mb-2 group-hover:text-teal-primary transition-colors">
                    {founder.name}
                  </h3>

                  {/* Bio */}
                  <p className="text-sm text-[#4A5568] mb-4">
                    {founder.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-2 pt-3 border-t border-[#E2E8F0]">
                    <motion.a
                      href={founder.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 rounded-lg bg-light-gray hover:bg-teal-primary/10 flex items-center justify-center transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4 text-[#4A5568] hover:text-teal-primary transition-colors" />
                    </motion.a>
                    <motion.a
                      href={founder.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 rounded-lg bg-light-gray hover:bg-teal-primary/10 flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-[#4A5568] hover:text-teal-primary transition-colors" />
                    </motion.a>
                    <motion.a
                      href={founder.socials.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-8 h-8 rounded-lg bg-light-gray hover:bg-teal-primary/10 flex items-center justify-center transition-colors"
                      aria-label="Portfolio"
                    >
                      <Globe className="w-4 h-4 text-[#4A5568] hover:text-teal-primary transition-colors" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 lg:mt-20 max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-teal-primary to-transparent"
        />
      </div>
    </section>
  );
}
