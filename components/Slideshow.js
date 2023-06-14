'use client'
import './Slideshow.css';
import React, {useState} from 'react'

const Slideshow = ({images, imageSize}) => {
    const [currentSlide, setCurrentSlide]= useState(0)

    const nextSlide = ()=> {
        setCurrentSlide((prevSlide)=>(prevSlide+1)%images.length)

    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
      };
    
      const imageStyle = {
        width: imageSize,
        height: 'auto',
        
      };
    
      return (
        <div className='slideshowcontainer'>
          <button onClick={prevSlide}>Previous</button>
          <img src={images[currentSlide]} style={imageStyle} />
          <button onClick={nextSlide}>Next</button>
        </div>
      );
    };
    
    export default Slideshow;
