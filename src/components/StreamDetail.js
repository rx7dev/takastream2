import React from "react";

const StreamDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://player.twitch.tv/?channel=${video.user_name}`;
  return (
    <div className="fluid-container">
      <div className="featured-section">
        <div className="player-container">
          <div className="main-player">
            <iframe
              title="title"
              src={videoSrc}
              height="372"
              width="660"
              frameBorder="0"
              scrolling="no"
              allowFullScreen={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamDetail;
