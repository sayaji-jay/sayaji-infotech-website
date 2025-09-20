'use client';

import React from 'react';

const GridLayout = ({ children, className = '', variant = 'default' }) => {

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] light:bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Purple Gradient Overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 light:hidden rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 light:hidden rounded-full blur-3xl"></div>

      {/* Corner Fade Effects */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950/40 to-transparent light:hidden pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950/40 to-transparent light:hidden pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-950/30 to-transparent light:hidden pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-950/30 to-transparent light:hidden pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GridLayout;