'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiSettings, FiRefreshCw, FiUsers, FiPieChart } from 'react-icons/fi';

const BusinessSection = () => {
  const accelerators = [
    {
      title: 'Factory Data Platform (FDP)',
      description: 'Reference architecture for OT+IT ingestion. Optimized patterns for streaming vs batch in PLC, Historian, and MES environments.',
      icon: FiSettings
    },
    {
      title: 'ERP Replacement Advisory',
      description: 'Strategic guidance for SAP ECC to S/4HANA transitions. We assist with modularity scoring and integration decoupling.',
      icon: FiRefreshCw
    },
    {
      title: 'Org Design & Operating Model',
      description: 'Define clear ownership models and RACI charts. Resolve the analytics vs. platform responsibility split for your lakehouse.',
      icon: FiUsers
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Transformation Accelerators
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 font-light max-w-2xl mx-auto"
          >
            Speed up your journey with our proven reference architectures and advisory frameworks.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accelerators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card text-center group bg-white border border-gray-100 hover:border-primary-100"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Diagnostics & Tooling Power (Cluster 3) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary-600 font-bold tracking-wide uppercase text-sm mb-2 block">Internal IP & Diagnostics</span>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Data Maturity & Readiness
              </h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 text-green-600">
                    <FiPieChart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">AI Readiness Score</h4>
                    <p className="text-gray-600">
                      Repeatable executive-level diagnostic to score your organization's readiness for AI and RAG.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
                    <FiRefreshCw size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Platform Maturity Assessment</h4>
                    <p className="text-gray-600">
                      Capability-based scoring to prioritize investments and track progress over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Representation */}
            <div className="relative h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                  <FiPieChart className="text-white" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Metrics that Matter</h4>
                <p className="text-gray-300">Quantifiable modularity and readiness scores</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSection;




