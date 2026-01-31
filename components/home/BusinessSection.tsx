'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { FiSettings, FiUsers, FiArrowRight, FiShield, FiCpu, FiLayout, FiActivity, FiPackage, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const BusinessSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const accelerators = [
    {
      title: 'Data & AI Readiness Scorecard',
      description: 'A 360-degree diagnostic of your technical maturity, governance position, and architectural readiness for scalable AI.',
      icon: FiCpu,
      id: 'ai-readiness'
    },
    {
      title: 'Data & AI Governance Framework',
      description: 'Deploy a fit-for-purpose operating model that balances innovation velocity with risk management and compliance.',
      icon: FiShield,
      id: 'governance-kit'
    },
    {
      title: 'Data & AI Architecture Review',
      description: 'Strategic audit of your platform against modern patterns (Lakehouse, Mesh) to support high-throughput AI workloads.',
      icon: FiLayout,
      id: 'arch-review'
    },
    {
      title: 'Data & AI Process Intelligence',
      description: 'Unlock operational value by applying process mining and AI to a core business function. Identify friction points and automation ROI.',
      icon: FiActivity,
      id: 'process-pilot'
    },
    {
      title: 'Data & AI ERP Modernization',
      description: 'De-risk your digital core transformation. Define a data-first migration strategy that decouples innovation layers from legacy ERPs.',
      icon: FiPackage,
      id: 'erp-strategy'
    },
    {
      title: 'Data & AI Executive Alignment',
      description: 'Align the C-Suite on a unified data vision. Define ambition, agree on boundaries, and commit to a prioritized investment portfolio.',
      icon: FiUsers,
      id: 'exec-workshop'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-primary-600 font-medium tracking-wide uppercase text-sm mb-3 block">High Impact. Fixed Price. Low Risk.</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title mb-4"
          >
            Transformation Accelerators
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 font-light max-w-2xl mx-auto"
          >
            Speed up your journey with our proven reference architectures.
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

            {accelerators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[320px] md:min-w-[380px] snap-center bg-white rounded-2xl border border-gray-100 hover:border-primary-200 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 group/card"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gray-50 text-gray-900 flex items-center justify-center group-hover/card:bg-primary-600 group-hover/card:text-white transition-all duration-300">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 h-14 flex items-center justify-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-grow">
                  {item.description}
                </p>
                <Link href={`/accelerators`} className="mt-auto text-primary-600 font-semibold text-sm inline-flex items-center group-hover/card:translate-x-1 transition-transform">
                  View Details <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mb-24 mt-8">
          <Link href="/accelerators" className="btn-primary">
            View All Accelerators
            <FiArrowRight className="ml-2" />
          </Link>
        </div>


      </div>
    </section>
  );
};

export default BusinessSection;




