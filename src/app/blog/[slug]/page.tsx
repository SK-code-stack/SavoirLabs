import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogs, getBlogBySlug, type BlogSection } from "@/lib/blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
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

  const siteUrl = 'https://savoirlabs.com';

  return {
    title: `${blog.title} | SavoirLabs Blog`,
    description: blog.excerpt,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `${siteUrl}/blog/${blog.slug}`,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      images: [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  };
}

function renderSection(section: BlogSection, idx: number) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          key={idx}
          className="text-2xl font-semibold text-dark-navy mt-10 mb-4"
        >
          {section.text}
        </h2>
      );
    case "subheading":
      return (
        <h3
          key={idx}
          className="text-xl font-semibold text-dark-navy mt-8 mb-3"
        >
          {section.text}
        </h3>
      );
    case "paragraph":
      return (
        <p key={idx} className="text-[#4A5568] leading-relaxed">
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul key={idx} className="space-y-2 my-4">
          {section.items?.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[#4A5568]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-primary mt-2.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={idx}
          className="my-8 pl-6 border-l-4 border-teal-primary text-[#4A5568] italic"
        >
          {section.text}
        </blockquote>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({ params }: Props) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) notFound();

  const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 2);

  // Generate BlogPosting Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "image": blog.coverImage ? `https://savoirlabs.com${blog.coverImage}` : undefined,
    "datePublished": blog.date,
    "author": {
      "@type": "Person",
      "name": blog.author,
      "jobTitle": blog.authorRole
    },
    "publisher": {
      "@type": "Organization",
      "name": "SavoirLabs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://savoirlabs.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://savoirlabs.com/blog/${blog.slug}`
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* BlogPosting JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <Navbar />

      {/* Article */}
      <article className="flex-1">
        {/* Header */}
        <header className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-light-gray">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#718096] hover:text-teal-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-teal-primary/10 text-teal-primary">
                {blog.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-[#718096]">
                <Clock className="w-4 h-4" />
                {blog.readTime}
              </span>
              <span className="flex items-center gap-1 text-sm text-[#718096]">
                <Calendar className="w-4 h-4" />
                {blog.date}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-dark-navy leading-tight mb-6">
              {blog.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-[#4A5568] leading-relaxed mb-8">
              {blog.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pb-8 border-b border-[#E2E8F0]">
              <div className="w-10 h-10 rounded-full bg-teal-primary/10 flex items-center justify-center text-teal-primary font-semibold">
                {blog.author.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-dark-navy">{blog.author}</p>
                <p className="text-sm text-[#718096]">{blog.authorRole}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
          <div className="relative aspect-[2/1] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="py-12 lg:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {blog.content.map((section, idx) => renderSection(section, idx))}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="py-12 lg:py-16 bg-light-gray border-t border-[#E2E8F0]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-semibold text-dark-navy mb-8">
                More articles
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/blog/${b.slug}`}
                    className="group block bg-white rounded-xl border border-[#E2E8F0] p-5 hover:border-teal-primary transition-colors"
                  >
                    <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-teal-primary/10 text-teal-primary mb-3">
                      {b.category}
                    </span>
                    <h3 className="font-medium text-dark-navy group-hover:text-teal-primary transition-colors line-clamp-2 mb-2">
                      {b.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-[#718096]">
                      <span>{b.readTime}</span>
                      <span className="inline-flex items-center gap-1 text-teal-primary">
                        Read
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <Footer />
    </main>
  );
}
