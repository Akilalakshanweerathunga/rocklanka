
import React from 'react';
import { HERO } from '../assets/images';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Video Background Placeholder - using high-res image with subtle zoom animation */}
      <div className="absolute inset-0 z-0 scale-105 animate-[pulse_10s_ease-in-out_infinite]">
        <img 
          src={HERO.coastline} 
          alt="Sri Lankan Coastline" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-forest/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/30 via-transparent to-forest" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <span className="block text-burnt uppercase tracking-[0.4em] text-sm mb-6 animate-fade-in">Established in the Highlands</span>
        <h1 className="text-5xl md:text-8xl font-serif text-sand mb-10 leading-tight">
          Where Nature <br /> 
          <span className="italic">Meets Elegance</span>
        </h1>
        
        {/* Glassmorphism Search Bar */}
        <div className="glass max-w-3xl mx-auto rounded-full p-2 flex flex-col md:flex-row items-center gap-2">
          <div className="flex-1 flex items-center px-6 gap-3 border-b md:border-b-0 md:border-r border-white/10 w-full py-2">
            <svg className="w-5 h-5 text-sand/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Where should we explore?" 
              className="bg-transparent border-none focus:ring-0 text-sand placeholder:text-sand/40 w-full text-lg"
            />
          </div>
          <div className="flex-1 flex items-center px-6 gap-3 w-full py-2">
            <svg className="w-5 h-5 text-sand/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sand/40 text-lg">Select Your Season</span>
          </div>
          <button className="w-full md:w-auto px-8 py-4 bg-burnt text-white rounded-full hover:bg-burnt/80 transition-all font-semibold shadow-lg">
            Search
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-sand/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
