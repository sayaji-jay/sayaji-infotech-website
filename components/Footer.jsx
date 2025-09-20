'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="relative bg-transparent">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10 bg-slate-950/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/10 ring-1 ring-white/5 hover:shadow-purple-500/20 transition-all duration-500 mb-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

          {/* Left Side - Logo and Company Info */}
          <div className="flex flex-col">
            <Link href="/" className="inline-block mb-6">
              <div className="w-48 h-24 p-2.5 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Sayaji Infotech Logo"
                  width={120}
                  height={120}
                  className={`w-full h-full object-contain filter brightness-110 ${theme === 'light' ? 'invert' : ''}`}
                />
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed text-base">
              We transform ideas into powerful digital solutions. From web applications to
              enterprise software, we deliver cutting-edge technology that drives business growth.
            </p>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-6 text-lg">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-base">office@sayajiinfotech.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-base">+87329 92181</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-base">Vadodara, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-gray-300 text-sm mb-4 sm:mb-0">
            © 2024 Sayaji Infotech. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;