'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight, FiDatabase, FiTrendingUp, FiShield, FiCheck, FiActivity, FiCpu } from 'react-icons/fi';
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
              <span className="text-sm font-semibold tracking-wide uppercase">Reimagining Data Driven Value Creation</span>
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
              We deliver Data Platform Blueprints, Governance Quickstarts, and AI Audits, designed to turn your data complexity into competitive advantage.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/services" className="btn-primary group">
                View our Services
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/accelerators" className="btn-secondary">
                View our Accelerators
              </Link>
            </div>

            {/* Trust Indicators / Stats */}
            <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm text-gray-500 font-medium">Trusted Data</div>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900 mb-1 uppercase tracking-wide pt-2">Weeks to Days</div>
                <div className="text-sm text-gray-500 font-medium">Time-to-Insight</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">Zero</div>
                <div className="text-sm text-gray-500 font-medium">Technical Debt</div>
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
            {/* Main Glass Card - The Digital Organism */}
            <div className="relative z-10 glass rounded-3xl p-1 border border-white/50 bg-white/40 backdrop-blur-xl shadow-2xl h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-white/60 rounded-[22px] z-0"></div>

              {/* Internal Layout */}
              <div className="relative z-10 w-full h-full p-8 flex items-center justify-between">

                {/* LEFT: SENSORY ORGANS (Inputs) */}
                <div className="flex flex-col gap-6 w-1/4 z-20">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-2">Sensory</div>

                  {['Sales & CRM', 'IoT & Supply', 'Finance'].map((label, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="bg-white/80 p-3 rounded-xl border border-white shadow-sm flex items-center gap-3 relative group"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${i === 0 ? 'bg-blue-400' : i === 1 ? 'bg-teal-400' : 'bg-indigo-400'}`}>
                        {i === 0 && <FiDatabase size={14} />}
                        {i === 1 && <FiActivity size={14} />}
                        {i === 2 && <FiShield size={14} />}
                      </div>
                      <span className="text-xs font-semibold text-gray-700">{label}</span>

                      {/* Connector Line to Brain */}
                      <div className="absolute right-0 top-1/2 w-8 h-[2px] bg-gray-200 translate-x-full hidden md:block group-hover:bg-primary-300 transition-colors"></div>
                    </motion.div>
                  ))}
                </div>

                {/* CENTER: THE BRAIN (Processing) */}
                <div className="flex-1 flex flex-col items-center justify-center relative z-20 mx-4">
                  <div className="text-xs font-bold text-primary-600 uppercase tracking-widest text-center mb-6">The Brain</div>

                  {/* Brain Pulse Effect */}
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-accent-200 rounded-full blur-xl"
                    ></motion.div>

                    <div className="w-24 h-24 bg-white rounded-full shadow-xl border-4 border-primary-50 flex items-center justify-center relative z-10">
                      <FiCpu size={40} className="text-primary-600" />
                    </div>

                    {/* Orbiting particles */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border border-dashed border-gray-300"
                    ></motion.div>
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-2 rounded-full border border-dashed border-primary-200"
                    ></motion.div>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="text-sm font-bold text-gray-900">Adaptive Intelligence</div>
                    <div className="text-xs text-gray-500">Governance & Logic Core</div>
                  </div>
                </div>

                {/* RIGHT: EFFECTOR ORGANS (Actions) */}
                <div className="flex flex-col gap-6 w-1/4 z-20">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-2">Effectors</div>

                  {['Personalize', 'Automate', 'Forecast'].map((label, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 + (i * 0.1) }}
                      className="bg-white/80 p-3 rounded-xl border border-white shadow-sm flex items-center gap-3 relative justify-end group"
                    >
                      {/* Connector Line from Brain */}
                      <div className="absolute left-0 top-1/2 w-8 h-[2px] bg-gray-200 -translate-x-full hidden md:block group-hover:bg-accent-300 transition-colors"></div>

                      <span className="text-xs font-semibold text-gray-700">{label}</span>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${i === 0 ? 'bg-orange-400' : i === 1 ? 'bg-purple-400' : 'bg-green-400'}`}>
                        {i === 0 && <FiTrendingUp size={14} />}
                        {i === 1 && <FiCheck size={14} />}
                        {i === 2 && <FiArrowRight size={14} />}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Connecting Curves (SVG Overlay) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30" overflow="visible">
                  {/* Left to Center paths */}
                  <path d="M 120 150 C 180 150, 200 250, 280 250" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 120 250 C 180 250, 200 250, 280 250" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 120 350 C 180 350, 200 250, 280 250" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Center to Right paths */}
                  <path d="M 380 250 C 460 250, 480 150, 540 150" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 380 250 C 460 250, 480 250, 540 250" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 380 250 C 460 250, 480 350, 540 350" fill="none" stroke="#9ca3af" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

              </div>
            </div>

            {/* Neural Pulse - Floating Tag */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-md text-white p-3 rounded-full shadow-lg z-30 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <div className="text-xs font-mono">SYSTEM: ONLINE</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

