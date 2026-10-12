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
    bio: "Strategic leader and product innovator driving SavoirLabs's growth. Salman combines deep technical expertise in full-stack development and artificial intelligence to craft transformative digital products.",
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
    bio: "Visionary engineer and architect behind SavoirLabs's core technology. Areeb specializes in building scalable AI-driven platforms and cutting-edge web systems that push the frontier of enterprise software.",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
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
                className="group relative rounded-3xl overflow-hidden border border-dark-navy/10 bg-dark-navy hover:border-teal-primary/50 hover:shadow-[0_0_60px_rgba(24,188,183,0.25)] flex flex-col transition-all duration-500"
              >
                {/* Card background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-teal-primary/5 via-transparent to-teal-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Image Section */}
                <div className="relative w-full h-80 bg-gradient-to-b from-[#0a1f2e] to-[#051824] overflow-hidden">
                  {/* Modern Animated Cyber Halo & Ambient Aura Background */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Outer Rotating Dashed Ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                      }}
                      className="w-72 h-72 rounded-full border border-dashed border-teal-primary/20 absolute"
                    />

                    {/* Counter-Rotating Orbital Ring with Teal Nodes */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                      }}
                      className="w-56 h-56 rounded-full border border-teal-primary/25 absolute flex items-center justify-between px-1.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-teal-primary shadow-[0_0_12px_#18BCB7]" />
                      <span className="w-2 h-2 rounded-full bg-teal-light shadow-[0_0_12px_#2EE6D6]" />
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
                      className="w-40 h-40 rounded-full border border-teal-primary/40 absolute shadow-[0_0_30px_rgba(24,188,183,0.25)]"
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
                      className="w-28 h-28 rounded-full bg-gradient-to-br from-teal-primary/20 to-teal-light/10 absolute blur-sm"
                    />
                  </div>

                  {/* Dynamic Teal Glow Beam Under Image */}
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.25 : 1,
                      opacity: isHovered ? 0.9 : 0.6,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 h-28 bg-teal-primary/30 rounded-full blur-3xl pointer-events-none"
                  />

                  {/* Profile image */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-72">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-contain object-bottom drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 256px, 256px"
                    />
                  </div>

                  {/* Role pills floating top */}
                  <div className="absolute top-5 left-5 flex flex-col gap-2">
                    {founder.roles.map((role, rIdx) => (
                      <motion.span
                        key={rIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + rIdx * 0.1 }}
                        className="px-3 py-1 rounded-full text-[10px] font-bold font-display uppercase tracking-wider border bg-dark-navy/80 border-teal-primary/40 text-teal-light backdrop-blur-sm"
                      >
                        {role}
                      </motion.span>
                    ))}
                  </div>

                  {/* Sparkles top-right */}
                  <motion.div
                    animate={{ rotate: isHovered ? 360 : 0 }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-teal-primary/20 border border-teal-primary/40 flex items-center justify-center"
                  >
                    <Sparkles className="w-5 h-5 text-teal-light" />
                  </motion.div>
                </div>

                {/* Bottom Info Section */}
                <div className="relative z-10 p-6 lg:p-7 flex flex-col flex-1">
                  {/* Name & Title */}
                  <div className="mb-4">
                    <span className="text-[11px] font-display text-teal-primary uppercase tracking-widest font-bold block mb-1">
                      {founder.title}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white tracking-tight group-hover:text-teal-light transition-colors duration-300">
                      {founder.name}
                    </h3>
                  </div>

                  {/* Animated Divider */}
                  <div className="w-10 h-0.5 bg-gradient-to-r from-teal-primary to-teal-light mb-4 group-hover:w-20 transition-all duration-500" />

                  {/* Bio */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {founder.bio}
                  </p>

                  {/* Skill Badges */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {founder.skills.map((skill, sIdx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.div
                          key={sIdx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + sIdx * 0.05 }}
                          whileHover={{ scale: 1.02, borderColor: "#18BCB7" }}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-teal-primary/30 transition-colors duration-300"
                        >
                          <SkillIcon className="w-3.5 h-3.5 text-teal-primary shrink-0" />
                          <span className="text-[11px] text-zinc-300 font-medium">
                            {skill.label}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                    <motion.a
                      href={founder.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-teal-primary/50 hover:bg-teal-primary/10 flex items-center justify-center transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4 text-zinc-400 hover:text-teal-light transition-colors" />
                    </motion.a>
                    <motion.a
                      href={founder.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-teal-primary/50 hover:bg-teal-primary/10 flex items-center justify-center transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-zinc-400 hover:text-teal-light transition-colors" />
                    </motion.a>
                    <motion.a
                      href={founder.socials.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-teal-primary/50 hover:bg-teal-primary/10 flex items-center justify-center transition-all duration-300"
                      aria-label="Portfolio"
                    >
                      <Globe className="w-4 h-4 text-zinc-400 hover:text-teal-light transition-colors" />
                    </motion.a>
                    <div className="ml-auto">
                      <span className="font-display text-4xl font-black text-white/10 group-hover:text-teal-primary/20 transition-colors duration-500 select-none">
                        {idx === 0 ? "01" : "02"}
                      </span>
                    </div>
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
