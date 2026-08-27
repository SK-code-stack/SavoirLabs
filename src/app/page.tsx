import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesScroll from "@/components/ServicesScroll";
import InteractiveShowcase from "@/components/InteractiveShowcase";
import Projects from "@/components/Projects";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProjectEstimator from "@/components/ProjectEstimator";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <ServicesScroll />
      <InteractiveShowcase />
      <Projects />
      <ProcessTimeline />
      <ProjectEstimator />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
