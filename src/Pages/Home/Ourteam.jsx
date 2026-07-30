import React, { useEffect, useState, useRef } from 'react';

const teamMembers = [
  { id: 1, name: "Sharif Mahamud", role: "Python Developer" },
  { id: 2, name: "Sanjida Khanom", role: "Web Developer" },
  { id: 3, name: "Rafsan Munnaf", role: "AI Engineer" },
  { id: 4, name: "Gazi Alauddin", role: "CEO" },
  { id: 5, name: "Kawsar Hossain", role: "Software Engineer (Flutter)" },
  { id: 6, name: "Rimon Islam", role: "UI/UX Designer" },
  { id: 7, name: "Tanvir Ahmed", role: "Backend Developer" },
];

function Ourteam() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with Rafsan in center (index 2)
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      // Move right to left means activeIndex increments
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    }, 2500); 

    return () => clearInterval(interval);
  }, [isVisible]);

  const getPositionStyles = (index) => {
    const offset = (index - activeIndex + teamMembers.length) % teamMembers.length;
    
    // Base style for absolute positioning and smooth transitions
    let style = {
      transition: 'all 800ms cubic-bezier(0.25, 1, 0.5, 1)',
      position: 'absolute',
      top: '50%',
      marginTop: '-120px', // Center vertically based on approximate height
    };

    // Calculate positions to create a 3D curving carousel effect
    switch (offset) {
      case 0: // Center
        return { ...style, left: '50%', transform: 'translate(-50%, -10%) scale(1.3)', opacity: 1, zIndex: 40 };
      case 1: // Right
        return { ...style, left: '72%', transform: 'translate(-50%, 0) scale(0.9)', opacity: 0.8, zIndex: 30 };
      case 2: // Far Right
        return { ...style, left: '92%', transform: 'translate(-50%, 15%) scale(0.65)', opacity: 0.3, zIndex: 20 };
      case 3: // Off Screen Right
        return { ...style, left: '115%', transform: 'translate(-50%, 25%) scale(0.5)', opacity: 0, zIndex: 10 };
      case 4: // Off Screen Left
        return { ...style, left: '-15%', transform: 'translate(-50%, 25%) scale(0.5)', opacity: 0, zIndex: 10 };
      case 5: // Far Left
        return { ...style, left: '8%', transform: 'translate(-50%, 15%) scale(0.65)', opacity: 0.3, zIndex: 20 };
      case 6: // Left
        return { ...style, left: '28%', transform: 'translate(-50%, 0) scale(0.9)', opacity: 0.8, zIndex: 30 };
      default:
        return style;
    }
  };

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#3b82f6] font-semibold text-sm mb-4 tracking-wide">
            &lt;-- Our Team --&gt;
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Meet Our <span className="text-[#3b82f6]">Team Members</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base px-4 leading-relaxed">
            Get to know the skilled professionals behind our success. Our team of developers, designers, and strategists collaborate to bring your vision to life with dedication and a personal touch.
          </p>
        </div>

        {/* 3D Carousel Section */}
        <div className="relative w-full h-[350px] md:h-[450px] mt-10">
          {teamMembers.map((member, index) => {
            const offset = (index - activeIndex + teamMembers.length) % teamMembers.length;
            const isCenter = offset === 0;

            return (
              <div 
                key={member.id}
                className="flex flex-col items-center justify-center w-[160px] md:w-[220px]"
                style={getPositionStyles(index)}
              >
                {/* Avatar Placeholder */}
                <div 
                  className={`relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 bg-[#f8fafc] flex items-center justify-center transition-all duration-800 ${
                    isCenter ? 'border-[3px] border-[#3b82f6] shadow-[0_10px_30px_rgba(59,130,246,0.2)] ring-4 ring-blue-50' : 'border border-gray-200 shadow-sm'
                  }`}
                >
                  <svg className={`w-14 h-14 transition-colors duration-800 ${isCenter ? 'text-blue-300' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  
                  {/* Faint text overlay mirroring the broken image alt text look from screenshot */}
                  <span className={`absolute text-center text-[10px] text-gray-400 px-2 font-medium ${isCenter ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
                    {member.name}
                  </span>
                </div>
                
                {/* Member Info */}
                <div className={`text-center transition-all duration-800 ${isCenter ? 'scale-110 mt-2' : 'scale-100 opacity-60'}`}>
                  <h3 className="font-extrabold text-gray-900 text-[15px] md:text-[17px] whitespace-nowrap tracking-tight">{member.name}</h3>
                  <p className="text-gray-500 text-[11px] md:text-[13px] mt-1 font-medium">{member.role}</p>
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