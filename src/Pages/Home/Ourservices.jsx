import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: "🤖",
    title: "AI Chatbot Development",
    desc: "Build intelligent, conversational chatbots tailored to automate customer support and streamline communication."
  },
  {
    icon: "📷",
    title: "Computer Vision Solutions",
    desc: "Leverage image recognition and object detection to extract actionable insights from visual data."
  },
  {
    icon: "🧠",
    title: "Core AI Model Development",
    desc: "Build and train custom AI models from scratch, including transformers, CNNs, RNNs, and foundation models for tasks across vision, language, and structured data."
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Design and develop seamless mobile experiences for iOS and Android platforms using modern frameworks."
  },
  {
    icon: "💻",
    title: "Web Application Development",
    desc: "Create dynamic, responsive websites and web apps with robust backend and polished frontend interfaces."
  },
  {
    icon: "📊",
    title: "Data Analyst Services",
    desc: "Analyze business data to uncover trends, generate reports, and support data-driven decision-making."
  }
];

function Ourservices() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility every time it crosses the threshold
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-[#f4faff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#3b82f6] font-semibold text-sm mb-4 tracking-wide">
            &lt;-- Our Services --&gt;
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Professional <span className="text-[#3b82f6]">Services</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base px-4 leading-relaxed">
            Delivering high-quality, tailored digital solutions to meet your unique business needs. From design to deployment, we ensure precision, performance, and professionalism every step of the way.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center text-center transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-24 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-16 h-16 bg-[#eff6ff] rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border border-blue-50">
                {service.icon}
              </div>
              <h3 className="font-extrabold text-lg text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              <button className="bg-[#1dbf73] hover:bg-[#19a463] text-white font-semibold py-2.5 px-7 rounded-md transition-all duration-300 text-sm shadow-md hover:shadow-lg w-max transform hover:-translate-y-0.5">
                Order Now
              </button>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Ourservices;