import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ItineraryModal from '../components/ItineraryModal';
import { ITINERARIES } from '../assets/images';

import ItinerariesSEO from '../components/SEO/ItinerariesSEO';

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

const itineraries: Itinerary[] = [
  {
    id: '1',
    title: 'The Cultural Triangle Explorer',
    duration: '7 Days / 6 Nights',
    description: 'Discover the ancient kingdoms of Sri Lanka, from Sigiriya to Polonnaruwa, with exclusive access to UNESCO World Heritage sites.',
    image: ITINERARIES.culturalTriangle,
    highlights: ['Sigiriya Rock Fortress', 'Polonnaruwa Ancient City', 'Dambulla Cave Temple', 'Anuradhapura Sacred City'],
    price: '$3,200',    fullDescription: 'Embark on an unforgettable journey through the heart of ancient Sri Lanka. This meticulously crafted itinerary takes you through the legendary Cultural Triangle, where centuries of history come alive. Experience private access to UNESCO World Heritage sites, stay in luxury eco-lodges, and discover the secrets of ancient civilizations.',
    included: ['Luxury accommodation', 'Private guided tours', 'All entrance fees', 'Airport transfers', 'Daily breakfast & dinner', 'Expert local guides'],
    dayByDay: [
      { day: 1, title: 'Arrival in Colombo', description: 'Welcome to Sri Lanka! Transfer to your luxury hotel in the Cultural Triangle area.' },
      { day: 2, title: 'Sigiriya Rock Fortress', description: 'Private dawn climb of Sigiriya followed by breakfast. Afternoon visit to Dambulla Cave Temple.' },
      { day: 3, title: 'Polonnaruwa Ancient City', description: 'Explore the medieval capital of Polonnaruwa, a UNESCO World Heritage site.' },
      { day: 4, title: 'Anuradhapura Sacred City', description: 'Visit the ancient capital and the sacred Sri Maha Bodhi tree.' },
      { day: 5, title: 'Village Experience', description: 'Traditional village tour with local lunch. Evening at your luxury villa.' },
      { day: 6, title: 'Mihintale & Departure Prep', description: 'Morning visit to Mihintale. Afternoon leisure and spa treatments.' },
      { day: 7, title: 'Departure', description: 'Transfer to airport with memories of a lifetime.' },
    ]
  },
  {
    id: '2',
    title: 'Tea Country & Highland Retreat',
    duration: '5 Days / 4 Nights',
    description: 'Immerse yourself in the misty mountains of Nuwara Eliya and experience the finest Ceylon tea plantations.',
    image: ITINERARIES.teaCountry,
    highlights: ['Nuwara Eliya', 'Tea Factory Visits', 'Horton Plains', 'Ella Nine Arches'],
    price: '$2,400',
    fullDescription: 'Escape to the breathtaking highlands of Sri Lanka, where emerald tea plantations meet misty peaks. Experience colonial charm, world-class tea, and the serenity of the hill country.',
    included: ['Boutique hotel stay', 'Tea factory tours', 'Scenic train ride', 'All transfers', 'Breakfast included'],
    dayByDay: [
      { day: 1, title: 'Arrival in Kandy', description: 'Transfer to Kandy, the cultural capital of Sri Lanka.' },
      { day: 2, title: 'Tea Country Journey', description: 'Scenic drive to Nuwara Eliya through tea plantations.' },
      { day: 3, title: 'Tea Factory & Horton Plains', description: 'Visit a tea factory and explore Horton Plains.' },
      { day: 4, title: 'Ella Adventure', description: 'Visit the Nine Arches Bridge and Ella rock views.' },
      { day: 5, title: 'Departure', description: 'Transfer to airport or continue your journey.' },
    ]
  },
  {
    id: '3',
    title: 'Wildlife Safari Adventure',
    duration: '6 Days / 5 Nights',
    description: 'Track leopards in Yala, witness elephants in Udawalawe, and experience the finest wildlife adventures.',
    image: ITINERARIES.wildlifeSafari,
    highlights: ['Yala National Park', 'Udawalawe', 'Leopard Tracking', 'Elephant Orphanage'],
    price: '$2,800',
    fullDescription: 'Sri Lanka is home to the highest leopard density in the world. This safari adventure takes you through Yala and Udawalawe for unforgettable wildlife encounters.',
    included: ['Luxury safari lodges', 'Morning & evening safaris', 'Expert trackers', 'All meals', 'Park entries'],
    dayByDay: [
      { day: 1, title: 'Arrival in Yala', description: 'Transfer to Yala and settle into your luxury safari lodge.' },
      { day: 2, title: 'Yala Safari - Morning', description: 'Dawn safari in Yala National Park.' },
      { day: 3, title: 'Yala Safari - Evening', description: 'Afternoon safari with spotlighting.' },
      { day: 4, title: 'Udawalawe', description: 'Transfer to Udawalawe and afternoon elephant safari.' },
      { day: 5, title: 'Elephant Orphanage', description: 'Visit the Elephant Orphanage and more wildlife.' },
      { day: 6, title: 'Departure', description: 'Transfer to airport with memories of wildlife.' },
    ]
  },
  {
    id: '4',
    title: 'Coastal Paradise Journey',
    duration: '8 Days / 7 Nights',
    description: 'From whale watching in Mirissa to the historic Galle Fort, experience the best of Sri Lanka\'s southern coast.',
    image: ITINERARIES.coastalParadise,
    highlights: ['Mirissa Whale Watching', 'Galle Fort', 'Stilt Fishing', 'Beach Villas'],
    price: '$3,500',
    fullDescription: 'Discover the pristine beaches and colonial charm of Sri Lanka\'s southern coast. From majestic whale watching to sunset dinners at Galle Fort.',
    included: ['Beach villa accommodation', 'Whale watching tour', 'Galle Fort guide', 'All transfers', 'Breakfast daily'],
    dayByDay: [
      { day: 1, title: 'Arrival in Colombo', description: 'Transfer to Mirissa beach villa.' },
      { day: 2, title: 'Whale Watching', description: 'Early morning whale watching expedition.' },
      { day: 3, title: 'Beach Leisure', description: 'Relax at the beach or try water sports.' },
      { day: 4, title: 'Galle Fort', description: 'Full day exploration of Galle Fort.' },
      { day: 5, title: 'Stilt Fishing', description: 'Experience traditional stilt fishing.' },
      { day: 6, title: 'Tangalle & More Beach', description: 'Visit hidden beaches and coves.' },
      { day: 7, title: 'Cultural Show', description: 'Evening traditional dance performance.' },
      { day: 8, title: 'Departure', description: 'Transfer to airport.' },
    ]
  },
  {
    id: '5',
    title: 'The Grand Island Circuit',
    duration: '14 Days / 13 Nights',
    description: 'The ultimate Sri Lankan adventure covering all major highlights from north to south, east to west.',
    image: ITINERARIES.grandIsland,
    highlights: ['Cultural Triangle', 'Hill Country', 'Wildlife Parks', 'Coastal Treasures'],
    price: '$6,800',
    fullDescription: 'The most comprehensive tour of Sri Lanka. This epic journey covers all the must-see destinations, from ancient kingdoms to pristine beaches, from misty mountains to wildlife-rich national parks.',
    included: ['All accommodation', 'All meals', 'Private guide', 'All park entries', 'All transfers', 'Domestic flights'],
    dayByDay: [
      { day: 1, title: 'Arrival in Colombo', description: 'Welcome and hotel transfer.' },
      { day: 2, title: 'Anuradhapura', description: 'Ancient city exploration.' },
      { day: 3, title: 'Sigiriya & Dambulla', description: 'Rock fortress and caves.' },
      { day: 4, title: 'Polonnaruwa', description: 'Medieval capital tour.' },
      { day: 5, title: 'Kandy', description: 'Temple of the Tooth and city.' },
      { day: 6, title: 'Nuwara Eliya', description: 'Tea country drive.' },
      { day: 7, title: 'Ella', description: 'Nine Arches and adventures.' },
      { day: 8, title: 'Udawalawe', description: 'Afternoon safari.' },
      { day: 9, title: 'Yala', description: 'Leopard safari.' },
      { day: 10, title: 'Mirissa', description: 'Whale watching.' },
      { day: 11, title: 'Galle', description: 'Fort exploration.' },
      { day: 12, title: 'Hikkaduwa', description: 'Beach and snorkeling.' },
      { day: 13, title: 'Colombo', description: 'City tour and shopping.' },
      { day: 14, title: 'Departure', description: 'Airport transfer.' },
    ]
  },
  {
    id: '6',
    title: 'Wellness & Spiritual Retreat',
    duration: '6 Days / 5 Nights',
    description: 'Rejuvenate your soul with Ayurvedic treatments, meditation sessions, and visits to sacred Buddhist temples.',
    image: ITINERARIES.wellnessRetreat,
    highlights: ['Ayurvedic Spa', 'Temple Visits', 'Meditation', 'Sri Lankan Cuisine'],
    price: '$2,600',
    fullDescription: 'A transformative journey focused on wellness and spiritual enlightenment. Experience ancient Ayurvedic practices, visit sacred temples, and find inner peace.',
    included: ['Wellness resort stay', 'Daily treatments', 'Yoga sessions', 'All meals', 'Spa facilities'],
    dayByDay: [
      { day: 1, title: 'Arrival & Welcome', description: 'Ayurvedic consultation and welcome treatment.' },
      { day: 2, title: 'Temple Visit', description: 'Visit to sacred temples and meditation.' },
      { day: 3, title: 'Full Spa Day', description: 'Full day of treatments and yoga.' },
      { day: 4, title: 'Nature & Wellness', description: 'Nature walk and meditation sessions.' },
      { day: 5, title: 'Final Treatments', description: 'Last spa treatments and reflection.' },
      { day: 6, title: 'Departure', description: 'Feeling refreshed and renewed.' },
    ]
  }
];

