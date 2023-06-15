'use client'
import './Slideshow.css';
import React, {useState, useEffect} from 'react'

const Slideshow = ({images, imageSize, autoplayDelay}) => {
    const [currentSlide, setCurrentSlide]= useState(0)

  useEffect(()=> {
    const interval = setInterval(()=> {
      setCurrentSlide ((prevSlide)=> (prevSlide+1) % images.length)}, autoplayDelay);

      return ()=> clearInterval(interval);
    }, [images.length,autoplayDelay])
    
      const imageStyle = {
        width: imageSize,
        height: 'auto',
        
      };
    
      return (
        <div className='slideshowcontainer'>
     
          <img src={images[currentSlide]} style={imageStyle} />
       
        </div>
      );
    };
    
    export default Slideshow;
