import React from 'react'
import ScrollBaseAnimation from './uilayouts/scroll-text-marque';

const TextMarque = ({text = "Insights & Resources • IT Solutions • Enterprise Grade •"}) => {
  return (
      <div className="relative overflow-hidden m-3">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 w-32 h-full to-transparent z-10"></div>
        {/* Right Fade */}
        <div className="absolute right-0 top-0 w-32 h-full to-transparent z-10"></div>
        
        <ScrollBaseAnimation
          baseVelocity={2}
          scrollDependent={false}
          clasname="font-bold tracking-[-0.05em] leading-[90%] bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 light:from-blue-700 light:via-purple-800 light:to-cyan-700 bg-clip-text text-transparent">
          {text}
        </ScrollBaseAnimation>
      </div>
  )
}

export default TextMarque