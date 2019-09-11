import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props){
    super(props);


    this.state = {
      img: props.cardImg,
      id: props.cardId,
      altTxt: props.cardAtlTxt 
    };
  }

  handleClick = () => {
    this.props.gameUpdate(this.state.id);
  }

  render() {
    return (
      <div className="col-lg-2 col-md-4 col-6 px-0 mb-2">
        <img className="img-fluid card-img" src={this.state.img} alt={this.state.altTxt} onClick={this.handleClick}></img>
      </div>
    )
  }
}

export default Card;