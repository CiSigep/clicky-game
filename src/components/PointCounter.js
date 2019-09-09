import React from "react";

class PointCounter extends React.Component {
  constructor(props){
    super(props);


    this.state = {
      points: 0
    };
  }

  incrementPoints = () => {
    this.setState({points: this.state.points + 1});
  }

  resetPoints = () => {
    this.setState({points: 0});
  }

  render() {
    return(
      <div>
        Points: {this.state.points}
      </div>
    );
  }
}

export default PointCounter;