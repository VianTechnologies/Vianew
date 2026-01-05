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
      color: 'bg-blue-500',
    },
    {
      icon: FiMap,
      title: 'Data Process Mapping',
      description: 'Visualize and optimize your data workflows. Identify bottlenecks and streamline operations for maximum efficiency.',
      href: '/services/process-mapping',
      color: 'bg-purple-500',
    },
    {
      icon: FiLink,
      title: 'Data Integration',
      description: 'Seamlessly connect disparate data sources. Create a unified data ecosystem that powers your business intelligence.',
      href: '/services/data-integration',
      color: 'bg-green-500',
    },
    {
      icon: FiBarChart2,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights. Make data-driven decisions with advanced analytics and visualization.',
      href: '/services/data-analytics',
      color: 'bg-orange-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Comprehensive data management solutions tailored to your organization's needs. 
            We provide end-to-end services to help you become truly data-driven.
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
            >
              <Link href={service.href} className="block h-full">
                <div className="card h-full flex flex-col hover:scale-105 transition-transform duration-300">
                  <div className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  <div className="flex items-center text-primary-600 font-semibold">
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

