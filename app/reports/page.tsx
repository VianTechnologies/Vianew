'use client';

import React, { useState } from 'react';
import { FiFileText, FiDownload, FiClock } from 'react-icons/fi';
import LeadCaptureModal from '@/components/LeadCaptureModal';

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const reports = [
    {
      id: 1,
      title: 'State of Data Governance 2025',
      description: 'Comprehensive analysis of data governance trends, challenges, and best practices across industries.',
      category: 'Governance',
      publishDate: '2025-03',
      pages: 45,
      thumbnail: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Data Integration ROI Study',
      description: 'Quantitative analysis of ROI from data integration initiatives based on 200+ organizations.',
      category: 'Integration',
      publishDate: '2025-02',
      pages: 32,
      thumbnail: 'bg-green-500',
    },
    {
      id: 3,
      title: 'Analytics Maturity Assessment Framework',
      description: 'A practical framework for assessing and advancing your organization\'s analytics capabilities.',
      category: 'Analytics',
      publishDate: '2025-01',
      pages: 38,
      thumbnail: 'bg-orange-500',
    },
    {
      id: 4,
      title: 'Data Quality Metrics That Matter',
      description: 'Essential KPIs and metrics for measuring and improving data quality across your enterprise.',
      category: 'Quality',
      publishDate: '2024-12',
      pages: 28,
      thumbnail: 'bg-purple-500',
    },
    {
      id: 5,
      title: 'Cloud Data Strategy Guide',
      description: 'Strategic guidance for migrating and managing data in cloud environments.',
      category: 'Cloud',
      publishDate: '2024-11',
      pages: 52,
      thumbnail: 'bg-indigo-500',
    },
    {
      id: 6,
      title: 'Master Data Management Best Practices',
      description: 'Proven approaches to implementing and maintaining master data management programs.',
      category: 'MDM',
      publishDate: '2024-10',
      pages: 41,
      thumbnail: 'bg-pink-500',
    },
  ];

  const handleDownload = (report: any) => {
    setSelectedReport(report);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
            <section className="bg-gradient-to-br from-primary-100 to-primary-200 text-gray-800 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Industry Reports</h1>
            <p className="text-xl text-gray-600">
              Access Via New's latest research, industry analysis, and insights on AI-powered data solutions and intelligent automation trends.
              Download comprehensive reports to navigate your digital transformation with innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report) => (
              <div key={report.id} className="card bg-white flex flex-col">
                <div className={`${report.thumbnail} h-48 rounded-lg mb-4 flex items-center justify-center`}>
                  <FiFileText className="text-white" size={64} />
                </div>
                <div className="flex-grow">
                  <div className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {report.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{report.title}</h3>
                  <p className="text-gray-600 mb-4">{report.description}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-4">
                    <span className="flex items-center">
                      <FiClock className="mr-1" /> {report.publishDate}
                    </span>
                    <span>{report.pages} pages</span>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload(report)}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  <FiDownload className="mr-2" />
                  Download Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      {showModal && (
        <LeadCaptureModal
          resource={selectedReport}
          resourceType="report"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

