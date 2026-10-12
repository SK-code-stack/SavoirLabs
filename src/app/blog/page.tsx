import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/lib/blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Software & Automation Insights | SavoirLabs",
  description:
    "Insights on business automation, custom software development, AI solutions, and cloud infrastructure from the SavoirLabs team.",
  metadataBase: new URL('https://savoirlabs.com'),
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "Blog - Software & Automation Insights | SavoirLabs",
    description:
      "Insights on business automation, custom software development, AI solutions, and cloud infrastructure from the SavoirLabs team.",
    url: 'https://savoirlabs.com/blog',
    type: "website",
  },
};

export default function BlogPage() {
  // Generate Blog/Collection Schema for SEO
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "headline": "SavoirLabs Blog",
    "description": "Insights on business automation, software development, and AI from the SavoirLabs team.",
    "url": "https://savoirlabs.com/blog",
    "hasPart": blogs.map((blog) => ({
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.excerpt,
      "url": `https://savoirlabs.com/blog/${blog.slug}`,
      "datePublished": blog.date,
      "author": {
        "@type": "Person",
        "name": blog.author
      }
    }))
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Blog Collection JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-teal-primary/10 text-teal-primary">
              Blog
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-dark-navy mb-4">
              Insights & Articles
            </h1>
            <p className="text-lg text-[#4A5568]">
              Thoughts on software development, automation, and building better business tools.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 lg:py-16 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.slug}>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="group block bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:border-teal-primary hover:shadow-lg transition-all duration-200 h-full"
                >
                  {/* Cover Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-light-gray">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category & Meta */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-teal-primary/10 text-teal-primary">
                        {blog.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#718096]">
                        <Clock className="w-3 h-3" />
                        {blog.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-semibold text-dark-navy text-lg leading-snug mb-2 group-hover:text-teal-primary transition-colors">
                      {blog.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-[#4A5568] line-clamp-2 mb-4">
                      {blog.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                      <span className="text-xs text-[#718096]">{blog.date}</span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-teal-primary">
                        Read
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
