'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-600 to-accent-500"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Ready to Architect Your Data Future?
            </h2>
            <p className="text-xl text-gray-600 font-light mb-10 max-w-2xl mx-auto">
              Start with our AI-Ready Data Audit or let us design your Data Platform Blueprint.
              Transform your enterprise with ViaNew.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center min-w-[200px]">
                Schedule a Consultation
                <FiArrowRight className="ml-2" />
              </Link>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

