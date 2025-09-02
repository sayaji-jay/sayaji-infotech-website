'use client';

import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      period: 'month',
      description: 'Perfect for small projects and getting started with AI',
      features: [
        '10,000 AI requests/month',
        'Basic OpenAI integration',
        'Email support',
        '5 pre-built templates',
        'Basic analytics',
        'Community access'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '99',
      period: 'month',
      description: 'Best for growing businesses and serious AI applications',
      features: [
        '100,000 AI requests/month',
        'Advanced OpenAI integration',
        'Priority support',
        '25+ pre-built templates',
        'Advanced analytics',
        'Custom integrations',
        'API access',
        'Team collaboration',
        'White-label options'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '299',
      period: 'month',
      description: 'For large organizations with custom requirements',
      features: [
        'Unlimited AI requests',
        'Custom OpenAI models',
        'Dedicated support',
        'Unlimited templates',
        'Enterprise analytics',
        'Custom development',
        'SLA guarantee',
        'Advanced security',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
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
      y: 50,
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
    <section id="pricing" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-green-500/20 bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-sm text-gray-300 mb-4">
            <Star className="w-4 h-4 text-green-400" />
            Pricing Plans
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Pricing Plan
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Build SaaS AI applications using OpenAI and Next.js, this kit comes with 
            pre-configured and pre-built examples for every budget.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-green-900/20 to-blue-900/20 border-2 border-green-500/30 shadow-2xl scale-105'
                  : 'bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10'
              } backdrop-blur-sm hover:shadow-2xl transition-all duration-500`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.popular ? 'text-white' : 'text-gray-200'
                }`}>
                  {plan.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-5xl font-bold ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent' 
                      : 'text-white'
                  }`}>
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 text-lg">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-green-400' : 'text-green-400'
                    }`} />
                    <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* Background Effects */}
              {plan.popular && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-600/10 via-blue-600/10 to-green-600/10 rounded-3xl blur-xl" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Need a custom solution? We're here to help.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;