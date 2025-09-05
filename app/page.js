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
      <div className="relative min-h-screen">
        <Header />
        
        <main className="relative">
          <HeroSection />
          <TextMarque text="Insights & Resources • IT Solutions • Enterprise Grade •" />
          <ITSolutionsSection />
          {/* <TextMarque text="Key Features of Our IT Solutions • What We Serves •" /> */}
          {/* <Features /> */}
          <CTA />
          {/* <Pricing /> */}

          <TextMarque text="What our clients say about us • Testimonials •" />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ReactLenis>
  );
}
