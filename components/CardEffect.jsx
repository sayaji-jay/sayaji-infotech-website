"use client";

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// ✅ Project Data
const projects = [
  {
    title: "Optimizing a Corporate Intranet",
    description:
      "An innovative app and approach for taking advantage of unused internet from people's devices. It differs from others because of its simplicity, functions, and ways to earn extra money.",
    link: "https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=600&auto=format&fit=crop",
    color: "#0f172a", // dark slate blue background
    stats: [
      { label: "Conversion Rate", value: "20%" },
      { label: "User Satisfaction", value: "95%" },
    ],
  },
  {
    title: "Mobile App Redesign",
    description:
      "A sleek redesign for a mobile-first e-commerce app to enhance engagement and retention.",
    link: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=600&auto=format&fit=crop&q=60",
    color: "#111827",
    stats: [
      { label: "Load Time", value: "1.2s" },
      { label: "CTR Growth", value: "60%" },
    ],
  },
  {
    title: "Mobile App Redesign",
    description:
      "A sleek redesign for a mobile-first e-commerce app to enhance engagement and retention.",
    link: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=600&auto=format&fit=crop&q=60",
    color: "#111827",
    stats: [
      { label: "Load Time", value: "1.2s" },
      { label: "CTR Growth", value: "60%" },
    ],
  },
  {
    title: "Mobile App Redesign",
    description:
      "A sleek redesign for a mobile-first e-commerce app to enhance engagement and retention.",
    link: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=600&auto=format&fit=crop&q=60",
    color: "#111827",
    stats: [
      { label: "Load Time", value: "1.2s" },
      { label: "CTR Growth", value: "60%" },
    ],
  }
];

export default function Index() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container}>
      {/* Cards */}
      <section className="relative w-full">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              title={project.title}
              color={project.color}
              description={project.description}
              url={project.link}
              stats={project.stats}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </main>
  );
}

// ✅ Card Component
const Card = ({
  i,
  title,
  description,
  url,
  color,
  stats,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-8vh + ${i * 35}px)`,
        }}
        className="flex flex-col relative h-[400px] w-[80%] max-w-5xl rounded-2xl p-10 origin-top shadow-2xl"
      >
        <div className="flex flex-col md:flex-row h-full gap-8">
          {/* Text & Stats */}
          <div className="flex flex-col justify-between md:w-[50%] text-gray-100">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                {title}
              </h2>
              <p className="text-sm md:text-base mt-4">{description}</p>
            </div>

            {/* Stats */}
            <div className="flex gap-12 mt-6">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="mt-6 px-4 py-2 rounded-full bg-gray-700 text-gray-300 text-sm w-fit">
              Coming Soon
            </button>
          </div>

          {/* Image */}
          <div className="relative md:w-[50%] h-52 md:h-full rounded-lg overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image fill src={url} alt={title} className="object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
