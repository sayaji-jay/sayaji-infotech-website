'use client';

import { Monitor, PenTool, Layers } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20  text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Intro */}
        <h2 className="text-2xl md:text-4xl font-light leading-relaxed">
          Web designer and expert in{" "}
          <span className="px-3 py-1 rounded-full bg-neutral-900 inline-block">
            UX/UI Design
          </span>{" "}
          with over{" "}
          <span className="px-3 py-1 rounded-full bg-neutral-900 inline-block">
            15 years
          </span>{" "}
          of industry experience.
        </h2>

        <p className="mt-6 text-lg text-gray-300">
          Expertise extends to{" "}
          <span className="px-3 py-1 rounded-full bg-neutral-900 inline-block">
            Framer Development
          </span>{" "}
          enabling him to create aesthetically pleasing and easily implementable
          solutions.
        </p>

        <p className="mt-4 text-lg text-gray-300">
          Currently works as{" "}
          <span className="px-3 py-1 rounded-full bg-neutral-900 inline-block">
            Product Designer
          </span>{" "}
          at FLYR Hospitality.
        </p>

        {/* Logos + Testimonials */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center space-y-3">
            <Monitor className="w-10 h-10 text-white" />
            <h3 className="font-semibold">PerkUp</h3>
            <p className="text-sm text-gray-400">
              "He consistently exceeds our expectations"
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <PenTool className="w-10 h-10 text-white" />
            <h3 className="font-semibold">Studio S</h3>
            <p className="text-sm text-gray-400">
              "I recommend Goran whole-heartedly"
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3">
            <Layers className="w-10 h-10 text-white" />
            <h3 className="font-semibold">ISMS Connect</h3>
            <p className="text-sm text-gray-400">
              "Loved to work with Goran!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
