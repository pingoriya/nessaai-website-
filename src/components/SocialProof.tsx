import React from 'react';
import { Phone } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              10,000+
            </div>
            <div className="text-gray-600">Active Businesses</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              500M+
            </div>
            <div className="text-gray-600">Data Points Processed</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-gray-600">Uptime SLA</div>
          </div>
          <div className="p-6 flex flex-col items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-600 mb-4">AI-Powered Support</div>

            {/* New Button */}
            <a
              href="tel:+18339093326"
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5" />
              <span>Book a Free Demo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
