import React, { useState, useEffect } from 'react';

const roles = ["AI Developer", "Web Developer", "App Developer", "CMS Developer"];
const skills = ['Mobile App Development', 'AI & Machine Learning', 'Flutter Developer', 'Web Applications', 'CMS Development', 'Computer Vision', 'Data Analytics', 'Chatbot Development'];

function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[currentRoleIndex];
    let timeout;
    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => setDisplayText(currentWord.substring(0, displayText.length - 1)), 50);
    } else {
      timeout = setTimeout(() => setDisplayText(currentWord.substring(0, displayText.length + 1)), 100);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="w-full relative pt-32 pb-16 overflow-hidden">
      <div className="absolute top-20 right-0 w-[900px] h-[500px] bg-gradient-to-br from-cc-green-50/50 via-cc-yellow-50/30 to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Text Content */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center space-x-2 text-cc-gray font-mono text-sm mb-8 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-cc-green/10">
              <span className="w-2 h-2 bg-cc-green rounded-full animate-pulse"></span>
              <span>Available for new projects</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[70px] font-extrabold text-cc-black leading-[1.08] tracking-tight font-serif mb-8">
              Professional <br/>
              <span className="text-gradient-choco inline-block min-w-[280px] py-1">
                {displayText}
                <span className="animate-blink text-cc-yellow font-mono font-light">|</span>
              </span>
              <br/>
              on Fiverr
            </h1>
            
            <p className="text-cc-gray text-lg md:text-xl font-medium leading-relaxed mb-10 lg:pr-8">
              Empowering your ideas with custom AI solutions, cutting-edge apps,
              and stunning websites — all with a 100% satisfaction guarantee.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="shimmer-btn bg-gradient-to-r from-cc-green to-cc-green-light text-white text-sm font-bold py-3.5 px-8 rounded-xl transition-all duration-300 flex items-center group shadow-lg shadow-cc-green/20 hover:shadow-cc-green/40 hover:-translate-y-0.5">
                View Fiverr Profile
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button className="border-2 border-cc-green/20 text-cc-green text-sm font-bold py-3.5 px-8 rounded-xl hover:bg-cc-green hover:text-white transition-all duration-300">
                See Our Work
              </button>
            </div>
            
            {/* Mobile stats row */}
            <div className="flex items-center justify-center lg:hidden gap-6 mt-12">
              {[{v:'250+',l:'Reviews'},{v:'5.0 ★',l:'Ratings'},{v:'Lvl 2',l:'Seller'}].map((s,i) => (
                <div key={i} className="bg-white rounded-xl px-4 py-3 shadow-lg shadow-cc-green/5 border border-cc-green/10 text-center">
                  <p className="font-extrabold text-lg text-gradient-choco font-serif">{s.v}</p>
                  <p className="text-[9px] font-bold text-cc-gray uppercase tracking-wider">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative w-full max-w-[450px] mx-auto lg:ml-auto mt-8 lg:mt-0">
            {/* Floating stat badges - absolute positioned relative to image container */}
            <div className="hidden lg:block absolute -left-12 top-10 z-20 animate-float" style={{animationDelay: '0s'}}>
              <div className="bg-white rounded-2xl px-5 py-4 shadow-xl shadow-cc-green/5 border border-cc-green/10 text-center">
                <p className="font-extrabold text-2xl text-gradient-choco font-serif">250+</p>
                <p className="text-[10px] font-bold text-cc-gray uppercase tracking-wider mt-1">Reviews</p>
              </div>
            </div>
            
            <div className="hidden lg:block absolute -right-8 top-1/4 z-20 animate-float" style={{animationDelay: '1s'}}>
              <div className="bg-white rounded-2xl px-5 py-4 shadow-xl shadow-cc-green/5 border border-cc-green/10 text-center">
                <p className="font-extrabold text-2xl text-gradient-choco font-serif">5.0 <span className="text-cc-yellow text-lg">★</span></p>
                <p className="text-[10px] font-bold text-cc-gray uppercase tracking-wider mt-1">Ratings</p>
              </div>
            </div>

            <div className="hidden lg:block absolute left-0 bottom-12 z-20 animate-float" style={{animationDelay: '2s'}}>
              <div className="bg-white rounded-2xl px-5 py-4 shadow-xl shadow-cc-green/5 border border-cc-green/10 text-center">
                <p className="font-extrabold text-2xl text-gradient-choco font-serif">Lvl 2</p>
                <p className="text-[10px] font-bold text-cc-gray uppercase tracking-wider mt-1">Seller</p>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative w-full max-w-[380px] mx-auto lg:mr-4">
              <div className="absolute top-[8%] left-1/2 transform -translate-x-1/2 w-[88%] aspect-square rounded-full bg-gradient-to-br from-cc-green-50 to-cc-yellow-50 border border-cc-green/10 -z-10"></div>
              <div className="absolute top-[4%] left-1/2 -translate-x-1/2 w-[94%] aspect-square rounded-full border border-dashed border-cc-green/10 animate-[spin_30s_linear_infinite] -z-10"></div>
              
              <img src="/Gazi vai-Uu6qjG0T.png" alt="Gazi Alauddin" className="w-full h-auto object-contain relative z-10 scale-105 origin-bottom drop-shadow-2xl" />
              
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[85%] z-20">
                <div className="bg-gradient-to-r from-cc-green to-cc-green-light text-white text-center py-3 rounded-xl shadow-xl shadow-cc-green/20">
                  <h3 className="font-extrabold text-lg tracking-wide font-serif">Gazi Alauddin</h3>
                  <p className="text-xs font-medium text-white/80 font-mono">CEO at Choco Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Ticker Marquee */}
        <div className="mt-16 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cc-cream to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cc-cream to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-[marquee_20s_linear_infinite] w-max">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="flex items-center space-x-2 border border-cc-green/15 text-cc-green rounded-full px-5 py-2 text-sm font-medium bg-white/60 backdrop-blur-sm mx-2 whitespace-nowrap hover:bg-cc-green hover:text-white transition-all duration-300 cursor-default flex-shrink-0">
                <span className="text-[10px] leading-none text-cc-yellow">◆</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

export default Hero;