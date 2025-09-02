'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative z-10 overflow-hidden pt-35 md:pt-40 xl:pt-45 min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl w-full">
        
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden">
          {/* Purple Gradient Circles */}
          <div className="hero-circle-gradient absolute -top-[128%] left-1/2 -z-1 h-[1282px] w-full max-w-[1282px] -translate-x-1/2 rounded-full sm:-top-[107%] xl:-top-[73%]" />
          <div className="hero-circle-gradient absolute -top-[112%] left-1/2 -z-1 h-[1046px] w-full max-w-[1046px] -translate-x-1/2 rounded-full sm:-top-[93%] xl:-top-[62%]" />
          
          {/* Blur Effects */}
          <div className="absolute left-1/2 top-0 aspect-[1204/394] w-full max-w-[1204px] -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur-3xl" />
          </div>
          <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-1 mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0">
          <div className="text-center">
            
            {/* Subtitle Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium border border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm"
            >
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              <span className="text-gray-300">Launch Your AI Startup with</span>
            </motion.span>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 text-3xl font-extrabold text-white sm:text-5xl xl:text-6xl leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                OpenAI + Next.js SaaS
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
                Boilerplate and Starter Kit
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mx-auto mb-9 max-w-[500px] font-medium md:text-lg text-gray-300 leading-relaxed"
            >
              Ideal for developers looking to build SaaS applications using OpenAI and Next.js, 
              this starter kit comes with pre-configured and pre-built examples, making it easier 
              to quickly kickstart your AI startup.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="/ai-examples"
                className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
              >
                Try AI Examples
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative mx-auto mt-17 aspect-[1170/411] w-full max-w-[1170px] px-4"
        >
          <div className="relative w-full h-full bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 rounded-3xl overflow-hidden border border-purple-500/20 backdrop-blur-sm">
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Dashboard</h3>
                <p className="text-gray-400">Complete SaaS solution with OpenAI integration</p>
              </div>
            </div>

            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 gap-4 h-full p-8">
                {Array.from({ length: 60 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-circle-gradient {
          background: radial-gradient(circle at center, 
            rgba(147, 51, 234, 0.1) 0%,
            rgba(79, 70, 229, 0.1) 25%,
            rgba(147, 51, 234, 0.05) 50%,
            transparent 100%);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;