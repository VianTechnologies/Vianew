'use client';

import React from 'react';
import Link from 'next/link';
import { FiShield, FiMap, FiLink, FiBarChart2, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: FiShield,
      title: 'Data Governance',
      description: 'Establish robust frameworks for data quality, security, and compliance. Ensure your data assets are properly managed and protected.',
      href: '/services/data-governance',
    },
    {
      icon: FiMap,
      title: 'Data Process Mapping',
      description: 'Visualize and optimize your data workflows. Identify bottlenecks and streamline operations for maximum efficiency.',
      href: '/services/process-mapping',
    },
    {
      icon: FiLink,
      title: 'Data Integration',
      description: 'Seamlessly connect disparate data sources. Create a unified data ecosystem that powers your business intelligence.',
      href: '/services/data-integration',
    },
    {
      icon: FiBarChart2,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights. Make data-driven decisions with advanced analytics and visualization.',
      href: '/services/data-analytics',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Our Expertise</span>
          <h2 className="section-title">Comprehensive Data Solutions</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 font-light">
            We provide end-to-end services tailored to your organization's needs, helping you turn complex data challenges into business opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <Link href={service.href} className="block h-full group">
                <div className="card h-full flex flex-col border border-gray-100 group-hover:border-primary-200 group-hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gray-50 group-hover:bg-primary-600 transition-colors duration-300 flex items-center justify-center mb-6">
                    <service.icon className="text-gray-900 group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{service.description}</p>
                  <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <FiArrowRight className="ml-2" />
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

export default Services;

