'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BusinessSection = () => {
  const services = [
    {
      title: 'Strategic Data Planning',
      description: 'Develop comprehensive data strategies that align with your business objectives and drive measurable growth.',
      icon: '🎯'
    },
    {
      title: 'Process Optimization',
      description: 'Streamline data workflows and eliminate bottlenecks to maximize efficiency and reduce operational costs.',
      icon: '⚡'
    },
    {
      title: 'Growth Analytics',
      description: 'Transform raw data into actionable insights that power strategic decision-making and accelerate growth.',
      icon: '📈'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
          >
            How we help companies grow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-700 font-light"
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
              className="text-center group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Professional Imagery Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Real results for real businesses
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-lg">+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Increased Revenue</h4>
                    <p className="text-gray-700 font-light">
                      Average 35% revenue growth within 12 months through data-driven decision making.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Operational Efficiency</h4>
                    <p className="text-gray-700 font-light">
                      Reduced operational costs by 25% through optimized data processes and automation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-lg">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Faster Decisions</h4>
                    <p className="text-gray-700 font-light">
                      60% reduction in decision-making time through real-time analytics and insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Professional Business Image Placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <div className="text-gray-600 font-medium">Professional Business Meeting</div>
                <div className="text-gray-500 text-sm mt-2">Strategic planning session</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessSection;




