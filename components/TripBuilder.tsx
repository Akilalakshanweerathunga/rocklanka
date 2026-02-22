
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { EscapeType, CompanionType, TripFormData } from '../types';
import { TRIP_BUILDER } from '../assets/images';

const TripBuilder: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [formData, setFormData] = useState<TripFormData>({
    escape: 'Luxury',
    companion: 'Partner',
    budget: 5000,
    startDate: '',
    endDate: ''
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleReveal = async () => {
    setLoading(true);
    setStep(5);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `
        Act as a luxury travel curator for RockLanka Tours. 
        Create a personalized 7-day Sri Lankan journey for:
        Escape: ${formData.escape}
        Companion: ${formData.companion}
        Budget: $${formData.budget}
        Dates: ${formData.startDate} to ${formData.endDate}

        Use evocative, sensory language (quiet luxury style). 
        Suggest 3 specific high-end locations and unique experiences.
        Format the response in short, elegant paragraphs with a clear title.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResult(response.text || "Our curators are still polishing your perfect itinerary. Please try again.");
    } catch (error) {
      console.error(error);
      setResult("A slight mist has obscured our vision. Please connect with an expert via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const escapeOptions: { type: EscapeType; img: string }[] = [
    { type: 'Luxury', img: TRIP_BUILDER.luxury },
    { type: 'Adventure', img: TRIP_BUILDER.adventure },
    { type: 'Culture', img: TRIP_BUILDER.culture },
    { type: 'Nature', img: TRIP_BUILDER.nature },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-sand mb-4">Tailor Your Escape</h2>
        <div className="w-full h-1 bg-sand/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-burnt transition-all duration-700" 
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <div className="glass rounded-3xl p-8 md:p-12 min-h-[500px] flex flex-col justify-center">
        {step === 1 && (
          <div className="animate-in fade-in duration-700">
            <h3 className="text-2xl font-serif text-sand mb-8 text-center">What defines your escape?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {escapeOptions.map(opt => (
                <button 
                  key={opt.type}
                  onClick={() => { setFormData({...formData, escape: opt.type}); nextStep(); }}
                  className={`relative group rounded-2xl overflow-hidden aspect-[3/4] transition-all border-2 ${formData.escape === opt.type ? 'border-burnt scale-95' : 'border-transparent'}`}
                >
                  <img src={opt.img} alt={opt.type} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-serif text-sand">{opt.type}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in duration-700 text-center">
            <h3 className="text-2xl font-serif text-sand mb-12">Who are you traveling with?</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {(['Solo', 'Partner', 'Family', 'Group'] as CompanionType[]).map(c => (
                <button 
                  key={c}
                  onClick={() => { setFormData({...formData, companion: c}); nextStep(); }}
                  className={`px-10 py-6 rounded-2xl text-xl font-serif transition-all ${formData.companion === c ? 'bg-burnt text-white shadow-xl scale-110' : 'glass text-sand/60 hover:text-sand'}`}
                >
                  {c}
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="mt-12 text-sand/40 hover:text-sand underline">Back</button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in duration-700 text-center">
            <h3 className="text-2xl font-serif text-sand mb-12">Set your journey's investment</h3>
            <div className="max-w-md mx-auto">
              <input 
                type="range" 
                min="1000" 
                max="20000" 
                step="500"
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: parseInt(e.target.value)})}
                className="w-full accent-burnt"
              />
              <div className="text-5xl font-serif text-sand mt-8 mb-12">${formData.budget.toLocaleString()}</div>
              <button onClick={nextStep} className="px-12 py-4 bg-burnt text-white rounded-full text-lg shadow-xl hover:scale-105 transition-transform">
                Continue
              </button>
            </div>
            <button onClick={prevStep} className="mt-12 text-sand/40 hover:text-sand underline block mx-auto">Back</button>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in duration-700 text-center">
            <h3 className="text-2xl font-serif text-sand mb-12">When shall we expect you?</h3>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
              <div className="flex flex-col gap-2">
                <label className="text-sand/50 text-xs uppercase tracking-widest">Start Date</label>
                <input 
                  type="date" 
                  className="bg-transparent border border-sand/20 rounded-lg p-4 text-sand focus:border-burnt outline-none" 
                  onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sand/50 text-xs uppercase tracking-widest">End Date</label>
                <input 
                  type="date" 
                  className="bg-transparent border border-sand/20 rounded-lg p-4 text-sand focus:border-burnt outline-none" 
                  onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                />
              </div>
            </div>
            <button onClick={handleReveal} className="px-16 py-6 bg-forest border border-sand/20 text-sand rounded-full text-xl font-serif shadow-2xl hover:bg-burnt hover:border-burnt transition-all group">
              Reveal My Custom Journey
              <span className="ml-3 group-hover:translate-x-2 inline-block transition-transform">✧</span>
            </button>
            <button onClick={prevStep} className="mt-8 text-sand/40 hover:text-sand underline block mx-auto">Back</button>
          </div>
        )}

        {step === 5 && (
          <div className="animate-in zoom-in duration-1000 text-center">
            {loading ? (
              <div className="space-y-8 py-12">
                <div className="w-20 h-20 border-t-2 border-burnt rounded-full animate-spin mx-auto" />
                <p className="text-2xl font-serif text-sand italic animate-pulse-soft">
                  Curating your narrative from the highlands to the coast...
                </p>
              </div>
            ) : (
              <div className="text-left max-w-2xl mx-auto">
                <div className="text-burnt uppercase tracking-widest text-sm font-semibold mb-6">Your Bespoke Itinerary</div>
                <div className="prose prose-invert prose-sand">
                  <pre className="whitespace-pre-wrap font-serif text-xl leading-relaxed text-sand/90 font-normal">
                    {result}
                  </pre>
                </div>
                <div className="mt-12 flex flex-col md:flex-row gap-4">
                  <button onClick={() => setStep(1)} className="px-8 py-4 border border-sand/20 rounded-full text-sand hover:bg-sand/10 transition-colors">
                    Start Over
                  </button>
                  <button className="px-8 py-4 bg-burnt text-white rounded-full shadow-lg flex-1 hover:scale-[1.02] transition-transform">
                    Discuss with a Curator
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TripBuilder;
