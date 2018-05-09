import React, { Component } from "react";
import Keypad from "./components/Keypad/Keypad";
import Screen from "./components/Screen/Screen";
import History from "./components/Histroy/History";
import "./App.css";

class App extends Component {
  state = {
    displayValue: "0",
    values: []
  };
  keypadPress = val => {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue + val
    });
  };
  render() {
    const { displayValue } = this.state;
    return (
      <div className="calculator">
        <Screen displayValue={displayValue} />
        <History />
        <Keypad keypadPress={this.keypadPress} />
      </div>
    );
  }
}

export default App;
