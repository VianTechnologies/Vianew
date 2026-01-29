'use client';

import React from 'react';
import Link from 'next/link';
import { FiBookOpen, FiGrid, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Resources = () => {
  const resources = [
    {
      icon: FiBookOpen,
      title: 'Reference Architecture Lib',
      description: 'Access our canonical models and architecture patterns library. The building blocks for your data governance.',
      href: '/resources/architecture-library',
      cta: 'Access Library',
    },
    {
      icon: FiGrid,
      title: 'Modularity Scorecard',
      description: 'Download our dashboard framework for quantifying ERP and integration modularity. Perfect for CFO & CEO reporting.',
      href: '/resources/modularity-scorecard',
      cta: 'Download Tool',
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Internal IP</span>
          <h2 className="section-title">Frameworks & Tools</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 font-light">
            Leverage our proprietary assets to accelerate your architecture decisions and measure success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {resources.map((resource, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={resource.href} className="block h-full group">
                <div className="h-full p-8 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg group-hover:border-primary-100">
                  <div className="flex items-start space-x-6">
                    <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                      <resource.icon size={30} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{resource.title}</h3>
                      <p className="text-gray-600 mb-6 font-light leading-relaxed">{resource.description}</p>
                      <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        {resource.cta}
                        <FiArrowRight className="ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;

