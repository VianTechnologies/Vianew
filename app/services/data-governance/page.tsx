import React from 'react';
import Link from 'next/link';
import { FiShield, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Data Governance Services - DrivePoint Data',
  description: 'Establish precision-guided data governance frameworks for quality, security, and compliance.',
};

export default function DataGovernancePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-900 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center">
                <FiShield size={32} />
              </div>
              <h1 className="text-5xl font-bold">Data Governance</h1>
            </div>
            <p className="text-xl text-blue-100">
              Build a strong foundation for data management with comprehensive governance frameworks 
              that ensure data quality, security, and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Data Governance Matters</h2>
              <p className="text-gray-600 mb-4">
                In today's data-driven world, effective governance is essential for maintaining data integrity, 
                ensuring compliance, and maximizing the value of your data assets.
              </p>
              <p className="text-gray-600 mb-4">
                Our data governance solutions help you establish clear policies, procedures, and controls 
                that protect your data while enabling business innovation.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center mt-6">
                Get Started
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                'Improved data quality and reliability',
                'Enhanced regulatory compliance',
                'Reduced data security risks',
                'Better decision-making capabilities',
                'Increased operational efficiency',
                'Clear data ownership and accountability',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Governance Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Data Quality Management',
                description: 'Implement processes and tools to ensure data accuracy, completeness, and consistency.',
              },
              {
                title: 'Compliance Frameworks',
                description: 'Develop governance structures aligned with GDPR, CCPA, and industry regulations.',
              },
              {
                title: 'Data Security',
                description: 'Establish security policies and access controls to protect sensitive information.',
              },
              {
                title: 'Metadata Management',
                description: 'Create comprehensive metadata repositories for better data discovery and lineage.',
              },
              {
                title: 'Data Stewardship',
                description: 'Define roles, responsibilities, and accountability for data management.',
              },
              {
                title: 'Policy Development',
                description: 'Create clear policies and procedures for data handling and usage.',
              },
            ].map((service, idx) => (
              <div key={idx} className="card bg-white">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Strengthen Your Data Governance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to learn how our governance solutions can protect and optimize your data assets.
          </p>
          <Link href="/contact" className="btn-secondary inline-flex items-center">
            Schedule a Consultation
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

