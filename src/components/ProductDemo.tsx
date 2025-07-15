
import React, { useState } from 'react';
import { Play, BarChart3, Bot, TrendingUp, Users, Zap } from 'lucide-react';

const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
      title: 'Advanced Analytics Dashboard',
      description: 'Real-time insights with customizable visualizations and automated reporting tailored for your industry.',
      features: ['Custom KPI tracking', 'Real-time alerts', 'Automated insights', 'Industry benchmarks']
    },
    {
      id: 'ai-agents',
      label: 'AI Agents',
      icon: Bot,
      title: 'Intelligent Automation Suite',
      description: 'Deploy AI agents that handle customer service, appointment scheduling, and lead qualification automatically.',
      features: ['24/7 customer support', 'Appointment booking', 'Lead qualification', 'Follow-up automation']
    },
    {
      id: 'predictions',
      label: 'Predictions',
      icon: TrendingUp,
      title: 'Predictive Analytics Engine',
      description: 'Forecast trends and identify opportunities with machine learning models trained on industry data.',
      features: ['Revenue forecasting', 'Demand prediction', 'Risk assessment', 'Seasonal planning']
    },
    {
      id: 'collaboration',
      label: 'Industry Solutions',
      icon: Users,
      title: 'Specialized Industry Tools',
      description: 'Pre-built solutions for Med Spas, Dental Offices, Plumbers, Real Estate, and consulting businesses.',
      features: ['Industry templates', 'Compliance tools', 'Specialized metrics', 'Best practices']
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            See NEESA AI in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive suite of AI-powered tools through interactive demos 
            and see how they can transform your business operations across industries.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-16">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 m-2 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Demo Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Demo Video/Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl aspect-video flex items-center justify-center group cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Play className="w-12 h-12 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Interactive Demo</h3>
                <p className="text-gray-600 text-lg">Watch {tabs[activeTab].label.toLowerCase()} in action</p>
              </div>
            </div>
            
            {/* Demo Stats */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Demo Views</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">50k+</div>
            </div>

            {/* Floating notification */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">Live Demo</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                {tabs[activeTab].title}
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                {tabs[activeTab].description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {tabs[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 flex items-center space-x-3 shadow-xl">
                <Play className="w-6 h-6" />
                <span>Try Interactive Demo</span>
              </button>
              <p className="text-sm text-gray-500 mt-3">No signup required • Instant access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
