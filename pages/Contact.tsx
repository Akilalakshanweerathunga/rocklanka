import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // FormSubmit will handle the actual submission
    // Show success popup
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-burnt selection:text-white overflow-x-hidden">
      <Navbar isScrolled={true} />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2070&auto=format&fit=crop" 
            alt="Contact Hero" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-forest/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-serif text-sand mb-6">Contact Us</h1>
          <p className="text-sand/80 text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 md:px-12 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">Reach Out</span>
              <h2 className="text-4xl md:text-5xl font-serif text-forest mb-8">Let's Plan Your Dream Trip</h2>
              <p className="text-forest/70 text-lg mb-8 leading-relaxed">
                Whether you have a specific question about our itineraries, want to discuss a custom journey, or simply want to learn more about Sri Lanka, we're here to help.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-burnt/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-burnt" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-forest font-medium mb-1">Email Us</h3>
                    <p className="text-forest/70">rocklankatours@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-burnt/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-burnt" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-forest font-medium mb-1">Call Us</h3>
                    <p className="text-forest/70">+94 76 123 4567</p>
                    <p className="text-forest/50 text-sm">Mon - Fri: 9AM - 6PM (IST)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-burnt/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-burnt" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-forest font-medium mb-1">Response Time</h3>
                    <p className="text-forest/70">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-forest font-medium mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {/* Instagram */}
                  <a 
                    href="https://instagram.com/rocklanka" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-forest text-sand rounded-full flex items-center justify-center hover:bg-burnt transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a 
                    href="https://facebook.com/rocklanka" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-forest text-sand rounded-full flex items-center justify-center hover:bg-burnt transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a 
                    href="https://linkedin.com/company/rocklanka" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-forest text-sand rounded-full flex items-center justify-center hover:bg-burnt transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <h3 className="text-2xl font-serif text-forest mb-6">Send Us a Message</h3>
              <form action="https://formsubmit.co/rocklankatours@gmail.com" method="POST" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New Contact Form Submission - Rock Lanka Tours" />
                <input type="text" name="_honey" style={{display: 'none'}} />
                <input type="hidden" name="_captcha" value="false" />
                <div className="space-y-6">
                  <div>
                    <label className="block text-forest text-sm font-medium mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-forest/20 focus:border-burnt focus:ring-1 focus:ring-burnt outline-none transition-colors text-black placeholder:text-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-forest text-sm font-medium mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-forest/20 focus:border-burnt focus:ring-1 focus:ring-burnt outline-none transition-colors text-black placeholder:text-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-forest text-sm font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-forest/20 focus:border-burnt focus:ring-1 focus:ring-burnt outline-none transition-colors text-black placeholder:text-gray-400"
                      placeholder="+94 77 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-forest text-sm font-medium mb-2">Subject *</label>
                    <select 
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-forest/20 focus:border-burnt focus:ring-1 focus:ring-burnt outline-none transition-colors text-black bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="tailor-made">Tailor-Made Trip</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-forest text-sm font-medium mb-2">Your Message *</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-forest/20 focus:border-burnt focus:ring-1 focus:ring-burnt outline-none transition-colors resize-none text-black placeholder:text-gray-400"
                      placeholder="Tell us about your travel plans or ask us anything..."
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-burnt text-sand rounded-full text-lg font-medium hover:bg-forest transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-forest">
        <div className="w-full h-full flex items-center justify-center bg-forest/50">
          <div className="text-center">
            <svg className="w-16 h-16 text-burnt mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sand/70">Map view coming soon</p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-forest/80 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center animate-scale-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-forest mb-4">Thank You!</h3>
            <p className="text-forest/70 mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button 
              onClick={() => setShowSuccess(false)}
              className="w-full py-3 bg-burnt text-sand rounded-full font-medium hover:bg-forest transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
