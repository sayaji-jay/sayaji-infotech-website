'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, Settings, Code, Smartphone, Zap, Database } from 'lucide-react';
import { serviceItems } from '@/components/constants/services';

const iconMap = {
  Globe,
  Settings,
  Code,
  Smartphone,
  Zap,
  Database
};

function ServiceGallery({ items, setIndex, setOpen, index }) {
  return (
    <div className="rounded-md w-fit mx-auto md:gap-3 gap-2 flex pb-20 pt-10 overflow-x-auto px-4">
      {items.map((item, i) => {
        const IconComponent = iconMap[item.icon];
        return (
          <motion.div
            key={item.id}
            whileTap={{ scale: 0.95 }}
            className={`rounded-2xl transition-all duration-500 ease-in-out cursor-pointer relative overflow-hidden ${
              index === i
                ? 'w-[350px] md:w-[400px]'
                : 'w-[80px] md:w-[100px]'
            } h-[280px] flex-shrink-0 group`}
            onMouseEnter={() => setIndex(i)}
            onMouseLeave={() => setIndex(i)}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                fill
                src={item.url}
                alt={item.title}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
              {/* Icon - Always Visible */}
              <div className="mb-2">
                <IconComponent className="w-8 h-8 text-teal-400" />
              </div>

              {/* Title - Always Visible */}
              <h3 className={`font-bold transition-all duration-300 ${
                index === i ? 'text-xl mb-3' : 'text-sm'
              }`}>
                {item.title}
              </h3>

              {/* Expanded Content - Only visible when active */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: index === i ? 1 : 0,
                  height: index === i ? 'auto' : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Features */}
                <div className="mb-4">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="text-xs text-teal-300 mb-1">
                      • {feature}
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <Link
                  href="/contact"
                  className="inline-block px-4 py-2 bg-teal-500 hover:bg-teal-400 text-white text-sm rounded-full transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn More
                </Link>
              </motion.div>
            </div>

            {/* Vertical Title for collapsed state */}
            {index !== i && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
                <span className="text-white font-semibold text-sm">
                  {item.title}
                </span>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function ServicesGallery() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div className="relative py-20">
    
      <ServiceGallery
        items={serviceItems}
        index={index}
        setIndex={setIndex}
        setOpen={setOpen}
      />

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="overlay"
            className="dark:bg-black/40 bg-white/40 backdrop-blur-sm fixed inset-0 z-50 top-0 left-0 bottom-0 right-0 w-full h-full grid place-content-center"
            onClick={() => setOpen(false)}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <motion.div
                layoutId={serviceItems[index].id}
                className="w-[90vw] max-w-[500px] h-[600px] rounded-2xl cursor-default relative overflow-hidden"
              >
                <Image
                  src={serviceItems[index].url}
                  fill
                  alt="service-detail"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="mb-4">
                    {React.createElement(iconMap[serviceItems[index].icon], {
                      className: "w-12 h-12 text-teal-400"
                    })}
                  </div>
                  
                  <motion.h1
                    initial={{ scaleY: 0.2 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0.2 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="text-3xl font-bold mb-4"
                  >
                    {serviceItems[index].title}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="text-lg leading-relaxed mb-6"
                  >
                    {serviceItems[index].description}
                  </motion.p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 text-teal-300">Key Features:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceItems[index].features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-gray-200">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-full font-semibold transition-colors duration-300"
                    >
                      Get Started
                    </Link>
                    <button
                      onClick={() => setOpen(false)}
                      className="px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}