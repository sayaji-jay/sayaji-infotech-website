'use client';

import { motion } from 'framer-motion';
import { Quote, Star, MessageSquare } from 'lucide-react';
import websiteData from '../data/website-data.json';

const Testimonials = () => {
  // Get testimonials data from JSON
  const testimonials = websiteData.testimonials.testimonialColumns;

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'upwork':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.006-2.439-5.457-5.439-5.457z"/>
          </svg>
        );
      case 'freelancer':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.096 3.076L16.254 0h-5.503L7.617 6.108h2.887l1.31-2.015.282-.017zM5.775 20.678a6.522 6.522 0 002.39.445c1.21 0 2.335-.334 3.302-.914.967-.581 1.728-1.386 2.283-2.414H24V7.622H0v10.173h11.468c-.445.445-.98.804-1.604 1.078-.623.273-1.304.41-2.043.41-.826 0-1.552-.148-2.179-.445-.626-.296-1.139-.706-1.537-1.231H.668c.445 1.003 1.115 1.862 2.011 2.577.895.714 1.962 1.27 3.201 1.667 1.239.397 2.589.596 4.05.596 1.579 0 3.026-.252 4.34-.756 1.314-.504 2.449-1.205 3.406-2.105.956-.9 1.696-1.969 2.217-3.208h3.442v-7.378H12.869l-3.47 5.334z"/>
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        );
    }
  };

  const TestimonialCard = ({ testimonial }) => (
    <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
        "{testimonial.text}"
      </p>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Author Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {testimonial.avatar ? (
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300">
              <span className="text-white font-semibold text-lg">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <div className="text-white font-semibold text-sm group-hover:text-purple-200 transition-colors duration-300">
              {testimonial.name}
            </div>
            <div className="text-gray-400 text-xs">
              {testimonial.role}
            </div>
          </div>
        </div>
        <div className="text-green-400 group-hover:text-green-300 transition-colors duration-300">
          {getPlatformIcon(testimonial.platform)}
        </div>
      </div>
    </div>
  );

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

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20" >
          <div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6"
          >
            <MessageSquare className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">{websiteData.testimonials.badge.text}</span>
          </div>

          <h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {websiteData.testimonials.title.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {websiteData.testimonials.title.split(' ').slice(2).join(' ')}
            </span>
          </h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {websiteData.testimonials.subtitle}
          </motion.p>
        </div>

        {/* Testimonials Grid with Infinite Scroll */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative h-[600px] overflow-hidden rounded-2xl"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {testimonials.map((column, columnIndex) => (
              <div key={columnIndex} className="relative h-full overflow-hidden">
                <motion.div
                  animate={{
                    y: columnIndex === 0 ? [-100, 100] : columnIndex === 1 ? [100, -100] : [-50, 50]
                  }}
                  transition={{
                    duration: columnIndex === 0 ? 20 : columnIndex === 1 ? 25 : 22,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                  }}
                  className="space-y-6 will-change-transform"
                >
                  {/* Triple the cards for seamless infinite scroll */}
                  {[...Array(4)].map((_, repeatIndex) => (
                    <div key={repeatIndex}>
                      {column.map((testimonial, index) => (
                        <div key={`${repeatIndex}-${index}`}>
                          <TestimonialCard testimonial={testimonial} />
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Enhanced Gradient Fades with better visibility */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950 via-slate-950/95 via-slate-950/80 to-transparent pointer-events-none z-20"></div>
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/95 via-slate-950/80 to-transparent pointer-events-none z-20"></div>
          
          {/* Additional stronger fade overlays */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-950 via-slate-950/90 to-transparent pointer-events-none z-25"></div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pointer-events-none z-25"></div>
          
          {/* Solid edges to ensure clean cut */}
          <div className="absolute inset-x-0 top-0 h-3 bg-slate-950 pointer-events-none z-30"></div>
          <div className="absolute inset-x-0 bottom-0 h-3 bg-slate-950 pointer-events-none z-30"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;