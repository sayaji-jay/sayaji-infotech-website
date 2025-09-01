'use client';

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <HeroSection />  
      <AboutSection /> 
      <Projects />
    </>
  );
}
