import React, { useState, useEffect } from "react";
import { Play, BarChart3, Bot, TrendingUp, Users, Zap } from "lucide-react";

const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tabs = [
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description:
        "Real-time insights with customizable visualizations and automated reporting tailored for your industry.",
      features: [
        "Custom KPI tracking",
        "Real-time alerts",
        "Automated insights",
        "Industry benchmarks",
      ],
    },
    {
      id: "ai-agents",
      label: "AI Agents",
      icon: Bot,
      title: "Intelligent Automation Suite",
      description:
        "Deploy AI agents that handle customer service, appointment scheduling, and lead qualification automatically.",
      features: [
        "24/7 customer support",
        "Appointment booking",
        "Lead qualification",
        "Follow-up automation",
      ],
    },
    {
      id: "predictions",
      label: "Predictions",
      icon: TrendingUp,
      title: "Predictive Analytics Engine",
      description:
        "Forecast trends and identify opportunities with machine learning models trained on industry data.",
      features: [
        "Revenue forecasting",
        "Demand prediction",
        "Risk assessment",
        "Seasonal planning",
      ],
    },
    {
      id: "collaboration",
      label: "Industry Solutions",
      icon: Users,
      title: "Specialized Industry Tools",
      description:
        "Pre-built solutions for Med Spas, Dental Offices, Plumbers, Real Estate, and consulting businesses.",
      features: [
        "Industry templates",
        "Compliance tools",
        "Specialized metrics",
        "Best practices",
      ],
    },
  ];

  // ✅ Auto-play video on load
  useEffect(() => {
    setIsPlaying(true);
  }, []);

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            See NEESA AI in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive suite of AI-powered tools through
            interactive demos and see how they can transform your business
            operations across industries.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-16">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(index);
                  setIsPlaying(true); // play immediately when switching tab
                }}
                className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 m-2 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
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
          {/* Left Column - Demo Video */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-video border-2 border-blue-300 shadow-2xl">
              <iframe
                src={`https://player.vimeo.com/video/1116707298?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0`}
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
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
                <div
                  key={index}
                  className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium text-lg">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={() => setIsPlaying(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 flex items-center space-x-3 shadow-xl"
              >
                <Play className="w-6 h-6" />
                <span>Try Interactive Demo</span>
              </button>
              <p className="text-sm text-gray-500 mt-3">
                No signup required • Instant access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
