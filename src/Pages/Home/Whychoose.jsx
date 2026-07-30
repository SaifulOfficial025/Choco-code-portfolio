import React, { useEffect, useRef, useState } from 'react';

function Whychoose() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-aligned header */}
        <div className="max-w-xl mb-14">
          <p className="text-cc-green font-mono text-sm mb-4 tracking-wide">{'<'} Why Choose Us {'/>'}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-cc-black mb-4 tracking-tight font-serif">
            Your Trusted <span className="text-gradient-choco">AI Partner</span> on Fiverr
          </h2>
          <p className="text-cc-gray text-sm md:text-base">
            With over 5 years of experience in AI development and 250+ satisfied clients, we deliver exceptional results.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6">
          
          {/* Large Featured Card - spans 1 col, 2 rows */}
          <div className={`lg:row-span-2 p-[2px] rounded-2xl bg-gradient-to-br from-cc-green to-cc-green-light transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-40 opacity-0'
          }`}>
            <div className="bg-white h-full rounded-2xl p-8 md:p-10 flex flex-col justify-between group hover:shadow-xl hover:shadow-cc-green/5 transition-shadow duration-500">
              <div>
                <div className="w-16 h-16 bg-cc-green-50 rounded-2xl flex items-center justify-center mb-8 border border-cc-green/10 group-hover:border-cc-green/30 group-hover:shadow-[0_0_20px_rgba(46,125,50,0.1)] transition-all duration-500">
                  <svg className="w-8 h-8 text-cc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15a5 5 0 100-10 5 5 0 000 10z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 14.5l-2 7 4-2 4 2-2-7" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] text-cc-gray/40 tracking-wider block mb-3">// expertise</span>
                <h3 className="font-bold text-2xl text-cc-black mb-4 font-serif">Expertise & Experience</h3>
                <p className="text-cc-gray text-[15px] leading-relaxed">
                  Your go-to AI partner on Fiverr, delivering custom solutions in chatbots, models, automation, and data-driven innovation worldwide. We bring 5+ years of deep technical expertise to every project.
                </p>
              </div>
              <div className="mt-8 flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {['SM','GA','RM'].map((i,idx) => (
                    <div key={idx} className="w-8 h-8 rounded-full bg-cc-green-50 border-2 border-white text-cc-green text-[10px] font-bold flex items-center justify-center font-mono">{i}</div>
                  ))}
                </div>
                <span className="text-xs text-cc-gray">7+ team members</span>
              </div>
            </div>
          </div>

          {/* Top Right Card */}
          <div className={`lg:col-span-2 p-[2px] rounded-2xl bg-gradient-to-r from-cc-yellow to-cc-yellow-light transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'
          }`} style={{transitionDelay: '150ms'}}>
            <div className="bg-white h-full rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-6 group hover:shadow-xl hover:shadow-cc-green/5 transition-shadow duration-500">
              <div className="w-14 h-14 bg-cc-yellow-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-cc-yellow/20 group-hover:shadow-[0_0_20px_rgba(249,168,37,0.15)] transition-all duration-500">
                <svg className="w-7 h-7 text-cc-yellow-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514"></path>
                </svg>
              </div>
              <div>
                <span className="font-mono text-[10px] text-cc-gray/40 tracking-wider block mb-2">// satisfaction</span>
                <h3 className="font-bold text-lg text-cc-black mb-2 font-serif">100% Client Satisfaction</h3>
                <p className="text-cc-gray text-sm leading-relaxed">
                  Proven track record of consistently exceeding client expectations with top-quality AI, app, and web solutions tailored to your goals.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className={`lg:col-span-2 p-[2px] rounded-2xl bg-gradient-to-r from-cc-green to-cc-green-light transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'
          }`} style={{transitionDelay: '300ms'}}>
            <div className="bg-white h-full rounded-2xl p-8 flex flex-col md:flex-row md:items-center gap-6 group hover:shadow-xl hover:shadow-cc-green/5 transition-shadow duration-500">
              <div className="w-14 h-14 bg-cc-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-cc-green/10 group-hover:shadow-[0_0_20px_rgba(46,125,50,0.1)] transition-all duration-500">
                <svg className="w-7 h-7 text-cc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <span className="font-mono text-[10px] text-cc-gray/40 tracking-wider block mb-2">// delivery</span>
                <h3 className="font-bold text-lg text-cc-black mb-2 font-serif">Timely Delivery</h3>
                <p className="text-cc-gray text-sm leading-relaxed">
                  Committed to delivering high-quality AI, app, and web projects on schedule—every time, without compromising on performance or precision.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Whychoose;