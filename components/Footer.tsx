import React from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e9d5ff" />
                    <stop offset="50%" stopColor="#d8b4fe" />
                    <stop offset="100%" stopColor="#99f6e4" />
                  </linearGradient>
                </defs>
                
                {/* Main Circle with soft gradient */}
                <circle cx="20" cy="20" r="18" fill="url(#footerLogoGradient)" stroke="#d8b4fe" strokeWidth="1" opacity="0.8" />
                
                {/* V> Design - Proper V with greater than sign */}
                <g stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                  {/* Proper V shape pointing down */}
                  <path d="M13 17 L18 27 L23 17" />
                  {/* True greater than sign > */}
                  <path d="M26 18 L28 20 L26 22" />
                </g>
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-serif font-bold leading-tight bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Via New
              </span>
              <span className="text-xs text-primary-300 font-medium tracking-wide uppercase -mt-1">delivering value via new path</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4">
            Delivering value via new path - data driven and AI embedded in process workflows. Transform your business with intelligent automation and strategic data solutions.
          </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/data-governance" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Data Governance
                </Link>
              </li>
              <li>
                <Link href="/services/process-mapping" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Data Process Mapping
                </Link>
              </li>
              <li>
                <Link href="/services/data-integration" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Data Integration
                </Link>
              </li>
              <li>
                <Link href="/services/data-analytics" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/reports" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Reports
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMail size={16} />
                <span>info@vianew.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FiPhone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMapPin size={16} />
                <span>123 Business Street, Suite 100</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Via New. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

