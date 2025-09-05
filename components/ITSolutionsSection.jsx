import React from 'react';

// Terminal visual component with online image
const TerminalVisual = () => (
  <div className="relative flex h-full w-full items-center justify-center">
    <div className="relative w-full max-w-lg">
      <img 
        src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=300&fit=crop&crop=center"
        alt="Terminal coding"
        className="w-full h-48 object-cover rounded-lg opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent rounded-lg"></div>
    </div>
  </div>
);

// Dashboard visual component with online image
const DashboardVisual = () => (
  <div className="relative h-full w-full overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
      alt="Dashboard analytics"
      className="w-full h-48 object-cover rounded-lg opacity-70"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent rounded-lg"></div>
  </div>
);

// Globe visual component with online image
const GlobeVisual = () => (
  <div className="relative h-full w-full overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&h=300&fit=crop&crop=center"
      alt="Global network"
      className="w-full h-48 object-cover rounded-lg opacity-75"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent rounded-lg"></div>
  </div>
);

// ERP System visual component with online image
const ERPVisual = () => (
  <div className="relative h-full w-full overflow-hidden">
    <img 
      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
      alt="ERP System Integration"
      className="w-full h-48 object-cover rounded-lg opacity-70"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent rounded-lg"></div>
  </div>
);

// Main bento grid layout
function ITSolutionsSection() {
  return (
    <div className="relative py-20">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:auto-rows-[25rem] md:grid-cols-3">
          
          {/* Software Development - Large card (2 cols) */}
          <div className="group isolate overflow-hidden bg-slate-900/50 backdrop-blur-sm shadow-2xl flex flex-col justify-between md:col-span-2 cursor-pointer [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent [animation:border-spin_8s_linear_infinite]"
            style={{
              '--border-angle': '0deg'
            }}>
            <div className="relative h-full w-full overflow-hidden p-6">
              <TerminalVisual />
            </div>
            <div className="p-6 h-40 relative z-10">
              <h3 className="text-xl font-semibold tracking-tight text-white mb-2">Software Development</h3>
              <p className="text-base text-gray-300 leading-relaxed">Deploy your custom applications in seconds, with our streamlined development process using React, Next.js and modern tech stack.</p>
            </div>
          </div>

          {/* AI/ML Solutions - Small card (1 col) */}
          <div className="group isolate overflow-hidden bg-slate-900/50 backdrop-blur-sm shadow-2xl flex flex-col justify-between md:col-span-1 cursor-pointer [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent [animation:border-spin_8s_linear_infinite]"
            style={{
              '--border-angle': '90deg'
            }}>
            <div className="p-6 h-40 relative z-10">
              <h3 className="text-xl font-semibold tracking-tight text-white mb-2">AI/ML Solutions</h3>
              <p className="text-base text-gray-300 leading-relaxed">Machine Learning models, AI integration and intelligent automation solutions for business intelligence.</p>
            </div>
            <div className="relative h-full w-full overflow-hidden p-6">
              <DashboardVisual />
            </div>
          </div>

          {/* Cloud Services - Small card (1 col) */}
          <div className="group isolate overflow-hidden bg-slate-900/50 backdrop-blur-sm shadow-2xl flex flex-col justify-between md:col-span-1 cursor-pointer [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent [animation:border-spin_8s_linear_infinite]"
            style={{
              '--border-angle': '180deg'
            }}>
            <div className="p-6 h-40 relative z-10">
              <h3 className="text-xl font-semibold tracking-tight text-white mb-2">Cloud Services</h3>
              <p className="text-base text-gray-300 leading-relaxed">Scalable cloud infrastructure, deployment and hosting solutions with edge network technology.</p>
            </div>
            <div className="relative h-full w-full overflow-hidden p-6">
              <GlobeVisual />
            </div>
          </div>

          {/* ERP & System Integration - Large card (2 cols) */}
          <div className="group isolate overflow-hidden bg-slate-900/50 backdrop-blur-sm shadow-2xl flex flex-col justify-between md:col-span-2 cursor-pointer [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent [animation:border-spin_8s_linear_infinite]"
            style={{
              '--border-angle': '270deg'
            }}>
            <div className="p-6 h-40 relative z-10">
              <h3 className="text-xl font-semibold tracking-tight text-white mb-2">ERP & System Integration</h3>
              <p className="text-base text-gray-300 leading-relaxed">Complete business management solutions with ERPNext, Frappe CRM, custom integrations and automated workflows.</p>
            </div>
            <div className="relative h-full w-full overflow-hidden p-6">
              <ERPVisual />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ITSolutionsSection;