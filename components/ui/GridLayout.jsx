'use client';

import React from 'react';

const GridLayout = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: 'bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950',
    hero: 'bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950',
    transparent: 'bg-transparent'
  };

  return (
    <div className={`relative overflow-hidden ${variants[variant]} ${className}`}>
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Purple Gradient Overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GridLayout;