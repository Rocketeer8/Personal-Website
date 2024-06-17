// ScrollArrows.js
import React from 'react';
import './ScrollArrows.css';

const ScrollArrows = () => {
  const sections = ['header-section', 'about-section', 'projects-section', 'contact-section'];

  const smoothScrollTo = (targetPosition, duration) => {
    const start = window.scrollY;
    const distance = targetPosition - start;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const scrollToSection = (direction) => {
    const offsets = sections.map(section => {
      const element = document.getElementById(section);
      return {
        section,
        offset: element ? element.getBoundingClientRect().top : Infinity,
      };
    });

    offsets.sort((a, b) => Math.abs(a.offset) - Math.abs(b.offset));
    const currentSection = offsets[0].section;
    const currentSectionIndex = sections.indexOf(currentSection);

    let nextSectionIndex;
    if (direction === 'down') {
      nextSectionIndex = currentSectionIndex + 1 < sections.length ? currentSectionIndex + 1 : 0;
    } else {
      nextSectionIndex = currentSectionIndex - 1 >= 0 ? currentSectionIndex - 1 : sections.length - 1;
    }

    const nextSection = document.getElementById(sections[nextSectionIndex]);
    const targetPosition = nextSection.offsetTop;
    smoothScrollTo(targetPosition, 1000); // Adjust the duration as needed
  };

  return (
    <div className="scroll-arrows">
      <button onClick={() => scrollToSection('up')}>&uarr;</button>
      <button onClick={() => scrollToSection('down')}>&darr;</button>
    </div>
  );
};

export default ScrollArrows;
