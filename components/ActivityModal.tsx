import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Activity {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  duration: string;
  intensity: string;
  fullDescription?: string;
  highlights?: string[];
  included?: string[];
  whatToBring?: string[];
}

interface ActivityModalProps {
  activity: Activity | null;
  isOpen: boolean;
  onClose: () => void;
}

const ActivityModal: React.FC<ActivityModalProps> = ({ activity, isOpen, onClose }) => {
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

  if (!isOpen || !activity) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-forest/80 backdrop-blur-sm animate-fade-in" />
      
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-forest hover:bg-burnt hover:text-white transition-colors shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative h-72 md:h-96">
          <img 
            src={activity.image} 
            alt={activity.title} 
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="inline-block px-4 py-1 bg-burnt text-white text-sm rounded-full mb-4">
              {activity.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white">{activity.title}</h2>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-forest/10">
            <div className="flex items-center gap-2 text-forest/70">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{activity.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-forest/70">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>{activity.intensity}</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif text-forest mb-4">Overview</h3>
            <p className="text-forest/70 leading-relaxed">{activity.description}</p>
          </div>

          {activity.fullDescription && (
            <div className="mb-8">
              <h3 className="text-xl font-serif text-forest mb-4">Experience Details</h3>
              <p className="text-forest/70 leading-relaxed">{activity.fullDescription}</p>
            </div>
          )}

          {activity.highlights && activity.highlights.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-serif text-forest mb-4">Highlights</h3>
              <div className="flex flex-wrap gap-3">
                {activity.highlights.map((item, idx) => (
                  <span key={idx} className="px-4 py-2 bg-sand text-forest rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activity.included && activity.included.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-serif text-forest mb-4">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {activity.included.map((item, idx) => (
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

          {activity.whatToBring && activity.whatToBring.length > 0 && (
            <div className="mb-8 p-6 bg-sand rounded-2xl">
              <h3 className="text-lg font-serif text-forest mb-4">What to Bring</h3>
              <div className="flex flex-wrap gap-3">
                {activity.whatToBring.map((item, idx) => (
                  <span key={idx} className="text-forest/70 text-sm">
                    • {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-4 pt-8 border-t border-forest/10">
            <Link 
              to="/tailor-made"
              className="flex-1 text-center px-8 py-4 bg-burnt text-white rounded-full hover:bg-forest transition-colors font-medium"
              onClick={onClose}
            >
              Book This Activity
            </Link>
            <Link 
              to="/contact"
              className="flex-1 text-center px-8 py-4 border-2 border-forest text-forest rounded-full hover:bg-forest hover:text-white transition-colors font-medium"
              onClick={onClose}
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;
