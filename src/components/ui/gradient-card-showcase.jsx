import React, { useEffect, useRef, useState } from 'react';

export default function SkewCards({ cards }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });
    
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={containerRef} className="flex justify-center items-center flex-wrap py-10 w-full relative z-10">
        {cards.map(({ title, desc, gradientFrom, gradientTo, icon: Icon }, idx) => {
          
          let animationClass = '';
          if (isVisible) {
            animationClass = 'translate-x-0 translate-y-0 opacity-100';
          } else {
            if (idx === 0) animationClass = '-translate-x-32 opacity-0'; // Left card
            else if (idx === cards.length - 1) animationClass = 'translate-x-32 opacity-0'; // Right card
            else animationClass = 'translate-y-24 opacity-0'; // Middle card(s)
          }

          return (
            <div
              key={idx}
              className={`group relative w-full sm:w-[320px] h-[440px] m-[30px_15px] sm:m-[40px_20px] flex items-center transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${animationClass}`}
            >
              {/* Skewed gradient panels */}
              <span
                className="absolute top-0 left-[10%] sm:left-[50px] w-1/2 h-[90%] sm:h-full rounded-2xl transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[5%] sm:group-hover:left-[20px] group-hover:w-[90%] sm:group-hover:w-[calc(100%-40px)]"
                style={{
                  background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
                }}
              />
              <span
                className="absolute top-0 left-[10%] sm:left-[50px] w-1/2 h-[90%] sm:h-full rounded-2xl transform skew-x-[15deg] blur-[30px] transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:skew-x-0 group-hover:left-[5%] sm:group-hover:left-[20px] group-hover:w-[90%] sm:group-hover:w-[calc(100%-40px)]"
                style={{
                  background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
                }}
              />

              {/* Animated blurs */}
              <span className="pointer-events-none absolute inset-0 z-10 hidden sm:block">
                <span className="absolute top-0 left-0 w-0 h-0 rounded-full opacity-0 bg-white/60 backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-100 animate-blob group-hover:top-[-40px] group-hover:left-[40px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
                <span className="absolute bottom-0 right-0 w-0 h-0 rounded-full opacity-0 bg-white/60 backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-40px] group-hover:right-[40px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
              </span>

              {/* Content */}
              <div className="relative w-full z-20 left-0 p-6 sm:p-8 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/60 rounded-2xl text-cc-black transition-all duration-500 sm:group-hover:left-[-25px] group-hover:p-[35px_24px] sm:group-hover:p-[45px_32px] group-hover:bg-white/95">
                {Icon && (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-black/5 transition-colors duration-500 group-hover:bg-cc-black group-hover:text-white" style={{ color: gradientTo }}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                )}
                <h2 className="text-xl sm:text-2xl font-bold mb-3 font-serif">{title}</h2>
                <p className="text-[14px] sm:text-[15px] text-cc-gray leading-relaxed mb-6">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(10px); }
          50% { transform: translate(-10px); }
        }
        .animate-blob { animation: blob 2s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1s; }
      `}</style>
    </>
  );
}
