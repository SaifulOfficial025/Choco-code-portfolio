import React, { useEffect, useRef, useState } from 'react';

const services = [
  { 
    id: 1,
    icon: "🤖", 
    title: "AI Chatbot Development", 
    desc: "Build intelligent, conversational chatbots tailored to automate customer support and streamline communication.", 
    imgUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=800&fit=crop"
  },
  { 
    id: 2,
    icon: "📷", 
    title: "Computer Vision", 
    desc: "Leverage image recognition and object detection to extract actionable insights from visual data.", 
    imgUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=800&fit=crop"
  },
  { 
    id: 3,
    icon: "🧠", 
    title: "Core AI Models", 
    desc: "Build and train custom AI models from scratch, including transformers, CNNs, RNNs, and foundation models.", 
    imgUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=800&fit=crop"
  },
  { 
    id: 4,
    icon: "📱", 
    title: "Mobile App Development", 
    desc: "Design and develop seamless mobile experiences for iOS and Android platforms using modern frameworks.", 
    imgUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop"
  },
  { 
    id: 5,
    icon: "💻", 
    title: "Web App Development", 
    desc: "Create dynamic, responsive websites and web apps with robust backend and polished frontend interfaces.", 
    imgUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=800&fit=crop"
  },
  { 
    id: 6,
    icon: "📊", 
    title: "Data Analyst Services", 
    desc: "Analyze business data to uncover trends, generate reports, and support data-driven decision-making.", 
    imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop"
  }
];

const ServiceCard = ({ service }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-8 to 8 degrees)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[380px] md:h-[460px] rounded-[2rem] overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-cc-green/20 transition-all duration-300 ease-out cursor-pointer z-10 hover:z-20"
      style={{ transform: transform || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' }}
    >
      <img 
        src={service.imgUrl} 
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover blur-[2px] transition-all duration-700 ease-out group-hover:scale-110 group-hover:blur-0" 
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100"></div>
      
      {/* Glass border on hover */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-[2rem] transition-colors duration-500 pointer-events-none"></div>

      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        <div className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 text-2xl border border-white/20 transform transition-all duration-500 group-hover:-translate-y-10 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          {service.icon}
        </div>
        
        <h3 className="font-bold text-2xl mb-3 font-serif text-white transform transition-all duration-500 group-hover:-translate-y-10">
          {service.title}
        </h3>
        
        <p className="text-white/70 text-[15px] leading-relaxed line-clamp-3 transform transition-all duration-500 group-hover:-translate-y-10 group-hover:text-white/95">
          {service.desc}
        </p>
        
        {/* Button slides up from bottom */}
        {/* <div className="absolute bottom-8 left-8 right-8 opacity-0 translate-y-12 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <button className="w-full text-xs font-bold tracking-widest uppercase border border-cc-green/50 bg-cc-green text-white px-4 py-4 rounded-xl hover:bg-cc-green hover:shadow-[0_0_20px_rgba(46,125,50,0.4)] transition-all duration-300 backdrop-blur-md flex items-center justify-center space-x-2">
            <span>Explore Service</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div> */}
      </div>
    </div>
  );
};

function Ourservices() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const col1 = [services[0], services[3]];
  const col2 = [services[1], services[4]];
  const col3 = [services[2], services[5]];

  return (
    <section ref={sectionRef} className="w-full py-24 relative overflow-hidden">
      {/* Background stays the same light theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cc-green-50/40 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-20">
          <p className="text-cc-green font-mono text-sm mb-4 tracking-wide">{'<'} Our Services {'/>'}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-cc-black mb-6 tracking-tight font-serif">
            Professional <span className="text-gradient-choco">Services</span>
          </h2>
          <p className="text-cc-gray text-base px-4 leading-relaxed max-w-xl mx-auto">
            Delivering high-quality, tailored digital solutions to meet your unique business needs with cutting-edge technology.
          </p>
        </div>

        {/* Desktop Staggered Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 pb-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 lg:gap-8 pt-0">
            {col1.map((service, idx) => (
              <div 
                key={service.id} 
                className={`transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-40 opacity-0'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
          
          {/* Column 2 - Offset downwards permanently for the staggered look */}
          <div className="flex flex-col gap-6 lg:gap-8 pt-16">
            {col2.map((service, idx) => (
              <div 
                key={service.id} 
                className={`transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0'}`}
                style={{ transitionDelay: `${idx * 150 + 300}ms` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 lg:gap-8 pt-0">
            {col3.map((service, idx) => (
              <div 
                key={service.id} 
                className={`transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-40 opacity-0'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Standard Grid */}
        <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Ourservices;