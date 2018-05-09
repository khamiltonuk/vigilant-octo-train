import React, { Component } from "react";
import Keypad from "./components/Keypad/Keypad";
import Screen from "./components/Screen/Screen";
import History from "./components/Histroy/History";
import {
  squareAll,
  addAll,
  meanAll,
  meanOfAllSquared,
  getVariance,
  stringToNumbers
} from "./helpers/helper";
import "./App.css";

class App extends Component {
  state = {
    displayValue: "0",
    values: []
  };
  handleChange = e => {
    console.log(e);
  };
  keypadPress = val => {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue === "0" ? String(val) : displayValue + val
    });
  };
  enterNumber = () => {
    const { displayValue, values } = this.state;
    this.setState({
      values: [...values, displayValue],
      displayValue: "0"
    });
    console.log(this.state);
  };
  clearInput = () => {
    this.setState({
      displayValue: "0"
    });
  };
  doMaths = () => {
    const { values } = this.state;
    this.setState({
      displayValue: anwser
    });
  };

  render() {
    const { displayValue } = this.state;
    return (
      <div className="calculator">
        <Screen
          displayValue={displayValue}
          handleChange={this.handleChange}
          enterNumber={this.enterNumber}
        />
        <History values={this.state.values} />
        <Keypad
          keypadPress={this.keypadPress}
          clearInput={this.clearInput}
          squareAll={squareAll}
          addAll={addAll}
          meanAll={meanAll}
          meanOfAllSquared={meanOfAllSquared}
          getVariance={getVariance}
          stringToNumbers={stringToNumbers}
        />
      </div>
    );
  }
}

export default App;
