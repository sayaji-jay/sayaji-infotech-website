import React from 'react';
import { Code, Brain, Database, Cloud, Smartphone, Settings } from 'lucide-react';

// Card data constants
const CARD_DATA = [
  {
    id: 'software-dev',
    title: 'Software Development',
    subtitle: 'One click deploy',
    description: 'Deploy your app in seconds, with our one click deploy feature.',
    icon: <Code className="w-8 h-8 text-white" />,
    colSpan: 'md:col-span-2',
    hasVisual: true,
    visualType: 'terminal'
  },
  {
    id: 'ai-ml',
    title: 'AI/ML Solutions',
    subtitle: 'Intuitive workflow', 
    description: 'With our intuitive workflow, you can easily manage your app without complex steps.',
    icon: <Brain className="w-8 h-8 text-white" />,
    colSpan: 'md:col-span-1',
    hasVisual: true,
    visualType: 'dashboard'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    subtitle: 'Hosting over the edge',
    description: 'With our edge network, we host your website by going into each city by ourselves.',
    icon: <Cloud className="w-8 h-8 text-white" />,
    colSpan: 'md:col-span-1',
    hasVisual: true,
    visualType: 'globe'
  },
  {
    id: 'system-integration',
    title: 'System Integration',
    subtitle: 'Running out of copy',
    description: 'You are running out of copy for your website, we can generate copy for you.',
    icon: <Settings className="w-8 h-8 text-white" />,
    colSpan: 'md:col-span-2',
    hasVisual: true,
    visualType: 'dashboard'
  }
];

// Terminal visual component
const TerminalVisual = () => (
  <div className="relative flex h-full w-full items-center justify-center mt-4">
    <div className="relative grid w-full max-w-lg grid-cols-3 gap-4 [perspective:1000px] [transform-style:preserve-3d]">
      <div className="relative flex h-32 w-full rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-900 p-3 shadow-lg flex-col items-start justify-center overflow-hidden font-mono text-neutral-300">
        <p className="text-[10px] text-green-400">git add .</p>
        <p className="text-[10px] text-green-400">git commit -m "update"</p>
        <p className="text-[10px] text-green-400">git push</p>
      </div>
      <div className="relative flex h-32 w-full items-center justify-center rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-900 p-3 shadow-lg">
        <svg width="32" height="32" viewBox="0 0 20 20" className="text-white">
          <path fill="currentColor" d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"/>
        </svg>
      </div>
      <div className="relative h-32 w-full rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-900 p-3 shadow-lg flex flex-col items-center justify-center">
        <div className="text-orange-400 text-2xl font-bold">aws</div>
        <p className="text-[10px] text-green-400 mt-1">your site is live ✨</p>
      </div>
    </div>
  </div>
);

// Dashboard visual component  
const DashboardVisual = () => (
  <div className="mt-4 h-full w-full rounded-lg border border-neutral-700 bg-neutral-800 p-2">
    <div className="w-full h-32 bg-neutral-100 dark:bg-neutral-900 rounded-md flex items-center justify-center relative overflow-hidden">
      {/* Mock dashboard */}
      <div className="absolute inset-2 bg-white dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700 p-2">
        <div className="flex justify-between items-center mb-2">
          <div className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">₹</span>
          </div>
          <div className="text-right">
            <div className="text-xs font-semibold dark:text-white">₹42,000</div>
          </div>
        </div>
        <div className="space-y-1">
          {[1,2,3].map(i => (
            <div key={i} className="flex justify-between items-center">
              <div className="w-16 h-2 bg-neutral-200 dark:bg-neutral-600 rounded"></div>
              <div className="w-8 h-2 bg-neutral-300 dark:bg-neutral-500 rounded"></div>
            </div>
          ))}
        </div>
        <div className="mt-2 flex space-x-1">
          <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
          <div className="w-4 h-4 bg-green-400 rounded-sm"></div>
          <div className="w-4 h-4 bg-orange-400 rounded-sm"></div>
        </div>
      </div>
    </div>
  </div>
);

