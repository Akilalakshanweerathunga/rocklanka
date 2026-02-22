
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOGO } from '../assets/images';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/itineraries', label: 'Itineraries' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/activities', label: 'Activities' },
    { path: '/tailor-made', label: 'Tailor-Made' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${isScrolled ? 'bg-forest/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={LOGO.main} 
            alt="RockLanka Tours" 
            className="h-12 w-auto object-contain"
            loading="eager"
            fetchPriority="high"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 items-center text-sm font-medium uppercase tracking-wider">
          {navLinks.slice(0, -1).map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`relative py-2 transition-colors ${
                isActive(link.path) ? 'text-burnt' : 'text-sand/80 hover:text-sand'
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-burnt" />
              )}
            </Link>
          ))}
          <Link 
            to="/tailor-made"
            className="px-6 py-3 border border-sand/20 rounded-full hover:bg-sand hover:text-forest transition-all duration-300 text-sand/80"
          >
            Plan Your Trip
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-sand p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-forest/98 backdrop-blur-md border-t border-sand/10">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  isActive(link.path) 
                    ? 'bg-burnt/20 text-burnt' 
                    : 'text-sand/80 hover:bg-sand/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/tailor-made"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 px-4 mt-4 bg-burnt text-sand text-center rounded-lg font-medium"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
