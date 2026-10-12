"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Business Automation", href: "/#services" },
    { name: "Custom Software", href: "/#services" },
    { name: "AI Solutions", href: "/#services" },
    { name: "Cloud Infrastructure", href: "/#services" },
  ];

  const company = [
    { name: "Our Work", href: "/#projects" },
    { name: "Process", href: "/#process" },
    { name: "Team", href: "/#team" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="bg-light-gray border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Image
                    src="/logo.png"
                    alt="SavoirLabs"
                    width={140}
                    height={45}
                    className="h-10 w-auto object-contain"
                  />
                </motion.div>
              </Link>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-6 max-w-xs">
                We build custom software and automation solutions for growing businesses.
              </p>
              <motion.a
                href="mailto:info@savoirlabs.com"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-sm font-medium text-dark-navy hover:text-teal-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@savoirlabs.com
              </motion.a>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-sm font-semibold text-dark-navy mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.name}>
                    <motion.a
                      href={item.href}
                      whileHover={{ x: 4, color: "#18BCB7" }}
                      className="text-sm text-[#4A5568] transition-colors inline-block"
                    >
                      {item.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-sm font-semibold text-dark-navy mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <motion.a
                      href={item.href}
                      whileHover={{ x: 4, color: "#18BCB7" }}
                      className="text-sm text-[#4A5568] transition-colors inline-block"
                    >
                      {item.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Column */}
            <div>
              <h4 className="text-sm font-semibold text-dark-navy mb-4">
                Ready to start?
              </h4>
              <p className="text-sm text-[#4A5568] mb-4">
                Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-teal-primary to-teal-light hover:shadow-teal transition-shadow"
              >
                Get in Touch
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#E2E8F0]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-[#718096]">
              © {currentYear} SavoirLabs. All rights reserved.
            </p>

            {/* Social Links & Back to Top */}
            <div className="flex items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://github.com/savoirlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#4A5568] hover:text-teal-primary hover:border-teal-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/company/savoirlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#4A5568] hover:text-teal-primary hover:border-teal-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/savoirlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#4A5568] hover:text-teal-primary hover:border-teal-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm text-[#4A5568] hover:text-teal-primary transition-colors group"
                aria-label="Back to top"
              >
                <span className="hidden sm:inline">Back to top</span>
                <span className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center group-hover:border-teal-primary group-hover:bg-teal-primary group-hover:text-white transition-all">
                  <ArrowUp className="w-4 h-4" />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
