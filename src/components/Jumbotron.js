import React from "react";

const Jumbotron = props => {
  return(
    <div className="jumbotron bg-red rounded-0 border-top border-bottom border-white">
      <h1 className="display-4  text-white stylized-text">Arcana Clicker</h1>
      <p className="text-white stylized-text">Click a card to earn points, but don't click a card more than once.</p>
    </div>
  )
};

export default Jumbotron;