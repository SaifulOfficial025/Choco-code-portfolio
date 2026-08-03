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
    name: "Apurbo Kumar das", 
    role: "Webflow developer", 
    imgUrl: "/apurbo.jpeg" 
  },
  { 
    name: "Rimon Islam", 
    role: "UI/UX Designer", 
    imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop" 
  },
  { 
    name: "Rafsan Munnaf", 
    role: "AI Engineer", 
    imgUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop" 
  },
  { 
    name: "Tanvir Ahmed", 
    role: "Backend Developer", 
    imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop" 
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

        <div className="mt-10">
          <SocialCards cards={teamMembers} />
        </div>
      </div>
    </section>
  );
}

export default Ourteam;