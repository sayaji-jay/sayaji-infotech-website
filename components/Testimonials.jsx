'use client';

import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    // Column 1
    [
      {
        name: 'Jason',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=45&h=45&fit=crop&crop=face',
        platform: 'upwork',
        text: 'Very professional and pleasant to work with. We needed to get a demo pilot mobile app developed and Sayaji Infotech came through for us.'
      },
      {
        name: 'Dan Martin',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=45&h=45&fit=crop&crop=face',
        platform: 'upwork',
        text: 'Tanay and his team at Sayaji Infotech are the best outsourced overseas development team I\'ve ever worked with.'
      },
      {
        name: 'Anthony',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=45&h=45&fit=crop&crop=face',
        platform: 'upwork',
        text: 'Just a pleasure to work with :) 10/10 recommend :)'
      }
    ],
    // Column 2
    [
      {
        name: 'Sifiso Vundla',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=45&h=45&fit=crop&crop=face',
        platform: 'upwork',
        text: 'Excellent Services! The quality of work exceeded our expectations.'
      },
      {
        name: 'Bellal Hassanein',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=45&h=45&fit=crop&crop=face',
        platform: 'freelancer',
        text: 'It was a pleasure to work with Tanay and his team once again. Their professionalism and dedication made the process smooth.'
      },
      {
        name: 'Enlai',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=45&h=45&fit=crop&crop=face',
        platform: 'upwork',
        text: 'Tanay was fast, highly flexible and knowledgeable. A jack of all trades who can handle any task.'
      }
    ],
    // Column 3
    [
      {
        name: 'Gal',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=45&h=45&fit=crop&crop=face',
        platform: 'upwork',
        text: 'Guys were professional and accurate in implementation. Communication was prompt throughout the entire contract.'
      },
      {
        name: 'John Vaughan',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=45&h=45&fit=crop&crop=face',
        platform: 'upwork',
        text: 'Tanay has great communication skills. He\'s very knowledgeable, and was able to help us troubleshoot complex issues.'
      },
      {
        name: 'Abbas',
        avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=45&h=45&fit=crop&crop=face',
        platform: 'upwork',
        text: 'Well done team!! The app created has gone through a welcome facelift and I am very happy with the results.'
      }
    ]
  ];

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
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-4 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="text-white font-medium text-sm">{testimonial.name}</div>
          </div>
        </div>
        <div className="text-green-400">
          {getPlatformIcon(testimonial.platform)}
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{testimonial.text}</p>
    </div>
  );

  return (
    <section className="py-20 lg:py-32 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              What{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Others Say
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Trusted by many, check our reviews below
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative h-[500px] overflow-hidden rounded-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {testimonials.map((column, columnIndex) => (
              <div key={columnIndex} className="relative h-full overflow-hidden">
                <motion.div
                  animate={{
                    y: columnIndex === 0 ? [-60, 60] : columnIndex === 1 ? [60, -60] : [-30, 30]
                  }}
                  transition={{
                    duration: columnIndex === 0 ? 15 : columnIndex === 1 ? 18 : 16,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                  }}
                  className="space-y-4 will-change-transform"
                >
                  {/* Triple the cards for seamless infinite scroll */}
                  {[...Array(4)].map((_, repeatIndex) => (
                    <div key={repeatIndex}>
                      {column.map((testimonial, index) => (
                        <div key={`${repeatIndex}-${index}`} className="mb-4">
                          <TestimonialCard testimonial={testimonial} />
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Strong top fade */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0a0b23] to-transparent pointer-events-none z-20"></div>
          {/* Strong bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0b23] to-transparent pointer-events-none z-20"></div>
          
          {/* Additional solid edges to ensure nothing escapes */}
          <div className="absolute inset-x-0 top-0 h-1 bg-[#0a0b23] pointer-events-none z-30"></div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-[#0a0b23] pointer-events-none z-30"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;