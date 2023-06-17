'use client'
import './Slideshow.css';
import React, { useState, useEffect, useRef } from 'react';

const Slideshow = ({ images, imageSize, autoplayDelay }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState([]);
  const slideshowRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [images.length, autoplayDelay]);

  useEffect(() => {
    setLoadedSlides([]);
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    const handleLoad = (index) => {
      setLoadedSlides((prevLoadedSlides) => [...prevLoadedSlides, index]);
    };

    const handleSlideChange = () => {
      setLoadedSlides([]); // Reset loaded slides when changing slides
    };

    if (currentSlide === 0) {
      // Immediately mark the first slide as loaded
      handleLoad(currentSlide);
    } else if (!loadedSlides.includes(currentSlide)) {
      // Load the current slide when it's not already loaded
      const image = new Image();
      image.src = images[currentSlide];
      image.onload = () => handleLoad(currentSlide);
    }

    slideshowRef.current.addEventListener('transitionend', handleSlideChange);

    return () => {
      slideshowRef.current.removeEventListener('transitionend', handleSlideChange);
    };
  }, [currentSlide, images, loadedSlides]);

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    transition: 'opacity 0.5s ease',
    opacity: loadedSlides.includes(currentSlide) ? 1 : 0,
  };

  return (
    <div className='slideshowcontainer' ref={slideshowRef}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          style={{
            ...imageStyle,
            display: currentSlide === index ? 'block' : 'none',
          }}
          alt={`Slide ${index}`}
        />
      ))}
    </div>
  );
};

export default Slideshow;

