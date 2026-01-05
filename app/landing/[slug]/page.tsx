import React from 'react';
import { notFound } from 'next/navigation';
import LandingPageTemplate from '@/components/landing/LandingPageTemplate';

// This would typically come from a CMS or database
const landingPages: Record<string, any> = {
  'data-governance-workshop': {
    title: 'Free Data Governance Workshop',
    subtitle: 'Learn How to Build a Robust Data Governance Framework',
    description: 'Join our exclusive 2-hour workshop and discover the essential strategies for implementing effective data governance in your organization.',
    heroImage: 'bg-gradient-to-br from-blue-600 to-blue-900',
    benefits: [
      'Understand data governance fundamentals',
      'Learn industry best practices',
      'Get a custom governance roadmap',
      'Q&A with our experts',
      'Free governance toolkit',
    ],
    cta: 'Register for Free Workshop',
    formFields: ['firstName', 'lastName', 'email', 'company', 'jobTitle'],
  },
  'data-analytics-consultation': {
    title: 'Free Analytics Consultation',
    subtitle: 'Transform Your Data into Actionable Insights',
    description: 'Schedule a complimentary 30-minute consultation with our analytics experts to discuss your data challenges and opportunities.',
    heroImage: 'bg-gradient-to-br from-orange-600 to-orange-900',
    benefits: [
      'Personalized analytics assessment',
      'ROI analysis and recommendations',
      'Technology stack guidance',
      'Implementation roadmap',
      'Priority support access',
    ],
    cta: 'Schedule Free Consultation',
    formFields: ['firstName', 'lastName', 'email', 'company', 'phone'],
  },
  'data-integration-guide': {
    title: 'Free Data Integration Guide',
    subtitle: 'Master Modern Data Integration Techniques',
    description: 'Download our comprehensive guide covering ETL, ELT, real-time integration, and API-first architectures.',
    heroImage: 'bg-gradient-to-br from-green-600 to-green-900',
    benefits: [
      '50+ pages of expert insights',
      'Real-world case studies',
      'Architecture diagrams',
      'Implementation checklist',
      'Tool comparison matrix',
    ],
    cta: 'Download Free Guide',
    formFields: ['firstName', 'lastName', 'email', 'company'],
  },
};

export default function LandingPage({ params }: { params: { slug: string } }) {
  const pageData = landingPages[params.slug];

  if (!pageData) {
    notFound();
  }

  return <LandingPageTemplate {...pageData} />;
}

export async function generateStaticParams() {
  return Object.keys(landingPages).map((slug) => ({
    slug,
  }));
}

