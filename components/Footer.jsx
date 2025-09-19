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

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'Enterprise Software', href: '#services' },
      { name: 'Consulting', href: '#contact' }
    ],
    resources: [
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Blog', href: '#' },
      { name: 'Support', href: '#contact' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="relative bg-transparent">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10 bg-slate-950/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl shadow-purple-500/10 ring-1 ring-white/5 hover:shadow-purple-500/20 transition-all duration-500 mb-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="w-40 h-20  p-2.5 flex items-center justify-center ">
                <Image
                  src="/images/logo.png"
                  alt="Sayaji Infotech Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain filter brightness-110"
                />
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We transform ideas into powerful digital solutions. From web applications to
              enterprise software, we deliver cutting-edge technology that drives business growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">office@sayajiinfotech.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">+87329 92181</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Vadodara, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Features Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
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