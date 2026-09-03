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
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#13131d] border border-[#ff0033]/30 text-xs font-mono text-[#ff0033] uppercase tracking-widest mb-4">
              <BookOpen className="w-4 h-4" />
              Engineering Insights
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight leading-tight">
              From Our <span className="text-stroke-red">Research Lab</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-xl font-light">
              Deep-dive articles on AI, automation, and cloud systems from the SavoirLabs engineering team.
            </p>
          </div>

          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-semibold text-[#ff0033] hover:gap-4 transition-all duration-300 whitespace-nowrap group"
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
                <div className="relative h-full rounded-2xl border border-zinc-800 bg-[#0b0b12] hover:border-[#ff0033]/50 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_rgba(255,0,51,0.1)] flex flex-col">
                  {/* Gradient top accent */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${blog.coverGradient} opacity-80`} />

                  <div className="p-6 flex flex-col gap-4 flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                          categoryColors[blog.category] || "text-zinc-400 bg-zinc-800 border-zinc-700"
                        }`}
                      >
                        <Tag className="w-3 h-3" />
                        {blog.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blog.readTime}
                      </span>
                    </div>

                    {/* Article number watermark */}
                    <div className="text-6xl font-black text-zinc-900 font-mono leading-none select-none absolute top-4 right-5 opacity-60">
                      0{idx + 1}
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-[#ff0033] transition-colors duration-300 flex-1 relative z-10">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-zinc-500 text-sm font-light leading-relaxed line-clamp-2">
                      {blog.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-zinc-900 mt-auto">
                      <span className="text-xs text-zinc-600 font-mono">{blog.date}</span>
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#ff0033] group-hover:gap-2 transition-all">
                        Read Article <ArrowRight className="w-3.5 h-3.5" />
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
