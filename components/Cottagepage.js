import React from 'react';
import data from './cottagedata.json';
import './cottagepage.css'

const Cottage = (props) => {
  const { cottageName } = props;

  // Find the specific cottage from the data
  const cottage = data.find((item) => item.cottageName === cottageName);
  if (!cottage) {
    // Cottage not found in data
    return <div>Cottage not found</div>;
  }

  const { rate, blurb, guests, bedrooms, bedinfo, bathrooms } = cottage;

  return (
    <div className='cottageheadcontain'>
        
      <h2 className='cottage-name'>{cottageName}</h2>
      
      <p>{blurb}</p>
      <div className='topcontainer'>
      <ul className='top'>
      <li className='item'>
      <p>Rate: {rate}</p></li>

      <li className='item'>
      <p>Guests: {guests}</p></li>

      <li className='item'>
      <p>Bedrooms: {bedrooms}
        <span className="bedinfo">{bedinfo}</span></p>   </li>

    
      <li className='item'>
      <p>Bathrooms: {bathrooms}</p>
      </li>
      </ul>
      </div>
    </div>
  );
};

export default Cottage;
