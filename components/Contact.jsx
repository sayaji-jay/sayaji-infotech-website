'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Clock,
  Users,
  Headphones
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      description: 'Our team is here to help.',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email anytime!',
      contact: 'hello@aitool.com',
      action: 'mailto:hello@aitool.com'
    },
    {
      icon: MapPin,
      title: 'Office',
      description: 'Come say hello at our office HQ.',
      contact: '100 Smith Street, San Francisco, CA 94102',
      action: '#'
    },
    {
      icon: Headphones,
      title: 'Live Chat',
      description: '24/7 support available.',
      contact: 'Start Live Chat',
      action: '#'
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
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border border-green-500/20 bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-sm text-gray-300 mb-4">
            <MessageCircle className="w-4 h-4 text-green-400" />
            Get in Touch
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              With Us
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Build SaaS AI applications using OpenAI and Next.js, this kit comes with 
            pre-configured and pre-built examples for your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>

            {/* Background Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-600/10 via-blue-600/10 to-green-600/10 rounded-3xl blur-xl" />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-gradient-to-b hover:from-green-900/10 hover:to-blue-900/10 hover:border-green-500/20 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-green-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {info.description}
                    </p>
                    <a
                      href={info.action}
                      className="text-green-400 hover:text-blue-400 transition-colors duration-300 font-medium"
                    >
                      {info.contact}
                    </a>
                  </div>
                </div>

                {/* Background Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-600/0 via-green-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="text-center p-4 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10">
                <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold text-sm mb-1">Response Time</h4>
                <p className="text-gray-400 text-xs">Within 24 hours</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold text-sm mb-1">Team Size</h4>
                <p className="text-gray-400 text-xs">50+ Experts</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-600/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/5 to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Contact;