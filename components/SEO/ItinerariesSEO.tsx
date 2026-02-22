import React, { useEffect, useState } from 'react';
import SEO from './SEO';
import { itineraries } from '../../pages/Itineraries';

const ItinerariesSEO: React.FC = () => {
    const [itineIndex, setItineIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);

    useEffect(() => {
        const currentItine = itineraries[itineIndex];

        if (subIndex <= currentItine.title.length) {
        const timeout = setTimeout(() => {
            document.title = `RockLanka Tours | ${currentItine.title.slice(0, subIndex)}`;
            setSubIndex(subIndex + 1);
        }, 40); 
        return () => clearTimeout(timeout);
        } else {
        const timeout = setTimeout(() => {
            setSubIndex(0);
            setItineIndex((prev) => (prev + 1) % itineraries.length);
        }, 2000); 
        return () => clearTimeout(timeout);
        }
    }, [subIndex, itineIndex]);
  return (
    <>
      {itineraries.map((itinerary) => (
        <SEO
          title={`RockLanka Tours | ${itinerary.title}`}
          description={itinerary.description}
          url={`https://rocklankatours.com/itineraries#${itinerary.id}`}
          image={itinerary.image}
          keywords={`${itinerary.title}, Sri Lanka itinerary, travel package, ${itinerary.highlights.join(', ')}`}
        />
      ))}
    </>
  );
};

export default ItinerariesSEO;