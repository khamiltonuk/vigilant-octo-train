import React from "react";

import "./Keypad.css";

export default function Keypad(props) {
  const { keypadPress, clearInput, clearAll, calculate } = props;
  const operations = [
    "Add All",
    "Aquare All",
    "Mean All",
    "Mean of All Squared",
    "Get Variance"
  ];
  return (
    <div className="keypad group">
      {[...Array(10)].map((e, i) => (
        <button className="number-key" key={i} onClick={() => keypadPress(i)}>
          {i}
        </button>
      ))}
      <button className="operation-key" onClick={() => clearInput()}>
        clear
      </button>
      <button className="operation-key" onClick={() => clearAll()}>
        clear all
      </button>
      {operations.map((e, i) => (
        <button className="operation-key" key={i} onClick={() => calculate(e)}>
          {e}
        </button>
      ))}
    </div>
  );
}
