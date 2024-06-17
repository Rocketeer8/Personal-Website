// Header.js
import React from 'react';
import "./Header.css";

const Header = () => {

  return (
    <header id="header-section" className="header">
      <div className="header-content">
        <h1 className="title">Charting Dreams, One Star at a Time</h1>
        <div className="sub-text">Welcome to my website!</div>
        {/*
        <div className="scroll-down" onClick={handleScroll}>
          <span>&#8595;</span>
        </div>
        */}
      </div>
    </header>
  );
};

export default Header;
