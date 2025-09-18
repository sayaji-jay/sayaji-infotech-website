'use client';

import React from "react";
import { ArrowRight, Play, Code2, Database, Globe, Smartphone } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Spotlight Effects */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="rgb(147, 51, 234)" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="rgb(79, 70, 229)" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="rgb(236, 72, 153)" />
      

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span className="text-purple-300 text-sm font-medium">Enterprise-Ready Solutions</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Sayaji Infotech
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 max-w-4xl mx-auto">
              Transforming Ideas into{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We build scalable web applications, mobile solutions, and enterprise software 
            that drive business growth. From startups to Fortune 500 companies, we deliver 
            cutting-edge technology solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <span className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-3xl mx-auto">
            {[
              { number: 20, suffix: "+", label: "Projects Delivered" },
              { number: 30, suffix: "+", label: "Happy Clients" },
              { number: 9, suffix: "+", label: "Years Experience" },
              { number: 24, suffix: "/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {typeof stat.number === 'string' ? (
                    stat.number
                  ) : (
                    <AnimatedCounter
                      value={stat.number}
                      suffix={stat.suffix}
                      delay={0.2 + index * 0.50}
                      duration={1.2}
                      className="inline-block"
                    />
                  )}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
