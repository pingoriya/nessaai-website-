import React, { useEffect } from "react";

const ResourcesHub = () => {
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

  // Testimonial images (add more easily in future)
  const testimonials = [
    "/lovable-uploads/test1.jpg",
    "/lovable-uploads/test2.jpg",
    "/lovable-uploads/test3.jpg",
    "/lovable-uploads/test4.jpg",
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            NEESA.AI{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our clients are saying about NEESA AI.
          </p>
        </div>

        {/* Horizontal Scrollable Testimonials */}
        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4">
            {testimonials.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Calendly Embed Section */}
        <div
          id="calendar"
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Select Your Free Demo Today
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-center">
            Select a date and time that works best for you.
          </p>

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
