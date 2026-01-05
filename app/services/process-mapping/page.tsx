import React from 'react';
import Link from 'next/link';
import { FiMap, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Data Process Mapping Services - DrivePoint Data',
  description: 'Visualize and optimize your data workflows with precision for maximum efficiency.',
};

export default function ProcessMappingPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-600 to-purple-900 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center">
                <FiMap size={32} />
              </div>
              <h1 className="text-5xl font-bold">Data Process Mapping</h1>
            </div>
            <p className="text-xl text-purple-100">
              Gain complete visibility into your data workflows. Identify bottlenecks, 
              streamline operations, and optimize your data processes for peak performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Transform Your Data Operations</h2>
              <p className="text-gray-600 mb-4">
                Understanding how data flows through your organization is critical for optimization 
                and efficiency. Our process mapping services provide clear visibility into every step 
                of your data journey.
              </p>
              <p className="text-gray-600 mb-4">
                We help you identify inefficiencies, reduce redundancies, and create streamlined 
                processes that accelerate decision-making and improve data quality.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center mt-6">
                Get Started
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                'Complete visibility into data flows',
                'Identification of process bottlenecks',
                'Elimination of redundant processes',
                'Improved operational efficiency',
                'Better resource allocation',
                'Enhanced data quality controls',
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

      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Mapping Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'End-to-End Process Documentation',
                description: 'Comprehensive documentation of all data processes from source to consumption.',
              },
              {
                title: 'Data Flow Visualization',
                description: 'Visual representations of data movement across systems and departments.',
              },
              {
                title: 'Bottleneck Identification',
                description: 'Pinpoint inefficiencies and areas for improvement in your data workflows.',
              },
              {
                title: 'Process Optimization',
                description: 'Recommendations and implementation of streamlined, efficient processes.',
              },
              {
                title: 'Workflow Automation',
                description: 'Identify opportunities for automation to reduce manual effort.',
              },
              {
                title: 'Continuous Improvement',
                description: 'Ongoing monitoring and optimization of your data processes.',
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

      <section className="py-20 bg-purple-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Data Processes?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's map your data workflows and identify opportunities for improvement.
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

