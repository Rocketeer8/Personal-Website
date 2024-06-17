import React from 'react';
import './VideoBackground.css'; // Import CSS file for styling

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src="./src/assets/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Your other content goes here */}
    </div>
  );
}

export default VideoBackground;
