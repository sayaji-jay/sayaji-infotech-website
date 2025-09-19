'use client';

// import { ReactLenis } from 'lenis/react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ClientLogos from '@/components/ClientLogos';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TextMarque from '@/components/TextMarque';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950">
        <Header />
        
        <main className="relative">
          {/* Hero Section */}
          <section id="home">
            <HeroSection />
          </section>

          {/* Client Logos Section */}
          <ClientLogos />

          {/* Services Section */}
          <section id="services">
            <TextMarque text="Our Services • Digital Solutions • Technology Excellence •" />
            <Services />
          </section>

          {/* Portfolio Section */}
          <section id="portfolio">
            <TextMarque text="Our Work • Project Showcase • Success Stories •" />
            <Portfolio />
          </section>

          {/* About Section */}
          <section id="about">
            <TextMarque text="About Us • Our Story • Company Vision •" />
            <About />
          </section>

          {/* Testimonials Section */}
          <section id="testimonials">
            <TextMarque text="What our clients say • Testimonials • Reviews •" />
            <Testimonials />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
  );
}
