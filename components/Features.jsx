"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Code,
  Database,
  Sparkles,
  Shield,
} from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  i, 
  progress, 
  range, 
  targetScale 
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative w-full max-w-[1222px] px-4 sm:px-8 xl:px-0 origin-top"
      >
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
          <div className="relative overflow-hidden rounded-3xl p-10 xl:p-15">
            <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Text Content */}
              <div className="w-full max-w-[477px] text-center lg:text-left">
                <span className="relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium border border-green-500/20 bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-sm">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Kickstart your AI Startup</span>
                </span>

                <h3 className="mb-4.5 text-2xl lg:text-4xl font-bold text-white">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    {title}
                  </span>
                </h3>

                <p className="mb-10 font-medium text-gray-300 leading-relaxed">
                  {description}
                </p>

                <a
                  href="/#"
                  className="relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                >
                  Learn more
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                    <path
                      d="M13.3992 5.60002L8.22422 0.350024C7.99922 0.125024 7.64922 0.125024 7.42422 0.350024C7.19922 0.575024 7.19922 0.925025 7.42422 1.15002L11.6242 5.42503H0.999219C0.699219 5.42503 0.449219 5.67502 0.449219 5.97502C0.449219 6.27502 0.699219 6.55003 0.999219 6.55003H11.6742L7.42422 10.875C7.19922 11.1 7.19922 11.45 7.42422 11.675C7.52422 11.775 7.67422 11.825 7.82422 11.825C7.97422 11.825 8.12422 11.775 8.22422 11.65L13.3992 6.40002C13.6242 6.17502 13.6242 5.82502 13.3992 5.60002Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>

              {/* Icon Section */}
              <div className="relative w-full max-w-[428px] aspect-square">
                <div className="w-full h-full bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-3xl border border-green-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
                    <p className="text-gray-400 text-sm">Complete OpenAI Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Features = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const features = [
    {
      icon: Brain,
      title: "OpenAI Integration",
      description:
        "Build SaaS AI applications using OpenAI and Next.js with pre-configured examples.",
    },
    {
      icon: Code,
      title: "Next.js 13, React 18, TS",
      description:
        "Built with the latest technologies for optimal performance and developer experience.",
    },
    {
      icon: Database,
      title: "Auth, DB, Sanity Blog",
      description:
        "Complete authentication system, database integration, and content management.",
    },
  ];

  return (
    <div ref={container} className="relative">
      {/* Stacking Cards Container */}
      <div className="relative">
        {features.map((feature, i) => {
          const targetScale = 1 - (features.length - i) * 0.05;
          return (
            <FeatureCard
              key={`feature_${i}`}
              i={i}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      
      <div className="h-20"></div>
    </div>
  );
};

export default Features;
