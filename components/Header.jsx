'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useTheme();

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/50 dark:border-slate-700/50 transition-all duration-300">
      <nav className="flex items-center justify-between px-8 py-4">
        
        {/* Left: Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-teal-500 to-blue-600 dark:from-teal-500 dark:via-blue-600 dark:to-teal-600 rounded-lg flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 bg-white dark:bg-slate-900 rounded-sm transform rotate-45"></div>
          </div>
          <span className="font-bold text-lg text-gray-800 dark:text-teal-400">Sayaji Infotech</span>
        </motion.div>

        {/* Center: Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="hidden md:flex items-center space-x-8 text-sm font-semibold"
        >
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`transition-colors hover:text-blue-600 dark:hover:text-teal-400 ${
                pathname === item.href
                  ? 'text-blue-600 dark:text-teal-400 font-bold'
                  : 'text-gray-700 dark:text-slate-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>

        {/* Right: Theme Toggle + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center space-x-4"
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-slate-800 text-gray-700 dark:text-slate-300 transition-colors"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="outline"
            className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-teal-500 dark:text-teal-400 dark:hover:bg-slate-800 px-6 py-2 rounded-full font-semibold shadow-md transition-colors"
          >
            Login
          </Button>
          <Button
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 dark:from-teal-500 dark:to-blue-600 dark:hover:from-teal-600 dark:hover:to-blue-700 text-white px-6 py-2 rounded-full font-bold shadow-lg transition-all duration-300"
          >
            Get in Touch
          </Button>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
