'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiPackage, FiCheck, FiClock, FiArrowRight, FiShield, FiCpu, FiLayout, FiActivity, FiUsers } from 'react-icons/fi';

const AcceleratorsPage = () => {
    const accelerators = [
        {
            id: 'ai-readiness',
            icon: FiCpu,
            title: 'Data & AI Readiness Scorecard',
            price: '€12,500',
            description: 'A rigorous, 360-degree diagnostic of your enterprise data estate, evaluating technical maturity, governance postion, and architectural readiness for deploying scalable AI solutions.',
            timeline: '3 Weeks',
            deliverables: [
                'Enterprise Data Maturity Assessment',
                'High-Value Use Case Prioritization',
                'Technical Debt & Gap Analysis',
                'Strategic Executive Readout',
            ],
            recommendedFor: 'CDOs, CIOs & Innovation Leaders',
        },
        {
            id: 'governance-kit',
            icon: FiShield,
            title: 'Data & AI Governance Framework',
            price: '€12,500',
            description: 'Establish the "rules of the road" for reliable AI. We deploy a fit-for-purpose governance operating model that balances innovation velocity with risk management and compliance.',
            timeline: '3 Weeks',
            deliverables: [
                'Governance Operating Model',
                'AI Ethics & Policy Framework',
                'Stewardship Roles & Responsibilities',
                'Cataloging Strategy & Taxonomy',
            ],
            recommendedFor: 'Governance Leads & Risk Officers',
        },
        {
            id: 'arch-review',
            icon: FiLayout,
            title: 'Data & AI Architecture Review',
            price: '€12,500',
            description: 'A strategic audit of your current data platform against modern patterns (Lakehouse, Mesh). We deliver a future-proof blueprint to support high-throughput AI workloads.',
            timeline: '3 Weeks',
            deliverables: [
                'As-Is Architecture Audit',
                'Target State Blueprint (Logical/Physical)',
                'Tech Stack Rationalization',
                'Cloud Cost Optimization Strategy',
            ],
            recommendedFor: 'Enterprise Architects & CTOs',
        },
        {
            id: 'process-pilot',
            icon: FiActivity,
            title: 'Data & AI Process Intelligence',
            price: '€12,500',
            description: 'Unlock operational value by applying process mining and AI to a core business function. We identify friction points to specific automation opportunities with projected ROI.',
            timeline: '3 Weeks',
            deliverables: [
                'Process Discovery & Mining Analysis',
                'Friction Point Heatmap',
                'AI Automation Business Case',
                'Pilot Implementation Roadmap',
            ],
            recommendedFor: 'COOs & Transformation Directors',
        },
        {
            id: 'erp-strategy',
            icon: FiPackage,
            title: 'Data & AI ERP Modernization Strategy',
            price: '€12,500',
            description: 'De-risk your digital core transformation. We define a data-first migration strategy that decouples innovation layers from legacy ERPs to ensure agility and clean data.',
            timeline: '3 Weeks',
            deliverables: [
                'Migration Risk & Complexity Matrix',
                'Decoupled Data Strategy (API/Mesh)',
                'Legacy Decommissioning Playbook',
                'Modernization Roadmap',
            ],
            recommendedFor: 'CIOs & ERP Program Leads',
        },
        {
            id: 'exec-workshop',
            icon: FiUsers,
            title: 'Data & AI Executive Alignment',
            price: '€12,500',
            description: 'Align the C-Suite on a unified data vision. We facilitate high-stakes sessions to define ambition, agree on ethical boundaries, and commit to a prioritized investment portfolio.',
            timeline: '3 Weeks',
            deliverables: [
                'Strategic North Star Definition',
                'Investment Portfolio Prioritization',
                'Organizational Change Management Plan',
                'Executive Consensus Charter',
            ],
            recommendedFor: 'C-Suite & Board Members',
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
                        <span className="section-subtitle">High Impact. Fixed Price. Low Risk.</span>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Strategic Accelerators for <br />
                            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                                Data & AI Excellence
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto mb-10">
                            Expert-packaged engagements designed to deliver tangible strategic value in weeks.
                            Validate capability, reduce risk, and accelerate your roadmap.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {accelerators.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                id={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 hover:border-primary-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                            >
                                {/* Top Border Accent */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                                <div className="p-8 flex-grow">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 rounded-lg bg-gray-50 group-hover:bg-primary-50 text-gray-900 group-hover:text-primary-600 flex items-center justify-center transition-colors">
                                            <product.icon size={24} />
                                        </div>
                                        <span className="text-2xl font-serif font-bold text-gray-900">
                                            {product.price}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {product.title}
                                    </h3>
                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <FiClock className="mr-2" />
                                        <span>{product.timeline}</span>
                                    </div>

                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                        {product.description}
                                    </p>

                                    <div className="space-y-3 mb-6">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">What you get:</h4>
                                        <ul className="space-y-2">
                                            {product.deliverables.map((item, i) => (
                                                <li key={i} className="flex items-start text-sm text-gray-600">
                                                    <FiCheck className="text-green-500 mt-0.5 mr-2 shrink-0" size={14} />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                                    <div className="text-xs text-gray-500 mb-4 italic">
                                        Best for: {product.recommendedFor}
                                    </div>
                                    <Link
                                        href={`/contact?product=${product.id}&price=${encodeURIComponent(product.price)}`}
                                        className="btn-primary w-full flex items-center justify-center py-3 text-sm"
                                    >
                                        Purchase / Book
                                        <FiArrowRight className="ml-2" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust/Guarantee Section */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Why Start with an Accelerator?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="font-bold text-lg mb-2">Low Risk</h3>
                                <p className="text-gray-600 text-sm">Fixed scope and price means no budget surprises or scope creep.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Fast Value</h3>
                                <p className="text-gray-600 text-sm">Tangible deliverables in 2-5 weeks to prove ROI immediately.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">Future Ready</h3>
                                <p className="text-gray-600 text-sm">All outputs are designed to be the foundation for scalable architecture.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-50 -mt-10">
                <div className="container">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-600 to-accent-500"></div>

                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                            Ready to Accelerate Your Roadmap?
                        </h2>
                        <p className="text-xl text-gray-600 font-light mb-10 max-w-2xl mx-auto">
                            Don't boil the ocean. Start with a targeted accelerator and prove value in weeks, not months.
                        </p>
                        <div className="flex justify-center">
                            <Link href="/contact" className="btn-primary inline-flex items-center justify-center min-w-[200px]">
                                Get a Quote
                                <FiArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AcceleratorsPage;
