import "./main.css";
import React from "react";

const StreamItem = ({ video, onVideoSelect, user, onUsersSelect }) => {
  let str = video.thumbnail_url;
  let thumbres = str.replace("{width}", 320).replace("{height}", 180);

  let v = video.viewer_count;
  let vc = v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div onClick={() => onVideoSelect(video)}>
      <div className="thumb-link">
        <img className="thumb-img" alt={video.title} src={thumbres} />
        <div className="thumb-live">
          <div className="live-dot">
            <i className="fas fa-circle" />
            {video.type}
          </div>
        </div>
        <div className="thumb-text">{vc} viewers</div>
      </div>
      <div className="thumb-title">{video.title}</div>
      <div className="thumb-user">{video.user_name}</div>
    </div>
  );
};

export default StreamItem;
