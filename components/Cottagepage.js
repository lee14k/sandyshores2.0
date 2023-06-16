import React from 'react';
import data from './cottagedata.json';

const Cottage = (props) => {
  const { cottageName } = props;

  // Find the specific cottage from the data
  const cottage = data.find((item) => item.cottageName === cottageName);
  if (!cottage) {
    // Cottage not found in data
    return <div>Cottage not found</div>;
  }

  const { rate, blurb, guests, bedrooms, beds } = cottage;

  return (
    <div>
        
      <h2>{cottageName}</h2>
      <p>{blurb}</p>
      <p>Rate: {rate}</p>

      <p>Guests: {guests}</p>
      <p>Bedrooms: {bedrooms}</p>
      <p>Beds: {beds}</p>
    </div>
  );
};

export default Cottage;
