import React from "react";
import Tap from "../Tap/Tap.js";
import Button from "../Button/Button.js";
import "./App.css";

class App extends React.Component {
  state = {
    number: 0
  };

  minus = () => {
    this.setState({ number: this.state.number - 1 });
  };

  plus = () => {
    this.setState({ number: this.state.number + 1 });
  };

  showInConsole = () => {
    console.log("The message is displayed in the console");
  };

  showAlert = () => {
    alert("The message showed by alert");
  };

  showParameterInConsole = (param) => {
    console.log(param);
  };

  render() {
    return (
      <div className="app-wrap">
        <div className="tap-wrap">
          <Tap label="Button" clickFunction={this.showInConsole} />
          <Tap label="Second button" clickFunction={this.showAlert} />
          <Tap
            label="Button with the parameter"
            clickFunction={() =>
              this.showParameterInConsole("Button with the parameter")
            }
          />
        </div>
        <div className="button-wrap">
          <Button label="Minus" onClick={this.minus} />
          <div className="button__number">{this.state.number}</div>
          <Button label="Plus" onClick={this.plus} />
        </div>
      </div>
    );
  }
}

export default App;
