'use client'

import { useTheme } from '@/context/ThemeContext';

export default function AnimatedBlobBackground() {
  const { isDarkMode } = useTheme();
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Black Background for Dark Theme */}
      <div className={`absolute inset-0 transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-transparent'}`} />
      
      <svg 
        preserveAspectRatio="xMidYMid slice" 
        viewBox="10 10 80 80"
        className="absolute inset-0 w-full h-full opacity-30 transition-opacity duration-500"
      >
        <defs>
          <style>{`
            @keyframes rotate {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            .out-top {
              animation: rotate 20s linear infinite;
              transform-origin: 13px 25px;
              filter: ${isDarkMode ? 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6)) blur(1px)' : 'none'};
            }
            .in-top {
              animation: rotate 10s linear infinite;
              transform-origin: 13px 25px;
              filter: ${isDarkMode ? 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.5)) blur(1px)' : 'none'};
            }
            .out-bottom {
              animation: rotate 25s linear infinite;
              transform-origin: 84px 93px;
              filter: ${isDarkMode ? 'drop-shadow(0 0 18px rgba(37, 99, 235, 0.5)) blur(1px)' : 'none'};
            }
            .in-bottom {
              animation: rotate 15s linear infinite;
              transform-origin: 84px 93px;
              filter: ${isDarkMode ? 'drop-shadow(0 0 22px rgba(8, 145, 178, 0.6)) blur(1px)' : 'none'};
            }
          `}</style>
        </defs>
        {/* Top Blobs - Keep Blue/Green bright in both themes */}
        <path 
          fill="#3b82f6" 
          className="out-top" 
          d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
        />
        <path 
          fill="#06b6d4" 
          className="in-top" 
          d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
        />

        {/* Bottom Blobs - Keep Blue/Green bright in both themes */}
        <path 
          fill="#2563eb" 
          className="out-bottom" 
          d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
        />
        <path 
          fill="#0891b2" 
          className="in-bottom" 
          d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
        />
      </svg>
    </div>
  )
}