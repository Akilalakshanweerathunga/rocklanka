
import React from 'react';
import { LEGACY_JOURNEY } from '../constants.tsx';

const Storyline: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">Interactive Storytelling</span>
        <h2 className="text-4xl md:text-6xl font-serif text-sand">A Day in the Life</h2>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-sand/10 hidden md:block" />

        {LEGACY_JOURNEY.map((item, idx) => (
          <div key={item.day} className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 mb-32 last:mb-0 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1 w-full">
              <div className="relative group overflow-hidden rounded-2xl aspect-video md:aspect-[4/3] shadow-2xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover parallax-zoom"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-6 left-6 w-12 h-12 glass rounded-full flex items-center justify-center text-sand font-serif text-xl border border-sand/30">
                  {item.day}
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-serif text-sand mb-6">{item.title}</h3>
              <p className="text-sand/70 text-lg leading-relaxed mb-8 italic">
                "{item.description}"
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="h-px w-8 bg-burnt" />
                <span className="text-burnt uppercase tracking-tighter font-semibold text-xs">Exclusively Curated</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Storyline;
