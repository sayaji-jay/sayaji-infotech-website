'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
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
  }, []);

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-slate-950/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/10 ring-1 ring-white/5 hover:shadow-purple-500/20 transition-all duration-500">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 p-2 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Sayaji Infotech Logo"
                  width={40}
                  height={40}
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
                  href={item.href}
                  className={`relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.href.substring(1)
                      ? 'text-white bg-gradient-to-r from-purple-600/20 to-pink-600/20 ring-1 ring-purple-500/30 shadow-lg shadow-purple-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse"></div>
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-950/95 rounded-lg mt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-white bg-gradient-to-r from-purple-600/20 to-pink-600/20 ring-1 ring-purple-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;