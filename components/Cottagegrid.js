import React from 'react';
import Link from 'next/link';
import Cottages from './Cottages';
import data from './cottagedata.json';
import './Cottagegrid.css';

const Grid = () => {
  return (
    <div className="wholegrid">
        <div >
      <h1 className='headline'>Our Cottages</h1>
      </div>
      <div className="grid-container">
        {data.map((item, index) => {
          const cottageSlug = item.cottageName.toLowerCase().replace(/\s+/g, '');
          return (
            <Link key={index} href={`/${cottageSlug}`}>
              
                <Cottages
                  cottageName={item.cottageName}
                  rate={item.rate}
                  imageUrl={item.imageUrl}
                  guests={item.guests}
                />
             
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
