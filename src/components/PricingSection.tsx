
import React, { useState } from 'react';
import { Check, X, Star } from 'lucide-react';
import { Button } from './ui/button';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        { name: 'Up to 5 users', included: true },
        { name: '10 data sources', included: true },
        { name: 'Basic analytics', included: true },
        { name: 'Email support', included: true },
        { name: 'Custom dashboards', included: true },
        { name: 'API access', included: false },
        { name: 'Advanced ML models', included: false },
        { name: 'Priority support', included: false }
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      description: 'Advanced features for growing businesses',
      monthlyPrice: 149,
      annualPrice: 119,
      features: [
        { name: 'Up to 25 users', included: true },
        { name: 'Unlimited data sources', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Priority support', included: true },
        { name: 'Custom dashboards', included: true },
        { name: 'API access', included: true },
        { name: 'Advanced ML models', included: true },
        { name: 'White-label reports', included: false }
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      monthlyPrice: 399,
      annualPrice: 319,
      features: [
        { name: 'Unlimited users', included: true },
        { name: 'Unlimited data sources', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Dedicated support', included: true },
        { name: 'Custom dashboards', included: true },
        { name: 'API access', included: true },
        { name: 'Advanced ML models', included: true },
        { name: 'White-label reports', included: true }
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    // <section id="pricing" className="py-20 bg-gray-50">
    //   <div className="max-w-7xl mx-auto px-6">
    //     <div className="text-center mb-16">
    //       <h2 className="text-4xl font-bold text-gray-900 mb-6">
    //         Simple, Transparent{' '}
    //         <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    //           Pricing
    //         </span>
    //       </h2>
    //       <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
    //         Choose the perfect plan for your business. All plans include a 14-day free trial
    //         and 30-day money-back guarantee.
    //       </p>

    //       {/* Billing Toggle */}
    //       <div className="flex items-center justify-center space-x-4">
    //         <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-600'}`}>
    //           Monthly
    //         </span>
    //         <button
    //           onClick={() => setIsAnnual(!isAnnual)}
    //           className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${isAnnual ? 'bg-blue-600' : 'bg-gray-300'
    //             }`}
    //         >
    //           <span
    //             className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${isAnnual ? 'translate-x-6' : 'translate-x-1'
    //               }`}
    //           />
    //         </button>
    //         <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-600'}`}>
    //           Annual
    //         </span>
    //         {isAnnual && (
    //           <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
    //             Save 20%
    //           </span>
    //         )}
    //       </div>
    //     </div>

    //     {/* Pricing Cards */}
    //     {/* Pricing Card - Enterprise Only */}
    //     <div className="flex justify-center">
    //       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border-2 border-blue-500 p-8">
    //         <div className="text-center mb-8">
    //           <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
    //           <p className="text-gray-600 mb-6">Complete solution for large organizations</p>

    //           <div className="mb-6">
    //             <span className="text-5xl font-bold text-gray-900">
    //               ${isAnnual ? 399 : 399}
    //             </span>
    //             <span className="text-gray-600 ml-2">/month</span>
    //             {isAnnual && (
    //               <div className="text-sm text-gray-500 mt-1">
    //                 Billed annually (${399 * 12}/year)
    //               </div>
    //             )}
    //           </div>

    //           <Button className="w-full py-3 rounded-lg font-semibold transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white">
    //             Contact Sales
    //           </Button>
    //         </div>

    //         {/* Features List */}
    //         <div className="space-y-4">
    //           {[
    //             'Unlimited users',
    //             'Unlimited data sources',
    //             'Advanced analytics',
    //             'Dedicated support',
    //             'Custom dashboards',
    //             'API access',
    //             'Advanced ML models',
    //             'White-label reports'
    //           ].map((feature, idx) => (
    //             <div key={idx} className="flex items-center space-x-3">
    //               <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
    //               <span className="text-gray-900">{feature}</span>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>


    //     {/* Enterprise Contact */}
    //     <div className="mt-16 text-center">
    //       <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
    //         <h3 className="text-2xl font-bold text-gray-900 mb-4">
    //           Need a Custom Solution?
    //         </h3>
    //         <p className="text-gray-600 mb-6">
    //           Get in touch with our enterprise team for custom pricing,
    //           dedicated support, and tailored features.
    //         </p>
    //         <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
    //           Contact Enterprise Sales
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">
  <div className="max-w-3xl mx-auto px-6 text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Enterprise <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Plan</span>
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      A complete AI automation platform designed for scale. Get dedicated support, white-glove onboarding, and advanced capabilities.
    </p>
  </div>

  {/* Card */}
  <div className="flex justify-center px-4">
    <div className="w-full max-w-xl bg-white border-2 border-blue-600 rounded-2xl shadow-xl p-10 text-left">
      <div className="mb-6">
        <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
          Best for Scale
        </div>
        <h3 className="text-3xl font-bold text-gray-900">Enterprise</h3>
        <p className="text-gray-600 mt-2 mb-6">Complete solution for large organizations</p>

        <div className="text-5xl font-bold text-gray-900 mb-1">
          ${isAnnual ? 399 : 399}
          <span className="text-xl font-normal text-gray-600">/month</span>
        </div>
        {isAnnual && (
          <p className="text-gray-500 text-sm mb-4">Billed annually (${399 * 12}/year)</p>
        )}

        <Button className="w-full py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-lg font-semibold">
          Contact Sales
        </Button>
      </div>

      <hr className="my-6 border-gray-200" />

      {/* Features */}
      <div className="space-y-4">
        {[
          'Unlimited users',
          'Unlimited data sources',
          'Advanced analytics',
          'Dedicated support',
          'Custom dashboards',
          'API access',
          'Advanced ML models',
          'White-label reports'
        ].map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-800">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
};

export default PricingSection;
