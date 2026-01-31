'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Accelerators', href: '/accelerators' },

    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'
        }`}>
        <div className="container">
          <div className="flex justify-between items-center">
            {/* Logo and Company Name */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-primary-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <svg width="48" height="48" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e9d5ff" />
                      <stop offset="50%" stopColor="#d8b4fe" />
                      <stop offset="100%" stopColor="#99f6e4" />
                    </linearGradient>
                  </defs>

                  <circle cx="28" cy="28" r="26" fill="url(#logoGradient)" stroke="#d8b4fe" strokeWidth="1" opacity="0.8" />

                  <g stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <path d="M18 21 L25 35 L32 21" />
                    <path d="M36 25 L40 28 L36 31" />
                  </g>
                </svg>
              </div>

              <span className="text-3xl font-serif font-bold text-gray-900 tracking-tight">
                ViaNew
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors uppercase tracking-wide"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary text-sm px-6 py-3">
                Talk to us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col space-y-4 animate-in slide-in-from-top-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-gray-900 hover:text-primary-600 px-4 py-2 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary text-center justify-center w-full mt-2"
                onClick={() => setIsOpen(false)}
              >
                Talk to us
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

