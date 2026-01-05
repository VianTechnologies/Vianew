'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-900 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Navigate Your Data Transformation?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how DrivePoint Data can help you achieve precision in every data decision
            and unlock measurable business value from your data assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center">
              Schedule a Consultation
              <FiArrowRight className="ml-2" />
            </Link>
            <Link href="/resources" className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-primary-700 inline-flex items-center justify-center">
              Download Free Resources
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

