import React, { useEffect, useState } from 'react';
import SEO from './SEO';
import { destinations } from '../../pages/Destinations';

const DestinationsSEO: React.FC = () => {
    const [destIndex, setDestIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);

    useEffect(() => {
        const currentDest = destinations[destIndex];

        if (subIndex <= currentDest.name.length) {
        const timeout = setTimeout(() => {
            document.title = `RockLanka Tours | ${currentDest.name.slice(0, subIndex)}`;
            setSubIndex(subIndex + 1);
        }, 40); 
        return () => clearTimeout(timeout);
        } else {
        const timeout = setTimeout(() => {
            setSubIndex(0);
            setDestIndex((prev) => (prev + 1) % destinations.length);
        }, 2000); 
        return () => clearTimeout(timeout);
        }
    }, [subIndex, destIndex]);
  return (
    <>
      {destinations.map((dest) => (
        <React.Fragment key={dest.id}>
          <SEO
            title={`RockLanka Tours | ${dest.name}`}
            description={dest.description}
            url={`https://rocklankatours.com/destinations#${dest.id}`}
            image={dest.image}
            keywords={`${dest.name}, ${dest.region}, Sri Lanka tours, luxury travel Sri Lanka`}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default DestinationsSEO;