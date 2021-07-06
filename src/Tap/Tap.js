import React from "react";

class Tap extends React.Component {
  render() {
    return (
      <button onClick={this.props.clickFunction} className="tap__button">
        {this.props.label}
      </button>
    );
  }
}

export default Tap;
