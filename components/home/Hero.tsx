'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiDatabase, FiTrendingUp, FiShield } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-gray-50 text-gray-800 overflow-hidden min-h-screen flex items-center">
      {/* Modern Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-primary-50/30"></div>

      <div className="container relative py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight text-gray-900">
              Delivering value via{' '}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 1.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                className="bg-gradient-to-r from-primary-400 to-accent-400 text-white px-2 py-1 rounded-lg inline-block"
              >
                new path
              </motion.span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-light">
              Data driven and AI embedded in process workflows. Transform your business with intelligent automation 
              and strategic data solutions that deliver measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-gray-900 text-white px-8 py-4 rounded-sm font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center">
                Talk to us
              </Link>
              <Link href="/resources" className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-sm font-semibold hover:border-gray-400 transition-colors">
                Explore Resources
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <FiShield className="text-accent-600" size={20} />
                <span className="text-sm text-gray-700">AI-Powered Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <FiDatabase className="text-primary-600" size={20} />
                <span className="text-sm text-gray-700">Process Automation</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <FiTrendingUp className="text-rose-500" size={20} />
                <span className="text-sm text-gray-700">Data-Driven Growth</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Professional Business Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-3 gap-4 h-96">
              {/* Left Image - Business Meeting */}
              <motion.div
                initial={{ opacity: 0, translateX: -20 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="text-gray-600 font-medium">Strategic Planning</div>
                  </div>
                </div>
              </motion.div>

              {/* Right Image - Data Analysis */}
              <motion.div
                initial={{ opacity: 0, translateX: 20 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="text-gray-600 font-medium">Data Insights</div>
                  </div>
                </div>
              </motion.div>

              {/* Center Image - Business Growth */}
              <motion.div
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-full h-full bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-gray-600 font-medium">Growth Strategy</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

