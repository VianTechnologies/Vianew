import React from 'react';
import Link from 'next/link';
import { FiLink, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Data Integration Services - DrivePoint Data',
  description: 'Seamlessly connect your data sources for a unified, precision-managed data ecosystem.',
};

export default function DataIntegrationPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-600 to-green-900 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center">
                <FiLink size={32} />
              </div>
              <h1 className="text-5xl font-bold">Data Integration</h1>
            </div>
            <p className="text-xl text-green-100">
              Break down data silos and create a unified data ecosystem. Connect disparate 
              sources to power your business intelligence and analytics initiatives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Unified Data, Better Insights</h2>
              <p className="text-gray-600 mb-4">
                Modern organizations rely on data from multiple sources. Our integration solutions 
                connect your systems seamlessly, ensuring data flows smoothly across your enterprise.
              </p>
              <p className="text-gray-600 mb-4">
                From ETL pipelines to API integrations, we provide comprehensive solutions that 
                handle batch and real-time data synchronization across cloud and on-premise systems.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center mt-6">
                Get Started
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                'Eliminate data silos across systems',
                'Real-time and batch data synchronization',
                'Scalable integration architecture',
                'Support for cloud and on-premise systems',
                'API-first integration approach',
                'Automated data transformation',
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
          <h2 className="text-4xl font-bold text-center mb-12">Integration Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'ETL/ELT Pipelines',
                description: 'Robust data pipelines for efficient extract, transform, and load operations.',
              },
              {
                title: 'API Integration',
                description: 'RESTful and GraphQL API integration for seamless system connectivity.',
              },
              {
                title: 'Real-time Sync',
                description: 'Stream processing for real-time data synchronization and updates.',
              },
              {
                title: 'Cloud Integration',
                description: 'Connect AWS, Azure, GCP, and other cloud platforms seamlessly.',
              },
              {
                title: 'Master Data Management',
                description: 'Ensure data consistency across all integrated systems.',
              },
              {
                title: 'Data Transformation',
                description: 'Automated data cleansing, enrichment, and transformation.',
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

      <section className="py-20 bg-green-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect Your Data Sources?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's build a unified data ecosystem that powers your business intelligence.
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

