
import React, { useState } from 'react';
import { Brain, Zap, Shield, Users, TrendingUp, Database, Bot, Cpu } from 'lucide-react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics Engine',
      description: 'Advanced machine learning algorithms analyze your data to uncover hidden patterns and generate actionable insights automatically.',
      details: 'Natural language processing allows you to ask questions in plain English and get instant visualizations. Perfect for Med Spas tracking treatment effectiveness.',
      stats: '10x faster insights',
      color: 'blue'
    },
    {
      icon: Bot,
      title: 'Intelligent AI Agents',
      description: 'Deploy specialized AI agents that handle routine tasks, customer interactions, and business processes 24/7 without human intervention.',
      details: 'From appointment scheduling for dental offices to lead qualification for real estate, our AI agents adapt to your industry needs.',
      stats: '80% task automation',
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'Real-Time Data Integration',
      description: 'Connect to 200+ data sources including Salesforce, HubSpot, Google Analytics, and custom APIs instantly with zero coding required.',
      details: 'Live data synchronization ensures your dashboards are always up-to-date with the latest business information.',
      stats: '200+ integrations',
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Intelligence',
      description: 'Advanced forecasting models predict trends, identify risks, and recommend optimal business strategies based on your data patterns.',
      details: 'Machine learning models continuously improve accuracy, helping plumbers predict seasonal demand and optimize inventory.',
      stats: '95% accuracy',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Industry-Specific Solutions',
      description: 'Pre-built templates and workflows designed specifically for Med Spas, Dental Offices, Plumbers, Real Estate, and more.',
      details: 'Each solution includes industry best practices, compliance features, and specialized metrics relevant to your business.',
      stats: '15+ industries',
      color: 'indigo'
    },
    {
      icon: Shield,
      title: 'Enterprise Security & Compliance',
      description: 'SOC 2 Type II, GDPR, and HIPAA compliant with end-to-end encryption and advanced access controls for sensitive data.',
      details: 'Enterprise-grade security ensures your customer data and business insights remain protected at all times.',
      stats: '99.9% uptime SLA',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="platform" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Business Intelligence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everything you need to transform raw data into actionable business intelligence, 
            from automated insights to industry-specific AI agents that work around the clock.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index;
            
            return (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-300 ${
                  isActive ? 'scale-105' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-300 h-full ${
                  isActive ? 'border-blue-200 shadow-2xl' : 'border-transparent hover:shadow-xl'
                }`}>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${getColorClasses(feature.color)} flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${
                    isActive ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-gray-700 mb-6 font-medium leading-relaxed">{feature.details}</p>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${getColorClasses(feature.color)} text-white shadow-lg`}>
                      {feature.stats}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
