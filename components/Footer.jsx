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
    <footer className="relative bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 border-t border-white/10">
      {/* Purple Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Purple Gradient Overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="w-14 h-14  p-2.5 flex items-center justify-center ">
                <Image
                  src="/images/logo.png"
                  alt="Sayaji Infotech Logo"
                  width={48}
                  height={48}
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
                <span className="text-sm">hello@sayajiinfotech.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm">+91 98765 43210</span>
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