'use client'
import './Navbar.css';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Check initial window width on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleHamburger = () => {
    setDropdown(false); // Close the dropdown when toggling the hamburger
    setShowMobile(!showMobile);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    setDropdown(!dropdown);
  };

  return (
    <div className="navbar">
      {typeof window !== 'undefined' && isMobile && (
        <div className={`hamburger-icon ${showMobile && !dropdown ? 'open' : ''}`} onClick={toggleHamburger}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      )}
      {(showMobile || !isMobile || dropdown) && (
        <ul className={`nav ${dropdown ? 'open' : ''}`}>
          <li>
            <Image 
            src='/flogo.png'
            height={30}
            width={30}
            />
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>Contact Us</li>
          <li onClick={handleDropdownClick} className={`dropdown-item ${dropdown ? 'open' : ''}`}>
            Cottages
          </li>
          {dropdown && (
            <ul>
              <li>The Lodge</li>
              <li>Sunrise Suite</li>
              <li>Cottage One</li>
              <li>Cottage Two</li>
              <li>Cottage Three</li>
              <li>Cottage Four</li>
              <li>Cottage Five</li>
              <li>Cottage Six</li>
              <li>Cottage Seven</li>
              <li>Motel Eight</li>
              <li>Motel Nine</li>
              <li>Motel Ten</li>
              <li>Fish Shack</li>

            </ul>
          )}
          <li>Policies</li>
          <li>Reserve your Stay</li>
          <li>Local Attractions</li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
