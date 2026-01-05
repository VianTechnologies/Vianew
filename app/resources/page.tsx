import React from 'react';
import Link from 'next/link';
import { FiFileText, FiBook, FiVideo, FiCpu, FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Resources - DrivePoint Data',
  description: 'Access our collection of reports, books, case studies, and educational content to navigate your data journey.',
};

export default function ResourcesPage() {
  const resourceCategories = [
    {
      icon: FiFileText,
      title: 'Industry Reports',
      description: 'Research and insights on data management trends, best practices, and industry benchmarks.',
      href: '/reports',
      color: 'bg-blue-500',
      count: '12+ Reports',
    },
    {
      icon: FiBook,
      title: 'Expert Books',
      description: 'Comprehensive guides and e-books covering all aspects of data management and analytics.',
      href: '/books',
      color: 'bg-green-500',
      count: '8+ Books',
    },
    {
      icon: FiVideo,
      title: 'Case Studies',
      description: 'Real-world success stories showcasing how we have helped organizations transform their data.',
      href: '/case-studies',
      color: 'bg-purple-500',
      count: '20+ Cases',
    },
    {
      icon: FiCpu,
      title: 'Blog & Articles',
      description: 'Regular updates on data management topics, tips, and industry news from our experts.',
      href: '/blog',
      color: 'bg-orange-500',
      count: '100+ Articles',
    },
  ];

  const featuredResources = [
    {
      title: 'The Complete Data Governance Handbook',
      type: 'Book',
      description: 'A comprehensive guide to implementing effective data governance in your organization.',
      link: '/books',
    },
    {
      title: 'State of Data Analytics 2025',
      type: 'Report',
      description: 'Industry research on analytics trends, tools, and best practices for the coming year.',
      link: '/reports',
    },
    {
      title: 'Financial Services Data Integration',
      type: 'Case Study',
      description: 'How we helped a major bank integrate 15+ data sources into a unified platform.',
      link: '/case-studies',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
            <section className="bg-gradient-to-br from-primary-100 to-primary-200 text-gray-800 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Knowledge Resources</h1>
            <p className="text-xl text-gray-600">
              Access our comprehensive collection of reports, books, case studies, and insights 
              to accelerate your data transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Explore Our Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to become a data-driven organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {resourceCategories.map((category, idx) => (
              <Link key={idx} href={category.href} className="block">
                <div className="card bg-white h-full hover:scale-105 transition-transform duration-300">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`${category.color} w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <category.icon className="text-white" size={28} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                        <span className="text-sm text-gray-500">{category.count}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-primary-600 font-semibold">
                    Browse {category.title}
                    <FiArrowRight className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most popular and impactful content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredResources.map((resource, idx) => (
              <div key={idx} className="card bg-gradient-to-br from-gray-50 to-white">
                <div className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {resource.type}
                </div>
                <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <Link href={resource.link} className="btn-outline">
                  Access Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-secondary-600 to-secondary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-green-100 mb-8">
              Subscribe to our newsletter for the latest resources, insights, and industry updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
              />
              <button type="submit" className="btn-secondary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-green-100 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

