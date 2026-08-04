import React, { useEffect, useRef, useState } from 'react';

const allProjects = [
  { 
    id: 1, 
    title: "Pickleball Arena Booking & Membership Website Design", 
    desc: "I successfully designed and developed this modern pickleball arena and membership website with a strong focus on user experience and business conversion. I created a clear and engaging structure that allows visitors to explore arena locations, book courts, compare membership options, discover coaching programmes, and join community events easily. The bold sports-inspired design, clear call-to-action sections, smooth navigation, and mobile-friendly layout help the brand attract more players and turn visitors into active members.", 
    tag: "booking.sports",
    imgUrl: "/Live-1.jpg",
    link: "https://gopickle.com.au/"
  },
  { 
    id: 2, 
    title: "Mobility Scooter & Wheelchair Rental Marketplace Website", 
    desc: "I successfully created this professional camera equipment rental website with a strong focus on easy browsing and a smooth booking experience. I organized cameras, lenses, lighting, video gear, and accessories into clear categories, allowing customers to quickly compare daily rental prices and reserve the right equipment. The modern responsive layout, product-focused presentation, simple navigation, and clear booking actions make the platform reliable, user-friendly, and conversion-focused.", 
    tag: "rental.marketplace",
    imgUrl: "/Live-2.jpg",
    link: "https://24hrsscooters.com/"
  },
  { 
    id: 3, 
    title: "Professional Camera Gear Rental & Booking Website", 
    desc: "I successfully created this professional camera equipment rental website with a strong focus on easy product discovery and a smooth booking experience. I organized cameras, lenses, cinema gear, studio lighting, and accessories into clear categories, allowing photographers and content creators to quickly explore equipment, compare rental prices, and reserve the right gear online. The clean, responsive layout, product-focused presentation, clear booking actions, and simple rental process make the platform professional, reliable, and conversion-focused.", 
    tag: "rental.booking",
    imgUrl: "/Live-3.jpg",
    link: "https://hire.cameraelectronic.com.au/"
  },
  { 
    id: 4, 
    title: "Laboratory Research Chemicals & Peptide Supply Website", 
    desc: "I successfully created this professional scientific research supply website with a strong focus on credibility, product discovery, and conversion. I organized laboratory reagents, synthesized peptides, and molecular matrices into clear research categories, making it easy for laboratories and scientific professionals to explore products, review purity information, select variants, and request quotations. The clean product presentation, batch-verification messaging, responsive structure, and clear research-use notices make the platform reliable, user-friendly, and commercially effective.", 
    tag: "ecommerce.medical",
    imgUrl: "/Live-4.jpg",
    link: "https://biolabseurope.com/"
  },
  { 
    id: 5, 
    title: "Pardna Community Savings Tracking & Management Platform", 
    desc: "I successfully designed and developed this modern community savings management platform to make traditional Pardna groups easier to organize and track. I created a clear and user-friendly experience for managing members, recording contributions, monitoring payment progress, and maintaining transparent payout schedules. The responsive interface, organized financial records, and trust-focused design help reduce confusion, improve accountability, and provide users with a smoother and more reliable savings-circle experience.", 
    tag: "management.finance",
    imgUrl: "/Live-5.jpg",
    link: "https://pardnabook.com/home"
  },
  { 
    id: 6, 
    title: "Cleaning Service Marketplace & Booking Platform", 
    desc: "I successfully designed and developed this modern cleaning service marketplace with a strong focus on trust, convenience, and a seamless booking experience. I created a clear user journey that allows customers to select a service, choose a suitable time, connect with verified local providers, and receive updates throughout the process. The responsive interface, transparent service flow, in-platform communication, and job-completion verification make the platform reliable, user-friendly, and conversion-focused.", 
    tag: "booking.services",
    imgUrl: "/Live-6.jpg",
    link: "https://hey-ineed.com/"
  },
  { 
    id: 7, 
    title: "Modern Kidswear & Children’s Fashion E-commerce Website", 
    desc: "I successfully created this modern kidswear website with a strong focus on attractive product presentation, easy shopping, and a parent-friendly user experience. I organized the children’s clothing collections in a clear and engaging way, helping customers quickly discover suitable styles and explore product options. The responsive layout, playful visual direction, simple navigation, and conversion-focused shopping flow make the website professional, trustworthy, and effective for growing the brand online.", 
    tag: "ecommerce.fashion",
    imgUrl: "/Live-7.jpg",
    link: "https://hadikid.com/"
  }
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
              <div className="lg:w-3/5 h-[300px] lg:h-auto relative overflow-hidden group/image">
                <img src={featured.imgUrl} alt={featured.title} className="w-full h-full object-cover lg:absolute lg:inset-0 transition-transform duration-700 group-hover/image:scale-105" />
                <span className="absolute top-4 left-4 font-mono text-xs text-cc-green/80 bg-white/90 px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-sm">// {featured.tag}</span>
                <span className="absolute top-4 right-4 font-mono text-xs text-white bg-cc-green px-3 py-1.5 rounded-lg font-bold shadow-md">FEATURED</span>
              </div>
              {/* Content */}
              <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center">
                <span className="font-mono text-[10px] text-cc-gray/40 tracking-wider block mb-3">// featured project</span>
                <h3 className="font-bold text-2xl text-cc-black mb-4 font-serif line-clamp-2">{featured.title}</h3>
                <p className="text-cc-gray text-[15px] leading-relaxed mb-6 line-clamp-5">{featured.desc}</p>
                <a href={featured.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-cc-green text-sm font-bold hover:text-cc-green-dark transition-all duration-300 group/link w-max mt-auto">
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
              <div className="w-full h-[220px] relative flex items-center justify-center overflow-hidden group/image">
                <img src={project.imgUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110" />
                <span className="absolute top-3 left-3 font-mono text-[10px] text-cc-green/80 bg-white/90 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm">// {project.tag}</span>
                <span className="absolute top-3 right-3 font-mono text-[10px] text-cc-gray/80 bg-white/90 px-2 py-1 rounded-md shadow-sm backdrop-blur-sm">#{String(project.id).padStart(2,'0')}</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-cc-gray mb-3 leading-relaxed flex-grow line-clamp-3">{project.desc}</p>
                <h3 className="font-bold text-cc-black text-base mb-3 font-serif line-clamp-2">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cc-green text-[13px] font-semibold hover:text-cc-green-dark mt-auto inline-block transition-all duration-300 group-hover:translate-x-1">
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
            <span>{isExpanded ? 'Show Less' : 'View More Projects'}</span>
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