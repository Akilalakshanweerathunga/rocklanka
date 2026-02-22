
import React from 'react';
import { ACTIVITIES } from '../constants.tsx';

const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[250px]">
      {ACTIVITIES.map((activity) => (
        <div 
          key={activity.id} 
          className={`relative group overflow-hidden rounded-3xl ${activity.span || ''}`}
        >
          <img 
            src={activity.image} 
            alt={activity.title} 
            className="w-full h-full object-cover parallax-zoom"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <span className="text-burnt uppercase tracking-widest text-xs font-bold mb-2 block">{activity.category}</span>
            <h3 className="text-2xl font-serif text-sand">{activity.title}</h3>
            <button className="mt-4 text-sm text-sand/0 group-hover:text-sand/100 transition-all duration-500 underline underline-offset-8">
              Discover Journey
            </button>
          </div>
          <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 glass rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
