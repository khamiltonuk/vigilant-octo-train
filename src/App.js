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
  handleInputChange = event => {
    this.setState({ displayValue: event.target.value });
  };
  keypadPress = val => {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue === "0" ? String(val) : displayValue + val
    });
  };
  enterNumber = e => {
    e.preventDefault();
    const { displayValue, values } = this.state;
    this.setState({
      values: [...values, displayValue],
      displayValue: "0"
    });
  };
  clearInput = () => {
    this.setState({
      displayValue: "0"
    });
  };
  wipeInput = () => {
    if (this.state.displayValue === "0")
      this.setState({
        displayValue: ""
      });
  };
  clearAll = () => {
    this.setState({
      values: []
    });
  };

  removeValue = i => {
    var arr = this.state.values;
    arr.splice(i, 1);
    this.setState({
      values: arr
    });
  };

  calculate = type => {
    const { values } = this.state;
    let anwser;
    switch (type) {
      case "getVariance":
        anwser = getVariance(values);
        break;
      case "meanOfAllSquared":
        anwser = meanOfAllSquared(values);
        break;
      case "meanAll":
        anwser = meanAll(values);
        break;
      case "squareAll":
        anwser = squareAll(values);
        break;
      case "addAll":
        anwser = addAll(values);
        break;
      default:
        anwser = 0;
    }
    this.setState({
      displayValue: anwser,
      values: []
    });
  };

  render() {
    const { displayValue, values } = this.state;
    return (
      <div className="calculator">
        <Screen
          displayValue={displayValue}
          handleChange={this.handleInputChange}
          enterNumber={this.enterNumber}
          wipeInput={this.wipeInput}
        />

        <Keypad
          keypadPress={this.keypadPress}
          clearInput={this.clearInput}
          clearAll={this.clearAll}
          calculate={this.calculate}
          stringToNumbers={stringToNumbers}
        />
        <History values={values} removeValue={this.removeValue} />
      </div>
    );
  }
}

export default App;
