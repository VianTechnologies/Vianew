'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiDatabase, FiTrendingUp, FiShield, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-100/40 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-100 text-primary-700 px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide uppercase">Reimagining Business Process</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight mb-8"
            >
              Architecting Your <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                AI-Ready Data Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-10 font-light max-w-2xl mx-auto leading-relaxed"
            >
              We deliver Data Platform Blueprints, Governance Quickstarts, and AI Audits for the modern enterprise.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="btn-primary group">
                Start your transformation
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="btn-secondary">
                View our solutions
              </Link>
            </div>

            {/* Trust Indicators / Stats */}
            <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">40%</div>
                <div className="text-sm text-gray-500 font-medium">Efficiency Gain</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">2x</div>
                <div className="text-sm text-gray-500 font-medium">Faster Delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm text-gray-500 font-medium">Compliance</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Visual Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main Glass Card */}
            <div className="relative z-10 glass rounded-3xl p-8 border border-white/50 bg-white/40 backdrop-blur-xl shadow-2xl">
              {/* Abstract UI Mockup */}
              <div className="space-y-6">
                {/* Header Mockup */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex space-x-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="h-2 w-20 bg-gray-200 rounded-full"></div>
                </div>

                {/* Content Rows */}
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-center p-4 bg-white/60 rounded-xl shadow-sm border border-white/60"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-100 to-accent-100 flex items-center justify-center text-primary-600">
                        {i === 1 && <FiDatabase size={18} />}
                        {i === 2 && <FiTrendingUp size={18} />}
                        {i === 3 && <FiShield size={18} />}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="h-2.5 w-1/3 bg-gray-800 rounded-full mb-2 opacity-10"></div>
                        <div className="h-2 w-1/2 bg-gray-400 rounded-full opacity-10"></div>
                      </div>
                      <div className="h-6 w-16 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center justify-center">
                        Active
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Graph Area */}
                <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
                  <div className="flex justify-between items-end h-32 space-x-2">
                    {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 1 + (i * 0.05), duration: 0.5 }}
                        className="w-full bg-gradient-to-t from-primary-400 to-primary-300 rounded-t-sm opacity-80"
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center space-x-3 border border-gray-50"
            >
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <FiCheck size={20} />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold uppercase">Optimization</div>
                <div className="font-bold text-gray-900">+127%</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

