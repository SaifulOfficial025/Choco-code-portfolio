import React, { useEffect, useRef, useState } from 'react';

const allProjects = [
  { id: 1, title: "Nutra AI - Calorie Counter", desc: "Track meals easily—just snap a photo for instant nutrition insights.", tag: "ai.nutrition" },
  { id: 2, title: "Smarter Google Ads with AI", desc: "Optimize campaigns fast with AI insights, support, and automation tools.", tag: "ai.marketing" },
  { id: 3, title: "Smarter Math Help with AI", desc: "AI-powered math tutoring for fast, fun, and effective learning.", tag: "ai.education" },
  { id: 4, title: "AI Session Planner", desc: "Plan sessions by sport, age, skill, theme—coach with ease.", tag: "ai.planning" },
  { id: 5, title: "AI Content Generator", desc: "Generate high-quality blog posts and marketing copy in seconds.", tag: "ai.content" },
  { id: 6, title: "Vision AI Object Detection", desc: "Real-time object detection and classification for security cameras.", tag: "cv.detection" },
  { id: 7, title: "Crypto Trading Bot", desc: "Automated trading strategies using advanced machine learning models.", tag: "ml.trading" },
  { id: 8, title: "Virtual AI Assistant", desc: "A smart voice and text assistant for scheduling and reminders.", tag: "ai.assistant" }
];

function OurWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featured = allProjects[0];
  const gridProjects = isExpanded ? allProjects.slice(1) : allProjects.slice(1, 4);

  return (
    <section id="portfolio" ref={sectionRef} className="w-full py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-cc-green font-mono text-sm mb-4 tracking-wide">{'<'} Our Work Sample {'/>'}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-cc-black mb-6 tracking-tight font-serif">
            Visit <span className="text-gradient-choco">Our Projects</span>
          </h2>
          <p className="text-cc-gray text-sm md:text-base px-4 leading-relaxed">
            Explore a diverse portfolio of completed works that showcase our creativity, technical expertise, and commitment to client satisfaction.
          </p>
        </div>

        {/* Featured Hero Project */}
        <div className={`mb-8 transform transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <div className="bg-white rounded-3xl overflow-hidden border border-cc-green/8 group hover:border-cc-green/20 hover:shadow-xl hover:shadow-cc-green/5 transition-all duration-500">
            <div className="flex flex-col lg:flex-row">
              {/* Large image area */}
              <div className="lg:w-3/5 h-[250px] lg:h-auto bg-gradient-to-br from-cc-green-50 via-cc-yellow-50/50 to-cc-green-50 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04] font-mono text-xs text-cc-green leading-loose p-6 overflow-hidden">
                  {Array(12).fill(null).map((_,i) => (
                    <p key={i}>{'const project = await choco.build({ ai: true, quality: "premium" });'}</p>
                  ))}
                </div>
                <div className="relative z-10 w-24 h-24 rounded-3xl bg-white/80 border border-cc-green/15 flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(46,125,50,0.12)] transition-all duration-500">
                  <svg className="w-12 h-12 text-cc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <span className="absolute top-4 left-4 font-mono text-xs text-cc-green/50 bg-white/80 px-3 py-1.5 rounded-lg">// {featured.tag}</span>
                <span className="absolute top-4 right-4 font-mono text-xs text-white bg-cc-green px-3 py-1.5 rounded-lg font-bold">FEATURED</span>
              </div>
              {/* Content */}
              <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center">
                <span className="font-mono text-[10px] text-cc-gray/40 tracking-wider block mb-3">// featured project</span>
                <h3 className="font-bold text-2xl text-cc-black mb-4 font-serif">{featured.title}</h3>
                <p className="text-cc-gray text-[15px] leading-relaxed mb-6">{featured.desc}</p>
                <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center text-cc-green text-sm font-bold hover:text-cc-green-dark transition-all duration-300 group/link w-max">
                  View Project Details
                  <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gridProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col bg-white rounded-2xl overflow-hidden border border-cc-green/8 group transform transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-cc-green/20 hover:shadow-xl hover:shadow-cc-green/5 hover:-translate-y-1 ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${(index % 3) * 150 + 200}ms` }}
            >
              <div className="w-full h-[180px] bg-gradient-to-br from-cc-green-50 to-cc-yellow-50 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04] font-mono text-[9px] text-cc-green leading-relaxed p-3 overflow-hidden">
                  <p>{'import { choco } from "core";'}</p>
                  <p>{'const config = { mode: "build" };'}</p>
                  <p>{'export default choco(config);'}</p>
                </div>
                <div className="relative z-10 w-14 h-14 rounded-xl bg-white/80 border border-cc-green/15 flex items-center justify-center group-hover:shadow-[0_0_25px_rgba(46,125,50,0.1)] transition-all duration-500">
                  <svg className="w-7 h-7 text-cc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <span className="absolute top-3 left-3 font-mono text-[10px] text-cc-green/40 bg-white/70 px-2 py-1 rounded-md">// {project.tag}</span>
                <span className="absolute top-3 right-3 font-mono text-[10px] text-cc-gray/30 bg-white/70 px-2 py-1 rounded-md">#{String(project.id).padStart(2,'0')}</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-cc-gray mb-3 leading-relaxed flex-grow">{project.desc}</p>
                <h3 className="font-bold text-cc-black text-base mb-3 font-serif">{project.title}</h3>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-cc-green text-[13px] font-semibold hover:text-cc-green-dark mt-auto inline-block transition-all duration-300 group-hover:translate-x-1">
                  View Project Details →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="border border-cc-green/30 text-cc-green font-medium text-sm px-6 py-2.5 rounded-lg hover:bg-cc-green hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center mx-auto space-x-2 group"
          >
            <span>{isExpanded ? 'Show Less' : 'View All Projects'}</span>
            <svg className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-[-90deg]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurWorks;