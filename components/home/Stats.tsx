'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: '500+', label: 'Clients Worldwide' },
    { value: '98%', label: 'Success Rate' },
    { value: '50+', label: 'Data Experts' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

