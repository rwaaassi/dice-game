import React from "react";

const Player = ({ playerNum, overallScore, currentScore }) => {
  return (
    <div>
      <h1>{playerNum}</h1>
      <h2>Overall Score: {overallScore}</h2>
      <h3>Current Score: {currentScore}</h3>
    </div>
  );
};

export default Player;
