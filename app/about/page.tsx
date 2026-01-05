import React from 'react';
import Link from 'next/link';
import { FiAward, FiUsers, FiTarget, FiHeart, FiArrowRight } from 'react-icons/fi';

export const metadata = {
  title: 'About Us - Via New',
  description: 'Learn about our mission to deliver value via new path with AI-powered data solutions and intelligent automation.',
};

export default function AboutPage() {
  const values = [
    {
      icon: FiTarget,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.',
    },
    {
      icon: FiUsers,
      title: 'Partnership',
      description: 'We work as true partners with our clients, invested in their long-term success.',
    },
    {
      icon: FiAward,
      title: 'Innovation',
      description: 'We embrace innovation and stay ahead of industry trends to provide cutting-edge solutions.',
    },
    {
      icon: FiHeart,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our engagements.',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      bio: '20+ years in enterprise data management and digital transformation.',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Former Principal Architect at Fortune 500 companies, expert in data architecture.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Data Governance',
      bio: 'Certified data governance professional with extensive regulatory compliance experience.',
    },
    {
      name: 'David Thompson',
      role: 'VP of Analytics',
      bio: 'Data scientist and analytics leader with focus on predictive modeling and ML.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
            <section className="bg-gradient-to-br from-primary-100 to-primary-200 text-gray-800 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About Via New</h1>
            <p className="text-xl text-gray-600">
              We deliver value via new path - data driven and AI embedded in process workflows. 
              Transform your business with intelligent automation and strategic data solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower organizations with the tools, strategies, and expertise needed 
                to harness the full potential of their data assets. We believe that data-driven 
                decision making is the key to sustainable competitive advantage in today's 
                digital economy.
              </p>
            </div>
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the world's most trusted partner for data transformation initiatives, 
                known for our expertise, integrity, and measurable impact on our clients' 
                success. We envision a future where every organization can confidently 
                leverage data to drive innovation and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="card bg-white text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experts driving our vision forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="card bg-gray-50">
                <div className="bg-gradient-to-br from-primary-600 to-primary-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-primary-600 text-center font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-900 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Clients Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Consultants</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Us on Your Data Journey</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's work together to transform your organization into a data-driven enterprise.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Get Started Today
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

