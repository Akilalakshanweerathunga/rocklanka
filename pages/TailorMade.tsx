import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

// FormSubmit.co endpoint - sends form submissions to email
const FORMSUBMIT_URL = 'https://formsubmit.co/rocklankatours@gmail.com';

const TailorMade: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    // Contact Information
    contactName: '',
    email: '',
    phone: '',
    
    // Group Details
    numAdults: '2',
    ageAdults: '',
    numChildren: '0',
    ageChildren: '',
    
    // General Trip Information
    tripDepartureDate: '',
    tourLength: '7-10 days',
    firstTimeVisit: 'Yes',
    dietaryPreference: 'Non-Vegetarian',
    medicalIssues: '',
    
    // Vehicle Requirements
    vehicleType: '',
    
    // Places to Visit
    placesToVisit: [] as string[],
    otherPlaces: '',
    
    // Activities
    activities: [] as string[],
    otherActivities: '',
    
    // Budget
    budget: '',
    
    // Observations
    observations: ''
  });

  const vehicleTypes = [
    'Luxury Cars (Sedan Class)',
    'Luxury SUVs',
    'Luxury Vans',
    'Luxury Jeeps / Off-Road SUVs',
    'Luxury Mini-Coaches',
    'Luxury Convertibles',
    'Luxury Limousines',
    'Luxury Electric Vehicles (EVs)',
    'Classic Luxury Cars'
  ];

  const placesToVisit = [
    'Dambulla',
    'Polonnaruwa',
    'Minneriya',
    'Jaffna',
    'Sigiriya',
    'Wilpattu',
    'Horton Plains',
    'Negombo',
    'Trincomalee',
    'Nuwara Eliya',
    'Kandy-Ella',
    'Kitulgala'
  ];

  const activities = [
    'Archaeological Sites',
    'Hiking/Trekking',
    'Wildlife & Nature',
    'Rafting/Kayak',
    'Bird Watching',
    'Culture & History',
    'Walking',
    'Gastronomy'
  ];

  const budgetRanges = [
    'Less than US$ 600',
    'US$ 601 – 1000',
    'US$ 1001 – 1500',
    'US$ 1501 – 2500',
    'US$ 2501 – 3500',
    'More than US$ 3501'
  ];

  const handleCheckboxChange = (field: 'placesToVisit' | 'activities', value: string) => {
    const currentArray = formData[field];
    if (currentArray.includes(value)) {
      setFormData({
        ...formData,
        [field]: currentArray.filter(item => item !== value)
      });
    } else {
      setFormData({
        ...formData,
        [field]: [...currentArray, value]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const formDataToSend = new FormData(formElement);
    
    formDataToSend.append('_subject', `New Tailor-Made Trip Inquiry - ${formData.contactName}`);
    formDataToSend.append('_template', 'table');
    formDataToSend.append('_captcha', 'false');
    
    const allPlaces = formData.otherPlaces 
      ? [...formData.placesToVisit, formData.otherPlaces].join(', ')
      : formData.placesToVisit.join(', ');
    
    const allActivities = formData.otherActivities 
      ? [...formData.activities, formData.otherActivities].join(', ')
      : formData.activities.join(', ');
    
    formDataToSend.set('placesToVisit', allPlaces);
    formDataToSend.set('activities', allActivities);

    try {
      await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors'
      });

      // Reset form
      setFormData({
        contactName: '',
        email: '',
        phone: '',
        numAdults: '2',
        ageAdults: '',
        numChildren: '0',
        ageChildren: '',
        tripDepartureDate: '',
        tourLength: '7-10 days',
        firstTimeVisit: 'Yes',
        dietaryPreference: 'Non-Vegetarian',
        medicalIssues: '',
        vehicleType: '',
        placesToVisit: [],
        otherPlaces: '',
        activities: [],
        otherActivities: '',
        budget: '',
        observations: ''
      });
      
      // Show success popup
      setShowSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-burnt selection:text-white overflow-x-hidden">
      <Navbar isScrolled={true} />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2070&auto=format&fit=crop" 
            alt="Tailor Made Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">Bespoke Travel</span>
          <h1 className="text-5xl md:text-7xl font-serif text-sand mb-6">Create Your Dream Itinerary</h1>
          <p className="text-sand/80 text-xl max-w-2xl mx-auto">
            Your vision, our expertise. Tell us about your perfect Sri Lankan adventure
          </p>
        </div>
      </section>

      {/* Questionnaire Form */}
      <section className="py-24 px-6 md:px-12 bg-sand">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-forest p-8 text-center">
              <h2 className="text-3xl font-serif text-sand mb-2">Questionnaire to Create a Custom Trip Itinerary</h2>
              <p className="text-sand/70">To help us organize your dream holiday, please fill out the form below. Please give us as much information as possible.</p>
            </div>

            <form onSubmit={handleSubmit} action={FORMSUBMIT_URL} method="POST" className="p-8 md:p-12">
              {/* Hidden inputs for FormSubmit */}
              <input type="hidden" name="_subject" value={`New Tailor-Made Trip Inquiry`} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <input type="hidden" name="_autoresponse" value="Thank you for your inquiry! We have received your request and will contact you within 24 hours." />

              {/* Contact Information Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-6 pb-3 border-b-4 border-burnt bg-gray-100 p-4 rounded-lg">
                  CONTACT INFORMATION
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-black font-bold text-sm mb-2">Contact Name *</label>
                    <input 
                      type="text" 
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium text-black placeholder-gray-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-bold text-sm mb-2">E-mail *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium text-black placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-bold text-sm mb-2">Telephone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium text-black placeholder-gray-500"
                      placeholder="+94 77 123 4567"
                    />
                  </div>
                </div>
              </div>

              {/* Group Details Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-6 pb-3 border-b-4 border-burnt bg-gray-100 p-4 rounded-lg">
                  GROUP DETAILS
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-black font-bold text-sm mb-2">Number of Adults *</label>
                    <select 
                      name="numAdults"
                      value={formData.numAdults}
                      onChange={(e) => setFormData({...formData, numAdults: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium text-black bg-white"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                      <option value="5">5 Adults</option>
                      <option value="6">6 Adults</option>
                      <option value="7">7 Adults</option>
                      <option value="8">8 Adults</option>
                      <option value="9">9 Adults</option>
                      <option value="10+">10+ Adults</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-black font-bold text-sm mb-2">Age of Adults</label>
                    <input 
                      type="text" 
                      name="ageAdults"
                      value={formData.ageAdults}
                      onChange={(e) => setFormData({...formData, ageAdults: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium text-black placeholder-gray-500"
                      placeholder="e.g., 30-40, 35, 45-50"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-bold text-sm mb-2">Number of Children</label>
                    <select 
                      name="numChildren"
                      value={formData.numChildren}
                      onChange={(e) => setFormData({...formData, numChildren: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium text-black bg-white"
                    >
                      <option value="0">No Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                      <option value="3">3 Children</option>
                      <option value="4">4 Children</option>
                      <option value="5+">5+ Children</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-black font-bold text-sm mb-2">Age of Children</label>
                    <input 
                      type="text" 
                      name="ageChildren"
                      value={formData.ageChildren}
                      onChange={(e) => setFormData({...formData, ageChildren: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium text-black placeholder-gray-500"
                      placeholder="e.g., 5, 8 and 12"
                    />
                  </div>
                </div>
              </div>

              {/* General Trip Information Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-6 pb-3 border-b-4 border-burnt bg-gray-100 p-4 rounded-lg">
                  GENERAL TRIP INFORMATION
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-black font-bold text-sm mb-2">Trip Departure Date</label>
                    <input 
                      type="date" 
                      name="tripDepartureDate"
                      value={formData.tripDepartureDate}
                      onChange={(e) => setFormData({...formData, tripDepartureDate: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-black font-bold text-sm mb-2">Length of Tour Requested *</label>
                    <select 
                      name="tourLength"
                      value={formData.tourLength}
                      onChange={(e) => setFormData({...formData, tourLength: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium text-black bg-white"
                    >
                      <option value="3-5 days">3-5 days</option>
                      <option value="7-10 days">7-10 days</option>
                      <option value="11-14 days">11-14 days</option>
                      <option value="14+ days">14+ days</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-black font-bold text-sm mb-3">Is it your first time to visit Sri Lanka?</label>
                    <div className="flex gap-6 mt-2">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="firstTimeVisit"
                          value="Yes"
                          checked={formData.firstTimeVisit === 'Yes'}
                          onChange={(e) => setFormData({...formData, firstTimeVisit: e.target.value})}
                          className="w-5 h-5 text-burnt focus:ring-burnt border-2 border-gray-400"
                        />
                        <span className="ml-2 text-black font-semibold">Yes</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="firstTimeVisit"
                          value="No"
                          checked={formData.firstTimeVisit === 'No'}
                          onChange={(e) => setFormData({...formData, firstTimeVisit: e.target.value})}
                          className="w-5 h-5 text-burnt focus:ring-burnt border-2 border-gray-400"
                        />
                        <span className="ml-2 text-black font-semibold">No</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-black font-bold text-sm mb-2">Dietary Preference</label>
                    <select 
                      name="dietaryPreference"
                      value={formData.dietaryPreference}
                      onChange={(e) => setFormData({...formData, dietaryPreference: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium text-black bg-white"
                    >
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Non-Vegetarian">Non-Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-black font-bold text-sm mb-2">Medical Issues (Please describe)</label>
                    <textarea 
                      name="medicalIssues"
                      value={formData.medicalIssues}
                      onChange={(e) => setFormData({...formData, medicalIssues: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium resize-none text-black placeholder-gray-500"
                      placeholder="e.g., allergies, mobility issues, diabetes, heart condition, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Requirements Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-6 pb-3 border-b-4 border-burnt bg-gray-100 p-4 rounded-lg">
                  VEHICLE REQUIREMENTS
                </h3>
                <div>
                  <label className="block text-black font-bold text-sm mb-3">Preferred Vehicle Type</label>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {vehicleTypes.map((vehicle) => (
                      <button
                        key={vehicle}
                        type="button"
                        onClick={() => setFormData({...formData, vehicleType: vehicle})}
                        className={`py-3 px-4 rounded-lg text-sm font-semibold text-center transition-all duration-200 border-2 ${
                          formData.vehicleType === vehicle 
                            ? 'bg-black text-white border-black shadow-lg' 
                            : 'bg-white text-black border-gray-400 hover:bg-black hover:text-white hover:border-black'
                        }`}
                      >
                        {vehicle}
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="vehicleType" value={formData.vehicleType} />
                </div>
              </div>

              {/* Places to Visit Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-6 pb-3 border-b-4 border-burnt bg-gray-100 p-4 rounded-lg">
                  What places would you like to visit?
                </h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
                  {placesToVisit.map((place) => (
                    <button
                      key={place}
                      type="button"
                      onClick={() => handleCheckboxChange('placesToVisit', place)}
                      className={`py-3 px-4 rounded-lg text-sm font-semibold text-center transition-all duration-200 border-2 ${
                        formData.placesToVisit.includes(place)
                          ? 'bg-black text-white border-black shadow-lg'
                          : 'bg-white text-black border-gray-400 hover:bg-black hover:text-white hover:border-black'
                      }`}
                    >
                      {place}
                    </button>
                  ))}
                </div>
                <input 
                  type="hidden" 
                  name="placesToVisit" 
                  value={formData.otherPlaces 
                    ? [...formData.placesToVisit, formData.otherPlaces].join(', ')
                    : formData.placesToVisit.join(', ')} 
                />
                <div>
                  <label className="block text-black font-bold text-sm mb-2">Other Places</label>
                  <input 
                    type="text" 
                    value={formData.otherPlaces}
                    onChange={(e) => setFormData({...formData, otherPlaces: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium text-black placeholder-gray-500"
                    placeholder="Please specify any other places you'd like to visit"
                  />
                </div>
              </div>

              {/* Activities Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-6 pb-3 border-b-4 border-burnt bg-gray-100 p-4 rounded-lg">
                  What activities would you like to do?
                </h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
                  {activities.map((activity) => (
                    <button
                      key={activity}
                      type="button"
                      onClick={() => handleCheckboxChange('activities', activity)}
                      className={`py-3 px-4 rounded-lg text-sm font-semibold text-center transition-all duration-200 border-2 ${
                        formData.activities.includes(activity)
                          ? 'bg-black text-white border-black shadow-lg'
                          : 'bg-white text-black border-gray-400 hover:bg-black hover:text-white hover:border-black'
                      }`}
                    >
                      {activity}
                    </button>
                  ))}
                </div>
                <input 
                  type="hidden" 
                  name="activities" 
                  value={formData.otherActivities 
                    ? [...formData.activities, formData.otherActivities].join(', ')
                    : formData.activities.join(', ')} 
                />
                <div>
                  <label className="block text-black font-bold text-sm mb-2">Other Activities</label>
                  <input 
                    type="text" 
                    value={formData.otherActivities}
                    onChange={(e) => setFormData({...formData, otherActivities: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium text-black placeholder-gray-500"
                    placeholder="Please specify any other activities you'd like to do"
                  />
                </div>
              </div>

              {/* Budget Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-black mb-6 pb-3 border-b-4 border-burnt bg-gray-100 p-4 rounded-lg">
                  What is your budget for this trip per person? <span className="text-sm font-normal text-gray-600">(Not including flight tickets)</span>
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {budgetRanges.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setFormData({...formData, budget})}
                      className={`py-3 px-4 rounded-lg text-sm font-semibold text-center transition-all duration-200 border-2 ${
                        formData.budget === budget 
                          ? 'bg-black text-white border-black shadow-lg' 
                          : 'bg-white text-black border-gray-400 hover:bg-black hover:text-white hover:border-black'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="budget" value={formData.budget} />
              </div>

              {/* Observations Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-6 pb-3 border-b-4 border-burnt bg-gray-100 p-4 rounded-lg">
                  Observations
                </h3>
                <textarea 
                  name="observations"
                  value={formData.observations}
                  onChange={(e) => setFormData({...formData, observations: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium resize-none text-black placeholder-gray-500"
                  placeholder="Tell us more about your dream trip, any specific preferences, special occasions, or requirements..."
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-burnt text-white rounded-full text-lg font-bold hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Request'
                )}
              </button>

              <p className="text-center text-gray-600 text-sm mt-4 font-medium">
                By submitting this form, you agree to our privacy policy. Our team will contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-6 md:px-12 bg-forest">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-burnt uppercase tracking-widest text-sm font-semibold mb-4 block">How It Works</span>
            <h2 className="text-4xl font-serif text-sand">Your Journey, Your Way</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Share Your Vision', desc: 'Tell us about your dream Sri Lankan adventure' },
              { step: '02', title: 'Expert Curation', desc: 'Our specialists craft a personalized itinerary' },
              { step: '03', title: 'Refine Together', desc: 'We fine-tune every detail to perfection' },
              { step: '04', title: 'Experience Magic', desc: 'Embark on your unforgettable journey' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-serif text-burnt/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-serif text-sand mb-2">{item.title}</h3>
                <p className="text-sand/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Success Popup Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeSuccessPopup}
          />
          
          {/* Success Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-12 max-w-md mx-4 text-center animate-[bounceIn_0.5s_ease-out]">
            {/* Success Icon with Animation */}
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center animate-[scaleIn_0.3s_ease-out]">
                <svg 
                  className="w-12 h-12 text-green-500 animate-[checkDraw_0.5s_ease-out_0.2s_forwards]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={3} 
                    d="M5 13l4 4L19 7" 
                    style={{ strokeDasharray: 100, strokeDashoffset: 100, animation: 'checkDraw 0.5s ease-out 0.3s forwards' }}
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-black mb-4 animate-[fadeInDown_0.4s_ease-out_0.1s_forwards] opacity-0">
              Thank You!
            </h2>

            {/* Message */}
            <p className="text-gray-600 text-lg mb-6 animate-[fadeInDown_0.4s_ease-out_0.2s_forwards] opacity-0">
              Your submission was successful.
            </p>

            {/* Additional Message */}
            <p className="text-gray-500 mb-8 animate-[fadeInDown_0.4s_ease-out_0.3s_forwards] opacity-0">
              We have received your inquiry and will contact you within 24 hours.
            </p>

            {/* Close Button */}
            <button 
              onClick={closeSuccessPopup}
              className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-burnt transition-colors animate-[fadeInUp_0.4s_ease-out_0.4s_forwards] opacity-0"
            >
              Close
            </button>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-burnt rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-forest rounded-full animate-[pulse_1s_ease-in-out_0.5s_infinite]" />
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes scaleIn {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes checkDraw {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default TailorMade;
