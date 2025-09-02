'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
      image: '/images/testimonials/avatar-1.jpg',
      rating: 5,
      text: 'This AI Tool kit has been a game-changer for our startup. The OpenAI integration is seamless and the documentation is excellent. We built our MVP in just 2 weeks!'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer at InnovateLab',
      image: '/images/testimonials/avatar-2.jpg',
      rating: 5,
      text: 'Amazing starter kit! The code quality is top-notch and the pre-built examples saved us months of development time. Highly recommended for AI SaaS projects.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager at AIVision',
      image: '/images/testimonials/avatar-3.jpg',
      rating: 5,
      text: 'The best AI starter kit I\'ve used. Everything is well-structured and the authentication system works perfectly. Our team was up and running in no time.'
    },
    {
      name: 'David Park',
      role: 'Founder at SmartTools',
      image: '/images/testimonials/avatar-4.jpg',
      rating: 5,
      text: 'Incredible value! The Next.js setup with TypeScript and all the AI integrations pre-configured saved us weeks of setup time. Worth every penny.'
    },
    {
      name: 'Lisa Wang',
      role: 'CTO at FutureTech',
      image: '/images/testimonials/avatar-5.jpg',
      rating: 5,
      text: 'Professional grade code and excellent documentation. The AI examples are comprehensive and the support is outstanding. Perfect for enterprise projects.'
    },
    {
      name: 'Alex Thompson',
      role: 'Solo Developer',
      image: '/images/testimonials/avatar-6.jpg',
      rating: 5,
      text: 'As a solo developer, this kit gave me everything I needed to compete with larger teams. The AI features are powerful and easy to customize.'
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
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
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm text-gray-300 mb-4">
            <Quote className="w-4 h-4 text-purple-400" />
            User Testimonials
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Users Say
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Build SaaS AI applications using OpenAI and Next.js, this kit comes with 
            pre-configured and pre-built examples, making it easier to quickly kickstart.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-gradient-to-b hover:from-purple-900/10 hover:to-blue-900/10 hover:border-purple-500/20 transition-all duration-500 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Quote className="w-8 h-8 text-purple-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Background Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-white">5000+</h3>
            <p className="text-gray-400 text-sm">Happy Users</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-white">99%</h3>
            <p className="text-gray-400 text-sm">Satisfaction Rate</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-white">24/7</h3>
            <p className="text-gray-400 text-sm">Support</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-white">50+</h3>
            <p className="text-gray-400 text-sm">AI Templates</p>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-blue-600/5 to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Testimonials;