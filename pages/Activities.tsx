import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ActivityModal from '../components/ActivityModal';
import { ACTIVITIES_PAGE, PAGE_HERO } from '../assets/images';

import ActivitiesSEO from '../components/SEO/ActivitiesSEO';

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

const activities: Activity[] = [
  {
    id: '1',
    title: 'Ceylon Tea Trails',
    category: 'Culinary & Highlands',
    description: 'Experience the journey from leaf to cup at Sri Lanka\'s most prestigious tea plantations. Enjoy private tastings and learn the art of tea making.',
    image: ACTIVITIES_PAGE.ceylonTeaTrails,
    duration: 'Half Day',
    intensity: 'Easy',
    fullDescription: 'Immerse yourself in the world of Ceylon tea with an exclusive tour of a working tea factory. Watch the entire process from plucking to packing, and indulge in a premium tea tasting session overlooking the misty mountains.',
    highlights: ['Visit working tea factory', 'Premium tea tasting', 'Learn tea making process', 'Scenic mountain views'],
    included: ['Professional guide', 'Tea tasting session', 'Bottled water', 'Hotel pickup & drop-off'],
    whatToBring: ['Comfortable walking shoes', 'Camera', 'Light jacket']
  },
  {
    id: '2',
    title: 'Yala Leopard Safari',
    category: 'Wildlife & Safari',
    description: 'Track the elusive leopard in the world\'s highest density leopard population. Expert trackers ensure unforgettable wildlife encounters.',
    image: ACTIVITIES_PAGE.yalaLeopardSafari,
    duration: 'Full Day',
    intensity: 'Moderate',
    fullDescription: 'Join our expert trackers for an action-packed safari through Yala National Park. With the highest leopard density in the world, you\'re guaranteed breathtaking sightings of these majestic cats along with elephants, crocodiles, and over 200 bird species.',
    highlights: ['Leopard tracking', 'Elephant herds', 'Bird watching', 'Expert tracker guide'],
    included: ['4x4 safari vehicle', 'Professional tracker', 'Breakfast & lunch', 'Park entrance fees'],
    whatToBring: ['Binoculars', 'Camera with zoom', 'Sunscreen', 'Comfortable clothing']
  },
  {
    id: '3',
    title: 'Sigiriya Sunrise Climb',
    category: 'History & Adventure',
    description: 'Be among the first to witness the sunrise from the 5th century Rock Fortress. Private access and expert guides await.',
    image: ACTIVITIES_PAGE.sigiriyaSunrise,
    duration: '4 Hours',
    intensity: 'Challenging',
    fullDescription: 'Experience the magic of Sigiriya at dawn before the crowds arrive. Climb the iconic Lion Rock as the sun paints the ancient frescoes in golden light. Your private guide will share centuries of history and hidden secrets of this UNESCO World Heritage site.',
    highlights: ['Sunrise from summit', 'Ancient frescoes', 'Mirror wall', 'Lion paw gardens'],
    included: ['Private guide', 'Breakfast pack', 'Water bottles', 'Hotel pickup'],
    whatToBring: ['Good hiking shoes', 'Camera', 'Water', 'Energy snacks']
  },
  {
    id: '4',
    title: 'Mirissa Blue Whale Watching',
    category: 'Marine & Wildlife',
    description: 'Set sail in the Indian Ocean to witness the majestic blue whale, the largest creature on Earth, in their natural habitat.',
    image: ACTIVITIES_PAGE.mirissaWhale,
    duration: 'Half Day',
    intensity: 'Easy',
    fullDescription: 'Head out into the warm Indian Ocean waters to encounter the gentle giants of the sea. Blue whales, sperm whales, and dolphins are commonly spotted in these nutrient-rich waters. Our expert naturalists ensure a responsible and unforgettable experience.',
    highlights: ['Blue whale sightings', 'Dolphin pods', 'Snack & beverages', 'Marine naturalist'],
    included: ['Boat trip', 'Breakfast', 'Marine expert', 'Safety equipment'],
    whatToBring: ['Sunscreen', 'Sunglasses', 'Motion sickness pills', 'Camera']
  },
  {
    id: '5',
    title: 'Galle Fort Heritage Walk',
    category: 'Culture & History',
    description: 'Explore the cobbled streets of Galle Fort, a UNESCO World Heritage site. Discover Dutch colonial architecture and hidden gems.',
    image: ACTIVITIES_PAGE.galleFortWalk,
    duration: '3 Hours',
    intensity: 'Easy',
    fullDescription: 'Wander through the charming streets of Galle Fort with our knowledgeable local guide. Discover hidden courtyards, boutique shops, and centuries-old churches. Learn about the fascinating colonial history and taste local delicacies along the way.',
    highlights: ['Dutch colonial architecture', 'Hidden churches', 'Local cuisine tasting', 'Expert guide'],
    included: ['Professional guide', 'Local snacks', 'Bottled water', 'Heritage map'],
    whatToBring: ['Comfortable shoes', 'Camera', 'Sunscreen']
  },
  {
    id: '6',
    title: 'Ayurvedic Wellness Retreat',
    category: 'Wellness & Spa',
    description: 'Rejuvenate your body and mind with traditional Ayurvedic treatments, meditation sessions, and organic Sri Lankan cuisine.',
    image: ACTIVITIES_PAGE.ayurvedicWellness,
    duration: 'Full Day',
    intensity: 'Relaxing',
    fullDescription: 'Escape to serenity with a traditional Ayurvedic wellness experience. Our expert practitioners will personalize treatments based on your body type (dosha). Enjoy healing massages, herbal baths, yoga sessions, and nutritious organic meals.',
    highlights: ['Ayurvedic consultation', 'Traditional massage', 'Yoga session', 'Organic lunch'],
    included: ['Ayurvedic consultation', 'Full body treatments', 'Yoga session', 'Organic meals', 'Spa facilities'],
    whatToBring: ['Loose clothing', 'Swimwear', 'Personal toiletries']
  },
  {
    id: '7',
    title: 'Ella Nine Arches Adventure',
    category: 'Adventure & Hiking',
    description: 'Hike through lush tea plantations to the iconic Nine Arches Bridge. Experience the engineering marvel surrounded by misty mountains.',
    image: ACTIVITIES_PAGE.ellaNineArches,
    duration: 'Half Day',
    intensity: 'Moderate',
    fullDescription: 'Trek through emerald tea plantations to one of Sri Lanka\'s most Instagram-worthy locations. The Nine Arches Bridge, built during the British colonial era, is a masterpiece of engineering set amidst stunning mountain scenery.',
    highlights: ['Nine Arches Bridge', 'Tea plantation trek', 'Scenic viewpoints', 'Train spotting'],
    included: ['Expert guide', 'Tea plucking experience', 'Snacks', 'Transport'],
    whatToBring: ['Hiking shoes', 'Camera', 'Rain jacket', 'Water']
  },
  {
    id: '8',
    title: 'Traditional Fishing Experience',
    category: 'Culture & Coastal',
    description: 'Learn the ancient art of stilt fishing from local masters. Experience this unique Sri Lankan tradition firsthand.',
    image: ACTIVITIES_PAGE.traditionalFishing,
    duration: '2 Hours',
    intensity: 'Easy',
    fullDescription: 'Discover the unique traditional stilt fishing technique that has been passed down through generations. Try your hand at this centuries-old method and learn about the sustainable fishing practices of coastal communities.',
    highlights: ['Stilt fishing demo', 'Hands-on experience', 'Beach walk', 'Local fishing village'],
    included: ['Local fisherman guide', 'Refreshments', 'Beach equipment', 'Photos'],
    whatToBring: ['Swimwear', 'Towel', 'Camera', 'Sunscreen']
  },
  {
    id: '9',
    title: 'Polonnaruwa Cycling Tour',
    category: 'History & Adventure',
    description: 'Cycle through the ancient ruins of the medieval kingdom of Polonnaruwa. Explore temples, palaces, and statues.',
    image: ACTIVITIES_PAGE.polonnaruwaCycling,
    duration: 'Half Day',
    intensity: 'Moderate',
    fullDescription: 'Explore the ancient ruins of Polonnaruwa by bicycle, the perfect way to cover this vast UNESCO World Heritage site. Visit the impressive statues of the Gal Vihara, the royal palace complex, and ancient temples while learning about the kingdom\'s fascinating history.',
    highlights: ['Gal Vihara statues', 'Royal palace ruins', 'Ancient temples', 'Archaeological museum'],
    included: ['Quality bicycle', 'Guide', 'Water bottle', 'Helmet'],
    whatToBring: ['Comfortable clothes', 'Sunscreen', 'Camera', 'Hat']
  },
  {
    id: '10',
    title: 'Spice Garden Exploration',
    category: 'Culinary & Culture',
    description: 'Visit a traditional spice garden in Kandy. Learn about Ceylon cinnamon, cardamom, and other exotic spices.',
    image: ACTIVITIES_PAGE.spiceGarden,
    duration: '2 Hours',
    intensity: 'Easy',
    fullDescription: 'Discover the secrets of Sri Lanka\'s famous spice trade. Walk through aromatic spice gardens, learn about medicinal plants, and understand how spices have shaped the island\'s history. Enjoy a traditional Sri Lankan lunch with freshly ground spices.',
    highlights: ['Ceylon cinnamon', 'Cardamom & pepper', 'Medicinal plants', 'Spice lunch'],
    included: ['Garden tour', 'Spice lunch', 'Spice samples', 'Guide'],
    whatToBring: ['Comfortable shoes', 'Camera', 'Sunscreen']
  },
  {
    id: '11',
    title: 'Turtle Conservation Visit',
    category: 'Wildlife & Conservation',
    description: 'Visit a turtle hatchery and learn about conservation efforts. Release baby turtles into the ocean if in season.',
    image: ACTIVITIES_PAGE.turtleConservation,
    duration: 'Half Day',
    intensity: 'Easy',
    fullDescription: 'Support turtle conservation efforts and learn about these remarkable marine creatures. Visit a hatchery, learn about the species that nest on Sri Lankan beaches, and if you\'re lucky, participate in releasing baby turtles into the ocean.',
    highlights: ['Hatchery visit', 'Turtle species education', 'Release ceremony', 'Beach cleanup option'],
    included: ['Hatchery entry', 'Guide', 'Refreshments', 'Conservation donation'],
    whatToBring: ['Swimwear', 'Towel', 'Sunscreen', 'Camera']
  },
  {
    id: '12',
    title: 'White Water Rafting Kitulgala',
    category: 'Adventure & Thrill',
    description: 'Navigate the rapids of the Kelani River for an adrenaline-pumping adventure in the Sri Lankan wilderness.',
    image: ACTIVITIES_PAGE.whiteWaterRafting,
    duration: 'Half Day',
    intensity: 'Challenging',
    fullDescription: 'Get your adrenaline pumping with an exciting white water rafting adventure on the Kelani River. Navigate through Class 2-3 rapids surrounded by lush tropical rainforest. Perfect for beginners and experienced rafters alike.',
    highlights: ['Grade 2-3 rapids', 'Jungle scenery', 'Canyoning option', 'Lunch included'],
    included: ['Rafting equipment', 'Professional instructor', 'Lunch', 'Hotel transfer'],
    whatToBring: ['Change of clothes', 'Waterproof camera', 'Secure footwear', 'Towel']
  }
];
const categories = ['All', 'Wildlife & Safari', 'History & Adventure', 'Culture & Coastal', 'Culinary & Highlands', 'Wellness & Spa', 'Adventure & Thrill'];

