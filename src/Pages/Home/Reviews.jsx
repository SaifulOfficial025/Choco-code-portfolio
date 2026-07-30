import React from 'react';

const reviewsCol1 = [
  { id: 1, user: "peterdenkuae", text: "Gute Zusammenarbeit und sehr lösungsorientiert. War immer erreichbar.", name: "Peter Denkuae", role: "CEO", rating: 5 },
  { id: 2, user: "Gustavo Amoros", text: "Very fast and very understood the project.. Go On !!", name: "GUSTAVOAMOROS", role: "CEO, LemonWares Branding", rating: 5 },
  { id: 3, user: "Andrew Lawrenc", text: "His communication is clear and timely.", name: "Andrew Lawrenc", role: "CEO", rating: 5 }
];

const reviewsCol2 = [
  { id: 4, user: "Andrew Lawrenc", text: "His communication is clear and timely, and he tackles challenges head-on with practical solutions. It's been a smooth and reliable partnership, and I'm happy to keep working with Gazi on future projects.", name: "Andrew Lawrenc", role: "CEO", rating: 5 },
  { id: 5, user: "daniel_a_gwin", text: "Throughout the process, he showed remarkable attentiveness and a positive approach. Looking forward to future projects together.", name: "Daniel a Gwin", role: "CEO/Founder", rating: 5 },
  { id: 6, user: "Sarah Jenkins", text: "Excellent work, delivered before the deadline. Highly recommended! Will definitely hire again.", name: "Sarah Jenkins", role: "Project Manager", rating: 5 }
];

const StarRating = () => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-cc-yellow" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-2xl p-7 border border-cc-green/8 flex flex-col justify-between w-full min-h-[240px] transform transition-all duration-300 hover:-translate-y-1 hover:border-cc-green/20 hover:shadow-xl hover:shadow-cc-green/10 cursor-default">
    <div>
      <p className="text-cc-gray/50 text-xs font-mono mb-2">@{review.user}</p>
      <span className="text-5xl text-cc-green/15 font-serif leading-3 block mb-4 mt-2">"</span>
      <p className="text-cc-gray text-sm leading-relaxed mb-6">{review.text}</p>
    </div>
    <div className="flex items-end justify-between mt-auto">
      <div>
        <h4 className="font-bold text-cc-black text-[15px] font-serif">{review.name}</h4>
        <p className="text-cc-gray/50 text-[11px] mt-0.5 uppercase tracking-wide font-mono">{review.role}</p>
      </div>
      <StarRating />
    </div>
  </div>
);

function Reviews() {
  return (
    <section className="w-full py-24 overflow-hidden relative">
      <style>
        {`
          @keyframes slideLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333333%); } }
          @keyframes slideRight { 0% { transform: translateX(-33.333333%); } 100% { transform: translateX(0); } }
          .animate-slide-left { animation: slideLeft 30s linear infinite; }
          .animate-slide-right { animation: slideRight 30s linear infinite; }
          .pause-on-hover:hover { animation-play-state: paused; }
        `}
      </style>

      {/* Top Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[240px] text-cc-green/5 leading-none select-none z-0 font-serif">"</span>
          
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-cc-green font-mono text-sm mb-4 tracking-wide">{'<'} Testimonials {'/>'}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-cc-black leading-[1.1] mb-6 tracking-tight font-serif">
              What Our <br className="hidden sm:block" />
              <span className="text-gradient-choco">Clients Say</span>
            </h2>
            
            <p className="text-cc-gray text-[15px] mb-8 leading-relaxed max-w-lg">
              We are a group of professionals who are passionate about what we do. Trusted Worldwide | Get in touch with our team and become as happy as our clients.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-[13px] text-cc-black/70 font-semibold mb-8">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-cc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Bangladesh</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-cc-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>English, Bengali</span>
              </div>
              <div className="flex items-center space-x-2 text-cc-black font-extrabold">
                <svg className="w-4 h-4 text-cc-yellow" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span>4.9/5 <span className="text-gray-300 mx-1 font-normal">|</span> 250+ Clients</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-2">
              <button className="shimmer-btn bg-gradient-to-r from-cc-green to-cc-green-light text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 text-sm shadow-lg shadow-cc-green/20 hover:shadow-cc-green/40 hover:-translate-y-0.5 flex items-center">
                Read More Reviews 
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <button className="flex items-center text-cc-green text-sm font-bold hover:text-cc-green-dark transition-colors group">
                Contact Us 
                <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Marquee Rows */}
      <div className="overflow-hidden relative w-full flex flex-col justify-center gap-6 py-4">
        {/* Left/Right Fade Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Row 1 - Slides Left */}
        <div className="flex w-max gap-6 animate-slide-left pause-on-hover px-3">
          {[...reviewsCol1, ...reviewsCol1, ...reviewsCol1].map((review, idx) => (
            <div key={`row1-${idx}`} className="w-[320px] md:w-[400px] flex-shrink-0">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
        
        {/* Row 2 - Slides Right */}
        <div className="flex w-max gap-6 animate-slide-right pause-on-hover px-3">
          {[...reviewsCol2, ...reviewsCol2, ...reviewsCol2].map((review, idx) => (
            <div key={`row2-${idx}`} className="w-[320px] md:w-[400px] flex-shrink-0">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Client Logos Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-cc-black leading-[1.15] mb-6 tracking-tight font-serif">
              We serve over 250+ <br className="hidden lg:block" /> foreign clients
            </h2>
            <p className="text-cc-gray text-[17px] leading-relaxed max-w-md">
              Connect with Choco Code using your favourite tools that you use daily and keep things on track.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-10 items-center justify-items-center">
            {['NEGOCIO CAPITAL', 'YOMIMA', 'WAYLEARN', 'Bestowe Gifts', 'MARTIN TRAVEL', 'Divine Echo'].map((name, i) => (
              <div key={i} className="bg-white rounded-xl px-4 py-6 w-full flex items-center justify-center border border-cc-green/8 hover:border-cc-green/25 hover:shadow-lg hover:shadow-cc-green/5 transition-all duration-300 cursor-default group">
                <span className="text-cc-gray/40 text-xs font-bold tracking-wider group-hover:text-cc-green transition-colors duration-300 text-center font-mono">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;