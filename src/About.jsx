import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-container" id="about-section">
      <div className="about-portrait">
        <img
          className="profile-picture"
          src="./src/assets/profile-pic.jpg"
          alt="Profile Picture"
        />
      </div>
      <div className="about-text">
        <h1>About Me</h1>
        <p>I am Danny. I love creating web applications, exploring new technologies, and learning continuously.</p>

        <p>I bring my skills in software development, data analysis, and UX/UI design to tackle projects creatively. I am always up for a challenge and love working with awesome teams to bring ideas to life.  </p>

        <p>I love the beauty and tranquility of the night. In my free time, I find joy in staying active and cooking. </p>
        <div className="social-links">
          <a href="https://github.com/Rocketeer8?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img src="./src/assets/github-mark-white.png" alt="GitHub" className="social-icon github-icon" />
          </a>
          <a href="https://www.linkedin.com/in/danny-liu-haining/" target="_blank" rel="noopener noreferrer">
            <img src="./src/assets/LI-In-Bug.png" alt="LinkedIn" className="social-icon linkedin-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
