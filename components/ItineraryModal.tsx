import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Itinerary {
  id: string;
  title: string;
  duration: string;
  description: string;
  image: string;
  highlights: string[];
  price: string;
  fullDescription?: string;
  included?: string[];
  dayByDay?: { day: number; title: string; description: string }[];
}

interface ItineraryModalProps {
  itinerary: Itinerary | null;
  isOpen: boolean;
  onClose: () => void;
}

const ItineraryModal: React.FC<ItineraryModalProps> = ({ itinerary, isOpen, onClose }) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !itinerary) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-forest/80 backdrop-blur-sm animate-fade-in" />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-forest hover:bg-burnt hover:text-white transition-colors shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero Image */}
        <div className="relative h-72 md:h-96">
          <img 
            src={itinerary.image} 
            alt={itinerary.title} 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="inline-block px-4 py-1 bg-burnt text-white text-sm rounded-full mb-4">
              {itinerary.duration}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white">{itinerary.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Price & Quick Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-forest/10">
            <div>
              <span className="text-sm text-forest/50 uppercase tracking-wider">Starting From</span>
              <div className="text-3xl font-serif text-burnt">{itinerary.price}</div>
            </div>
            <div className="flex-1" />
            <Link 
              to="/contact"
              className="px-8 py-3 bg-forest text-white rounded-full hover:bg-burnt transition-colors"
              onClick={onClose}
            >
              Book Now
            </Link>
            <Link 
              to="/tailor-made"
              className="px-8 py-3 border border-forest text-forest rounded-full hover:bg-forest hover:text-white transition-colors"
              onClick={onClose}
            >
              Customize
            </Link>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-serif text-forest mb-4">Overview</h3>
            <p className="text-forest/70 leading-relaxed">{itinerary.description}</p>
          </div>

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="text-xl font-serif text-forest mb-4">Highlights</h3>
            <div className="flex flex-wrap gap-3">
              {itinerary.highlights.map((highlight, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-sand text-forest rounded-full text-sm"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Day by Day (if available) */}
          {itinerary.dayByDay && itinerary.dayByDay.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-serif text-forest mb-6">Day by Day Itinerary</h3>
              <div className="space-y-6">
                {itinerary.dayByDay.map((day, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-burnt text-white rounded-full flex items-center justify-center font-serif text-lg">
                      {day.day}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-forest mb-2">{day.title}</h4>
                      <p className="text-forest/70 text-sm">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Included (if available) */}
          {itinerary.included && itinerary.included.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-serif text-forest mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {itinerary.included.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-forest/70">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col md:flex-row gap-4 pt-8 border-t border-forest/10">
            <Link 
              to="/contact"
              className="flex-1 text-center px-8 py-4 bg-burnt text-white rounded-full hover:bg-forest transition-colors font-medium"
              onClick={onClose}
            >
              Enquire Now
            </Link>
            <Link 
              to="/tailor-made"
              className="flex-1 text-center px-8 py-4 border-2 border-forest text-forest rounded-full hover:bg-forest hover:text-white transition-colors font-medium"
              onClick={onClose}
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ItineraryModal;
