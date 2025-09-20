"use client"

import { useState, useEffect } from "react"
import ImageWithFallback from './ui/image-with-fallback';

const websiteImages = [
  {
    id: 1,
    title: "TraxBee IoT Solutions",
    image: "/images/screenshot/slider1.jpeg",
    url: "http://traxbee.in/",
  },
  {
    id: 2,
    title: "Deval Polymers",
    image: "/images/screenshot/slider2.jpeg",
    url: "https://devalpolymers.com/",
  },
  {
    id: 3,
    title: "Lime Pi Site",
    image: "/images/screenshot/slider3.jpeg",
    url: "https://lime-pi-site-five.vercel.app/",
  },
  {
    id: 4,
    title: "Sayaji Bio",
    image: "/images/screenshot/slider4.jpeg",
    url: "https://sayajibio.com/",
  },
  {
    id: 5,
    title: "Search Ends",
    image: "/images/screenshot/slider5.jpeg",
    url: "https://searchends.com/",
  },
  {
    id: 6,
    title: "Ruchit Dev",
    image: "/images/screenshot/slider7.jpeg",
    url: "-",
  },
  {
    id: 7,
    title: "FGG Projects",
    image: "/images/screenshot/slider8.jpeg",
    url: "https://www.fggprojects.com/",
  },
  {
    id: 8,
    title: "Linemark Crop Care",
    image: "/images/screenshot/slider9.jpeg",
    url: "https://www.linemarkcropcare.com/",
  },
]

export default function WebsiteShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState("forward")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === "forward") {
          if (prevIndex === websiteImages.length - 1) {
            // Reached the end, change direction to backward
            setDirection("backward")
            return prevIndex - 1
          } else {
            return prevIndex + 1
          }
        } else {
          // backward direction
          if (prevIndex === 0) {
            // Reached the beginning, change direction to forward
            setDirection("forward")
            return prevIndex + 1
          } else {
            return prevIndex - 1
          }
        }
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [direction])

  const getSlidePosition = (index) => {
    const totalItems = websiteImages.length
    const extendedArray = [...websiteImages, ...websiteImages, ...websiteImages] // Triple for smooth infinite scroll
    const centerIndex = totalItems // Center of the extended array
    const currentPosition = centerIndex + currentIndex

    return extendedArray
      .map((item, i) => {
        const position = i - currentPosition
        const distance = Math.abs(position)

        // Calculate scale based on distance from center
        let scale = 1
        if (distance === 0)
          scale = 1.2 // Center phone - largest
        else if (distance === 1)
          scale = 0.9 // Adjacent phones
        else if (distance === 2)
          scale = 0.7 // Further phones
        else scale = 0.5 // Farthest phones

        // Calculate opacity
        let opacity = 1
        if (distance === 0) opacity = 1
        else if (distance === 1) opacity = 0.8
        else if (distance === 2) opacity = 0.5
        else opacity = 0.2

        // Calculate translateX with equal spacing
        const spacing = 250 // Equal distance between all phones
        const translateX = position * spacing

        // Calculate translateY for subtle arc effect
        const translateY = distance === 0 ? -20 : distance * 10

        // Calculate rotation for 3D effect
        const rotateY = position * -5

        // Z-index for layering
        const zIndex = distance === 0 ? 50 : 40 - distance

        return {
          ...item,
          position,
          scale,
          opacity,
          translateX,
          translateY,
          rotateY,
          zIndex,
          distance,
          key: `${item.id}-${i}`, // Unique key for each instance
        }
      })
      .filter((item) => Math.abs(item.position) <= 3) // Show only 7 phones total (center + 3 on each side)
  }

  const visibleItems = getSlidePosition(currentIndex)

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Gradient Fade Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-transparent to-slate-950/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-slate-950/20 via-transparent to-slate-950/30 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Have a look beautiful websites
            <br />
            we've designed
          </h2>
        </div>

        <div className="relative h-[600px] overflow-hidden">
          <div className="flex items-center justify-center h-full relative perspective-1000">
            {visibleItems.map((item) => (
              <div
                key={item.key}
                className="absolute transition-all duration-[3000ms] ease-in-out"
                style={{
                  transform: `translateX(${item.translateX}px) translateY(${item.translateY}px) scale(${item.scale}) rotateY(${item.rotateY}deg)`,
                  opacity: item.opacity,
                  zIndex: item.zIndex,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative">
                  <div
                    className={`relative bg-black rounded-[2.5rem] p-2 transition-all duration-2000 ${
                      item.distance === 0
                        ? "shadow-lg shadow-blue-500/20 ring-2 ring-blue-400/30 ring-offset-1 ring-offset-transparent"
                        : "shadow-md shadow-black/10"
                    }`}
                  >
                    <div className="bg-white rounded-[2rem] overflow-hidden">
                      {/* Phone Screen */}
                      <div className="relative h-[400px] w-[200px]">
                        {/* Browser Chrome - Fixed to top */}
                        <div className="absolute top-0 left-0 right-0 h-10 bg-gray-100 border-b flex items-center px-4 z-10">
                          <div
                            className="flex-1 bg-white rounded px-2 py-1 text-xs text-gray-600 cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={() => window.open(item.url, '_blank')}
                          >
                            {item.title.toLowerCase().replace(/\s+/g, "")}.com
                          </div>
                        </div>

                        {/* Website Content */}
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          fallbackSrc="/images/placeholder-website.svg"
                          className="w-full h-full object-cover object-center transition-all duration-2000 pt-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute -bottom-20 left-0 right-0 h-20 rounded-[2.5rem] blur-xl transition-all duration-2000 ${
                      item.distance === 0
                        ? "bg-gradient-to-b from-blue-500/30 to-transparent"
                        : "bg-gradient-to-b from-black/10 to-transparent"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {websiteImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-full transition-all duration-500 hover:scale-110 ${
                index === currentIndex
                  ? "bg-white w-8 h-3 shadow-lg shadow-white/30"
                  : "bg-white/50 hover:bg-white/70 w-3 h-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
