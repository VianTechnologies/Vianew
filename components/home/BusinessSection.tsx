'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiZap, FiTrendingUp } from 'react-icons/fi';

const BusinessSection = () => {
  const services = [
    {
      title: 'Strategic Data Planning',
      description: 'Develop comprehensive data strategies that align with your business objectives and drive measurable growth.',
      icon: FiTarget
    },
    {
      title: 'Process Optimization',
      description: 'Streamline data workflows and eliminate bottlenecks to maximize efficiency and reduce operational costs.',
      icon: FiZap
    },
    {
      title: 'Growth Analytics',
      description: 'Transform raw data into actionable insights that power strategic decision-making and accelerate growth.',
      icon: FiTrendingUp
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
            How we help companies grow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 font-light max-w-2xl mx-auto"
          >
            Our data-driven approach combines strategic thinking with practical implementation
            to deliver measurable business outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card text-center group bg-white border border-gray-100 hover:border-primary-100"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Professional Imagery Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Real results for real businesses
              </h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 text-green-600">
                    <FiTrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Increased Revenue</h4>
                    <p className="text-gray-600">
                      Average 35% revenue growth within 12 months through data-driven decision making.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
                    <FiZap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">Operational Efficiency</h4>
                    <p className="text-gray-600">
                      Reduced operational costs by 25% through optimized data processes and automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Representation */}
            <div className="relative h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                  <FiTarget className="text-white" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Precision & Growth</h4>
                <p className="text-gray-300">Evaluating over 1M+ data points daily</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSection;




