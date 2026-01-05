'use client';

import React, { useState } from 'react';
import { FiCheck, FiCheckCircle } from 'react-icons/fi';

interface LandingPageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  benefits: string[];
  cta: string;
  formFields: string[];
}

const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  title,
  subtitle,
  description,
  heroImage,
  benefits,
  cta,
  formFields,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call to CRM
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Landing page form submitted:', formData);

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const getFieldLabel = (field: string) => {
    const labels: Record<string, string> = {
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      company: 'Company',
      jobTitle: 'Job Title',
      phone: 'Phone Number',
    };
    return labels[field] || field;
  };

  const getFieldType = (field: string) => {
    if (field === 'email') return 'email';
    if (field === 'phone') return 'tel';
    return 'text';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`${heroImage} text-white py-20`}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-2xl mb-4 opacity-90">{subtitle}</p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">{description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold mb-8">What You'll Get</h2>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FiCheck className="text-white" size={16} />
                    </div>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Why Choose DD Enterprise?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <FiCheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Over 10 years of industry experience</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>500+ successful projects delivered</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Certified data management experts</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>24/7 support and consultation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="card bg-white sticky top-24">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiCheck className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      We'll be in touch shortly with your requested information.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-6">{cta}</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        {formFields.map((field) => (
                          <div key={field}>
                            <label
                              htmlFor={field}
                              className="block text-sm font-medium text-gray-700 mb-1"
                            >
                              {getFieldLabel(field)} *
                            </label>
                            <input
                              type={getFieldType(field)}
                              id={field}
                              name={field}
                              required
                              value={formData[field] || ''}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                          </div>
                        ))}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Processing...' : cta}
                      </button>

                      <p className="text-xs text-gray-500 mt-4 text-center">
                        By submitting this form, you agree to our privacy policy and 
                        consent to receive communications from DD Enterprise.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageTemplate;