// Globe visual component
const GlobeVisual = () => (
  <div className="relative h-full w-full overflow-hidden mt-4">
    <div className="relative flex h-40 flex-col items-center bg-transparent justify-center">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-800 relative overflow-hidden shadow-2xl">
        {/* Globe effect */}
        <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-transparent to-black/20"></div>
        
        {/* Dots pattern to simulate cities */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-6 gap-1 opacity-60">
            {Array.from({length: 24}).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-xl"></div>
      </div>
    </div>
  </div>
);

// Single bento card component
const BentoCard = ({ cardData }) => {
  const renderVisual = () => {
    switch (cardData.visualType) {
      case 'terminal':
        return <TerminalVisual />;
      case 'dashboard':
        return <DashboardVisual />;
      case 'globe':
        return <GlobeVisual />;
      default:
        return null;
    }
  };

  return (
    <div className={`group isolate overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between ${cardData.colSpan} relative cursor-pointer hover:scale-[1.02] transition-all duration-300`}>
      
      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full min-h-[400px]">
        
        {/* Visual content section - top half */}
        {cardData.hasVisual && (
          <div className="flex-1 relative overflow-hidden">
            {renderVisual()}
          </div>
        )}
        
        {/* Text content section - bottom */}
        <div className="mt-auto">
          <h3 className="font-sans text-base font-medium tracking-tight text-neutral-100 mb-2">
            {cardData.subtitle}
          </h3>
          
          <p className="font-sans text-base font-normal tracking-tight text-neutral-400 leading-relaxed">
            {cardData.description}
          </p>
        </div>
      </div>
      
      {/* Hover border effect */}
      <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-transparent via-neutral-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

// Main bento grid layout
function ITSolutionsSection() {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        
        {/* Header section - exactly like the image */}
        <div className="my-20">
          <div className="relative mx-auto flex w-fit items-center justify-center p-4">
            <div className="absolute inset-0 h-full w-full border border-neutral-700 rounded-md">
              <div className="absolute -left-1 -top-1 h-2 w-2 bg-neutral-700 rounded-sm"></div>
              <div className="absolute -right-1 -top-1 h-2 w-2 bg-neutral-700 rounded-sm"></div>
              <div className="absolute -bottom-1 -left-1 h-2 w-2 bg-neutral-700 rounded-sm"></div>
              <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-neutral-700 rounded-sm"></div>
            </div>
            <h2 className="text-bold mx-auto w-fit text-center font-sans text-xl md:text-4xl font-bold tracking-tight text-neutral-100 px-8 py-4">
              IT Solutions Made Easy
            </h2>
          </div>
          
          <p className="mx-auto mt-4 max-w-lg text-center text-sm text-neutral-400">
            We provide complete technology solutions for your business transformation.
          </p>
        </div>

        {/* Bento Grid - exactly like the image layout */}
        <div className="grid grid-cols-1 gap-4 md:auto-rows-[25rem] md:grid-cols-3">
          {/* First row: Large card (2 cols) + Small card (1 col) */}
          <div className="group isolate overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between md:col-span-2">
            <div className="relative h-full w-full overflow-hidden">
              <div className="relative flex h-full w-full items-center justify-center p-8">
                <TerminalVisual />
              </div>
            </div>
            <div className="p-6 h-40">
              <h3 className="font-sans text-base font-medium tracking-tight text-neutral-100">Software Development</h3>
              <p className="mt-2 max-w-xs font-sans text-base font-normal tracking-tight text-neutral-400">Deploy your custom applications in seconds, with our streamlined development process.</p>
            </div>
          </div>

          <div className="group isolate overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between md:col-span-1">
            <div className="p-6 h-40">
              <h3 className="font-sans text-base font-medium tracking-tight text-neutral-100">AI/ML Solutions</h3>
              <p className="mt-2 max-w-xs font-sans text-base font-normal tracking-tight text-neutral-400">With our intuitive AI workflow, you can easily manage your business intelligence without complex steps.</p>
            </div>
            <div className="relative h-full w-full overflow-hidden">
              <DashboardVisual />
            </div>
          </div>

          {/* Second row: Small card (1 col) + Large card (2 cols) */}
          <div className="group isolate overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between md:col-span-1">
            <div className="p-6 h-40">
              <h3 className="font-sans text-base font-medium tracking-tight text-neutral-100">Cloud Services</h3>
              <p className="mt-2 max-w-xs font-sans text-base font-normal tracking-tight text-neutral-400">With our edge network, we host your website by going into each city by ourselves.</p>
            </div>
            <div className="relative h-full w-full overflow-hidden">
              <GlobeVisual />
            </div>
          </div>

          <div className="group isolate overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] flex flex-col justify-between md:col-span-2">
            <div className="p-6 h-40">
              <h3 className="font-sans text-base font-medium tracking-tight text-neutral-100">ERP & System Integration</h3>
              <p className="mt-2 max-w-xs font-sans text-base font-normal tracking-tight text-neutral-400">Complete business management solutions with ERPNext, custom integrations and automated workflows.</p>
            </div>
            <div className="relative h-full w-full overflow-hidden">
              <DashboardVisual />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ITSolutionsSection;

