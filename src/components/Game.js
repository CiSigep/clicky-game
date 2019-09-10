import React from "react";
import PointCounter from "./PointCounter";
import Card from "./Card";
import cards from "../cards.json";

class Game extends React.Component {
  constructor(props){
    super(props);

    this.cardId = -1;

    this.state = {
      cards: cards
    }
  }


  update = (cardId) => {
    if(this.cardId === -1){
      this.counter.incrementPoints();
      this.cardId = cardId;
    }
    else if(this.cardId === cardId)
      this.counter.incrementPoints();
    else if(this.cardId !== cardId){
      this.cardId = -1;
      this.counter.resetPoints();
    }
    this.shuffleCards();
  }

  shuffleCards = () => {
    let cardsArray = this.state.cards.slice(0);

    for (let i = cardsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }

    this.setState({cards: cardsArray});
  }

  render() {
    return(
    <div>
      <PointCounter ref={(counter) => {this.counter = counter}}/>
      {
        this.state.cards.map(ele => {
          return (<Card key={ele.cardId} cardId={ele.cardId} cardImg={ele.cardImg} altTxt={ele.altTxt} gameUpdate={this.update}/>);
        })
      }
    </div>
    );
  }
}

export default Game;