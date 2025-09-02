'use client';

import { ReactLenis } from 'lenis/react';
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <Projects />
        <Testimonials />
      </main>
    </ReactLenis>
  );
}
