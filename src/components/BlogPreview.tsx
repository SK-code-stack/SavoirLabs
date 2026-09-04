"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import { blogs } from "@/lib/blogs";

const categoryColors: Record<string, string> = {
  Automation: "text-[#ff0033] bg-[#ff0033]/10 border-[#ff0033]/30",
  "Artificial Intelligence": "text-blue-400 bg-blue-400/10 border-blue-400/30",
  "Cloud & Infrastructure": "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
};

export default function BlogPreview() {
  return (
    <section id="blog" className="py-28 bg-[#050505] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#ff0033]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#13131d] border border-[#ff0033]/30 text-xs font-mono text-[#ff0033] uppercase tracking-widest mb-3 font-bold">
            <BookOpen className="w-4 h-4" />
            Engineering Insights
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight leading-tight">
            From Our <span className="text-stroke-red">Research Lab</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-xl font-light">
            Deep-dive articles on AI, automation, and cloud systems from the SavoirLabs engineering team.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff0033] hover:gap-4 transition-all duration-300 whitespace-nowrap group mt-4"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={`/blog/${blog.slug}`} className="group block h-full">
                <div className="relative h-full rounded-2xl border border-zinc-800 bg-[#0b0b12] hover:border-[#ff0033]/50 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_rgba(255,0,51,0.15)] flex flex-col">
                  {/* Top Cover Image Container */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/40 border-b border-zinc-800/80">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-black/30 to-transparent" />
                    
                    {/* Category Badge overlay on image */}
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${categoryColors[blog.category] || "text-zinc-400 bg-zinc-800/80 border-zinc-700"
                          }`}
                      >
                        <Tag className="w-3 h-3" />
                        {blog.category}
                      </span>
                    </div>

                    {/* Watermark index badge */}
                    <div className="absolute top-2 right-3 text-3xl font-black text-white/30 font-mono select-none drop-shadow-md">
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    {/* Meta Read Time */}
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#ff0033]" />
                        {blog.readTime}
                      </span>
                      <span className="text-zinc-500">{blog.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#ff0033] transition-colors duration-300 flex-1">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-zinc-400 text-sm font-light leading-relaxed line-clamp-2">
                      {blog.excerpt}
                    </p>

                    {/* Footer CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-900 mt-auto">
                      <span className="text-xs text-zinc-500 font-mono">Read Article</span>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#ff0033] group-hover:translate-x-1 transition-all">
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
