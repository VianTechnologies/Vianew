'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiBookOpen, FiFileText, FiAward, FiArrowRight, FiDownload, FiFilter } from 'react-icons/fi';

const InsightsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'White Papers', 'Reference Architecture', 'Case Studies', 'Articles'];

    const insights = [
        {
            id: 1,
            title: 'The Modern Data Platform Blueprint',
            category: 'Reference Architecture',
            description: 'A comprehensive guide to building a scalable, AI-ready lakehouse architecture. Includes schematic diagrams and integration patterns.',
            date: 'Jan 15, 2026',
            readTime: '15 min read',
            icon: FiBookOpen,
        },
        {
            id: 2,
            title: 'AI Readiness in Enterprise: A Diagnostic Framework',
            category: 'White Papers',
            description: 'How to assess your organization\'s data maturity before investing in GenAI. Quantify your readiness with our proprietary scorecard.',
            date: 'Jan 10, 2026',
            readTime: '12 min read',
            icon: FiFileText,
        },
        {
            id: 3,
            title: 'Scaling Governance for 500+ Data Sources',
            category: 'Case Studies',
            description: 'How a Global Fortune 500 company automated their data lineage and compliance workflows using our accelerators.',
            date: 'Dec 28, 2025',
            readTime: '8 min read',
            icon: FiAward,
        },
        {
            id: 4,
            title: 'ERP Modularity: Decoupling SAP for Agility',
            category: 'Articles',
            description: 'Strategic advice for CIOs moving from ECC to S/4HANA. Why a modular data architecture is critical for future flexibility.',
            date: 'Dec 15, 2025',
            readTime: '10 min read',
            icon: FiFileText,
        },
        {
            id: 5,
            title: 'The CIO\'s Guide to Data Mesh',
            category: 'White Papers',
            description: 'Demystifying the buzzword. When to adopt a mesh architecture and how to manage the cultural shift.',
            date: 'Nov 30, 2025',
            readTime: '20 min read',
            icon: FiBookOpen,
        },
    ];

    const filteredInsights = activeCategory === 'All'
        ? insights
        : insights.filter(item => item.category === activeCategory);

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
                        <span className="section-subtitle">Thought Leadership</span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Strategic Insights & <br />
                            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                                Expert Resources
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto mb-10">
                            Explore our library of white papers, reference architectures, and expert articles.
                            Designed to help leaders architect the future of their data.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="py-12 border-b border-gray-100 sticky top-20 z-40 bg-white/80 backdrop-blur-md">
                <div className="container">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-gray-900 text-white shadow-lg transform -translate-y-0.5'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredInsights.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                layout
                                className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="p-8 flex-grow">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-bold uppercase tracking-wide">
                                            {item.category}
                                        </span>
                                        <item.icon className="text-gray-400 group-hover:text-primary-600 transition-colors" size={24} />
                                    </div>

                                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 font-light leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center text-sm text-gray-400 space-x-4">
                                        <span>{item.date}</span>
                                        <span>•</span>
                                        <span>{item.readTime}</span>
                                    </div>
                                </div>

                                <div className="px-8 pb-8 mt-auto">
                                    {/* Direct to Pipeline Action */}
                                    <Link
                                        href={`/contact?resource=${item.id}&title=${encodeURIComponent(item.title)}`}
                                        className="flex justify-between items-center w-full group/btn pt-6 border-t border-gray-100"
                                    >
                                        <span className="font-semibold text-gray-900 group-hover/btn:text-primary-600 transition-colors">
                                            {item.category === 'Case Studies' ? 'Read Case Study' : 'Download Asset'}
                                        </span>
                                        <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover/btn:bg-primary-600 group-hover/btn:text-white transition-all">
                                            {item.category === 'Case Studies' || item.category === 'Articles' ? <FiArrowRight size={14} /> : <FiDownload size={14} />}
                                        </span>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-600 to-accent-500"></div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                            Subscribe to Strategic Intelligence
                        </h2>
                        <p className="text-xl text-gray-600 font-light mb-10 max-w-2xl mx-auto">
                            Get our latest architectural blueprints and market analysis delivered straight to your inbox.
                            No fluff, just actionable IP.
                        </p>
                        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="flex-grow px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-gray-50"
                            />
                            <button type="submit" className="btn-primary whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-gray-400 mt-4">
                            We respect your inbox. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InsightsPage;
