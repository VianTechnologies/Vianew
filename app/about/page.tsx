'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiTarget, FiAward, FiUsers, FiHeart, FiCheckCircle, FiMapPin, FiBriefcase, FiCalendar } from 'react-icons/fi';

const AboutPage = () => {
  const corporateInfo = [
    { label: 'Company Name', value: 'Vian Technologies ApS', icon: FiBriefcase },
    { label: 'CVR Number', value: '45132293', icon: FiCheckCircle },
    { label: 'Headquarters', value: 'Judithsvej 15, 2. sal. tv, 2900 Hellerup', icon: FiMapPin },
    { label: 'Established', value: 'September 2024', icon: FiCalendar },
  ];

  const values = [
    {
      icon: FiTarget,
      title: 'Precision',
      description: 'We believe in exactitude. Our blueprints and audits are surgically precise, leaving no room for ambiguity.',
    },
    {
      icon: FiUsers,
      title: 'Partnership',
      description: 'We don’t just advise; we co-create. Your success is the only metric that matters to our long-term growth.',
    },
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'We refuse to settle for "good enough". We aim for best-in-class architecture that stands the test of time.',
    },
    {
      icon: FiHeart,
      title: 'Integrity',
      description: 'Transparent advice. If a technology isn\'t right for you, we\'ll tell you, even if it costs us a sale.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50 border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="section-subtitle">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Architecting the <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Data-Driven Future
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto mb-10">
              Vian Technologies was founded with a single mission: to provide the architectural clarity and
              governance rigor needed for the AI era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Info Grid */}
      <section className="py-12 bg-white -mt-10 relative z-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center space-x-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                  <info.icon size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{info.label}</p>
                  <p className="text-gray-900 font-medium text-sm md:text-base">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-subtitle">Our Purpose</span>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Bridging Strategy and Execution
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Too many data initiatives fail because of a disconnect between high-level strategy and on-the-ground engineering.
                Vianew bridges this gap. We don't just draw diagrams; we design executeable blueprints that your engineering
                teams can build upon.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you are migrating to the cloud, decoupling a legacy ERP, or preparing for Generative AI,
                our focus is always on modularity, scalability, and long-term value.
              </p>
            </motion.div>

            <div className="grid gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To empower enterprises with the architectural blueprints and governance frameworks needed to survive and thrive in the AI age.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
              >
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  A world where data complexity is tamed, and every organization has the clarity to innovate without fear.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 font-light">
              The principles that guide every audit, blueprint, and advisory session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gray-50 text-gray-900 flex items-center justify-center mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
