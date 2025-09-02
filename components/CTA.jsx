'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Star,
  CheckCircle,
  Play
} from 'lucide-react';

const CTA = () => {
  const features = [
    'OpenAI Integration',
    'Next.js 14 Ready',
    'TypeScript Support',
    'Pre-built Components'
  ];

  const stats = [
    { number: '10K+', label: 'Developers' },
    { number: '500+', label: 'Projects Built' },
    { number: '99%', label: 'Satisfaction' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-purple-900/20 border border-purple-500/20 backdrop-blur-sm p-12 lg:p-20">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                                 radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)`
              }} />
            </div>
            
            <div className="relative text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-yellow-500/30 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 backdrop-blur-sm text-yellow-300 mb-6"
              >
                <Sparkles className="w-4 h-4" />
                Limited Time Offer
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6"
              >
                Ready to Build Your{' '}
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
                  AI SaaS?
                </span>
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              >
                Join thousands of developers who are building the future with our AI-powered 
                starter kit. Get everything you need to launch your SaaS in days, not months.
              </motion.p>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4 mb-10"
              >
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {feature}
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
                >
                  <Zap className="w-5 h-5" />
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-lg -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Background Effects */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 rounded-3xl blur-xl" />
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm mb-6">Trusted by developers at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Google', 'Microsoft', 'OpenAI', 'Meta', 'Amazon', 'Netflix'].map((company, index) => (
              <div
                key={company}
                className="text-gray-300 font-semibold text-lg px-4 py-2 rounded-lg bg-white/5 border border-white/10"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Star Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="flex justify-center items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            Rated 4.9/5 by 1000+ developers
          </p>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-600/5 to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default CTA;