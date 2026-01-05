'use client';

import React, { useState } from 'react';
import { FiBook, FiDownload, FiStar } from 'react-icons/fi';
import LeadCaptureModal from '@/components/LeadCaptureModal';

export default function BooksPage() {
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const books = [
    {
      id: 1,
      title: 'The Data-Driven Enterprise',
      subtitle: 'A Comprehensive Guide to Organizational Transformation',
      author: 'Dr. Sarah Johnson',
      description: 'Learn how to transform your organization into a data-driven enterprise with proven frameworks and real-world case studies.',
      pages: 320,
      rating: 4.8,
      thumbnail: 'bg-gradient-to-br from-blue-600 to-blue-800',
    },
    {
      id: 2,
      title: 'Data Governance Essentials',
      subtitle: 'Building Trust in Your Data Assets',
      author: 'Michael Chen',
      description: 'A practical guide to implementing effective data governance programs that protect and optimize your data.',
      pages: 280,
      rating: 4.7,
      thumbnail: 'bg-gradient-to-br from-purple-600 to-purple-800',
    },
    {
      id: 3,
      title: 'Modern Data Integration',
      subtitle: 'Connecting Your Data Ecosystem',
      author: 'Emily Rodriguez',
      description: 'Master modern data integration techniques from ETL to real-time streaming and API-first architectures.',
      pages: 350,
      rating: 4.9,
      thumbnail: 'bg-gradient-to-br from-green-600 to-green-800',
    },
    {
      id: 4,
      title: 'Analytics for Business Leaders',
      subtitle: 'Making Data-Driven Decisions',
      author: 'David Thompson',
      description: 'A non-technical guide to leveraging analytics for strategic decision-making and business growth.',
      pages: 240,
      rating: 4.6,
      thumbnail: 'bg-gradient-to-br from-orange-600 to-orange-800',
    },
    {
      id: 5,
      title: 'Data Quality Management',
      subtitle: 'Ensuring Accuracy and Reliability',
      author: 'Lisa Martinez',
      description: 'Comprehensive strategies for measuring, monitoring, and improving data quality across your organization.',
      pages: 295,
      rating: 4.8,
      thumbnail: 'bg-gradient-to-br from-indigo-600 to-indigo-800',
    },
    {
      id: 6,
      title: 'The Cloud Data Playbook',
      subtitle: 'Strategies for Cloud Data Management',
      author: 'James Wilson',
      description: 'Navigate the complexities of cloud data management with practical strategies and architectural patterns.',
      pages: 310,
      rating: 4.7,
      thumbnail: 'bg-gradient-to-br from-teal-600 to-teal-800',
    },
  ];

  const handleDownload = (book: any) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
            <section className="bg-gradient-to-br from-secondary-100 to-secondary-200 text-gray-800 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Expert Books</h1>
            <p className="text-xl text-gray-600">
              Dive deep into AI-powered solutions with Via New's comprehensive collection of books 
              written by industry experts. Download free e-books to accelerate your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.id} className="card bg-white flex flex-col">
                <div className={`${book.thumbnail} h-64 rounded-lg mb-4 flex flex-col items-center justify-center text-white p-6`}>
                  <FiBook size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold text-center mb-2">{book.title}</h3>
                  <p className="text-sm text-center opacity-90">{book.subtitle}</p>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
                  <p className="text-gray-600 mb-4">{book.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{book.pages} pages</span>
                    <span className="flex items-center">
                      <FiStar className="text-yellow-500 mr-1" fill="currentColor" />
                      {book.rating}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload(book)}
                  className="btn-secondary w-full flex items-center justify-center"
                >
                  <FiDownload className="mr-2" />
                  Download E-Book
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      {showModal && (
        <LeadCaptureModal
          resource={selectedBook}
          resourceType="book"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

