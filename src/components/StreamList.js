import React from "react";
import StreamItem from "./StreamItem";

const StreamList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <StreamItem key={video.id} onVideoSelect={onVideoSelect} video={video} />
    );
  });
  return (
    <div className="fluid-container">
      <div className="list">
        <div className="wrapper">{renderedList}</div>
      </div>
    </div>
  );
};

export default StreamList;
