'use client';

import React, { useState, useEffect } from 'react';
import { FiX, FiDownload } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const BookDownloadPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handleDownload = () => {
    // Open lead capture modal or redirect to download
    window.open('/contact?download=book', '_blank');
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isClosing ? 0 : 1 }}
        exit={{ opacity: 0 }}
        className="fixed bottom-6 right-6 z-50 max-w-sm"
      >
        <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX size={20} />
          </button>

          {/* Content */}
          <div className="flex space-x-4">
            {/* Book Cover */}
            <div className="flex-shrink-0">
              <div className="w-16 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-sm shadow-md relative overflow-hidden">
                <div className="absolute top-2 left-2 right-2">
                  <div className="bg-yellow-400 text-gray-900 text-xs px-2 py-1 rounded font-semibold mb-1">
                    Free Download
                  </div>
                  <div className="text-white text-xs font-semibold">
                    The Data-Driven
                  </div>
                  <div className="text-white text-xs font-semibold">
                    Growth Guide
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 text-white text-xs">
                  DrivePoint Data
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                🎁 FREE DOWNLOAD
              </h3>
              <h4 className="font-bold text-gray-900 mb-2">
                "The Data-Driven Growth Blueprint"
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Get your first customer in 30 days</strong> with our proven framework. Includes templates, checklists, and real case studies from companies that grew 40%+ using data.
              </p>
              <button
                onClick={handleDownload}
                className="bg-gray-900 text-white px-4 py-2 rounded-sm font-semibold text-sm hover:bg-gray-800 transition-colors flex items-center"
              >
                <FiDownload className="mr-2" size={16} />
                Download
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookDownloadPopup;
