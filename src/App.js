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
  handleInputChange = e => {
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
  clearAll = () => {
    this.setState({
      values: []
    });
  };
  addAllNumbers = () => {
    const { values } = this.state;
    const anwser = addAll(values);
    this.setState({
      displayValue: anwser,
      values: []
    });
  };

  render() {
    const { displayValue } = this.state;
    return (
      <div className="calculator">
        <Screen
          displayValue={displayValue}
          handleChange={this.handleInputChange}
          enterNumber={this.enterNumber}
        />

        <Keypad
          keypadPress={this.keypadPress}
          clearInput={this.clearInput}
          squareAll={squareAll}
          addAll={this.addAllNumbers}
          clearAll={this.clearAll}
          meanAll={meanAll}
          meanOfAllSquared={meanOfAllSquared}
          getVariance={getVariance}
          stringToNumbers={stringToNumbers}
        />
        <History values={this.state.values} />
      </div>
    );
  }
}

export default App;
