import React from 'react';
import Link from 'next/link';
import { FiShield, FiMap, FiLink, FiBarChart2, FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Our Services - Via New',
  description: 'AI-powered data solutions and process automation services that deliver value via new path.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: FiShield,
      title: 'AI-Powered Data Governance',
      description: 'Intelligent data management frameworks with AI-driven quality assurance, automated compliance, and smart data protection.',
      href: '/services/data-governance',
      color: 'bg-blue-500',
      features: [
        'AI-Enhanced Data Quality',
        'Automated Compliance Monitoring',
        'Intelligent Data Security',
        'Smart Metadata Management',
        'AI-Driven Data Stewardship',
      ],
    },
    {
      icon: FiMap,
      title: 'Intelligent Process Automation',
      description: 'AI-driven workflow optimization and intelligent automation. Transform manual processes into smart, self-optimizing systems.',
      href: '/services/process-mapping',
      color: 'bg-purple-500',
      features: [
        'AI-Powered Process Discovery',
        'Intelligent Workflow Design',
        'Automated Bottleneck Resolution',
        'Smart Process Optimization',
        'Self-Learning Automation',
      ],
    },
    {
      icon: FiLink,
      title: 'Smart Data Integration',
      description: 'AI-enhanced data connectivity and intelligent integration. Create self-adapting data ecosystems that evolve with your business.',
      href: '/services/data-integration',
      color: 'bg-green-500',
      features: [
        'AI-Driven ETL/ELT Pipelines',
        'Intelligent API Orchestration',
        'Real-time Data Intelligence',
        'Smart Cloud Integration',
        'AI-Powered Master Data Management',
      ],
    },
    {
      icon: FiBarChart2,
      title: 'AI-Powered Analytics',
      description: 'Intelligent analytics and predictive insights powered by AI. Transform data into automated decision-making and growth opportunities.',
      href: '/services/data-analytics',
      color: 'bg-orange-500',
      features: [
        'AI-Enhanced Business Intelligence',
        'Predictive AI Models',
        'Intelligent Data Visualization',
        'Self-Updating Dashboards',
        'Automated Insights Generation',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-100 to-primary-200 text-gray-800 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              AI-powered solutions and intelligent automation services designed to transform your business
              workflows. We deliver value via new path with data-driven and AI-embedded process optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="card bg-white">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2 text-gray-900">{service.title}</h2>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Key Features:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={service.href} className="btn-primary inline-flex items-center">
                  Learn More
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="bg-gradient-to-br from-primary-600 to-primary-900 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your data capabilities and drive business value.
            </p>
            <Link href="/contact" className="btn-secondary inline-flex items-center">
              Schedule a Consultation
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

