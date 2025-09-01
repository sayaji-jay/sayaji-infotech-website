'use client';

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300"
        >
          Hello World
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300"
        >
          Welcome to <span className="text-emerald-600 dark:text-emerald-400 font-semibold transition-colors duration-300">Sayaji Infotech</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-md transition-colors duration-300 border border-gray-200 dark:border-gray-700">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
              <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 transition-colors duration-300">AI Powered Solutions</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">Building innovative technology solutions for tomorrow</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
