
import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Users, Clock, Calendar, CheckCircle, ArrowRight, Zap, Bot, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Webinar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    industry: ''
  });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { text: "This changed how we approach client communication. Incredible insights!", author: "Sarah Chen", title: "Med Spa Owner" },
    { text: "A must-attend for any service business looking to truly scale.", author: "Mike Rodriguez", title: "HVAC Director" },
    { text: "Our conversion rates doubled after implementing these strategies.", author: "Dr. Amanda Foster", title: "Dental Practice Owner" }
  ];

  const industries = ['Med Spa', 'Dental', 'Doctor', 'Plumber', 'HVAC', 'Real Estate', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <Navigation />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight">
              Automate Growth
            </h1>
            <div className="text-2xl md:text-3xl font-semibold mb-8 text-cyan-100">
              Unlock Your Service Business's Hidden Revenue with AI Agents
            </div>
          </div>

          <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Discover how AI agents are transforming Med Spas, Dental Offices, Plumbers, Real Estate, and more into 
              <span className="text-cyan-400 font-semibold"> 24/7 revenue machines</span> without adding staff.
            </p>
          </div>

          {/* Webinar Card */}
          <div className={`max-w-4xl mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-slate-800/80 to-purple-900/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  The Future of Service: How AI Agents Convert More Leads & Delight Every Client
                </h2>
                
                <div className="flex flex-wrap justify-center gap-6 text-lg text-cyan-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span>Tuesday, August 15th, 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span>11:00 AM EDT / 8:00 AM PDT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span>LIVE ONLINE EVENT</span>
                  </div>
                </div>
              </div>

              {/* Video Placeholder */}
              <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-12 mb-8 border border-cyan-500/30">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300">
                    <Play className="w-12 h-12 text-white ml-1" />
                  </div>
                  <p className="text-gray-300">Watch Preview: AI Agents in Action</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-400">Are You Tired of Missing Opportunities?</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              In today's fast-paced service world, every missed call is a missed appointment, every delayed follow-up is a lost client. 
              Your team is stretched thin, administrative tasks are overwhelming, and lead conversion often feels like a lottery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-cyan-400 mb-8">Imagine a world where...</h3>
              {[
                'No lead ever goes unanswered, day or night',
                'Appointments are scheduled seamlessly, without interrupting your staff',
                'Client inquiries are handled instantly, boosting satisfaction',
                'Your team focuses on exceptional service, not admin tasks'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-lg text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-bounce" />
                  <h4 className="text-2xl font-bold text-white mb-4">This isn't a dream.</h4>
                  <p className="text-xl text-cyan-300 font-semibold">It's the reality with AI Agents.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            What You'll Learn In This Exclusive Webinar
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Bust the 24/7 Bottleneck",
                description: "Discover how AI agents eliminate missed calls and instant message inquiries, ensuring every lead is captured, qualified, and followed up with — even after hours."
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Automate Your Appointment Bookings",
                description: "See live examples of AI agents handling complex scheduling, reducing no-shows, and optimizing your team's calendar."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Supercharge Client Satisfaction",
                description: "Learn how AI provides instant, personalized support, answers FAQs, and nurtures relationships, freeing up your staff from repetitive tasks."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Slash Overhead, Boost Profit",
                description: "Understand the ROI of implementing AI agents, demonstrating how they reduce administrative costs and directly contribute to increased revenue."
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: "Real-World Use Cases",
                description: "Get specific examples tailored for Med Spas, Dental & Doctors' Offices, Plumbers, HVAC Technicians, Real Estate agencies, and more."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Seamless Integration",
                description: "How AI agents can easily integrate with your existing CRM, scheduling, and communication systems."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Your Expert Guide</h2>
          
          <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-xl">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="w-16 h-16 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">NEESA AI Expert</h3>
            <p className="text-cyan-400 text-lg mb-6">Founder & CEO, NEESA AI</p>
            
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Founder of NEESA AI, our expert has spent years revolutionizing operations for hundreds of service businesses, 
              leveraging cutting-edge AI to deliver unparalleled efficiency and growth. A passionate advocate for smart automation, 
              believing the future of service lies in empowering businesses to do more with less, without sacrificing the human touch.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-6 px-12 rounded-full text-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl mb-8 animate-pulse">
              SECURE YOUR FREE SPOT NOW!
            </button>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-purple-900/80 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-xl">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name (Optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select Industry (Optional)</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl text-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Register Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">What Others Are Saying</h2>
          
          <div className="relative h-32">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentTestimonial ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                }`}
              >
                <blockquote className="text-xl text-gray-300 mb-4">"{testimonial.text}"</blockquote>
                <cite className="text-cyan-400 font-semibold">
                  {testimonial.author}, {testimonial.title}
                </cite>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl border border-red-500/30">
            <p className="text-xl font-bold text-red-300">Limited Spots Available!</p>
            <p className="text-red-200">Over 150+ Industry Leaders Already Registered!</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Webinar;
