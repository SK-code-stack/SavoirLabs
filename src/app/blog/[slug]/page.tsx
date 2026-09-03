import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, getBlogBySlug, type BlogSection } from "@/lib/blogs";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Clock, Tag, Calendar, User, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);
  if (!blog) return { title: "Not Found" };
  return {
    title: `${blog.title} | SavoirLabs Blog`,
    description: blog.excerpt,
  };
}

const categoryColors: Record<string, string> = {
  Automation: "text-[#ff0033] bg-[#ff0033]/10 border-[#ff0033]/30",
  "Artificial Intelligence": "text-blue-400 bg-blue-400/10 border-blue-400/30",
  "Cloud & Infrastructure": "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
};

function renderSection(section: BlogSection, idx: number) {
  switch (section.type) {
    case "heading":
      return (
        <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-white mt-12 mb-4 leading-tight">
          {section.text}
        </h2>
      );
    case "subheading":
      return (
        <h3 key={idx} className="text-lg sm:text-xl font-bold text-zinc-200 mt-8 mb-3 leading-snug">
          {section.text}
        </h3>
      );
    case "paragraph":
      return (
        <p key={idx} className="text-zinc-400 text-base leading-relaxed font-light">
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul key={idx} className="flex flex-col gap-3 my-2">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed font-light">
              <span className="mt-1.5 w-4 h-4 rounded-sm bg-[#ff0033]/20 border border-[#ff0033]/40 flex items-center justify-center shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff0033]" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={idx}
          className="relative my-8 px-6 py-5 rounded-xl bg-[#0d0d16] border-l-4 border-[#ff0033] text-zinc-300 italic text-base leading-relaxed"
        >
          <span className="absolute top-3 left-4 text-4xl text-[#ff0033]/20 font-serif leading-none select-none">"</span>
          <span className="relative z-10">{section.text}</span>
        </blockquote>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({ params }: Props) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) notFound();

  const related = blogs.filter((b) => b.slug !== blog.slug);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      {/* ── Nav spacer ── */}
      <div className="h-24" />

      {/* ── Hero Banner ── */}
      <section className="relative py-16 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${blog.coverGradient} opacity-70`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#ff0033] transition-colors mb-10 group self-start sm:self-center"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                categoryColors[blog.category] || "text-zinc-400 bg-zinc-800 border-zinc-700"
              }`}
            >
              <Tag className="w-3 h-3" />
              {blog.category}
            </span>
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {blog.readTime}
            </span>
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {blog.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6 text-center">
            {blog.title}
          </h1>

          {/* Excerpt */}
          <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed max-w-3xl mb-8 text-center">
            {blog.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 pt-6 border-t border-zinc-800/60">
            <div className="w-10 h-10 rounded-full bg-[#0d0d16] border border-[#ff0033]/40 flex items-center justify-center">
              <User className="w-5 h-5 text-[#ff0033]" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">{blog.author}</div>
              <div className="text-xs text-zinc-500 font-mono">{blog.authorRole}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Content ── */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom flex flex-col gap-5">
            {blog.content.map((section, idx) => renderSection(section, idx))}
          </div>
        </div>
      </section>

      {/* ── Related Articles ── */}
      <section className="py-16 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-mono text-[#ff0033] uppercase tracking-widest mb-8">
            More From SavoirLabs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((b) => (
              <Link key={b.slug} href={`/blog/${b.slug}`} className="group block">
                <div className="rounded-xl border border-zinc-800 bg-[#0b0b12] hover:border-[#ff0033]/40 transition-all duration-300 p-5 hover:shadow-[0_0_30px_rgba(255,0,51,0.08)]">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold border mb-3 ${
                      categoryColors[b.category] || "text-zinc-400 bg-zinc-800 border-zinc-700"
                    }`}
                  >
                    {b.category}
                  </span>
                  <h3 className="text-sm font-bold text-white leading-snug group-hover:text-[#ff0033] transition-colors line-clamp-2 mb-2">
                    {b.title}
                  </h3>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-zinc-500 font-mono">{b.readTime}</span>
                    <span className="text-xs text-[#ff0033] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
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
