'use client';

import ServicesGallery from './ServicesGallery';
export default function AboutSection() {
  return (
    <section className="py-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Main Intro */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-blue-800 dark:from-teal-400 dark:via-blue-400 dark:to-teal-300 bg-clip-text text-transparent">
          About Sayaji Infotech
        </h2>

        <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 dark:text-slate-300 mb-8">
          Leading technology solutions provider specializing in{" "}
          <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-slate-800 text-blue-700 dark:text-teal-400 inline-block font-semibold">
            AI-Powered Development
          </span>{" "}
          with expertise in{" "}
          <span className="px-3 py-1 rounded-full bg-teal-100 dark:bg-slate-800 text-teal-700 dark:text-blue-400 inline-block font-semibold">
            Modern Web Technologies
          </span>
        </p>

        <p className="mt-6 text-lg text-gray-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
          Our expertise extends to{" "}
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 inline-block font-medium">
            ERP Solutions
          </span>{" "}
          and{" "}
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 inline-block font-medium">
            Frappe Framework
          </span>{" "}
          enabling us to create comprehensive, scalable, and efficient business solutions.
        </p>

        <p className="mt-4 text-lg text-gray-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
          We specialize in{" "}
          <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 inline-block font-medium">
            IoT Applications
          </span>{" "}
          and cutting-edge technology implementations for forward-thinking businesses.
        </p>

        {/* Services Grid */}
        <ServicesGallery />

        {/* Call to Action */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-slate-200 mb-6">
            Ready to Transform Your Business?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-teal-500 dark:to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Start Your Project
            </button>
            <button className="px-8 py-3 border-2 border-blue-500 dark:border-teal-400 text-blue-600 dark:text-teal-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}