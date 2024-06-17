// App.js
import React from 'react';
import VideoBackground from './VideoBackground';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';
import Contact from './Contact';
import './App.css';
import ScrollArrows from './ScrollArrows'; // Import the ScrollArrows component

const App = () => {
  return (
    <div className="app">
      <VideoBackground /> {/* Render the VideoBackground component */}
      <div className="content">
        <Navbar />
        <Header id="header-section" />
        <About id="about-section" />
        <ProjectsSection id="projects-section" />
        <Contact id="contact-section" />
        <Footer />
      </div>
      <ScrollArrows />
    </div>
  );
};

export default App;
