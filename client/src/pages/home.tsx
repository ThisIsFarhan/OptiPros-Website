import { useEffect } from "react";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Technology from "@/components/sections/technology";
import Gallery from "@/components/sections/gallery";
import Team from "@/components/sections/team";
import Contact from "@/components/sections/contact-simple";

export default function Home() {
  useEffect(() => {
    // Set document title for SEO
    document.title = "OptiPros - Optical Prosthetic for Visually Impaired | COMSATS University Lahore";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "OptiPros is an innovative optical prosthetic device designed to assist visually impaired individuals with advanced sensing and AI capabilities. A Final Year Project from COMSATS University Lahore.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Technology />
        <Gallery />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
