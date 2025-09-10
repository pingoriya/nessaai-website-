import React, { useEffect } from "react";
import { FileText, Video, Download, ExternalLink } from "lucide-react";

const ResourcesHub = () => {
  const resources = [
    {
      type: "Guide",
      title: "Getting Started with AI Analytics",
      description:
        "Complete guide to implementing AI-powered analytics in your organization.",
      icon: FileText,
      category: "Documentation",
      readTime: "15 min read",
    },
    {
      type: "Webinar",
      title: "Predictive Analytics Masterclass",
      description: "Learn advanced forecasting techniques from industry experts.",
      icon: Video,
      category: "Training",
      readTime: "45 min watch",
    },
    {
      type: "Whitepaper",
      title: "ROI of Business Intelligence",
      description:
        "Research-backed insights on maximizing your analytics investment.",
      icon: Download,
      category: "Research",
      readTime: "12 page PDF",
    },
    {
      type: "Case Study",
      title: "Fortune 500 Success Story",
      description:
        "How a global enterprise increased revenue by 40% with our platform.",
      icon: ExternalLink,
      category: "Case Study",
      readTime: "8 min read",
    },
  ];

  const categories = ["All", "Documentation", "Training", "Research", "Case Study"];

  useEffect(() => {
    const existingScript = document.getElementById("calendly-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Resources &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Hub
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover guides, case studies, and training materials to help you get
            the most out of AI-powered analytics.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{resource.readTime}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Calendly Embed Section */}
        <div
          id="calendar" // ✅ Make Hero scroll target
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Select Your Free Demo Today
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-center">
            Select a date and time that works best for you.
          </p>

          {/* Center Calendly */}
          <div className="flex justify-center">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/oneaway/neesa"
              style={{
                minWidth: "320px",
                height: "620px",
                width: "100%",
                maxWidth: "800px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHub;
