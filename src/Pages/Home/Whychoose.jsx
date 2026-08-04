import React from 'react';
import SkewCards from '../../components/ui/gradient-card-showcase';
import { Award, Target, Clock } from 'lucide-react';

const whyChooseCards = [
  {
    title: 'Expertise & Experience',
    desc: 'Your go-to tech partner on Fiverr, delivering custom website, mobile application, wordpress innovation worldwide. We bring 5+ years of deep technical expertise to every project.',
    gradientFrom: '#4ade80',
    gradientTo: '#15803d',
    icon: Award
  },
  {
    title: '100% Client Satisfaction',
    desc: 'Proven track record of consistently exceeding client expectations with top-quality app, web and wordpress solutions tailored to your goals.',
    gradientFrom: '#fde047',
    gradientTo: '#eab308',
    icon: Target
  },
  {
    title: 'Timely Delivery',
    desc: 'Committed to delivering high-quality app, web and wordpress projects on schedule—every time, without compromising on performance or precision.',
    gradientFrom: '#bbf7d0',
    gradientTo: '#22c55e',
    icon: Clock
  },
];

function Whychoose() {
  return (
    <section className="w-full py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-aligned header */}
        <div className="max-w-xl mb-6">
          <p className="text-cc-green font-mono text-sm mb-4 tracking-wide">{'<'} Why Choose Us {'/>'}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-cc-black mb-4 tracking-tight font-serif">
            Your Trusted <span className="text-gradient-choco">AI Partner</span> on Fiverr
          </h2>
          <p className="text-cc-gray text-sm md:text-base">
            With over 5 years of experience in AI development and 200+ satisfied clients, we deliver exceptional results.
          </p>
        </div>

        {/* Skew Cards Showcase */}
        <SkewCards cards={whyChooseCards} />

      </div>
    </section>
  );
}

export default Whychoose;