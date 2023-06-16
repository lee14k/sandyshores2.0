'use client'
import './Slideshow.css';
import React, { useState, useEffect, useRef } from 'react';

const Slideshow = ({ images, imageSize, autoplayDelay }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const slideshowRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [images.length, autoplayDelay]);

  useEffect(() => {
    setIsLoaded(false); // Reset the loaded status when the current slide changes
  }, [currentSlide]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    transition: 'opacity 1s ease 1s',
    opacity: isLoaded ? 1 : 0,
  };

  return (
    <div className='slideshowcontainer' ref={slideshowRef}>
      <img
        src={images[currentSlide]}
        style={imageStyle}
        onLoad={handleImageLoad}
        alt={`Slide ${currentSlide}`}
      />
    </div>
  );
};

export default Slideshow;
