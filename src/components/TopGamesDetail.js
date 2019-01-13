import React from "react";

const TopGamesDetail = ({ game }) => {
  if (!game) {
    return <div>Loading...</div>;
  }

  return <div className="fluid-container" />;
};

export default TopGamesDetail;
