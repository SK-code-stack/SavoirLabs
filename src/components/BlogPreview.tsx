"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { blogs } from "@/lib/blogs";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: idx * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function BlogPreview() {
  // Show only the first 3 blogs
  const previewBlogs = blogs.slice(0, 3);

  return (
    <section id="blog" className="py-20 lg:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-teal-primary/10 text-teal-primary"
            >
              Insights
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl md:text-4xl font-semibold text-dark-navy"
            >
              Latest from our{" "}
              <span className="text-gradient">blog</span>
            </motion.h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-primary hover:gap-3 transition-all group"
            >
              View all articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {previewBlogs.map((blog, idx) => (
            <motion.article
              key={blog.slug}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <Link
                href={`/blog/${blog.slug}`}
                className="group block bg-white rounded-xl border border-[#E2E8F0] overflow-hidden hover:border-teal-primary hover:shadow-lg transition-all duration-200"
              >
                {/* Cover Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[16/10] overflow-hidden bg-light-gray"
                >
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>

                {/* Content */}
                <div className="p-5 lg:p-6">
                  {/* Category & Read Time */}
                  <div className="flex items-center gap-3 mb-3">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-teal-primary/10 text-teal-primary"
                    >
                      {blog.category}
                    </motion.span>
                    <span className="flex items-center gap-1 text-xs text-[#718096]">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-dark-navy text-lg leading-snug mb-2 group-hover:text-teal-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-[#4A5568] line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
