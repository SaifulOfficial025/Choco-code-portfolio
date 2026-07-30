import React, { useState, useEffect } from 'react';

const roles = ["AI developer", "Web Developer", "App Developer", "CMS Developer"];

function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left Content */}
          <div className="flex-1 flex flex-col space-y-8 z-10">
            <h1 className="text-5xl md:text-6xl lg:text-[70px] font-extrabold text-[#1f2937] leading-[1.1] tracking-tight">
              Professional <br/>
              <span 
                className={`text-[#00AEEF] inline-block transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
              >
                {roles[currentRoleIndex]}
              </span>
              <br/>
              on Fiverr
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
              Empowering your ideas with custom AI solutions, cutting-edge apps,
              and stunning websites — all with a 100% satisfaction guarantee.
            </p>
            
            {/* Stats Box */}
            <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-4 md:p-6 flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 max-w-2xl">
              <div className="text-center px-2 md:px-4 flex-1">
                <p className="font-extrabold text-2xl text-gray-900">250+</p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Reviews</p>
              </div>
              <div className="text-center px-2 md:px-4 border-l border-gray-200 flex-1">
                <p className="font-extrabold text-2xl text-gray-900">5.0 <span className="text-yellow-500 text-xl">★</span></p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Ratings</p>
              </div>
              <div className="text-center px-2 md:px-4 border-l border-gray-200 flex-1">
                <p className="font-extrabold text-2xl text-gray-900 flex items-center justify-center gap-1">
                  2 <span className="text-black text-[10px]">♥♥</span>
                </p>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Level Seller</p>
              </div>
              <div className="w-full sm:w-auto flex-shrink-0">
                <button className="w-full sm:w-auto bg-[#00AEEF] hover:bg-[#0096ce] text-white text-sm font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center group shadow-md shadow-blue-200">
                  View Profile 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
            
            {/* Skills Pills */}
            <div className="flex flex-wrap gap-3 max-w-2xl pt-2">
              {[
                'Mobile App development', 
                'Mobile App design', 
                'Flutter developer', 
                'Mobile App design', 
                'Flutter developer'
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center space-x-2 border border-[#00AEEF] text-[#00AEEF] rounded-full px-4 py-1.5 text-sm font-medium bg-white/30 backdrop-blur-sm hover:bg-[#00AEEF] hover:text-white transition-colors cursor-default">
                  <span className="text-[10px] leading-none">♦</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 flex justify-center lg:justify-end relative mt-10 lg:mt-0">
            <div className="relative w-full max-w-[450px]">
              {/* Circular Background shape */}
              <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-[90%] aspect-square bg-white rounded-full opacity-60 -z-10"></div>
              
              {/* Image */}
              <img 
                src="/Gazi vai-Uu6qjG0T.png" 
                alt="Gazi Alauddin" 
                className="w-full h-auto object-contain relative z-10 scale-105 origin-bottom" 
              />
              
              {/* Name Banner */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[85%] z-20">
                <div className="bg-[#008DD2] text-white text-center py-4 rounded-xl shadow-xl border-b-[5px] border-[#006ca1]">
                  <h3 className="font-extrabold text-xl md:text-2xl tracking-wide">Gazi Alauddin</h3>
                  <p className="text-sm font-medium opacity-90 mt-0.5">CEO at App Oreo</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero;