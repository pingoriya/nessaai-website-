import React, { useState, useEffect } from "react";
import { ArrowRight, Zap, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Scroll handler
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium animate-pulse">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Medical Business
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight break-words">
              Transform your Dental practice with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                neesa ai
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Neesa AI is redefining front-line communication and coordination
              in the healthcare industry by automating critical admin tasks for
              dental and homecare clinics. Our AI-powered virtual assistant
              handles patient communication, appointment scheduling, insurance
              verification, and field coordination with unmatched efficiency and
              ROI.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleScrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center group shadow-xl"
              >
                Book a free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Supporting Industries */}
            <div className="pt-8">
              <div className="text-sm text-blue-500 mb-3">
                Neesa supporting 200+ businesses
              </div>
              <div className="flex flex-wrap gap-2 opacity-60">
                {[
                  "Dental practices",
                  "Med Spa",
                  "Medical Practices",
                  "Chiropractors",
                ].map((industry) => (
                  <div
                    key={industry}
                    className="px-4 py-2 bg-purple-100 rounded-lg text-sm font-medium text-gray-600"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    AI Dashboard
                  </h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">
                      Leads Captured Today
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      +47
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-700">
                      Appointments Scheduled
                    </span>
                    <span className="text-lg font-bold text-blue-600">23</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm text-gray-700">
                      Revenue Generated
                    </span>
                    <span className="text-lg font-bold text-purple-600">
                      $12,450
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm text-gray-700">
                      AI Agent is active
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Handling 3 conversations...
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
