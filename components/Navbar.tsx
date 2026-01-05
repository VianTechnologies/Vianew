'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Reports', href: '/reports' },
    { name: 'Books', href: '/books' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Company Name */}
            <Link href="/" className="flex items-center space-x-3">
              {/* Clean, Elegant Logo Design - V> */}
              <div className="w-14 h-14 flex items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e9d5ff" />
                      <stop offset="50%" stopColor="#d8b4fe" />
                      <stop offset="100%" stopColor="#99f6e4" />
                    </linearGradient>
                  </defs>
                  
                  {/* Main Circle with soft gradient */}
                  <circle cx="28" cy="28" r="26" fill="url(#logoGradient)" stroke="#d8b4fe" strokeWidth="1" opacity="0.8" />
                  
                  {/* V> Design - Proper V with greater than sign */}
                  <g stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    {/* Proper V shape pointing down */}
                    <path d="M18 21 L25 35 L32 21" />
                    {/* True greater than sign > */}
                    <path d="M36 25 L40 28 L36 31" />
                  </g>
                </svg>
              </div>
              
              {/* Company Name */}
              <span className="text-4xl font-serif font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                ViaNew
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="bg-gray-900 text-white px-6 py-2 rounded-sm font-semibold hover:bg-gray-800 transition-colors">
                Talk to us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mt-4 text-center btn-primary"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

