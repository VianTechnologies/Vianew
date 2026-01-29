'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay z-0"></div>

      <div className="container relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            Ready to Architect Your Data Future?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Start with our AI-Ready Data Audit or let us design your Data Platform Blueprint.
            Transform your enterprise with ViaNew.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-gray-900 hover:bg-gray-100 hover:text-primary-700 border-none inline-flex items-center justify-center min-w-[200px]">
              Schedule a Consultation
              <FiArrowRight className="ml-2" />
            </Link>
            <Link href="/resources" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 inline-flex items-center justify-center min-w-[200px] border-2">
              Download Resources
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

