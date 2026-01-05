import React from 'react';
import Link from 'next/link';
import { FiClock, FiUser, FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'Blog - DrivePoint Data',
  description: 'Insights, tips, and news on precision data management and analytics.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: '5 Key Principles of Effective Data Governance',
      excerpt: 'Learn the fundamental principles that make data governance programs successful and sustainable.',
      author: 'Sarah Johnson',
      date: '2025-03-15',
      readTime: '8 min read',
      category: 'Data Governance',
      image: 'bg-blue-500',
    },
    {
      title: 'The Future of Data Integration: API-First Architectures',
      excerpt: 'Explore how modern API-first approaches are revolutionizing data integration strategies.',
      author: 'Michael Chen',
      date: '2025-03-10',
      readTime: '6 min read',
      category: 'Integration',
      image: 'bg-green-500',
    },
    {
      title: 'Machine Learning in Production: Best Practices',
      excerpt: 'Practical guidance for deploying and maintaining machine learning models at scale.',
      author: 'David Thompson',
      date: '2025-03-05',
      readTime: '10 min read',
      category: 'Analytics',
      image: 'bg-purple-500',
    },
    {
      title: 'Data Quality Metrics That Actually Matter',
      excerpt: 'Cut through the noise and focus on the metrics that truly indicate data quality.',
      author: 'Emily Rodriguez',
      date: '2025-03-01',
      readTime: '7 min read',
      category: 'Data Quality',
      image: 'bg-orange-500',
    },
    {
      title: 'Cloud Data Migration: Lessons from the Trenches',
      excerpt: 'Real-world insights from successful cloud migration projects across industries.',
      author: 'James Wilson',
      date: '2025-02-25',
      readTime: '9 min read',
      category: 'Cloud',
      image: 'bg-indigo-500',
    },
    {
      title: 'Building a Data-Driven Culture: A Leadership Guide',
      excerpt: 'How executives can foster a culture that embraces data-driven decision making.',
      author: 'Sarah Johnson',
      date: '2025-02-20',
      readTime: '8 min read',
      category: 'Leadership',
      image: 'bg-pink-500',
    },
  ];

  const categories = ['All', 'Data Governance', 'Integration', 'Analytics', 'Data Quality', 'Cloud', 'Leadership'];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-900 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-blue-100">
              Expert perspectives on data management, analytics, and digital transformation 
              from our team of industry practitioners.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  idx === 0
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <article key={idx} className="card bg-white flex flex-col">
                <div className={`${post.image} h-48 rounded-lg mb-4 flex items-center justify-center`}>
                  <span className="text-white text-6xl font-bold opacity-20">DD</span>
                </div>
                
                <div className="flex-grow">
                  <div className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    <Link href={`/blog/${idx + 1}`} className="hover:text-primary-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <FiUser className="mr-1" size={14} />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <FiClock className="mr-1" size={14} />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/blog/${idx + 1}`}
                  className="mt-4 text-primary-600 font-semibold flex items-center hover:text-primary-700 transition-colors"
                >
                  Read More
                  <FiArrowRight className="ml-2" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center card bg-gradient-to-br from-primary-50 to-secondary-50">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Get the latest insights delivered directly to your inbox. No spam, unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

