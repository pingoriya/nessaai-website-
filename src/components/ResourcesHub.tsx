import React, { useState } from 'react';
import { FileText, Video, Download, ExternalLink, Calendar } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const ResourcesHub = () => {
  const resources = [
    {
      type: 'Guide',
      title: 'Getting Started with AI Analytics',
      description: 'Complete guide to implementing AI-powered analytics in your organization.',
      icon: FileText,
      category: 'Documentation',
      readTime: '15 min read'
    },
    {
      type: 'Webinar',
      title: 'Predictive Analytics Masterclass',
      description: 'Learn advanced forecasting techniques from industry experts.',
      icon: Video,
      category: 'Training',
      readTime: '45 min watch'
    },
    {
      type: 'Whitepaper',
      title: 'ROI of Business Intelligence',
      description: 'Research-backed insights on maximizing your analytics investment.',
      icon: Download,
      category: 'Research',
      readTime: '12 page PDF'
    },
    {
      type: 'Case Study',
      title: 'Fortune 500 Success Story',
      description: 'How a global enterprise increased revenue by 40% with our platform.',
      icon: ExternalLink,
      category: 'Case Study',
      readTime: '8 min read'
    }
  ];

  const categories = ['All', 'Documentation', 'Training', 'Research', 'Case Study'];

  // ---- Appointment State ----
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const slots = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"];
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  // ---- Submit Booking ----
  const handleBooking = async () => {
    if (!selectedDate || !selectedSlot || !email) {
      setStatus("⚠️ Please fill all fields.");
      return;
    }

    try {
      // Example: Send to EmailJS / backend API
      // Here we just simulate success
      console.log("Booking:", { email, date: selectedDate, slot: selectedSlot });

      setStatus(`✅ Appointment booked! A confirmation has been sent to ${email}`);
      setSelectedDate(null);
      setSelectedSlot(null);
      setEmail("");
    } catch (error) {
      setStatus("❌ Failed to book appointment. Try again.");
    }
  };

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Resources &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Hub
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover guides, case studies, and training materials to help you get the most 
            out of AI-powered analytics.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 mx-2 my-1 rounded-full font-medium transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
            >
              {category}
            </button>
          ))}
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

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with Latest Insights
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get weekly analytics tips, industry trends, and product updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </div>

        {/* ---- Appointment Booking Section ---- */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex justify-center items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-600" /> Book an Appointment
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Select a date, choose an available slot, and confirm with your email to receive a notification.
          </p>

          {/* Date Picker */}
          <div className="flex justify-center mb-6">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => { setSelectedDate(date); setSelectedSlot(null); }}
              minDate={new Date()} // disable past dates
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholderText="Choose a date"
              dateFormat="MMMM d, yyyy"
            />
          </div>

          {/* Slots */}
          {selectedDate && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Available Slots for {selectedDate.toDateString()}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
                {slots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-3 px-4 rounded-lg font-medium transition ${
                      selectedSlot === slot
                        ? "bg-blue-600 text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-100"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Email + Confirm */}
          {selectedDate && selectedSlot && (
            <div className="max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email for confirmation"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 mb-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <button
                onClick={handleBooking}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Confirm Appointment
              </button>
              {status && <p className="mt-4 text-gray-700">{status}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourcesHub;
