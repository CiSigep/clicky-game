import React from "react";
import Nav from "./nav/Nav";
import PointCounter from "./PointCounter";
import Card from "./card/Card";
import cards from "../cards.json";
import Jumbotron from "./Jumbotron";

class Game extends React.Component {
  constructor(props){
    super(props);

    this.selectedCardIds = [];

    this.state = {
      cards: cards,
      started: false
    }
  }


  update = (cardId) => {
    this.setState({started: true});
    if(this.selectedCardIds.indexOf(cardId) === -1){
      this.counter.incrementPoints();
      this.selectedCardIds.push(cardId);
    }
    else {
      this.selectedCardIds = [];
      this.counter.resetPoints();
    }
    this.shuffleCards();
  }

  shuffleCards = () => {
    let cardsArray = [...this.state.cards];

    for (let i = cardsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }

    this.setState({cards: cardsArray});
  }

  render() {
    return(
      <div>
        <Nav>
          <PointCounter ref={(counter) => { this.counter = counter }} />
        </Nav>
        {!this.state.started && <Jumbotron />}
        <div className="container-fluid mx-0 px-0 mt-2">
          <div className="row m-auto">
            {
              this.state.cards.map(ele => {
                return (<Card key={ele.cardId} cardId={ele.cardId} cardImg={ele.cardImg} altTxt={ele.altTxt} gameUpdate={this.update} />);
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Game;