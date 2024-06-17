// ProjectsSection.js
import React from 'react';
import Project from './Project';
import "./ProjectsSection.css";

const ProjectsSection = () => {

  return (
    <section id="projects-section">
      <div className="title-card">
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-subtitle">- Turning Ideas into Reality</div>
      </div>

      <div className="projects-content">
        <a href="http://clothing-material-web-scraper-site.s3-website.us-east-2.amazonaws.com/">
          <Project
            title="ECOture"
            description="This project extracts material data from Old Navy clothing items using web crawlers and provides an Eco-friendliness score based on the item's URL."
            mediaUrl="./src/assets/ECOture2.png"
            mediaType="image"
          />
        </a>
        <a href="https://rocketeer8.github.io/Beach-Weather-Search/">
          <Project
            title="Beach Ahoy"
            description="A search engine where users can enter an address to see its map location, weather conditions, and radiation levels."
            mediaUrl="./src/assets/BeachAhoy.mp4"
            mediaType="video"
          />
        </a>
        <a href="https://chromewebstore.google.com/detail/tab-tamer-custom-tab-limi/hjgbnhdbbbikpdacndhijhcaceeghlfj?hl=en&authuser=0">
          <Project
            title="Tab Tamer"
            description="Built a browser extension that helps manage tab clutter by allowing users to set a maximum number of tabs. It offers different closing modes and optional warning messages when the limit is reached."
            mediaUrl="./src/assets/Tab Tamer.png"
            mediaType="image"
          />
        </a>
        <a href="https://github.com/Rocketeer8/Data-Mining">
          <Project
            title="AI Prediction on Dataset"
            description="This project uses machine learning to predict COVID hospitalizations and insurance claim approvals with optimal algorithms."
            mediaUrl="./src/assets/data mining project enlarge.png"
            mediaType="image"
          />
        </a>
        <a href="https://corporate.thediabetesapp.com/">
          <Project
            title="Corprate Site (The Diabetes App)"
            description="A website that promotes a mobile app that fosters a social community for diabetic patients, while also providing informative articles on diabetes management."
            mediaUrl="./src/assets/TDA.png"
            mediaType="image"
          />
        </a>
      </div>

      <div className="and-more">
        Check out my <a className="github-link" href="https://github.com/Rocketeer8">GitHub</a> for more!
      </div>
    </section>
  );
};

export default ProjectsSection;
