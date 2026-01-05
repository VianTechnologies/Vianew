'use client';

import React from 'react';
import { FiCheckCircle, FiUsers, FiAward, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: FiCheckCircle,
      title: 'Proven Track Record',
      description: 'Over a decade of experience helping organizations transform their data capabilities with measurable results.',
    },
    {
      icon: FiUsers,
      title: 'Expert Team',
      description: 'Our certified data professionals bring deep expertise across all aspects of data management and analytics.',
    },
    {
      icon: FiAward,
      title: 'Industry Recognition',
      description: 'Award-winning solutions and methodologies recognized by leading industry analysts and organizations.',
    },
    {
      icon: FiZap,
      title: 'Fast Implementation',
      description: 'Agile approach ensures quick deployment and rapid time-to-value for your data initiatives.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose DD Enterprise</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Partner with a trusted leader in data management and analytics. We deliver solutions that drive real business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex space-x-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <benefit.icon className="text-primary-600" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

