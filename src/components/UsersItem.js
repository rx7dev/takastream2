import "./main.css";
import React from "react";

const UsersItem = ({ user, onUsersSelect }) => {
  let strss = user.profile_image_url;
  let thumbusersres = strss.replace("{width}", 285).replace("{height}", 380);
  return (
    <div>
      <div className="thumb-link">
        <img className="thumb-tg" alt={user.display_name} src={thumbusersres} />
      </div>
      <div className="thumb-tg-title">
        {user.display_name} | {user.broadcaster_type}
      </div>
    </div>
  );
};

export default UsersItem;
