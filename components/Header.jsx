'use client';

import Link from 'next/link';
import { Search, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';

const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // Navigation menu items
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
          <nav className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-sm transform rotate-45"></div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-red-600 transition-colors">WEB ANIMATIONS</a>
          <a href="#" className="hover:text-red-600 transition-colors">LEARN WEB3D</a>
          <a href="#" className="text-red-800 font-bold">CREATIVE CODE</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">New-learner Offer</span>
          <button className="px-6 py-2 bg-white border border-red-800 text-red-800 rounded-full text-sm font-medium hover:bg-red-50 transition-colors">
            Login
          </button>
          <button className="px-6 py-2 bg-red-800 text-white rounded-full text-sm font-medium hover:bg-red-900 transition-colors">
            GET STARTED
          </button>
        </div>
      </nav>
  );
};

export default Header;