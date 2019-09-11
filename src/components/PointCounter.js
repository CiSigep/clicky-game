import React from "react";

class PointCounter extends React.Component {
  constructor(props){
    super(props);


    this.state = {
      points: 0,
      topPoints: 0
    };
  }

  // Increments our points and ups the top points if its greater than
  incrementPoints = () => {
    let newPoints = this.state.points + 1;
    this.setState({
      points: newPoints,
      topPoints: newPoints > this.state.topPoints ? newPoints : this.state.topPoints
    });
  }

  // Resets the point counter
  resetPoints = () => {
    this.setState({points: 0});
  }

  render() {
    return(
      <div className="ml-auto nav-text stylized-text">
        Top: {this.state.topPoints} | Points: {this.state.points}
      </div>
    );
  }
}

export default PointCounter;