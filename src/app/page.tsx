import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Dynamic imports for below-the-fold components
const Services = dynamic(() => import("@/components/Services"));
const Stats = dynamic(() => import("@/components/Stats"));
const Process = dynamic(() => import("@/components/Process"));
const CaseStudies = dynamic(() => import("@/components/CaseStudies"));
const WhyUs = dynamic(() => import("@/components/WhyUs"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Team = dynamic(() => import("@/components/Team"));
const BlogPreview = dynamic(() => import("@/components/BlogPreview"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <Hero />

      <Services />

      <Stats />

      <CaseStudies />

      <Process />

      <WhyUs />

      <Testimonials />

      <Team />

      <BlogPreview />

      <Contact />

      <Footer />
    </main>
  );
}
