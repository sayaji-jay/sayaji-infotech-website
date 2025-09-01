'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Blocks from '@/components/uilayouts/blocks';

const HeroSection = () => {
  const containerRef = useRef(null);

  return (
    <div
      className="relative h-[550px] overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-white/60 before:to-transparent dark:before:from-slate-900/80 dark:before:to-transparent before:z-[1] w-full transition-colors duration-500"
      ref={containerRef}
    >
      {/* Background Blocks */}
      <Blocks
        activeDivsClass="dark:bg-teal-500/20 bg-blue-500/10"
        divClass="dark:border-slate-700/30 border-slate-300/20"
        classname="w-full h-full"
        containerRef={containerRef}
        activeDivs={{
          0: new Set([2, 4, 6]),
          1: new Set([0, 8]),
          2: new Set([1, 3, 5]),
          4: new Set([0, 5, 8]),
          5: new Set([2, 4]),
          7: new Set([2, 6, 9]),
          8: new Set([0, 4]),
          9: new Set([5]),
          10: new Set([3, 6]),
          11: new Set([1, 5]),
          12: new Set([7]),
          13: new Set([2, 4]),
          14: new Set([5]),
          15: new Set([1, 6]),
        }}
      />

      {/* Typography Text Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-blue-800 dark:from-teal-400 dark:via-blue-400 dark:to-teal-300 bg-clip-text text-transparent mb-4">
          Sayaji Infotech
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-slate-300 mb-4">
          AI-Powered Digital Solutions
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Specializing in Website Development, ERP Solutions, Frappe Software, IoT Applications, and cutting-edge technology solutions for modern businesses.
        </p>
        <div className="mt-8 flex gap-4">
          <Link 
            href="/services"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-teal-500 dark:to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Our Services
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-3 border-2 border-blue-500 dark:border-teal-400 text-blue-600 dark:text-teal-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;