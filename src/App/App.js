import React from "react";
import Tap from "../Tap/Tap.js";

class App extends React.Component {
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
      <div className="tap-wrap">
        <Tap label="Button" clickFunction={this.showInConsole} />
        <Tap label="Second button" clickFunction={this.showAlert} />
        <Tap
          label="Buttom with the parameter"
          clickFunction={() =>
            this.showParameterInConsole("Кнопка с параметром")
          }
        />
      </div>
    );
  }
}

export default App;
