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
    <section id="home" className="w-full relative pt-24 md:pt-32 pb-0 overflow-hidden bg-white/50">
      <div className="absolute top-20 left-0 w-[900px] h-[500px] bg-gradient-to-br from-cc-green-50/50 via-cc-yellow-50/30 to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/3"></div>
      <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cc-green-50/40 via-cc-yellow-50/20 to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/3"></div>

      <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col">
        
        {/* HUGE BACKGROUND TEXT */}
        <div className="absolute top-[8%] md:top-[12%] left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
          <h1 className="text-[15vw] xl:text-[230px] font-black text-cc-black/5 leading-[0.85] tracking-tighter uppercase whitespace-nowrap font-serif">
            Nazifur 
          </h1>
        </div>

        {/* MAIN CONTENT ROW */}
        <div className="relative w-full flex flex-col lg:flex-row justify-between items-center mt-12 md:mt-24 xl:mt-4 z-30 mb-16 px-4 md:px-12 lg:px-20 xl:px-2">
          
          {/* Left Side: Info & Stats */}
          <div className="max-w-md w-full lg:w-[32%] flex flex-col justify-center text-center lg:text-left mb-16 lg:mb-0 relative z-30 mx-auto lg:mx-0">
            <div className="inline-flex items-center space-x-2 text-cc-black font-medium text-sm mb-6 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-cc-green/20 shadow-sm w-fit mx-auto lg:mx-0">
              <span className="w-2.5 h-2.5 bg-cc-green rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              <span>Open for freelance works.</span>
            </div>
            
            <p className="text-cc-gray text-lg md:text-xl font-medium leading-relaxed mb-8">
              Hey there! I'm a Professional Developer working in the global marketplace, empowering your ideas with custom AI solutions, cutting-edge apps, and stunning websites.
            </p>

            <div className="flex justify-center lg:justify-start mb-12">
              <button className="bg-cc-black text-white text-sm font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center group hover:-translate-y-1 shadow-xl hover:shadow-cc-black/30">
                Schedule Call
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start w-full">
              {[{v:'250+',l:'Reviews'},{v:'5.0 ★',l:'Ratings'},{v:'Lvl 2',l:'Seller'}].map((s,i) => (
                <div key={i} className="bg-white/60 backdrop-blur-md rounded-3xl px-5 py-4 shadow-lg shadow-cc-green/5 border border-cc-green/10 text-center flex flex-col justify-center transition-transform hover:-translate-y-1 flex-1 min-w-[100px]">
                  <p className="font-extrabold text-2xl text-cc-black font-serif">{s.v}</p>
                  <p className="text-[10px] lg:text-xs font-bold text-cc-gray uppercase tracking-wider mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-[35%] flex justify-center items-center z-20 mb-16 lg:mb-0">
             <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] xl:w-[600px] xl:h-[600px]">
               <div className="w-full h-full rounded-full p-[8px] bg-gradient-to-r from-cc-yellow to-cc-green-light shimmer-btn drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden group transition-all duration-300 hover:shadow-cc-green/40 hover:shadow-2xl hover:-translate-y-1">
                 <img 
                   src="/Choco-Code-Profile-Picture.png" 
                   alt="GaziAlauddin" 
                   className="w-full h-full object-contain object-bottom rounded-full relative z-10 border-4 border-cc-yellow-100 "
                 />
               </div>
             </div>
          </div>

          {/* Right Side: Large Text */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center text-center lg:text-left z-30 lg:pl-4 xl:pl-8">
            <div className="text-[12vw] sm:text-[10vw] lg:text-[60px] xl:text-[70px] font-extrabold text-cc-black uppercase tracking-tighter leading-[1.1] mb-2 whitespace-nowrap">
              Professional
            </div>
            
            <div className="text-[12vw] sm:text-[10vw] lg:text-[60px] xl:text-[70px] font-extrabold uppercase tracking-tighter leading-[1.1]">
              <span className="text-gradient-choco inline-block text-center lg:text-left min-w-[200px] lg:min-w-[300px] xl:min-w-[450px] whitespace-nowrap py-2 pr-4">
                {displayText}<span className="animate-blink text-cc-yellow font-mono font-light">|</span>
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Marquee Footer (Skills) */}
      <div className="w-full border-t border-cc-green/10 py-8 bg-gradient-to-b from-transparent to-white/80 relative z-30">
        <div className="max-w-[1600px] mx-auto relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-[marquee_30s_linear_infinite] w-max items-center">
            {[...skills, ...skills, ...skills].map((skill, idx) => (
              <React.Fragment key={idx}>
                <div className="text-xl md:text-2xl font-extrabold text-cc-black/40 uppercase tracking-widest px-8 whitespace-nowrap transition-colors hover:text-cc-green">
                  {skill}
                </div>
                <div className="text-cc-yellow text-xl">✦</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  )
}

export default Hero;