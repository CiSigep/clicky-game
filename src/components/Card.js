import React from "react";

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
      <div>
        <img src={this.state.img} alt={this.state.altTxt} onClick={this.handleClick}></img>
      </div>
    )
  }
}

export default Card;