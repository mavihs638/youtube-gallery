// src/App.js
import React from "react";
import videosData from "./videosdata";
import VideoCard from "./videocard";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="header">
        {/* You can add a logo or text for your site's name */}
        <h1>YouTube</h1>
      </div>
      <div className="video-gallery">
        {videosData.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default App;
