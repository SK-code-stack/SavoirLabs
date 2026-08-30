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
  Star,
  Cpu,
} from "lucide-react";

const founders = [
  {
    id: "founder-01",
    name: "Muhammad Salman Khan",
    title: "Co-Founder & CEO",
    roles: ["Full Stack Engineer", "AI Engineer"],
    image: "/founder2.png",
    bio: "Strategic leader and product innovator driving Softnex's growth. Salman combines deep technical expertise in full-stack development and artificial intelligence to craft transformative digital products for global markets.",
    skills: [
      { label: "System Architecture", icon: Layers },
      { label: "Machine Learning", icon: BrainCircuit },
      { label: "Node / Django", icon: Code2 },
      { label: "AI Solutions", icon: Cpu },
    ],
    accentColor: "#ff0033",
    glowColor: "rgba(255,0,51,0.35)",
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
    bio: "Visionary engineer and architect behind Softnex's core technology. Areeb specializes in building scalable AI-driven platforms and cutting-edge web systems that push the frontier of enterprise software.",
    skills: [
      { label: "React / Next.js", icon: Layers },
      { label: "AI & Deep Learning", icon: BrainCircuit },
      { label: "Python / FastAPI", icon: Code2 },
      { label: "LLM Engineering", icon: Cpu },
    ],
    accentColor: "#ff0033",
    glowColor: "rgba(255,0,51,0.35)",
    socials: {
      github: "https://github.com/sdareeb06",
      linkedin: "https://linkedin.com/in/syed-areeb-473597351",
      portfolio: "https://syed-areeb-portfolio-xi.vercel.app",
    },
  },
];

export default function Founders() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="founders" className="py-28 bg-[#07070b] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ff0033]/8 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#ff0033]/6 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,0,51,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,51,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#13131d] border border-[#ff0033]/30 text-xs font-mono text-[#ff0033] uppercase tracking-widest mb-5"
          >
            <Star className="w-4 h-4" />
            The Founding Team
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-tight"
          >
            Built by{" "}
            <span className="text-stroke-red">Visionaries</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg mt-4 font-light leading-relaxed"
          >
            Two engineers. One mission. Softnex was founded by a duo of full-stack and AI engineers passionate about building world-class digital products.
          </motion.p>
        </div>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch max-w-5xl mx-auto">
          {founders.map((founder, idx) => {
            const isHovered = hoveredId === founder.id;

            return (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                onMouseEnter={() => setHoveredId(founder.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-3xl overflow-hidden border border-zinc-800 bg-[#0b0b12] hover:border-[#ff0033]/60 transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,0,51,0.3)] flex flex-col"
              >
                {/* Card background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#ff0033]/5 via-transparent to-[#ff0033]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Image Section */}
                <div className="relative w-full h-80 bg-gradient-to-b from-[#111118] to-[#0a0a10] overflow-hidden">
                  {/* Decorative background rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-72 h-72 rounded-full border border-[#ff0033]/10 absolute" />
                    <div className="w-56 h-56 rounded-full border border-[#ff0033]/8 absolute" />
                    <div className="w-40 h-40 rounded-full border border-[#ff0033]/6 absolute" />
                  </div>

                  {/* Bottom red glow under image */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#ff0033]/20 rounded-full blur-3xl" />

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
                      <span
                        key={rIdx}
                        className="px-3 py-1 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider border bg-[#0d0d14]/90 border-[#ff0033]/40 text-[#ff0033] backdrop-blur-sm"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  {/* Sparkles top-right */}
                  <motion.div
                    animate={{ rotate: isHovered ? 360 : 0 }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#ff0033]/20 border border-[#ff0033]/40 flex items-center justify-center"
                  >
                    <Sparkles className="w-4 h-4 text-[#ff0033]" />
                  </motion.div>
                </div>

                {/* Bottom Info Section */}
                <div className="relative z-10 p-7 flex flex-col flex-1">
                  {/* Name & Title */}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-[#ff0033] uppercase tracking-widest font-bold block mb-1">
                      {founder.title}
                    </span>
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {founder.name}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="w-10 h-0.5 bg-[#ff0033] mb-4 group-hover:w-20 transition-all duration-500" />

                  {/* Bio */}
                  <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6">
                    {founder.bio}
                  </p>

                  {/* Skill Badges */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {founder.skills.map((skill, sIdx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={sIdx}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111118] border border-zinc-800 group-hover:border-[#ff0033]/30 transition-colors duration-300"
                        >
                          <SkillIcon className="w-3.5 h-3.5 text-[#ff0033] shrink-0" />
                          <span className="text-[11px] text-zinc-300 font-medium">{skill.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 mt-auto">
                    <a
                      href={founder.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-[#0e0e18] border border-zinc-800 hover:border-[#ff0033]/50 hover:bg-[#ff0033]/10 flex items-center justify-center transition-all duration-300 interactive"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4 text-zinc-400 hover:text-[#ff0033] transition-colors" />
                    </a>
                    <a
                      href={founder.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-[#0e0e18] border border-zinc-800 hover:border-[#ff0033]/50 hover:bg-[#ff0033]/10 flex items-center justify-center transition-all duration-300 interactive"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-zinc-400 hover:text-[#ff0033] transition-colors" />
                    </a>
                    <a
                      href={founder.socials.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-[#0e0e18] border border-zinc-800 hover:border-[#ff0033]/50 hover:bg-[#ff0033]/10 flex items-center justify-center transition-all duration-300 interactive"
                      title="Portfolio"
                    >
                      <Globe className="w-4 h-4 text-zinc-400 hover:text-[#ff0033] transition-colors" />
                    </a>
                    <div className="ml-auto">
                      <span className="font-mono text-3xl font-black text-zinc-800 group-hover:text-[#ff0033]/20 transition-colors duration-500 select-none">
                        {idx === 0 ? "01" : "02"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-[#ff0033]/60 to-transparent"
        />
      </div>
    </section>
  );
}
