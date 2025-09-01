"use client";

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Sayaji Infotech Projects Data
const projects = [
  {
    title: "Website Development",
    description:
      "Modern, responsive websites built with cutting-edge technologies. We create beautiful, fast-loading sites that convert visitors into customers with seamless user experiences.",
    link: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    bgColor: "bg-slate-800 dark:bg-slate-900",
    borderColor: "border-blue-500/30",
    stats: [
      { label: "Performance Score", value: "95+" },
      { label: "Load Time", value: "<2s" },
    ],
  },
  {
    title: "ERP Solutions",
    description:
      "Comprehensive Enterprise Resource Planning systems that streamline your business operations, inventory management, and financial processes all in one integrated platform.",
    link: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop",
    bgColor: "bg-slate-700 dark:bg-slate-800",
    borderColor: "border-teal-500/30",
    stats: [
      { label: "Efficiency Gain", value: "40%" },
      { label: "Cost Reduction", value: "30%" },
    ],
  },
  {
    title: "Frappe Development",
    description:
      "Custom applications built on the powerful Frappe framework. We develop tailored solutions that grow with your business needs and integrate seamlessly with ERPNext.",
    link: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=600&auto=format&fit=crop",
    bgColor: "bg-slate-600 dark:bg-slate-700",
    borderColor: "border-indigo-500/30",
    stats: [
      { label: "Development Speed", value: "3x faster" },
      { label: "Customization", value: "100%" },
    ],
  },
  {
    title: "IoT Applications",
    description:
      "Smart device integration and IoT solutions that connect your physical assets to digital systems, enabling real-time monitoring and automated control systems.",
    link: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=600&auto=format&fit=crop",
    bgColor: "bg-slate-500 dark:bg-slate-600",
    borderColor: "border-cyan-500/30",
    stats: [
      { label: "Device Uptime", value: "99.9%" },
      { label: "Data Accuracy", value: "98%" },
    ],
  }
];

export default function Projects() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="py-20">
      {/* Section Header */}
      <div className="text-center pb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-blue-800 dark:from-teal-400 dark:via-blue-400 dark:to-teal-300 bg-clip-text text-transparent">
          Our Portfolio
        </h2>
        <p className="text-xl text-gray-700 dark:text-slate-300 max-w-3xl mx-auto">
          Explore our latest projects and see how we transform businesses with innovative technology solutions
        </p>
      </div>

      {/* Cards */}
      <section className="relative w-full">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              title={project.title}
              bgColor={project.bgColor}
              borderColor={project.borderColor}
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

// Card Component
const Card = ({
  i,
  title,
  description,
  url,
  bgColor,
  borderColor,
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
          scale,
          top: `calc(-5vh + ${i * 35}px)`,
        }}
        className={`flex flex-col relative h-[450px] w-[85%] max-w-6xl rounded-3xl p-8 md:p-12 origin-top shadow-2xl ${bgColor} backdrop-blur-sm border-2 ${borderColor}`}
      >
        <div className="flex flex-col lg:flex-row h-full gap-8">
          {/* Text & Stats */}
          <div className="flex flex-col justify-between lg:w-[55%] text-gray-800 dark:text-white">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-blue-800 dark:from-teal-400 dark:via-blue-400 dark:to-teal-300 bg-clip-text text-transparent">
                {title}
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-slate-300">{description}</p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12 mt-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">{stat.label}</p>
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 dark:from-teal-500 dark:to-blue-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:w-[45%] h-64 lg:h-full rounded-2xl overflow-hidden bg-white/10 dark:bg-black/10 backdrop-blur-sm">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image 
                fill 
                src={url} 
                alt={title} 
                className="object-cover rounded-2xl opacity-90" 
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
