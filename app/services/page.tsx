'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCompass, FiDatabase, FiLayers, FiCpu, FiTrendingUp, FiActivity, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const ServicesPage = () => {
  const services = [
    {
      id: 'strategy',
      icon: FiCompass,
      title: 'Data Strategy',
      description: 'Define your roadmap, data maturity model, and ROI targets. We align data initiatives with your core business objectives.',
      deliverables: ['Maturity Assessment', 'Roadmap Development', 'ROI Modeling', 'Governance Framework'],
    },
    {
      id: 'modeling',
      icon: FiDatabase,
      title: 'Data Modelling',
      description: 'Structure for scale. Conceptual, logical, and physical models that accurately reflect your business reality and ensure data integrity.',
      deliverables: ['Conceptual Models', 'Physical Schema Design', 'Entity Relationship Diagrams', 'Data Dictionary'],
    },
    {
      id: 'platform',
      icon: FiLayers,
      title: 'Data Platform Design',
      description: 'Architect the engine. Cloud-native, scalable, and secure platform blueprints (Lakehouse, Mesh, Fabric) tailored to your scale.',
      deliverables: ['Architecture Blueprints', 'Cloud Infrastructure Design', 'Security Framework', 'Integration Patterns'],
    },
    {
      id: 'tech-selection',
      icon: FiCpu,
      title: 'Technology Selection',
      description: 'Future-proof your stack. Unbiased vendor assessment and fit-gap analysis to ensure you choose fit-for-purpose tooling.',
      deliverables: ['Vendor Assessment', 'Fit-Gap Analysis', 'RFP Management', 'TCO Calculation'],
    },
    {
      id: 'poc',
      icon: FiActivity,
      title: 'POC & Pilots',
      description: 'Validate before investing. Rapid prototyping to prove technical feasibility and business value before full-scale deployment.',
      deliverables: ['Prototype Development', 'Feasibility Study', 'Performance Testing', 'Pilot Execution'],
    },
    {
      id: 'analytics',
      icon: FiTrendingUp,
      title: 'Business Value Analytics',
      description: 'Build the cash engine. Custom analytics apps and dashboards that drive measurable decision-making and operational efficiency.',
      deliverables: ['Custom Dashboards', 'Predictive Models', 'Business Apps', 'KPI Tracking'],
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
            <span className="section-subtitle">Holistic Data Capabilities</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              A Complete Suite for <br />
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                Data Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto mb-10">
              Browse our bucket list of expert services. Designed to solve specific challenges individually,
              or work together to deliver a complete data management ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-gradient-to-br from-white to-primary-50/20 p-8 rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Scientific/Schematic Background decoration */}
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <service.icon size={120} />
                </div>

                <div className="w-16 h-16 rounded-xl bg-gray-50 group-hover:bg-primary-600 transition-colors duration-300 flex items-center justify-center mb-6 relative z-10">
                  <service.icon className="text-gray-900 group-hover:text-white transition-colors duration-300" size={32} />
                </div>

                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-8 font-light leading-relaxed min-h-[80px]">
                  {service.description}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Key Deliverables</h4>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <FiCheckCircle className="text-primary-500 mt-0.5 mr-3 shrink-0" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="flex justify-between items-center w-full group/btn"
                  >
                    <span className="font-semibold text-gray-900 group-hover/btn:text-primary-600 transition-colors">
                      Inquire / Book
                    </span>
                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover/btn:bg-primary-600 group-hover/btn:text-white transition-all">
                      <FiArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-600 to-accent-500"></div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Build Your Custom Package
            </h2>
            <p className="text-xl text-gray-600 font-light mb-10 max-w-2xl mx-auto">
              Not sure where to start? Our holistic approach means these services integrate seamlessly.
              Let's assess your current maturity and design the right combination for your goals.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center min-w-[200px]">
                Book a Discovery Call
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

