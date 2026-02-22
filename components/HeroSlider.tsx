import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { HERO_SLIDER } from '../assets/images';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: HERO_SLIDER.natureElegance,
    title: 'Where Nature Meets Elegance',
    subtitle: 'Quiet Luxury Redefined',
    description: 'Discover the untamed beauty of Sri Lanka through meticulously crafted journeys that reveal the soul of the island.',
    ctaText: 'Explore Journeys',
    ctaLink: '/itineraries'
  },
  {
    id: 2,
    image: HERO_SLIDER.culturalTriangle,
    title: 'Ancient Wonders Await',
    subtitle: 'Cultural Triangle',
    description: 'Walk through millennia of history at Sigiriya, Polonnaruwa, and the sacred cities of ancient Sri Lanka.',
    ctaText: 'Discover Destinations',
    ctaLink: '/destinations'
  },
  {
    id: 3,
    image: HERO_SLIDER.wildlifeSafari,
    title: 'Wildlife Encounters',
    subtitle: 'Safari Experiences',
    description: 'Track leopards in Yala, witness elephants in Udawalawe, and experience the finest wildlife adventures.',
    ctaText: 'View Activities',
    ctaLink: '/activities'
  },
  {
    id: 4,
    image: HERO_SLIDER.teaCountry,
    title: 'Mist & Mountains',
    subtitle: 'Tea Country Retreat',
    description: 'Escape to the highlands where emerald tea plantations meet misty peaks and colonial charm.',
    ctaText: 'Plan Your Trip',
    ctaLink: '/tailor-made'
  },
  {
    id: 5,
    image: HERO_SLIDER.coastalParadise,
    title: 'Scenic Train Journeys',
    subtitle: 'Hill Country Adventure',
    description: 'Experience the magical train ride through misty mountains and emerald tea plantations, one of the most beautiful train journeys in the world.',
    ctaText: 'Explore More',
    ctaLink: '/destinations'
  }
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [currentSlide, isAnimating]);

  const goToNext = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-105' 
                : 'opacity-0 scale-100'
            }`}
            style={{
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-forest/50 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-forest/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="max-w-3xl">
                  {/* Subtitle */}
                  <div 
                    className={`transform transition-all duration-700 delay-200 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                  >
                    <span className="inline-block px-4 py-1 bg-burnt/20 text-burnt text-sm tracking-[0.3em] uppercase mb-6 backdrop-blur-sm">
                      {slide.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 
                    className={`text-5xl md:text-7xl lg:text-8xl font-serif text-sand mb-6 leading-tight transform transition-all duration-700 delay-300 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-12 opacity-0'
                    }`}
                  >
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p 
                    className={`text-sand/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed transform transition-all duration-700 delay-500 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                  >
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <div 
                    className={`transform transition-all duration-700 delay-700 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                  >
                    <Link 
                      to={slide.ctaLink}
                      className="inline-flex items-center gap-3 px-10 py-4 bg-burnt text-sand rounded-full text-lg font-medium hover:bg-sand hover:text-forest transition-all duration-300 group shadow-xl hover:shadow-2xl"
                    >
                      {slide.ctaText}
                      <svg 
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute z-20 top-1/2 -translate-y-1/2 left-4 md:left-8">
        <button 
          onClick={goToPrev}
          className="w-14 h-14 bg-sand/10 backdrop-blur-md rounded-full flex items-center justify-center text-sand hover:bg-burnt hover:text-sand transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute z-20 top-1/2 -translate-y-1/2 right-4 md:right-8">
        <button 
          onClick={goToNext}
          className="w-14 h-14 bg-sand/10 backdrop-blur-md rounded-full flex items-center justify-center text-sand hover:bg-burnt hover:text-sand transition-all duration-300 group"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div 
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'w-12 bg-burnt' 
                  : 'w-4 bg-sand/30 hover:bg-sand/50'
              }`}
            />
            <div 
              className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-burnt rounded-full transition-all duration-300 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute z-20 bottom-8 right-8 md:right-12 flex items-center gap-2 text-sand/50">
        <span className="text-2xl font-serif text-sand">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
        <span className="text-lg">/</span>
        <span className="text-lg">
          {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute z-20 bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="flex flex-col items-center gap-2 text-sand/30">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
