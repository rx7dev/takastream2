import React from "react";
import TopGamesItem from "./TopGamesItem";

const TopGamesList = ({ games, onTopGameSelect }) => {
  const renderedGamesList = games.map(game => {
    return (
      <TopGamesItem
        key={game.id}
        onTopGameSelect={onTopGameSelect}
        game={game}
      />
    );
  });
  return (
    <div className="fluid-container">
      <div className="list">
        <div className="wrapper-tg">{renderedGamesList}</div>
      </div>
    </div>
  );
};

export default TopGamesList;
