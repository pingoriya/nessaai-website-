import React, { useState } from "react";
import { BarChart3, Bot, TrendingUp, Users, PhoneCall } from "lucide-react";

const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [showPhone, setShowPhone] = useState(false); // Track phone number visibility

  const tabs = [
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description:
        "Real-time insights with customizable visualizations and automated reporting tailored for your industry.",
      features: ["Custom KPI tracking", "Real-time alerts", "Automated insights", "Industry benchmarks"],
    },
    {
      id: "ai-agents",
      label: "AI Agents",
      icon: Bot,
      title: "Intelligent Automation Suite",
      description:
        "Deploy AI agents that handle customer service, appointment scheduling, and lead qualification automatically.",
      features: ["24/7 customer support", "Appointment booking", "Lead qualification", "Follow-up automation"],
    },
    {
      id: "predictions",
      label: "Predictions",
      icon: TrendingUp,
      title: "Predictive Analytics Engine",
      description:
        "Forecast trends and identify opportunities with machine learning models trained on industry data.",
      features: ["Revenue forecasting", "Demand prediction", "Risk assessment", "Seasonal planning"],
    },
    {
      id: "collaboration",
      label: "Industry Solutions",
      icon: Users,
      title: "Specialized Industry Tools",
      description:
        "Pre-built solutions for Med Spas, Dental Offices, Plumbers, Real Estate, and consulting businesses.",
      features: ["Industry templates", "Compliance tools", "Specialized metrics", "Best practices"],
    },
  ];

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
            Explore our comprehensive suite of AI-powered tools through interactive demos and see how they can transform your business operations across industries.
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Video */}
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

          {/* Right: Sidebar */}
          <div className="space-y-6 sticky top-20">
            {/* Tab Buttons at the Top */}
            <div className="flex flex-wrap gap-4 mb-4">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(activeTab === index ? null : index)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-2xl font-semibold transition-all duration-300 ${
                      activeTab === index
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Still have questions - only show if no tab is active */}
            {activeTab === null && (
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Still have questions? Talk to Neesa yourself.
                </h3>
                <p className="text-gray-600 mb-4">
                  Instead of reading about it, why not experience it? Call Neesa directly, ask her questions, and see how she can streamline your practice with efficiency and care.
                </p>
                <button
                  onClick={() => setShowPhone(!showPhone)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 flex items-center space-x-2 shadow-lg w-full justify-center"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>{showPhone ? "Call: +1-833-909-3326" : "Call Neesa Now - She'll Explain Everything"}</span>
                </button>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  No signup needed • Instant Call • Book in minutes
                </p>
              </div>
            )}

            {/* Tab Content */}
            {activeTab !== null && (
              <div className="bg-gray-50 p-6 rounded-2xl shadow-inner">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {tabs[activeTab].title}
                </h3>
                <p className="text-gray-600 mb-3">{tabs[activeTab].description}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {tabs[activeTab].features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