const Itineraries: React.FC = () => {
  const [selectedItinerary, setSelectedItinerary] = useState<Itinerary | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (itinerary: Itinerary) => {
    setSelectedItinerary(itinerary);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItinerary(null);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-burnt selection:text-white overflow-x-hidden">
      <ItinerariesSEO />
      <Navbar isScrolled={true} />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=2070&auto=format&fit=crop" 
            alt="Itineraries Hero" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-forest/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">Curated Journeys</span>
          <h1 className="text-5xl md:text-7xl font-serif text-sand mb-6">Itineraries</h1>
          <p className="text-sand/80 text-xl max-w-2xl mx-auto">
            Handcrafted travel experiences that unveil the soul of Sri Lanka
          </p>
        </div>
      </section>

      {/* Itineraries Grid */}
      <section className="py-24 px-6 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itineraries.map((itinerary) => (
              <div key={itinerary.id} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={itinerary.image} 
                    alt={itinerary.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-forest/90 text-sand px-4 py-2 rounded-full text-sm">
                    {itinerary.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-forest mb-3">{itinerary.title}</h3>
                  <p className="text-forest/70 mb-4 line-clamp-2">{itinerary.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {itinerary.highlights.slice(0, 3).map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-burnt/10 text-burnt px-3 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-forest/10">
                    <span className="text-2xl font-serif text-burnt">{itinerary.price}</span>
                    <button 
                      onClick={() => handleViewDetails(itinerary)}
                      className="px-6 py-2 bg-forest text-sand rounded-full hover:bg-burnt transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-sand mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-sand/70 text-lg mb-8">
            Let our travel experts craft a completely personalized itinerary just for you.
          </p>
          <Link 
            to="/tailor-made" 
            className="inline-block px-10 py-4 bg-burnt text-sand rounded-full text-lg hover:bg-sand hover:text-forest transition-all duration-300"
          >
            Create Your Custom Journey
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Itinerary Detail Modal */}
      <ItineraryModal 
        itinerary={selectedItinerary}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Itineraries;
export { itineraries };