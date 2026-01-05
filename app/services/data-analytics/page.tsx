import React from 'react';
import Link from 'next/link';
import { FiBarChart2, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Data Analytics Services - DrivePoint Data',
  description: 'Transform raw data into precision-guided, actionable insights with advanced analytics.',
};

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-600 to-orange-900 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center">
                <FiBarChart2 size={32} />
              </div>
              <h1 className="text-5xl font-bold">Data Analytics</h1>
            </div>
            <p className="text-xl text-orange-100">
              Transform your data into strategic insights. Our advanced analytics solutions 
              empower you to make data-driven decisions that drive business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Insights That Drive Action</h2>
              <p className="text-gray-600 mb-4">
                Raw data alone doesn't create value. Our analytics solutions transform your data 
                into meaningful insights that guide strategic decisions and drive measurable results.
              </p>
              <p className="text-gray-600 mb-4">
                From interactive dashboards to predictive models, we provide comprehensive analytics 
                solutions tailored to your business needs and objectives.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center mt-6">
                Get Started
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                'Interactive business intelligence dashboards',
                'Predictive analytics and forecasting',
                'Machine learning model development',
                'Advanced data visualization',
                'Real-time analytics capabilities',
                'Customized reporting solutions',
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
          <h2 className="text-4xl font-bold text-center mb-12">Analytics Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Business Intelligence',
                description: 'Interactive dashboards and reports that provide real-time visibility into your business.',
              },
              {
                title: 'Predictive Analytics',
                description: 'Forecast trends and outcomes using advanced statistical models and machine learning.',
              },
              {
                title: 'Data Visualization',
                description: 'Transform complex data into intuitive visual representations for better understanding.',
              },
              {
                title: 'Machine Learning',
                description: 'Custom ML models for classification, regression, clustering, and more.',
              },
              {
                title: 'Advanced Reporting',
                description: 'Automated report generation with customizable templates and scheduling.',
              },
              {
                title: 'Self-Service Analytics',
                description: 'Empower your team with tools to explore and analyze data independently.',
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

      <section className="py-20 bg-orange-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's transform your data into actionable insights that drive business success.
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

