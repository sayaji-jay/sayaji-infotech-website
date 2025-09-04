'use client';

import { ReactLenis } from 'lenis/react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ITSolutionsSection from '@/components/ITSolutionsSection';
import TextMarque from '@/components/TextMarque';
export default function Home() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen bg-gradient-to-br from-[#0a0b23] via-[#1a1b3a] to-[#0a0b23]">
        <Header />
        
        <main className="relative">
          <HeroSection />
          <TextMarque text="Insights & Resources • IT Solutions • Enterprise Grade •" />
          <ITSolutionsSection />
          {/* <Features /> */}
          {/* <Pricing /> */}
          <Testimonials />
          <Contact />
          <CTA />
        </main>
        
        <Footer />
        
        {/* Global Background Effects */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-600/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }} />
        </div>
      </div>
    </ReactLenis>
  );
}
