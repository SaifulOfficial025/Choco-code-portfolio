import React from 'react';
import SocialCards from '../../components/ui/card-fan-carousel';

const teamMembers = [
  { 
    name: "Shafiur Rahman", 
    role: "Wordpress developer", 
    imgUrl: "/shafiur.jpeg" 
  },
  { 
    name: "Md Mustakin Mahi", 
    role: "Wordpress developer", 
    imgUrl: "/mustakin.jpeg" 
  },
  { 
    name: "Md Istiyak Ahmmed", 
    role: "Wordpress developer", 
    imgUrl: "/istiyak.jpeg" 
  },
  { 
    name: "Nafizur Rahman", 
    role: "UI/UX Designer", 
    imgUrl: "/Choco-Code-Profile-Picture - Copy.jpg" 
  },
  { 
    name: "Apurbo Kumar das", 
    role: "Webflow developer", 
    imgUrl: "/apurbo.jpeg" 
  },
  { 
    name: "Elias Mia", 
    role: "Sr. UI/UX Designer", 
    imgUrl: "/Elias Mia.jpg" 
  },
  { 
    name: "Sajjad Ullah", 
    role: "Jr. AI Developer", 
    imgUrl: "/Sajjad Ullah.jpg" 
  }
];

function Ourteam() {
  return (
    <section id="teams" className="w-full py-24 overflow-hidden relative">
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

        <div className="mt-10 hidden lg:block">
          <SocialCards cards={teamMembers} />
        </div>

        {/* MOBILE LAYOUT (2 Column Grid) */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:hidden">
          {teamMembers.map((card, index) => {
            const isNafizur = card.name === "Nafizur Rahman";
            return (
              <div 
                key={index} 
                className={`relative w-full overflow-hidden rounded-2xl shadow-xl border border-black/10 group ${isNafizur ? 'order-first col-span-2 aspect-[5/6] sm:aspect-[4/3]' : 'aspect-[3/4]'}`}
              >
                <img 
                  src={card.imgUrl} 
                  loading="lazy" 
                  alt={card.name} 
                  className={`absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-110 ${isNafizur ? 'object-top' : ''}`} 
                />
                <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 text-center flex flex-col justify-end ${isNafizur ? 'p-5 pt-16' : 'p-3 pt-10'}`}>
                  <p className={`text-white font-bold font-serif leading-tight mb-0.5 ${isNafizur ? 'text-lg' : 'text-sm'}`}>{card.name}</p>
                  <p className={`text-cc-yellow font-mono ${isNafizur ? 'text-xs' : 'text-[9px] sm:text-[10px]'}`}>{card.role}</p>
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