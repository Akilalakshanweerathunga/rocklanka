
import React from 'react';
import { LOGO } from '../assets/images';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest border-t border-sand/5 pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <img 
                src={LOGO.main} 
                alt="RockLanka Tours" 
                className="h-12 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-sand/50 text-xl font-serif max-w-sm mb-12">
              The soul of Sri Lanka, <br />
              captured in bespoke silence.
            </p>
            <div className="flex gap-6">
              {['Instagram', 'LinkedIn', 'Vimeo'].map(social => (
                <a key={social} href="#" className="text-xs uppercase tracking-[0.2em] text-sand/40 hover:text-burnt transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sand text-sm font-bold uppercase tracking-widest mb-8">Explore</h4>
            <ul className="space-y-4 text-sand/40 text-sm">
              <li><a href="#" className="hover:text-sand transition-colors">The Highlands</a></li>
              <li><a href="#" className="hover:text-sand transition-colors">Coastal Retreats</a></li>
              <li><a href="#" className="hover:text-sand transition-colors">Wild Expeditions</a></li>
              <li><a href="#" className="hover:text-sand transition-colors">Private Villas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sand text-sm font-bold uppercase tracking-widest mb-8">Journal</h4>
            <ul className="space-y-4 text-sand/40 text-sm">
              <li><a href="#" className="hover:text-sand transition-colors">Travel Log</a></li>
              <li><a href="#" className="hover:text-sand transition-colors">Conservation</a></li>
              <li><a href="#" className="hover:text-sand transition-colors">Our History</a></li>
              <li><a href="#" className="hover:text-sand transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-sand/5 text-[10px] text-sand/30 uppercase tracking-[0.3em]">
          <div>© 2024 RockLanka Tours. All rights reserved.</div>
          <div className="flex gap-8 items-center">
            <a href="#" className="hover:text-sand">Privacy</a>
            <a href="#" className="hover:text-sand">Terms</a>
            <a href="#" className="hover:text-sand">Sustainability</a>
            <span className="text-sand/20">|</span>
            <a 
              href="https://www.codeforestdigital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-burnt transition-colors"
            >
              DEVELOPED BY CODEFOREST DIGITAL
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