const Activities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredActivities = activeCategory === 'All' 
    ? activities 
    : activities.filter(a => a.category.includes(activeCategory.split(' ')[0]));

  const handleReadMore = (activity: Activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedActivity(null);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-burnt selection:text-white overflow-x-hidden">
      <ActivitiesSEO />
      <Navbar isScrolled={true} />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={PAGE_HERO.activities}
            alt="Activities Hero" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-forest/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">Experiences</span>
          <h1 className="text-5xl md:text-7xl font-serif text-sand mb-6">Activities</h1>
          <p className="text-sand/80 text-xl max-w-2xl mx-auto">
            Curated experiences that connect you with the heart and soul of Sri Lanka
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 md:px-12 bg-forest border-b border-sand/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all ${
                  activeCategory === category 
                    ? 'bg-burnt text-sand' 
                    : 'bg-sand/10 text-sand/70 hover:bg-sand/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-24 px-6 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-burnt text-sand px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                    {activity.category.split(' & ')[0]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-forest mb-2">{activity.title}</h3>
                  <p className="text-forest/70 text-sm mb-4 line-clamp-2">{activity.description}</p>
                  <div className="flex gap-4 text-xs text-forest/50 uppercase tracking-wider mb-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {activity.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {activity.intensity}
                    </span>
                  </div>
                  <button 
                    onClick={() => handleReadMore(activity)}
                    className="w-full py-3 bg-forest text-white rounded-full hover:bg-burnt transition-colors font-medium"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-forest">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-sand mb-6">Create Your Perfect Adventure</h2>
          <p className="text-sand/70 text-lg mb-8">
            Combine multiple activities to craft your ultimate Sri Lankan experience.
          </p>
          <Link 
            to="/tailor-made" 
            className="inline-block px-10 py-4 bg-burnt text-sand rounded-full text-lg hover:bg-sand hover:text-forest transition-all duration-300"
          >
            Start Planning
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Activity Detail Modal */}
      <ActivityModal 
        activity={selectedActivity}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Activities;
export { activities };
