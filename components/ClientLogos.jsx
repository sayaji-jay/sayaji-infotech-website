'use client';

import { motion } from 'framer-motion';
import websiteData from '../data/website-data.json';

const ClientLogos = () => {
  // Get clients data from JSON
  const clients = websiteData.trustedCompanies.companies;

  return (
    <section className="py-16 bg-transparent relative overflow-hidden">
      {/* Gradient Fade Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-transparent to-slate-950/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-slate-950/20 via-transparent to-slate-950/30 pointer-events-none"></div>

      {/* Full Width Container */}
      <div className="w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg font-medium"
          >
            {websiteData.trustedCompanies.title}
          </motion.p>
        </div>

        {/* Full Width Logos Carousel */}
        <div className="relative w-full overflow-hidden">
          {/* First Row - Left to Right */}
          <div className="relative h-24 overflow-hidden">
            <motion.div
              animate={{
                x: [0, -100 * clients.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
              className="flex items-center space-x-20 absolute top-0 whitespace-nowrap"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-40 h-16 flex items-center justify-center"
                >
                  <img
                    src={`/images${client.logo}`}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left (offset) */}
          <div className="relative h-24 overflow-hidden mt-8">
            <motion.div
              animate={{
                x: [-100 * clients.length, 0]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear"
                }
              }}
              className="flex items-center space-x-20 absolute top-0 whitespace-nowrap"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
              }}
            >
              {/* Reverse order for opposite direction */}
              {[...clients.slice().reverse(), ...clients.slice().reverse(), ...clients.slice().reverse()].map((client, index) => (
                <div
                  key={`${client.name}-reverse-${index}`}
                  className="flex-shrink-0 w-40 h-16 flex items-center justify-center"
                >
                  <img
                    src={`/images${client.logo}`}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 px-4"
        >
          <p className="text-gray-500 text-sm">
            {websiteData.trustedCompanies.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;