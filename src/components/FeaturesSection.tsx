import React, { useState } from 'react';
import {
  Brain,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Database,
  Bot,
  Cpu,
  PhoneCall,
  Calendar,
  Globe,
  Mail,
  CheckCircle,
  ClipboardList,
  BarChart3,
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Shield,
      title: '24/7 Omni-Channel Outreach',
      description: 'Voice, SMS, and email — Neesa keeps patients engaged and supported around the clock.',
      details: 'Patients never feel unattended with continuous communication across multiple channels.',
      stats: '24/7 Coverage',
      color: 'red',
    },
    {
      icon: Users,
      title: 'Real-Time Sync with PMS Software',
      description:
        'Seamless integration with Jane, Eaglesoft, Dentrix, OpenDental, Accuro, Telnyx, RingCentral, and 70+ platforms.',
      details: 'Your scheduling, communication, and records stay perfectly updated with your existing software.',
      stats: '70+ integrations',
      color: 'indigo',
      logos: [
        { src: '/lovable-uploads/dentrix.jpeg', alt: 'Dentrix' },
        { src: '/lovable-uploads/edgesoft.jpg', alt: 'Eaglesoft' },
        { src: '/lovable-uploads/opendental.jpg', alt: 'OpenDental' },
      ],
    },
    {
      icon: Calendar,
      title: 'Automated Calendar Sync & Scheduling',
      description:
        'Automatically books, rebooks, and cancels appointments while keeping your calendar updated in real time.',
      details: 'Smart scheduling ensures fewer double-bookings and effortless rescheduling.',
      stats: 'Zero conflicts',
      color: 'blue',
    },
    {
      icon: TrendingUp,
      title: 'Smart Call Transfer & Response Interpretation',
      description: 'Routes urgent calls to the right person and understands patient intent instantly.',
      details: 'Advanced NLP ensures the right staff handles the right call at the right time.',
      stats: '95% intent accuracy',
      color: 'orange',
    },
    {
      icon: Cpu,
      title: 'Multi-Client Concurrent Handling',
      description: 'Handles 20+ patient conversations at once without delays.',
      details: 'No patient waits in line — AI handles them simultaneously with equal attention.',
      stats: '20+ parallel chats',
      color: 'green',
    },
    {
      icon: Shield,
      title: 'HIPAA-Compliant & Fully Customizable',
      description: 'Secure, reliable, and tailored to your clinic’s specific workflows.',
      details: 'Enterprise-grade compliance ensures sensitive data is always protected.',
      stats: 'HIPAA Secure',
      color: 'purple',
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Engages patients in 70+ languages, including bilingual conversations in real time.',
      details: 'Perfect for diverse patient communities where language support is essential.',
      stats: '70+ languages',
      color: 'blue',
    },
    {
      icon: Mail,
      title: 'Two-Way SMS & Email Conversations',
      description: 'Neesa chats naturally with patients via text or email — just like a real receptionist.',
      details: 'Patients reply in the channel they prefer, and Neesa handles it seamlessly.',
      stats: 'Natural Conversations',
      color: 'green',
    },
    {
      icon: ClipboardList,
      title: 'Insurance Verification (U.S. only)',
      description: 'Verifies patient coverage automatically to save time and reduce errors.',
      details: 'Patients are pre-checked before appointments, minimizing billing delays.',
      stats: 'Faster onboarding',
      color: 'orange',
    },
    {
      icon: PhoneCall,
      title: 'Real-Time Call Recordings & Transcriptions',
      description: 'Every call is logged, recorded, and transcribed for easy review and compliance.',
      details: 'Review past conversations anytime and ensure accuracy in follow-ups.',
      stats: '100% call logs',
      color: 'red',
    },
    {
      icon: BarChart3,
      title: 'AI-Powered Dashboard & Analytics',
      description: 'Track performance, call volume, response times, and conversion metrics at a glance.',
      details: 'Gain instant insights into operations and continuously improve patient engagement.',
      stats: '10x faster insights',
      color: 'indigo',
    },
    {
      icon: CheckCircle,
      title: 'Appointment Reminders & Confirmations',
      description: 'Automated notifications that reduce no-shows and keep your schedule full.',
      details: 'Patients receive reminders via SMS, email, and voice calls — minimizing missed visits.',
      stats: '30% fewer no-shows',
      color: 'blue',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="platform" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Advanced Features for Patient Care &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Practice Efficiency
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Neesa AI helps medical and dental practices save time, reduce no-shows, and deliver a
            seamless patient experience with fully automated communication and scheduling.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index;

            return (
              <div
                key={index}
                className={`group cursor-pointer transition-transform duration-300 ${
                  isActive ? 'scale-105' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div
                  className={`bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-300 h-full flex flex-col justify-between ${
                    isActive ? 'border-blue-200 shadow-2xl' : 'border-transparent hover:shadow-xl'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${getColorClasses(
                      feature.color,
                    )} flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                  {/* Expanded Details */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-700 mb-4 font-medium leading-relaxed">
                      {feature.details}
                    </p>

                    {/* Stats */}
                    <div
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${getColorClasses(
                        feature.color,
                      )} text-white shadow-lg mb-4`}
                    >
                      {feature.stats}
                    </div>

                    {/* Logos */}
                    {feature.logos && (
                      <div className="flex mt-4 justify-between items-center gap-4">
                        {feature.logos.map((logo, i) => {
                          const isDentrix = logo.alt.toLowerCase().includes('dentrix');
                          const isOpenDental = logo.alt.toLowerCase().includes('opendental');
                          const isEaglesoft = logo.alt.toLowerCase().includes('eaglesoft');

                          const logoElement = (
                            <div
                              key={i}
                              className="flex-1 flex items-center justify-center bg-white rounded-xl shadow-sm p-2 border border-gray-200 
                              transition-all duration-300 hover:scale-100 hover:shadow-md hover:border-gray-400"
                            >
                              <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-12 w-auto object-contain"
                              />
                            </div>
                          );

                          if (isDentrix) {
                            return (
                              <a
                                key={i}
                                href="https://www.dentrix.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                              >
                                {logoElement}
                              </a>
                            );
                          }

                          if (isOpenDental) {
                            return (
                              <a
                                key={i}
                                href="https://www.opendental.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                              >
                                {logoElement}
                              </a>
                            );
                          }

                          if (isEaglesoft) {
                            return (
                              <a
                                key={i}
                                href="https://www.pattersondental.com/eaglesoft"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                              >
                                {logoElement}
                              </a>
                            );
                          }

                          return logoElement;
                        })}
                      </div>
                    )}
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
