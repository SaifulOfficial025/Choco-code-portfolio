import React, { useEffect, useRef, useState } from 'react';

const allProjects = [
  {
    id: 1,
    title: "Nutra AI - Calorie Counter",
    desc: "Track meals easily—just snap a photo for instant nutrition insights.",
    imageAlt: "Nutra AI - Calorie Counter"
  },
  {
    id: 2,
    title: "Smarter Google Ads with AI",
    desc: "Optimize campaigns fast with AI insights, support, and automation tools.",
    imageAlt: "Smarter Google Ads with AI"
  },
  {
    id: 3,
    title: "Smarter Math Help with AI",
    desc: "AI-powered math tutoring for fast, fun, and effective learning.",
    imageAlt: "Smarter Math Help with AI"
  },
  {
    id: 4,
    title: "AI Session Planner",
    desc: "Plan sessions by sport, age, skill, theme—coach with ease.",
    imageAlt: "AI Session Planner"
  },
  {
    id: 5,
    title: "AI Content Generator",
    desc: "Generate high-quality blog posts and marketing copy in seconds.",
    imageAlt: "AI Content Generator"
  },
  {
    id: 6,
    title: "Vision AI Object Detection",
    desc: "Real-time object detection and classification for security cameras.",
    imageAlt: "Vision AI Object Detection"
  },
  {
    id: 7,
    title: "Crypto Trading Bot",
    desc: "Automated trading strategies using advanced machine learning models.",
    imageAlt: "Crypto Trading Bot"
  },
  {
    id: 8,
    title: "Virtual AI Assistant",
    desc: "A smart voice and text assistant for scheduling and reminders.",
    imageAlt: "Virtual AI Assistant"
  }
];

function OurWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility every time it crosses the threshold
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const displayedProjects = isExpanded ? allProjects : allProjects.slice(0, 4);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#3b82f6] font-semibold text-sm mb-4 tracking-wide">
            &lt;-- Our Work Sample --&gt;
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Visit <span className="text-[#3b82f6]">Our Projects</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base px-4 leading-relaxed">
            Explore a diverse portfolio of completed works that showcase our creativity, technical expertise, and commitment to client satisfaction. Each project reflects our passion for quality and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col bg-white rounded-lg border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)] overflow-hidden transform transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${(index % 4) * 150}ms` }}
            >
              {/* Image Placeholder */}
              <div className="w-full h-[220px] bg-[#eaedf0] relative flex items-start justify-start p-3 group">
                <div className="flex items-center space-x-1.5 text-gray-600 text-xs font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  <span className="truncate max-w-[180px]">{project.imageAlt}</span>
                </div>
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-4 leading-relaxed flex-grow">
                  {project.desc}
                </p>
                <h3 className="font-bold text-gray-900 text-base mb-3">
                  {project.title}
                </h3>
                <a href="#" onClick={(e) => e.preventDefault()} className="text-[#3b82f6] text-[13px] font-semibold hover:underline mt-auto inline-block transition-all">
                  View Project Details
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-4">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="border-2 border-[#a7e8f5] text-gray-700 font-medium text-sm px-6 py-2 rounded-lg hover:bg-[#f0fbff] hover:border-[#00cbe6] transition-all duration-300 shadow-sm flex items-center justify-center mx-auto space-x-2 group"
          >
            <span>{isExpanded ? 'Show Less' : 'View All Projects'}</span>
            <svg 
              className={`w-4 h-4 text-gray-500 group-hover:text-gray-700 transform transition-transform duration-300 ${isExpanded ? 'rotate-[-90deg]' : ''}`} 
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default OurWorks;