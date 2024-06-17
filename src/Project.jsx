// Project.js
import React from 'react';
import "./Project.css";

const Project = ({ title, description, mediaUrl, mediaType }) => {
  return (
    <div className="project-card">
      {mediaType === 'image' ? (
        <img className="project-image" src={mediaUrl} alt={title} />
      ) : (
        <video className="project-video" controls>
          <source src={mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default Project;