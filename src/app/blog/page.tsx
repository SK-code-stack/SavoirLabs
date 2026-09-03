import React from "react";
import Link from "next/link";
import { blogs } from "@/lib/blogs";
import Navbar from "@/components/Navbar";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | SavoirLabs — Insights on AI, Automation & Cloud Engineering",
  description:
    "Explore deep-dive articles on enterprise automation, AI systems engineering, cloud-native infrastructure, and the future of digital transformation from the SavoirLabs engineering team.",
};

const categoryColors: Record<string, string> = {
  Automation: "text-[#ff0033] bg-[#ff0033]/10 border-[#ff0033]/30",
  "Artificial Intelligence": "text-blue-400 bg-blue-400/10 border-blue-400/30",
  "Cloud & Infrastructure": "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
};

export default function BlogPage() {
  const [featured, ...rest] = blogs;

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      {/* ── Navbar spacer ── */}
      <div className="h-24" />

      {/* ── Page Header ── */}
      <section className="relative py-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#ff0033]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#13131d] border border-[#ff0033]/30 text-xs font-mono text-[#ff0033] uppercase tracking-widest mb-6">
              <BookOpen className="w-4 h-4" />
              Engineering Insights
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight leading-tight mb-6">
              SavoirLabs <span className="text-stroke-red">Blog</span>
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
              Deep-dive research and engineering perspectives on AI, automation, cloud systems, and the future of enterprise software.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Article ── */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="relative rounded-3xl overflow-hidden border border-[#ff0033]/25 bg-[#0b0b12] hover:border-[#ff0033]/60 transition-all duration-500 shadow-[0_0_60px_rgba(0,0,0,0.8)] hover:shadow-[0_0_80px_rgba(255,0,51,0.15)]">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${featured.coverGradient} opacity-60`} />

              <div className="relative z-10 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${categoryColors[featured.category] || "text-zinc-400 bg-zinc-800 border-zinc-700"}`}>
                      <Tag className="w-3 h-3" />
                      {featured.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featured.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight group-hover:text-[#ff0033] transition-colors duration-300">
                    {featured.title}
                  </h2>

                  <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                    {featured.excerpt}
                  </p>

                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">{featured.author}</span>
                      <span className="text-xs text-zinc-500">{featured.date}</span>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-full max-w-sm aspect-video rounded-2xl border border-[#ff0033]/20 bg-[#0d0d16] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff0033]/5 to-transparent" />
                    <div className="text-center relative z-10 p-8">
                      <div className="text-7xl font-black text-[#ff0033]/20 leading-none mb-2 font-mono">01</div>
                      <div className="text-xs font-mono text-[#ff0033] uppercase tracking-widest">Featured Article</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 z-10">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#ff0033] group-hover:gap-4 transition-all duration-300">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Rest of Articles ── */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8 border-b border-zinc-900 pb-4">
            More Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((blog, idx) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group block">
                <div className="relative h-full rounded-2xl border border-zinc-800 bg-[#0b0b12] hover:border-[#ff0033]/50 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_rgba(255,0,51,0.1)]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${blog.coverGradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

                  <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-4 h-full">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ${categoryColors[blog.category] || "text-zinc-400 bg-zinc-800 border-zinc-700"}`}>
                        <Tag className="w-3 h-3" />
                        {blog.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blog.readTime}
                      </span>
                    </div>

                    <div className="text-2xl font-black text-zinc-800 font-mono leading-none select-none absolute top-4 right-5 opacity-40">
                      0{idx + 2}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#ff0033] transition-colors duration-300 flex-1">
                      {blog.title}
                    </h3>

                    <p className="text-zinc-400 text-sm font-light leading-relaxed line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-zinc-900">
                      <span className="text-xs text-zinc-500 font-mono">{blog.date}</span>
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#ff0033] group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
