import React, { useEffect, useState, useRef } from 'react';

const teamMembers = [
  { id: 1, name: "Sharif Mahamud", role: "Python Developer", initials: "SM" },
  { id: 2, name: "Sanjida Khanom", role: "Web Developer", initials: "SK" },
  { id: 3, name: "Rafsan Munnaf", role: "AI Engineer", initials: "RM" },
  { id: 4, name: "Gazi Alauddin", role: "CEO", initials: "GA" },
  { id: 5, name: "Kawsar Hossain", role: "Software Engineer (Flutter)", initials: "KH" },
  { id: 6, name: "Rimon Islam", role: "UI/UX Designer", initials: "RI" },
  { id: 7, name: "Tanvir Ahmed", role: "Backend Developer", initials: "TA" },
];

function Ourteam() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => setActiveIndex((prev) => (prev + 1) % teamMembers.length), 2500);
    return () => clearInterval(interval);
  }, [isVisible]);

  const getPositionStyles = (index) => {
    const offset = (index - activeIndex + teamMembers.length) % teamMembers.length;
    let style = { transition: 'all 800ms cubic-bezier(0.25, 1, 0.5, 1)', position: 'absolute', top: '50%', marginTop: '-120px' };
    switch (offset) {
      case 0: return { ...style, left: '50%', transform: 'translate(-50%, -10%) scale(1.3)', opacity: 1, zIndex: 40 };
      case 1: return { ...style, left: '72%', transform: 'translate(-50%, 0) scale(0.9)', opacity: 0.8, zIndex: 30 };
      case 2: return { ...style, left: '92%', transform: 'translate(-50%, 15%) scale(0.65)', opacity: 0.3, zIndex: 20 };
      case 3: return { ...style, left: '115%', transform: 'translate(-50%, 25%) scale(0.5)', opacity: 0, zIndex: 10 };
      case 4: return { ...style, left: '-15%', transform: 'translate(-50%, 25%) scale(0.5)', opacity: 0, zIndex: 10 };
      case 5: return { ...style, left: '8%', transform: 'translate(-50%, 15%) scale(0.65)', opacity: 0.3, zIndex: 20 };
      case 6: return { ...style, left: '28%', transform: 'translate(-50%, 0) scale(0.9)', opacity: 0.8, zIndex: 30 };
      default: return style;
    }
  };

  return (
    <section ref={sectionRef} className="w-full py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cc-yellow-50/40 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-cc-green font-mono text-sm mb-4 tracking-wide">{'<'} Our Team {'/>'}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-cc-black mb-6 tracking-tight font-serif">
            Meet Our <span className="text-gradient-choco">Team Members</span>
          </h2>
          <p className="text-cc-gray text-sm md:text-base px-4 leading-relaxed">
            Get to know the skilled professionals behind our success. Our team of developers, designers, and strategists collaborate to bring your vision to life.
          </p>
        </div>

        <div className="relative w-full h-[350px] md:h-[450px] mt-10">
          {teamMembers.map((member, index) => {
            const offset = (index - activeIndex + teamMembers.length) % teamMembers.length;
            const isCenter = offset === 0;
            return (
              <div key={member.id} className="flex flex-col items-center justify-center w-[160px] md:w-[220px]" style={getPositionStyles(index)}>
                <div className={`relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 flex items-center justify-center transition-all duration-800 ${
                  isCenter 
                    ? 'border-[3px] border-cc-green shadow-[0_0_40px_rgba(46,125,50,0.15)] ring-4 ring-cc-green/10 bg-gradient-to-br from-cc-green-50 to-cc-yellow-50' 
                    : 'border border-gray-200 shadow-sm bg-gray-50'
                }`}>
                  <span className={`text-2xl md:text-3xl font-serif font-bold transition-colors duration-500 ${
                    isCenter ? 'text-gradient-choco' : 'text-gray-300'
                  }`}>{member.initials}</span>
                </div>
                <div className={`text-center transition-all duration-800 ${isCenter ? 'scale-110 mt-2' : 'scale-100 opacity-60'}`}>
                  <h3 className={`font-bold text-[15px] md:text-[17px] whitespace-nowrap tracking-tight font-serif ${isCenter ? 'text-cc-black' : 'text-gray-500'}`}>{member.name}</h3>
                  <p className={`text-[11px] md:text-[13px] mt-1 font-mono ${isCenter ? 'text-cc-green' : 'text-gray-400'}`}>{member.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Ourteam;