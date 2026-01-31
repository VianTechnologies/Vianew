'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { FiLayers, FiCpu, FiArrowRight, FiChevronLeft, FiChevronRight, FiCompass, FiDatabase, FiActivity, FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: FiCompass,
      title: 'Data Strategy',
      description: 'Define your roadmap, data maturity model, and ROI targets. We align data initiatives with your core business objectives.',
      href: '/services', // Directing to main services page as specific anchors might not exist yet
    },
    {
      icon: FiDatabase,
      title: 'Data Modelling',
      description: 'Structure for scale. Conceptual, logical, and physical models that accurately reflect your business reality and ensure data integrity.',
      href: '/services',
    },
    {
      icon: FiLayers,
      title: 'Data Platform Design',
      description: 'Architect the engine. Cloud-native, scalable, and secure platform blueprints (Lakehouse, Mesh, Fabric) tailored to your scale.',
      href: '/services',
    },
    {
      icon: FiCpu,
      title: 'Technology Selection',
      description: 'Future-proof your stack. Unbiased vendor assessment and fit-gap analysis to ensure you choose fit-for-purpose tooling.',
      href: '/services',
    },
    {
      icon: FiActivity,
      title: 'POC & Pilots',
      description: 'Validate before investing. Rapid prototyping to prove technical feasibility and business value before full-scale deployment.',
      href: '/services',
    },
    {
      icon: FiTrendingUp,
      title: 'Business Value Analytics',
      description: 'Build the cash engine. Custom analytics apps and dashboards that drive measurable decision-making and operational efficiency.',
      href: '/services',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-primary-600 font-medium tracking-wide uppercase text-sm mb-3 block">Holistic Data Capabilities</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title mb-4"
          >
            Strategic Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 font-light max-w-2xl mx-auto"
          >
            Validated strategies to build your data cash engine. We provide the architectural backbone for your digital transformation.
          </motion.p>
        </div>

        {/* Horizontal Slider Container */}
        <div className="relative group px-4 md:px-12">
          {/* Left Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-primary-50 hover:border-primary-200 hover:text-primary-600 transition-all shadow-lg md:flex hidden"
            aria-label="Scroll left"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-primary-50 hover:border-primary-200 hover:text-primary-600 transition-all shadow-lg md:flex hidden"
            aria-label="Scroll right"
          >
            <FiChevronRight size={24} />
          </button>

          <div
            className="flex overflow-x-auto space-x-6 pb-12 px-4 snap-x snap-mandatory scrollbar-hide"
            ref={scrollRef}
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="min-w-[320px] md:min-w-[380px] snap-center bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-200 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 group/card"
              >
                <div className="w-14 h-14 rounded-xl bg-white group-hover:bg-primary-600 transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm">
                  <service.icon className="text-gray-900 group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 h-14 flex items-center justify-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
                  {service.description}
                </p>
                <Link href={service.href} className="mt-auto text-primary-600 font-semibold text-sm inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                  Learn More
                  <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mb-12 mt-4">
          <Link href="/services" className="btn-primary">
            View All Services
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

