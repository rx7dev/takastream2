import "./main.css";
import React from "react";

const TopGamesItem = ({ game, onTopGameSelect }) => {
  let strs = game.box_art_url;
  let thumbgamesres = strs.replace("{width}", 285).replace("{height}", 380);
  return (
    <div>
      <div className="thumb-link">
        <img className="thumb-tg" alt={game.name} src={thumbgamesres} />
      </div>
      <div className="thumb-tg-title">{game.name}</div>
    </div>
  );
};

export default TopGamesItem;
