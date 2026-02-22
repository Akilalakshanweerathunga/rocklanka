import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

import SEO from '../components/SEO/SEO';

const About: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-burnt selection:text-white overflow-x-hidden">
      <SEO
        title="About Us | RockLanka Tours"
        description="Discover the story behind RockLanka Tours — pioneers of quiet luxury travel in Sri Lanka, crafting unforgettable experiences since 2010."
        url="https://rocklankatours.com/about"
        image="https://rocklankatours.com/assets/images/logo/logo.png"
        keywords="RockLanka, Sri Lanka travel, luxury tours, about us, quiet luxury"
      />

      <Navbar isScrolled={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2070&auto=format&fit=crop" 
            alt="About Us Hero" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-forest/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-serif text-sand mb-6">About Us</h1>
          <p className="text-sand/80 text-xl max-w-2xl mx-auto">
            Pioneers of quiet luxury travel in Sri Lanka since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">The RockLanka Story</span>
              <h2 className="text-4xl md:text-5xl font-serif text-forest mb-6">Crafting Timeless Island Narratives</h2>
              <p className="text-forest/70 text-lg leading-relaxed mb-6">
                Born from an undying passion for the untamed beauty of Sri Lanka, RockLanka was founded with a singular vision: to reveal the island's best-kept secrets to discerning travelers who seek more than just a vacation.
              </p>
              <p className="text-forest/70 text-lg leading-relaxed mb-6">
                We move beyond the generic. Our legacy is defined by exclusive access to hidden gems, expert local knowledge, and an unwavering commitment to the "Quiet Luxury" that defines our motherland.
              </p>
              <p className="text-forest/70 text-lg leading-relaxed">
                Every journey we craft is a story waiting to be told—a narrative of ancient kingdoms, pristine wilderness, and the warm hospitality that makes Sri Lanka truly unforgettable.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://i.ibb.co/vCB7R8NN/anupa-uthsara-5-Np6-Zs-LDVIM-unsplash.jpg" 
                alt="Sri Lanka Heritage" 
                className="rounded-2xl shadow-2xl"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-8 -left-8 bg-burnt text-sand p-8 rounded-xl">
                <div className="text-4xl font-serif">15+</div>
                <div className="text-xs uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-12 bg-forest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">What We Stand For</span>
            <h2 className="text-4xl font-serif text-sand">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quiet Luxury',
                description: 'We believe in understated elegance. Our experiences prioritize quality over quantity, creating moments of genuine wonder without pretense.',
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              },
              {
                title: 'Authentic Connections',
                description: 'We facilitate genuine encounters—with local communities, ancient traditions, and untouched nature. Travel that transforms, not just transacts.',
                icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              },
              {
                title: 'Sustainable Stewardship',
                description: "Responsible travel is not optional, it's essential. We partner with eco-conscious properties and support local conservation efforts.",
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-sand/5 p-8 rounded-2xl border border-sand/10">
                <div className="w-14 h-14 bg-burnt/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-burnt" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-sand mb-4">{value.title}</h3>
                <p className="text-sand/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-12 bg-sand/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Years of Heritage' },
              { number: '500+', label: 'Curated Journeys' },
              { number: '120+', label: 'Hidden Gems Discovered' },
              { number: '98%', label: 'Return Guests' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl md:text-6xl font-serif text-burnt mb-2">{stat.number}</div>
                <div className="text-forest/60 uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-sand mb-6">Join Our Journey</h2>
          <p className="text-sand/70 text-lg mb-8">
            Let us share the hidden wonders of Sri Lanka with you.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-burnt text-sand rounded-full text-lg hover:bg-sand hover:text-forest transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
