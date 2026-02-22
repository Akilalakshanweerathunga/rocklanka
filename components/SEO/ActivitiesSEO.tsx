import React, { useEffect, useState } from 'react';
import SEO from '../../components/SEO/SEO';
import { activities } from '../../pages/Activities';

const ActivitiesSEO: React.FC = () => {
    const [actIndex, setActIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);

    useEffect(() => {
        const currentAct = activities[actIndex];

        if (subIndex <= currentAct.title.length) {
        const timeout = setTimeout(() => {
            document.title = `RockLanka Tours | ${currentAct.title.slice(0, subIndex)}`;
            setSubIndex(subIndex + 1);
        }, 40); 
        return () => clearTimeout(timeout);
        } else {
        const timeout = setTimeout(() => {
            setSubIndex(0);
            setActIndex((prev) => (prev + 1) % activities.length);
        }, 2000); 
        return () => clearTimeout(timeout);
        }
    }, [subIndex, actIndex]);
  return (
    <>
      {activities.map((activity) => (
        <SEO
          title={`${activity.title} | RockLanka Tours`}
          description={activity.description}
          url={`https://rocklankatours.com/activities#${activity.id}`}
          image={activity.image}
          keywords={`${activity.title}, ${activity.category}, Sri Lanka tours, adventure activities`}
        />
      ))}
    </>
  );
};

export default ActivitiesSEO;