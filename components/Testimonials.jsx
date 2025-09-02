'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// ✅ Use a handwriting font (Google Fonts: Kalam or Indie Flower)
import { Kalam } from 'next/font/google';
const handwriting = Kalam({ subsets: ['latin'], weight: ['400', '700'] });

const testimonials = [
  {
    id: 1,
    text: "The execution was fast, communication was very good and overall it's easy to work with you guys",
    author: "Tuomas Lehtovirta",
    role: "CEO at Nordic Gulf Partners",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    position: "top-[10%] left-[20%]",
  },
  {
    id: 2,
    text: "I read Niraj's approach about Athena to retrieve data from SES and it's amazingly explained.",
    author: "Bill Palter",
    role: "Senior Software Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    position: "top-[15%] right-[15%]",
  },
  {
    id: 3,
    text: "I was in urgent need and darshan delivered the module within 2 hours, hats-off to Darshan for the exceptional quality of work.",
    author: "Michael Cole",
    role: "Fiverr Client",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
    position: "bottom-[20%] right-[12%]",
  },
  {
    id: 4,
    text: "wow! you guys are moving so fast that we're behind testing/deploy. Crazy stuff",
    author: "Marc Ruskin",
    role: "Project Manager NAHL",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face",
    position: "bottom-[25%] left-[30%]",
  },
  {
    id: 5,
    text: "Sometimes you need a reality check, and you gave it solidly - harsh but necessary (haha)",
    author: "Shachi Mall",
    role: "100k+ Subscribers",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    position: "bottom-[15%] left-[10%]",
  },
  {
    id: 6,
    text: "As Soon we had the call my mind was going crazy with ideas",
    author: "Harry Latos",
    role: "Founder of Acquired",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    position: "top-[40%] left-[8%]",
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden min-h-screen bg-[#1a1a1a]">
      {/* Title */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 leading-tight">
            low-key
          </h2>
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            our fav section
          </p>
        </motion.div>
      </div>

      {/* Testimonial Cards */}
      <div className="relative h-screen w-full">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, scale: 0.7, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              zIndex: 50,
              transition: { duration: 0.3 }
            }}
            className={`absolute w-72 md:w-80 bg-black/90 rounded-2xl p-6 cursor-pointer shadow-xl border border-gray-700 ${t.position} ${handwriting.className}`}
          >
            {/* Quote */}
            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
              {t.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <Image
                src={t.avatar}
                alt={t.author}
                width={50}
                height={50}
                className="rounded-full border-2 border-orange-500"
              />
              <div>
                <h4 className="text-orange-500 font-bold text-lg truncate">
                  {t.author}
                </h4>
                <p className="text-gray-400 text-sm truncate">
                  {t.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
