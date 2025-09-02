'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Database, 
  Zap, 
  FileText, 
  BookOpen,
  Sparkles,
  Shield
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'OpenAI Integration',
      description: 'Seamless integration with OpenAI\'s powerful AI models including GPT-4, DALL-E, and more.'
    },
    {
      icon: Code,
      title: 'Next.js 13, React 18, TS',
      description: 'Built with the latest technologies for optimal performance and developer experience.'
    },
    {
      icon: Database,
      title: 'Auth, DB, Sanity Blog',
      description: 'Complete authentication system, database integration, and content management.'
    },
    {
      icon: Zap,
      title: 'Cutting-edge Technologies',
      description: 'Modern stack with TypeScript, Tailwind CSS, and advanced optimization techniques.'
    },
    {
      icon: FileText,
      title: 'Pre-made AI Examples',
      description: 'Ready-to-use AI examples and templates to jumpstart your development.'
    },
    {
      icon: BookOpen,
      title: 'Rich Documentation',
      description: 'Comprehensive documentation and guides to help you build amazing AI applications.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="scroll-mt-17 overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5 pb-17.5 lg:pb-22.5 xl:pb-27.5">
      <div className="mx-auto max-w-[1222px] px-4 sm:px-8 xl:px-0">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 mb-16 text-center"
        >
          <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium border border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-gray-300">Main Features</span>
          </span>
          
          <h2 className="mb-4.5 text-2xl font-extrabold text-white sm:text-4xl xl:text-5xl">
            Key Features of{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI Tool
            </span>
          </h2>
          
          <p className="mx-auto max-w-[714px] font-medium text-gray-300">
            A Complete Solution for AI SaaS Startups
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="relative">
          {/* Grid Border Lines */}
          <div className="features-row-border absolute left-1/2 top-1/2 hidden h-[1px] w-1/2 -translate-y-1/2 rotate-90 lg:left-1/4 lg:block lg:-translate-x-1/3 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          <div className="features-row-border absolute right-1/2 top-1/2 hidden h-[1px] w-1/2 -translate-y-1/2 rotate-90 lg:right-[8.3%] lg:block bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl p-8 text-center bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-gradient-to-b hover:from-purple-900/10 hover:to-blue-900/10 hover:border-purple-500/20 transition-all duration-500"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-purple-400 group-hover:text-blue-400 transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="mb-4 text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Horizontal Divider */}
          <div className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>

        {/* Large Feature Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-3xl p-10 xl:p-15">
              <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8">
                
                {/* Content */}
                <div className="w-full max-w-[477px] text-center lg:text-left">
                  <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium border border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300">Kickstart your AI Startup</span>
                  </span>
                  
                  <h3 className="mb-4.5 text-2xl lg:text-4xl font-bold text-white">
                    Seamless{' '}
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      OpenAI Integration
                    </span>
                  </h3>
                  
                  <p className="mb-10 font-medium text-gray-300 leading-relaxed">
                    Build SaaS AI applications using OpenAI and Next.js, this kit comes with 
                    pre-configured and pre-built examples, making it easier to quickly kickstart 
                    your AI startup.
                  </p>
                  
                  <motion.a
                    href="/#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn more
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                      <path d="M13.3992 5.60002L8.22422 0.350024C7.99922 0.125024 7.64922 0.125024 7.42422 0.350024C7.19922 0.575024 7.19922 0.925025 7.42422 1.15002L11.6242 5.42503H0.999219C0.699219 5.42503 0.449219 5.67502 0.449219 5.97502C0.449219 6.27502 0.699219 6.55003 0.999219 6.55003H11.6742L7.42422 10.875C7.19922 11.1 7.19922 11.45 7.42422 11.675C7.52422 11.775 7.67422 11.825 7.82422 11.825C7.97422 11.825 8.12422 11.775 8.22422 11.65L13.3992 6.40002C13.6242 6.17502 13.6242 5.82502 13.3992 5.60002Z" fill="white"/>
                    </svg>
                  </motion.a>
                </div>

                {/* Icon/Image */}
                <div className="relative w-full max-w-[428px] aspect-square">
                  <div className="w-full h-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl border border-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                        <Brain className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">AI Integration</h4>
                      <p className="text-gray-400 text-sm">Complete OpenAI Integration</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Effects */}
              <div className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-72 h-56 bg-gradient-to-l from-purple-600/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute left-0 top-0 w-full h-48 bg-gradient-to-r from-purple-600/5 to-blue-600/5 blur-2xl" />
                <div className="absolute bottom-0 left-1/2 w-full h-full -translate-x-1/2 bg-gradient-to-t from-purple-900/10 to-transparent blur-3xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;