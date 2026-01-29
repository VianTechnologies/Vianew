'use client';

import React from 'react';
import Link from 'next/link';
import { FiLayers, FiCheckSquare, FiShield, FiCpu, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: FiLayers,
      title: 'Data Platform Blueprint',
      description: 'End-state lakehouse architecture and integration patterns (Kafka, CDC, APIs) tailored for CIOs and Enterprise Architects.',
      href: '/services/blueprint',
    },
    {
      icon: FiCpu,
      title: 'AI-Ready Data Audit',
      description: 'Comprehensive assessment of data quality, lineage, and semantics to prepare your data for GenAI, RAG, and ML use cases.',
      href: '/services/ai-audit',
    },
    {
      icon: FiShield,
      title: 'Governance Quickstart',
      description: 'Lightweight governance foundations, policies, and operating models. An accelerator designed to restart stalled programs.',
      href: '/services/governance',
    },
    {
      icon: FiCheckSquare,
      title: 'Enterprise Architecture',
      description: 'Strategic advisory for canonical data models, business capability mapping, and ERP transitions to composable architectures.',
      href: '/services/architecture',
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
          <span className="section-subtitle">Core Offerings</span>
          <h2 className="section-title">Consulting & Architecture</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 font-light">
            Validated strategies to build your data cash engine. We provide the architectural backbone for your digital transformation.
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

