// src/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top;
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Calculate the distance and duration for the smooth scroll
      const distance = offsetTop - 60; // Adjusted distance from top, 60px is for navbar height
      const duration = 1000; // Duration of the scroll animation in milliseconds

      // Start time is current time
      let startTime = null;

      // Use requestAnimationFrame to smooth scroll
      const animateScroll = (currentTime) => {
        if (!startTime) {
          startTime = currentTime;
        }

        // Calculate progress of scroll animation
        const timeElapsed = currentTime - startTime;
        const ease = easeInOutQuad(timeElapsed, scrollPosition, distance, duration);

        // Perform the scroll
        window.scrollTo(0, ease);

        // Continue scrolling if not finished
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      // Ease in out function
      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      // Start the animation
      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Danny Liu</div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="#home" className="navbar-link" onClick={(e) => handleScroll(e, 'header-section')}>Home</a>
        </li>
        <li className="navbar-item">
          <a href="#about" className="navbar-link" onClick={(e) => handleScroll(e, 'about-section')}>About</a>
        </li>
        <li className="navbar-item">
          <a href="#projects" className="navbar-link" onClick={(e) => handleScroll(e, 'projects-section')}>Projects</a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className="navbar-link" onClick={(e) => handleScroll(e, 'contact-section')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
