import React, { useEffect, useRef, useState } from 'react';

function Whychoose() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#3b82f6] font-semibold text-sm mb-4 tracking-wide">
            &lt;-- Why Choose Us --&gt;
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Your Trusted <span className="text-[#3b82f6]">AI Partner</span> on Fiverr
          </h2>
          <p className="text-gray-500 text-sm md:text-base px-4">
            With over 5 years of experience in AI development and 250+ satisfied clients, we deliver exceptional results that exceed expectations.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 - Slides from Left */}
          <div 
            className={`bg-[#0f76b5] p-3 rounded-lg transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-40 opacity-0'
            }`}
          >
            <div className="bg-white h-full rounded-md px-6 py-12 flex flex-col items-center text-center">
              <h3 className="font-extrabold text-lg text-gray-900 mb-6">Expertise & Experience</h3>
              <div className="w-14 h-14 bg-[#eff6ff] rounded-full flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15a5 5 0 100-10 5 5 0 000 10z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14.5l-2 7 4-2 4 2-2-7" />
                </svg>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your go-to AI partner on Fiverr, delivering custom solutions in chatbots, models, automation, and data-driven innovation worldwide.
              </p>
            </div>
          </div>

          {/* Card 2 - Slides from Bottom */}
          <div 
            className={`bg-[#00cbe6] p-3 rounded-lg transform transition-all duration-[1200ms] delay-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
            }`}
          >
            <div className="bg-white h-full rounded-md px-6 py-12 flex flex-col items-center text-center">
              <h3 className="font-extrabold text-lg text-gray-900 mb-6">100% Client Satisfaction</h3>
              <div className="w-14 h-14 bg-[#eff6ff] rounded-full flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514"></path>
                </svg>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Proven track record of consistently exceeding client expectations with top-quality AI, app, and web solutions tailored to your goals.
              </p>
            </div>
          </div>

          {/* Card 3 - Slides from Right */}
          <div 
            className={`bg-[#0f76b5] p-3 rounded-lg transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'
            }`}
          >
            <div className="bg-white h-full rounded-md px-6 py-12 flex flex-col items-center text-center">
              <h3 className="font-extrabold text-lg text-gray-900 mb-6">Timely Delivery</h3>
              <div className="w-14 h-14 bg-[#eff6ff] rounded-full flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Committed to delivering high-quality AI, app, and web projects on schedule—every time, without compromising on performance or precision.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Whychoose;