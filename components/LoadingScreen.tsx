import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-forest flex flex-col items-center justify-center">
      {/* Brand Name */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-sand tracking-wider">
          RockLanka
        </h1>
        <p className="text-sand/50 text-center text-sm mt-2 uppercase tracking-[0.3em]">
          Quiet Luxury Redefined
        </p>
      </div>

      {/* Loading Bar */}
      <div className="w-64 h-0.5 bg-sand/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-burnt transition-all duration-300 ease-out rounded-full"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading Text */}
      <div className="mt-6 flex items-center gap-2">
        <span className="text-sand/40 text-xs uppercase tracking-[0.3em]">
          {progress < 30 ? 'Preparing your journey' : 
           progress < 60 ? 'Loading experiences' : 
           progress < 90 ? 'Finalizing details' : 
           'Almost there'}
        </span>
        <span className="text-burnt text-xs animate-pulse">
          {Math.min(Math.round(progress), 100)}%
        </span>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-burnt/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sand/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default LoadingScreen;
