
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import BentoGrid from './components/BentoGrid';
import Storyline from './components/Storyline';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { ITINERARIES } from './assets/images';

// Pages
import Itineraries from './pages/Itineraries';
import Destinations from './pages/Destinations';
import Activities from './pages/Activities';
import TailorMade from './pages/TailorMade';
import About from './pages/About';
import Contact from './pages/Contact';
import ImageUpload from './pages/ImageUpload';

// Scroll to top component
const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return <>{children}</>;
};

// Home Page Component
const Home: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <main>
        <HeroSlider />
        
        <section id="legacy" className="py-24 px-6 md:px-12 bg-forest">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">The RockLanka Legacy</span>
                <h2 className="text-4xl md:text-6xl font-serif text-sand mb-8 leading-tight">
                  Crafting Timeless <br />Island Narratives
                </h2>
                <p className="text-sand/70 text-lg leading-relaxed mb-8 max-w-lg">
                  Born from a passion for the untamed beauty of Sri Lanka, we move beyond the generic. 
                  Our legacy is defined by exclusive access, expert tracking, and a commitment to the 
                  'Quiet Luxury' that defines our motherland.
                </p>
                <div className="flex gap-8 border-t border-sand/10 pt-8">
                  <div>
                    <div className="text-3xl font-serif text-sand">15+</div>
                    <div className="text-xs text-sand/50 uppercase tracking-wider mt-1">Years of Heritage</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif text-sand">120+</div>
                    <div className="text-xs text-sand/50 uppercase tracking-wider mt-1">Hidden Gems</div>
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl aspect-[4/5]">
                <img 
                  src={ITINERARIES.grandIsland} 
                  alt="Traditional Fisherman" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section id="experiences" className="py-24 px-6 md:px-12 bg-sand text-forest">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">Our Curation</span>
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Unveiling the Extraordinary</h2>
                <p className="text-forest/70 text-lg">
                  From the scent of freshly ground cinnamon to the roar of the Indian Ocean, 
                  discover experiences that stir the soul.
                </p>
              </div>
              <a href="/activities" className="px-8 py-4 bg-forest text-sand rounded-full hover:bg-burnt transition-all duration-500 shadow-xl group">
                Explore All Vibe Filters
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
            <BentoGrid />
          </div>
        </section>

        <section id="journeys" className="py-24 px-6 md:px-12 bg-forest overflow-hidden">
          <Storyline />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop>
        <LoadingScreen onComplete={() => setIsLoading(false)} />
        <div className={`min-h-screen font-sans selection:bg-burnt selection:text-white overflow-x-hidden ${isLoading ? 'hidden' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/itineraries" element={<Itineraries />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/tailor-made" element={<TailorMade />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/image-upload" element={<ImageUpload />} />
          </Routes>
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default App;
