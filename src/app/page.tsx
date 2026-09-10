import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Dynamic imports for heavy/below-the-fold components to boost Core Web Vitals
const ServicesScroll = dynamic(() => import("@/components/ServicesScroll"));
const InteractiveShowcase = dynamic(() => import("@/components/InteractiveShowcase"));
const Projects = dynamic(() => import("@/components/Projects"));
const ProcessTimeline = dynamic(() => import("@/components/ProcessTimeline"));
const ProjectEstimator = dynamic(() => import("@/components/ProjectEstimator"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Founders = dynamic(() => import("@/components/Founders"));
const BlogPreview = dynamic(() => import("@/components/BlogPreview"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col">
      <Navbar />
      
      <Hero />

      <section aria-label="Our Services">
        <ServicesScroll />
      </section>

      <section aria-label="Interactive Showcase">
        <InteractiveShowcase />
      </section>

      <section aria-label="Featured Projects">
        <Projects />
      </section>

      <section aria-label="Development Process">
        <ProcessTimeline />
      </section>

      <section aria-label="Project Cost Estimator">
        <ProjectEstimator />
      </section>

      <section aria-label="Client Testimonials">
        <Testimonials />
      </section>

      <section aria-label="Company Founders">
        <Founders />
      </section>

      <section aria-label="Blog Insights">
        <BlogPreview />
      </section>

      <section aria-label="Contact Us">
        <ContactSection />
      </section>

      <Footer />
    </main>
  );
}
