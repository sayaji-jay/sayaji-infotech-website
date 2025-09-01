'use client';

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesShowcase from "@/components/ServicesShowcase";

export default function Home() {
  return (
    <>
      <HeroSection />  
      <AboutSection /> 
      <ServicesShowcase />
    </>
  );
}
