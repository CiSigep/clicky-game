import React from "react";
import PointCounter from "./PointCounter";
import Card from "./Card";

class Game extends React.Component {
  constructor(props){
    super(props);

    this.cardId = -1;
  }


  update = (cardId) => {
    if(this.cardId === -1)
      this.cardId = cardId;
    else if(this.cardId === cardId)
      this.counter.incrementPoints();
    else if(this.cardId !== cardId){
      this.cardId = -1;
      this.counter.resetPoints();
    }
  }

  render() {
    return(
    <div>
      <PointCounter ref={(counter) => {this.counter = counter}}/>
      <Card gameUpdate={this.update} cardId={1} altTxt="fool" cardImg="img/fool.png"/>
      <Card gameUpdate={this.update} cardId={2} altTxt="world" cardImg="img/world.png"/>
    </div>
    );
  }
}

export default Game;