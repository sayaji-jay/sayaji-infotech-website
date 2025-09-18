'use client';

import { motion } from 'framer-motion';

const ClientLogos = () => {
  // Client logos with clean, recognizable brands
  const clients = [
    { name: "Force Trance", text: "Force Trance" },
    { name: "Elite", text: "Elite" },
    { name: "L&T", text: "L&T" },
    { name: "Get Floor plan", text: "Get Floor plan" },
    { name: "Sayaji Laminates", text: "Sayaji Laminates" },

  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 relative overflow-hidden">
      {/* Purple Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Purple Gradient Overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
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
            Trusted by industry leaders worldwide
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
                  <div className="text-gray-700 font-bold text-xl tracking-wide cursor-default transition-all duration-300 hover:text-gray-600">
                    {client.text}
                  </div>
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
                  <div className="text-gray-700 font-bold text-xl tracking-wide cursor-default transition-all duration-300 hover:text-gray-600">
                    {client.text}
                  </div>
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
            Join 500+ companies that trust us with their digital transformation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;