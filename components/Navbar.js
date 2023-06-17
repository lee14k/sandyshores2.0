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
              <li>
                <Link href="/thelodge">The Lodge</Link>
              </li>
              <li>
                <Link href="/sunrisesuite">Sunrise Suite</Link>
              </li>
              <li>
                <Link href="/cottageone">Cottage One</Link>
              </li>
              <li>
                <Link href="/cottagetwo">Cottage Two</Link>
              </li>
              <li>
                <Link href="/cottagethree">Cottage Three</Link>
              </li>
              <li>
                <Link href="/cottagefour">Cottage Four</Link>
              </li>
              <li>
                <Link href="/cottagefive">Cottage Five</Link>
              </li>
              <li>
                <Link href="/cottagesix">Cottage Six</Link>
              </li>
              <li>
                <Link href="/cottageseven">Cottage Seven</Link>
              </li>
              <li>
                <Link href="/moteleight">Motel Eight</Link>
              </li>
              <li>
                <Link href="/motelnine">Motel Nine</Link>
              </li>
              <li>
                <Link href="/motelten">Motel Ten</Link>
              </li>
              <li>
                <Link href="/fishshack">Fish Shack</Link>
              </li>
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
