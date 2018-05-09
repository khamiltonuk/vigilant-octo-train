import React, { Component } from "react";
import Keypad from "./components/Keypad/Keypad";
import Screen from "./components/Screen/Screen";
import History from "./components/Histroy/History";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="calculator">
        <Screen />
        <History />
        <Keypad />
      </div>
    );
  }
}

export default App;
