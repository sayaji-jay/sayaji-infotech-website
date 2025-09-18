'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Calendar,
  MapPin,
  Award,
  Star,
  CheckCircle2,
  Quote
} from 'lucide-react';
import Image from 'next/image';

const About = () => {

  const stats = [
    {
      icon: Calendar,
      number: "9+",
      label: "Years Experience",
      description: "Building digital solutions"
    },
    {
      icon: Users,
      number: "50+",
      label: "Happy Clients",
      description: "Across various industries"
    },
    {
      icon: Award,
      number: "15+",
      label: "Frappe ERP Projects",
      description: "Enterprise solutions"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Client Rating",
      description: "Based on feedback"
    }
  ];

  const expertise = [
    "Frappe ERP Development & Customization",
    "Web Application Development",
    "Mobile App Development",
    "Cloud Infrastructure & DevOps",
    "Enterprise Software Solutions",
    "API Integration & Development"
  ];

  const motivationalQuote = {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      {/* Purple Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Purple Gradient Overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6"
          >
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">About Sayaji Infotech</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Crafting Digital{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Based in Vadodara, we bring 9+ years of expertise in IT industry, specializing in
            Frappe ERP solutions and modern web technologies to transform businesses.
          </motion.p>
        </motion.div>

        {/* Company Logo and Quote Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Logo Side */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row items-center lg:items-center gap-12 text-center lg:text-left"
            >
              {/* Logo - 50% */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <Image
                  src="/images/logo.png"
                  alt="Sayaji Infotech Logo"
                  width={200}
                  height={200}
                  className="w-36 h-36 lg:w-44 lg:h-44 object-contain filter brightness-110"
                  priority
                />
              </div>

              {/* Text Content - 50% */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                <div>
                  <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
                    Sayaji Infotech
                  </h3>
                  <p className="text-gray-400 text-base lg:text-lg opacity-80 font-medium">
                    Crafting Digital Excellence Since 2015
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quote Side */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-purple-400 mb-6" />

                <blockquote className="text-lg lg:text-xl text-gray-200 font-medium leading-relaxed mb-6">
                  "{motivationalQuote.text}"
                </blockquote>

                <footer className="text-purple-300 font-medium">
                  — {motivationalQuote.author}
                </footer>

                {/* Background Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/5 to-pink-600/5 -z-10"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {stat.number}
                </h3>

                <h4 className="text-sm lg:text-base font-semibold text-gray-200 mb-1">
                  {stat.label}
                </h4>

                <p className="text-gray-400 text-xs lg:text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-white mb-8"
          >
            Our Expertise
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
          >
            {expertise.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors flex-shrink-0" />
                <span className="text-gray-300 group-hover:text-white transition-colors font-medium text-sm lg:text-base">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Location Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-full px-6 py-3"
          >
            <MapPin className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">Proudly based in Vadodara, Gujarat</span>
          </motion.div>
        </motion.div>

      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-600/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-tl from-pink-600/5 to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default About;