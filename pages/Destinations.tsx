import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import DestinationModal from '../components/DestinationModal';
import { DESTINATIONS, PAGE_HERO } from '../assets/images';

interface Destination {
  id: string;
  name: string;
  region: string;
  description: string;
  image: string;
  experiences: string[];
  fullDescription?: string;
  bestTime?: string;
  highlights?: string[];
}

const destinations: Destination[] = [
  {
    id: '1',
    name: 'Sigiriya & Dambulla',
    region: 'Cultural Triangle',
    description: 'Home to the legendary Lion Rock and the sacred cave temples, this UNESCO World Heritage site is the crown jewel of ancient Sri Lanka.',
    image: DESTINATIONS.sigiriyaDambulla,
    experiences: ['Rock Fortress Climb', 'Cave Temple Tours', 'Village Safari', 'Sunset Views'],
    fullDescription: 'Sigiriya, also known as the Lion Rock, is a dramatic rock formation that towers 200 meters above the surrounding plain. At its summit lie the ruins of an ancient kingdom, including frescoes, mirror wall, and impressive fortifications. Just 30 minutes away, the Dambulla Cave Temple houses over 150 statues of Buddha and stunning rock art dating back to the 1st century BC.',
    bestTime: 'November to April is the best time to visit, with dry weather ideal for climbing Sigiriya.',
    highlights: ['UNESCO World Heritage Site', 'Ancient Rock Fortress', 'Golden Temple of Dambulla', 'Panoramic Sunrise Views']
  },
  {
    id: '2',
    name: 'Nuwara Eliya',
    region: 'Hill Country',
    description: 'Known as "Little England", this colonial hill station offers misty mountains, pristine waterfalls, and the world\'s finest tea.',
    image: DESTINATIONS.nuwaraEliya,
    experiences: ['Tea Plantations', 'Gregory Lake', 'Horton Plains', 'Plantain Curries'],
    fullDescription: 'Nestled at an elevation of 1,868 meters, Nuwara Eliya is Sri Lanka\'s most picturesque hill station. Famous for its tea plantations, colonial bungalows, and temperate climate, it offers a refreshing escape from the tropical heat. The town is surrounded by waterfalls, mist-covered mountains, and endless green valleys.',
    bestTime: 'March to May and September to November offer pleasant weather for sightseeing.',
    highlights: ['World\'s Finest Tea', 'Gregory Lake', 'Horton Plains National Park', 'Colonial Architecture']
  },
  {
    id: '3',
    name: 'Yala & Udawalawe',
    region: 'Southern Wilderness',
    description: 'Sri Lanka\'s premier wildlife destinations, home to the highest leopard density in the world and majestic elephant herds.',
    image: DESTINATIONS.yalaUdawalawe,
    experiences: ['Leopard Safaris', 'Elephant Watching', 'Bird Watching', 'Night Drives'],
    fullDescription: 'Yala National Park is famous for having the highest leopard density in the world. This vast wilderness area is home to elephants, sloth bears, crocodiles, and over 200 species of birds. Adjacent Udawalawe National Park offers incredible elephant viewing opportunities with its large herds of wild elephants.',
    bestTime: 'February to June is the best time for leopard sightings in Yala.',
    highlights: ['Leopard Tracking', 'Elephant Herds', 'Bird Sanctuary', 'Wildlife Photography']
  },
  {
    id: '4',
    name: 'Galle & Southern Coast',
    region: 'Coastal Paradise',
    description: 'Where colonial charm meets tropical beaches. Explore the UNESCO Fort, watch whales, and relax in luxury beach villas.',
    image: DESTINATIONS.galleSouthernCoast,
    experiences: ['Galle Fort Walk', 'Whale Watching', 'Stilt Fishing', 'Beach Clubs'],
    fullDescription: 'Galle Fort, a UNESCO World Heritage site, is a living testament to Sri Lanka\'s colonial past. Walk through cobblestone streets lined with Dutch-era buildings, boutique hotels, and charming cafes. The southern coast offers pristine beaches, world-class whale watching in Mirissa, and the unique tradition of stilt fishing.',
    bestTime: 'November to April for whale watching and beach activities.',
    highlights: ['UNESCO Fort City', 'Whale Watching', 'Golden Beaches', 'Colonial Architecture']
  },
  {
    id: '5',
    name: 'Kandy & Central Highlands',
    region: 'Cultural Heart',
    description: 'The sacred city of Kandy, home to the Temple of the Tooth and surrounded by lush mountain ranges and spice gardens.',
    image: DESTINATIONS.kandyHighlands,
    experiences: ['Temple of the Tooth', 'Spice Gardens', 'Kandy Dance', 'Botanical Gardens'],
    fullDescription: 'Kandy, the last capital of the ancient Sri Lankan kings, is a cultural treasure trove. The sacred Temple of the Tooth Relic houses a relic of the Buddha\'s tooth. Surrounded by misty mountains and tea plantations, Kandy offers a perfect blend of history, spirituality, and natural beauty.',
    bestTime: 'December to April for the Kandy Esala Perahera festival and pleasant weather.',
    highlights: ['Temple of the Sacred Tooth Relic', 'Royal Botanical Gardens', 'Traditional Dance Performances', 'Spice Gardens']
  },
  {
    id: '6',
    name: 'Trincomalee & East Coast',
    region: 'Eastern Treasure',
    description: 'Pristine beaches, world-class diving, and the sacred Nilawali Kovil - the east coast offers a different Sri Lanka.',
    image: DESTINATIONS.trincomaleeEast,
    experiences: ['Whale Watching', 'Snorkeling', 'Pigeon Island', 'Local Markets'],
    fullDescription: 'Trincomalee boasts one of the world\'s finest natural harbors and some of Sri Lanka\'s most beautiful beaches. The east coast offers a more laid-back atmosphere compared to the south, with excellent diving and snorkeling at Pigeon Island. The town is also home to the sacred Koneswaram Temple, known as the "Rome of the Orient".',
    bestTime: 'April to October for the best beach and diving conditions.',
    highlights: ['Pigeon Island Marine Park', 'Whale Watching', 'Sacred Koneswaram Temple', 'Pristine Beaches']
  },
  {
    id: '7',
    name: 'Anuradhapura',
    region: 'Ancient Kingdom',
    description: 'One of the oldest continuously inhabited cities in the world, home to ancient stupas and the sacred Sri Maha Bodhi.',
    image: DESTINATIONS.anuradhapura,
    experiences: ['Sri Maha Bodhi', 'Ruwanwelisaya', 'Abhayagiri', 'Jetavanaramaya'],
    fullDescription: 'Anuradhapura is one of the ancient capitals of Sri Lanka and a UNESCO World Heritage site. This sprawling city is home to massive stupas, ancient reservoirs, and the sacred Sri Maha Bodhi tree - believed to be the oldest living human-planted tree in the world. It was a center of Buddhist learning and civilization for over 1,000 years.',
    bestTime: 'October to April with dry weather ideal for exploring the ancient sites.',
    highlights: ['Sacred Sri Maha Bodhi', 'Ancient Ruins', 'Jaya Sri Maha Bodhi', 'Archaeological Museum']
  },
  {
    id: '8',
    name: 'Ella & Adams Peak',
    region: 'Adventure Hub',
    description: 'The adventure capital of Sri Lanka, offering challenging hikes, stunning waterfalls, and breathtaking mountain scenery.',
    image: DESTINATIONS.ellaAdamsPeak,
    experiences: ['Ella Rock', 'Nine Arches Bridge', 'Little Adams Peak', 'Waterfall Treks'],
    fullDescription: 'Ella has become one of Sri Lanka\'s most popular destinations, drawing hikers, nature lovers, and adventure seekers. The town offers breathtaking views of valleys, waterfalls, and tea plantations. The famous Nine Arches Bridge and Ella Rock are must-visit attractions. For the adventurous, climbing Adam\'s Peak (Sri Pada) is a transformative experience.',
    bestTime: 'December to March for the best hiking conditions and clear skies at Adam\'s Peak.',
    highlights: ['Nine Arches Bridge', 'Ella Rock Hike', 'Little Adam\'s Peak', 'Ravana Falls']
  }
];

