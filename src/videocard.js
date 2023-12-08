// src/VideoCard.js
import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <img src={video.thumbnail} alt={video.title} />
      <div className="video-info">
        <h3>{video.title}</h3>
        <p>{video.views} views • {video.likes} likes</p>
        <div className="channel-info">
          <img src={video.channelLogo} alt={video.channelName} />
          <p>{video.channelName}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
