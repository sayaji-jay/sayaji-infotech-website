'use client';

import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Settings
} from 'lucide-react';

import { ShineBorder } from './ui/shine-border';
import websiteData from '../data/website-data.json';

const Services = () => {
  // Icon mapping for dynamic loading
  const iconMap = {
    Code2,
    Smartphone,
    Globe,
    Cloud,
    Database,
    Settings,
    Zap
  };

  // Map services from JSON with dynamic icons
  const services = websiteData.services.servicesList.map(service => ({
    ...service,
    icon: iconMap[service.icon]
  }));

  const technologies = websiteData.services.technologies.techList;


  return (
    <section className="py-24 bg-transparent light:bg-white relative overflow-hidden">
      {/* Gradient Fade Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-transparent to-slate-950/30 light:from-transparent light:to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-slate-950/20 via-transparent to-slate-950/30 light:from-transparent light:to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 text-white light:text-black" />
            <span className="text-white light:text-black text-sm font-medium">{websiteData.services.badge.text}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white light:text-purple-950 mb-6">
            {websiteData.services.title.split(' ').slice(0, 1).join(' ')}{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 light:from-purple-700 light:via-pink-700 light:to-blue-700 bg-clip-text text-transparent">
              {websiteData.services.title.split(' ').slice(1).join(' ')}
            </span>
          </h2>

          <p className="text-xl text-gray-400 light:text-purple-950 max-w-3xl mx-auto leading-relaxed">
            {websiteData.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 light:bg-white border border-white/10 light:border-gray-200 backdrop-blur-sm hover:bg-white/10 light:hover:bg-gray-50 hover:-translate-y-2 transition-all duration-500 light:shadow-lg"
            >
              <ShineBorder shineColor="white" />
              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white light:text-purple-950 mb-4 group-hover:text-purple-300 light:group-hover:text-purple-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 light:text-purple-950 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-purple-400 light:text-purple-950" />
                      <span className="text-sm text-gray-300 light:text-purple-950">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <button className="group/btn inline-flex items-center space-x-2 text-purple-400 light:text-purple-950 hover:text-purple-300 light:hover:text-purple-700 font-medium transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white light:text-purple-950 mb-8 sm:mb-12">
            {websiteData.services.technologies.title}
          </h3>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group px-3 sm:px-6 py-2 sm:py-3 rounded-full bg-white/5 light:bg-gray-100 border border-white/10 light:border-gray-300 backdrop-blur-sm hover:bg-white/10 light:hover:bg-gray-200 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <span className="text-white light:text-purple-950 font-medium text-sm sm:text-base">{tech.name}</span>
                  <span className="text-gray-500 light:text-gray-400 text-xs sm:text-sm hidden sm:inline">•</span>
                  <span className="text-gray-400 light:text-purple-950 text-xs sm:text-sm hidden sm:inline">{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;