import React from "react";
import "./Tap.css";

class Tap extends React.Component {
  render() {
    return (
      <button onClick={this.props.clickFunction} className="button">
        {this.props.label}
      </button>
    );
  }
}

export default Tap;
