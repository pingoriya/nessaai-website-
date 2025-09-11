import React from "react";

const TestimonialVideos = () => {
  const video = "https://player.vimeo.com/video/1117539930?autoplay=1&muted=1&loop=1";

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Neesa AI
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how Neesa AI transforms everyday clinic operations into seamless workflows
          </p>
        </div>

        {/* Video + Content Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-between">
          {/* Left: Video Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="w-full aspect-video">
              <iframe
                src={video}
                title="Testimonial Video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Right: Text Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col justify-center h-full">
            <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-center lg:text-left">
              Automate Your Front Desk with <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Neesa AI
              </span>
            </h3>
            <p className="text-lg text-gray-700 mb-4 text-center lg:text-left">
              Clinics don’t need a full tech overhaul; they need everyday admin
              work handled without slips.
            </p>
            <p className="text-lg text-gray-700 mb-4 text-center lg:text-left">
              Neesa AI automates <strong>32+ front desk tasks</strong> so calls
              are answered, appointments booked, and reminders sent — all in the
              background.
            </p>
            <p className="text-lg text-gray-700 mb-4 text-center lg:text-left">
              The result? <br />
              ✅ No missed calls <br />
              ✅ Smoother workflows <br />
              ✅ Happier patients
            </p>
            <p className="text-lg text-gray-700 mb-6 text-center lg:text-left">
              Your staff stays focused on patient care while Neesa AI takes care
              of the rest.
            </p>
            <ul className="space-y-2 text-lg text-gray-800 mb-8 text-center lg:text-left">
              <li>✨ Happier Staff</li>
              <li>✨ Higher Retention</li>
              <li>✨ No More Staff Burnout</li>
              <li>✨ More Profits for your clinic</li>
            </ul>
            <div className="flex justify-center lg:justify-start">
              <a
                href="#calendar"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all text-lg font-semibold"
              >
                Automate Your Front Desk Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideos;