const Destinations: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (destination: Destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDestination(null);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-burnt selection:text-white overflow-x-hidden">
      <Navbar isScrolled={true} />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={PAGE_HERO.destinations}
            alt="Destinations Hero" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-forest/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">Explore the Island</span>
          <h1 className="text-5xl md:text-7xl font-serif text-sand mb-6">Destinations</h1>
          <p className="text-sand/80 text-xl max-w-2xl mx-auto">
            From ancient kingdoms to pristine beaches, discover the diverse landscapes of Sri Lanka
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-24 px-6 md:px-12 bg-forest">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <div 
                key={destination.id} 
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
                onClick={() => handleViewDetails(destination)}
              >
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-burnt text-xs uppercase tracking-wider mb-2 block">{destination.region}</span>
                  <h3 className="text-2xl font-serif text-sand mb-2">{destination.name}</h3>
                  <p className="text-sand/70 text-sm line-clamp-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {destination.description}
                  </p>
                  <div className="flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {destination.experiences.slice(0, 2).map((exp, idx) => (
                      <span key={idx} className="text-xs bg-sand/20 text-sand px-2 py-1 rounded">
                        {exp}
                      </span>
                    ))}
                  </div>
                  <button className="mt-4 text-sm text-burnt opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to explore →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Region */}
      <section className="py-24 px-6 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">Featured Destination</span>
              <h2 className="text-4xl md:text-5xl font-serif text-forest mb-6">The Cultural Triangle</h2>
              <p className="text-forest/70 text-lg mb-6 leading-relaxed">
                The heart of ancient Sri Lanka, where millennia of history come alive. From the iconic Lion Rock of Sigiriya to the sacred city of Anuradhapura, this region holds the key to understanding the island's rich heritage.
              </p>
              <ul className="space-y-3 mb-8">
                {['UNESCO World Heritage Sites', 'Private Temple Access', 'Expert Local Guides', 'Luxury Eco-Lodges'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-forest">
                    <span className="w-2 h-2 bg-burnt rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to="/itineraries" 
                className="inline-block px-8 py-3 bg-forest text-sand rounded-full hover:bg-burnt transition-colors"
              >
                View Related Itineraries
              </Link>
            </div>
            <div className="relative">
              <img 
                src={DESTINATIONS.sigiriyaDambulla}
                alt="Cultural Triangle" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-burnt text-sand p-6 rounded-xl">
                <div className="text-3xl font-serif">5</div>
                <div className="text-xs uppercase tracking-wider">Heritage Sites</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-sand mb-6">Ready to Explore?</h2>
          <p className="text-sand/70 text-lg mb-8">
            Let us help you discover the perfect destination for your Sri Lankan adventure.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-10 py-4 bg-burnt text-sand rounded-full text-lg hover:bg-sand hover:text-forest transition-all duration-300"
          >
            Speak to Our Experts
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Destination Detail Modal */}
      <DestinationModal 
        destination={selectedDestination}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Destinations;
