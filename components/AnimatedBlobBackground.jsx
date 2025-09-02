'use client'

import { useTheme } from '@/context/ThemeContext';

export default function AnimatedBlobBackground() {
  const { isDarkMode } = useTheme();
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Black Background for Dark Theme */}
      <div className={`absolute inset-0 transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-transparent'}`} />
    </div>
  )
}