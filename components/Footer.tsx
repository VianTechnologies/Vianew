import React from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                <svg width="40" height="40" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e9d5ff" />
                      <stop offset="50%" stopColor="#d8b4fe" />
                      <stop offset="100%" stopColor="#99f6e4" />
                    </linearGradient>
                  </defs>
                  <circle cx="28" cy="28" r="26" fill="url(#footerLogoGradient)" opacity="0.8" />
                  <g stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <path d="M18 21 L25 35 L32 21" />
                    <path d="M36 25 L40 28 L36 31" />
                  </g>
                </svg>
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">ViaNew</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering value via new path. We transform data-rich enterprises through intelligent automation and embedded AI solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              {[FiLinkedin, FiTwitter, FiFacebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Solutions</h3>
            <ul className="space-y-3">
              {['Data Governance', 'Process Mapping', 'Data Integration', 'Advanced Analytics'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Case Studies', 'Resources', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <FiMapPin size={18} className="mt-0.5 text-primary-500 shrink-0" />
                <span>123 Business Street, Suite 100<br />San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <FiMail size={18} className="text-primary-500 shrink-0" />
                <span>hello@vianew.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <FiPhone size={18} className="text-primary-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} Via New Inc. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

