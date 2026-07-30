import React, { useEffect, useRef, useState } from 'react';

const services = [
  { icon: "🤖", title: "AI Chatbot Development", desc: "Build intelligent, conversational chatbots tailored to automate customer support and streamline communication.", tag: "ai.chatbot" },
  { icon: "📷", title: "Computer Vision Solutions", desc: "Leverage image recognition and object detection to extract actionable insights from visual data.", tag: "cv.vision" },
  { icon: "🧠", title: "Core AI Model Development", desc: "Build and train custom AI models from scratch, including transformers, CNNs, RNNs, and foundation models.", tag: "ai.model" },
  { icon: "📱", title: "Mobile App Development", desc: "Design and develop seamless mobile experiences for iOS and Android platforms using modern frameworks.", tag: "app.mobile" },
  { icon: "💻", title: "Web Application Development", desc: "Create dynamic, responsive websites and web apps with robust backend and polished frontend interfaces.", tag: "web.app" },
  { icon: "📊", title: "Data Analyst Services", desc: "Analyze business data to uncover trends, generate reports, and support data-driven decision-making.", tag: "data.analyst" }
];

function Ourservices() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.05 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cc-green-50/30 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-cc-green font-mono text-sm mb-4 tracking-wide">{'<'} Our Services {'/>'}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-cc-black mb-6 tracking-tight font-serif">
            Professional <span className="text-gradient-choco">Services</span>
          </h2>
          <p className="text-cc-gray text-sm md:text-base px-4 leading-relaxed">
            Delivering high-quality, tailored digital solutions to meet your unique business needs.
          </p>
        </div>

        {/* Horizontal Alternating Cards with Timeline */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cc-green/20 via-cc-green/10 to-cc-green/20 hidden md:block"></div>

          <div className="space-y-8">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`relative transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cc-green border-4 border-cc-cream z-10 hidden md:block"></div>

                  <div className={`md:w-[47%] ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-cc-green/8 group hover:border-cc-green/20 hover:shadow-xl hover:shadow-cc-green/5 transition-all duration-500 flex items-start gap-5">
                      
                      {/* Number + Icon */}
                      <div className="flex-shrink-0">
                        <span className="font-mono text-[10px] text-cc-gray/30 block mb-2">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="w-14 h-14 bg-cc-green-50 rounded-2xl flex items-center justify-center text-2xl border border-cc-green/10 group-hover:border-cc-green/25 group-hover:shadow-[0_0_20px_rgba(46,125,50,0.08)] transition-all duration-500">
                          {service.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <span className="font-mono text-[10px] text-cc-gray/40 tracking-wider block mb-1">// {service.tag}</span>
                        <h3 className="font-bold text-lg text-cc-black mb-2 font-serif">{service.title}</h3>
                        <p className="text-cc-gray text-sm leading-relaxed mb-4">{service.desc}</p>
                        <button className="shimmer-btn bg-gradient-to-r from-cc-green to-cc-green-light text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 text-xs shadow-md shadow-cc-green/15 hover:shadow-cc-green/30 hover:-translate-y-0.5">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourservices;