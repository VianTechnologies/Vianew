import React from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Data Strategy', id: 'strategy' },
    { name: 'Data Modelling', id: 'modeling' },
    { name: 'Data Platform Design', id: 'platform' },
    { name: 'Technology Selection', id: 'tech-selection' },
    { name: 'POC & Pilots', id: 'poc' },
    { name: 'Business Value Analytics', id: 'analytics' },
  ];

  const accelerators = [
    { name: 'AI Readiness Scorecard', id: 'ai-readiness' },
    { name: 'Governance Starter Kit', id: 'governance-kit' },
    { name: 'Architecture Review', id: 'arch-review' },
    { name: 'Process Mining Pilot', id: 'process-pilot' },
    { name: 'ERP Migration Strategy', id: 'erp-strategy' },
    { name: 'AI Executive Workshop', id: 'exec-workshop' },
  ];

  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-100">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Contact Info Column - Spans 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100 group-hover:border-primary-200 transition-colors">
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
              <span className="text-2xl font-serif font-bold text-gray-900 tracking-tight">ViaNew</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Architecting your AI-Ready Data Future. We provide expert blueprints, audits, and governance for the modern enterprise.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start space-x-3 text-gray-500 text-sm">
                <FiMapPin size={16} className="mt-0.5 text-primary-600 shrink-0" />
                <span>Judithsvej 15, 2. sal. tv,<br />2900 Hellerup, Denmark</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500 text-sm">
                <FiMail size={16} className="text-primary-600 shrink-0" />
                <span>hello@vianew.dk</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-500 text-sm">
                <FiPhone size={16} className="text-primary-600 shrink-0" />
                <span>+45 31780919</span>
              </li>
            </ul>

            <div className="flex space-x-4 pt-4">
              {[FiLinkedin, FiTwitter, FiFacebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Column - Spans 2 columns */}
          <div className="lg:col-span-2 lg:pl-8">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accelerators Column - Spans 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Accelerators</h3>
            <ul className="space-y-3">
              {accelerators.map((item) => (
                <li key={item.id}>
                  <Link href={`/accelerators#${item.id}`} className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} Via New Inc. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
