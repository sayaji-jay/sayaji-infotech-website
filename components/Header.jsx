'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  // Check if we're on a project page or any sub-page (not the main page)
  const isOnSubPage = pathname !== '/';

  // Function to get the correct href for navigation items
  const getNavHref = (href) => {
    if (isOnSubPage) {
      // If on a sub-page, navigate to main page with the section hash
      return `/${href}`;
    }
    // If on main page, use the hash directly
    return href;
  };

  useEffect(() => {
    // Only track scroll on main page
    if (!isOnSubPage) {
      const handleScroll = () => {
        const sections = navItems.map(item => item.href.substring(1));
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (currentSection) {
          setActiveSection(currentSection);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Reset active section when on sub-pages
      setActiveSection('');
    }
  }, [isOnSubPage]);

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 header-bg">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-25 h25 p-2 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Sayaji Infotech Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain filter brightness-110"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={getNavHref(item.href)}
                  className={`relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.href.substring(1) && !isOnSubPage
                      ? 'nav-item-active'
                      : 'nav-item'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.href.substring(1) && !isOnSubPage && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <div className="hidden md:block">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg nav-item transition-all duration-300 transform hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href={getNavHref('#contact')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden nav-item transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 mobile-menu-bg rounded-lg mt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={getNavHref(item.href)}
                className={`relative block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.substring(1) && !isOnSubPage
                    ? 'nav-item-active'
                    : 'nav-item'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center justify-between mt-4">
              <Link
                href={getNavHref('#contact')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
              <button
                onClick={toggleTheme}
                className="ml-3 p-2 rounded-lg nav-item transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;