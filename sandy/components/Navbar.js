'use client'
import './Navbar.css';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>Contact Us</li>
          <li onClick={handleDropdownClick} className={`dropdown-item ${dropdown ? 'open' : ''}`}>
            Dropdown
          </li>
          {dropdown && (
            <ul>
              <li>Dropdown item</li>
              <li>Dropdown item</li>
              <li>Dropdown item</li>
              <li>Dropdown item</li>
              <li>Dropdown item</li>
            </ul>
          )}
          <li>Placeholder 1</li>
          <li>Placeholder 2</li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
