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
      title: 'Senior-Level Expertise',
      description: 'Direct access to over a decade of experience delivering critical data platforms and strategies for global multinational enterprises.',
    },
    {
      icon: FiAward,
      title: 'Excellence in Delivery',
      description: 'A reputation built on superior quality deliverables and unwavering dedication to client satisfaction.',
    },
    {
      icon: FiZap,
      title: 'Fast Implementation',
      description: 'Agile approach ensures quick deployment and rapid time-to-value for your data initiatives.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose ViaNew</h2>
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
              className="flex items-start space-x-6 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary-100"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl flex items-center justify-center border border-primary-100 text-primary-600">
                  <benefit.icon size={26} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

