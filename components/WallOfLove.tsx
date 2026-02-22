
import React from 'react';
import { TESTIMONIALS } from '../constants.tsx';

const WallOfLove: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <div>
          <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">Social Proof</span>
          <h2 className="text-4xl md:text-5xl font-serif text-sand">Wall of Love</h2>
        </div>
        <div className="flex gap-4">
          <div className="w-12 h-12 glass rounded-full flex items-center justify-center cursor-pointer hover:bg-burnt/20 transition-colors">
            <svg className="w-5 h-5 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="w-12 h-12 glass rounded-full flex items-center justify-center cursor-pointer hover:bg-burnt/20 transition-colors">
            <svg className="w-5 h-5 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="glass rounded-2xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500">
            <div className="aspect-square overflow-hidden relative group">
              <img src={t.image} alt={t.user} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-sand/20" />
                <div>
                  <div className="text-sand font-semibold text-sm">{t.user}</div>
                  <div className="text-burnt text-xs">{t.handle}</div>
                </div>
              </div>
              <p className="text-sand/70 text-sm leading-relaxed mb-4 italic">
                "{t.content}"
              </p>
              <div className="flex flex-wrap gap-2">
                {t.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-sand/40 uppercase tracking-widest font-bold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WallOfLove;
