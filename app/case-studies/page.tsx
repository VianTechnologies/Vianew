import React from 'react';
import { FiArrowRight, FiTrendingUp } from 'react-icons/fi';

export const metadata = {
  title: 'Case Studies - DrivePoint Data',
  description: 'Real-world success stories of precision-guided data transformation initiatives.',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Global Bank Data Integration',
      industry: 'Financial Services',
      challenge: 'Fragmented data across 15+ legacy systems preventing unified customer view',
      solution: 'Implemented enterprise-wide data integration platform with real-time synchronization',
      results: ['40% reduction in data processing time', '99.9% data accuracy achieved', '$5M annual cost savings'],
      color: 'bg-blue-500',
    },
    {
      title: 'Healthcare Data Governance',
      industry: 'Healthcare',
      challenge: 'HIPAA compliance risks due to lack of data governance framework',
      solution: 'Established comprehensive data governance program with automated compliance monitoring',
      results: ['100% HIPAA compliance achieved', '60% reduction in data incidents', 'Successful regulatory audits'],
      color: 'bg-green-500',
    },
    {
      title: 'Retail Analytics Transformation',
      industry: 'Retail',
      challenge: 'Limited insights into customer behavior and inventory optimization',
      solution: 'Built advanced analytics platform with predictive modeling and real-time dashboards',
      results: ['25% increase in revenue', '30% improvement in inventory turnover', '15% reduction in stockouts'],
      color: 'bg-purple-500',
    },
    {
      title: 'Manufacturing Process Optimization',
      industry: 'Manufacturing',
      challenge: 'Inefficient data processes leading to production delays and quality issues',
      solution: 'Mapped and optimized data workflows with automated quality controls',
      results: ['50% reduction in process cycle time', '35% improvement in quality metrics', '$3M annual savings'],
      color: 'bg-orange-500',
    },
    {
      title: 'Insurance Data Migration',
      industry: 'Insurance',
      challenge: 'Complex cloud migration with zero downtime requirement',
      solution: 'Designed and executed phased migration strategy with comprehensive data validation',
      results: ['Zero downtime achieved', '100% data integrity maintained', '40% infrastructure cost reduction'],
      color: 'bg-indigo-500',
    },
    {
      title: 'Telecom Customer Analytics',
      industry: 'Telecommunications',
      challenge: 'High customer churn rate without understanding root causes',
      solution: 'Implemented predictive analytics to identify at-risk customers and trigger retention campaigns',
      results: ['20% reduction in churn', '$10M revenue protected', '85% prediction accuracy'],
      color: 'bg-pink-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-blue-100">
              Explore real-world success stories and learn how we've helped organizations 
              across industries transform their data capabilities and drive measurable business value.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="card bg-white">
                <div className="flex items-start space-x-3 mb-4">
                  <div className={`${study.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <FiTrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, rIdx) => (
                      <li key={rIdx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn-outline w-full">
                  Read Full Case Study
                  <FiArrowRight className="ml-2 inline" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-gradient-to-br from-primary-600 to-primary-900 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results in your organization.
            </p>
            <a href="/contact" className="btn-secondary inline-flex items-center">
              Start Your Transformation
              <FiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

