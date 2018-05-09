import React from "react";

import "./Keypad.css";

export default function Keypad(props) {
  const {
    keypadPress,
    clearInput,
    clearAll,
    addAll,
    sqaureAll,
    meanAll,
    getVariance,
    meanOfAllSquared
  } = props;
  return (
    <div className="keypad">
      <button className="number-key" onClick={() => keypadPress(0)}>
        0
      </button>
      <button className="number-key" onClick={() => keypadPress(1)}>
        1
      </button>
      <button className="number-key" onClick={() => keypadPress(2)}>
        2
      </button>
      <button className="number-key" onClick={() => keypadPress(3)}>
        3
      </button>
      <button className="number-key" onClick={() => keypadPress(4)}>
        4
      </button>
      <button className="number-key" onClick={() => keypadPress(5)}>
        5
      </button>
      <button className="number-key" onClick={() => keypadPress(6)}>
        6
      </button>
      <button className="number-key" onClick={() => keypadPress(7)}>
        7
      </button>
      <button className="number-key" onClick={() => keypadPress(8)}>
        8
      </button>
      <button className="number-key" onClick={() => keypadPress(9)}>
        9
      </button>
      <button className="operation-key" onClick={() => clearInput()}>
        clear
      </button>
      <button className="operation-key" onClick={() => clearAll()}>
        clear all
      </button>
      <button className="operation-key" onClick={() => addAll()}>
        add
      </button>
      <button className="operation-key" onClick={() => sqaureAll()}>
        square all
      </button>
      <button className="operation-key" onClick={() => meanAll()}>
        mean
      </button>
      <button className="operation-key" onClick={() => meanOfAllSquared()}>
        mean of squared
      </button>
      <button className="operation-key" onClick={() => getVariance()}>
        get variance
      </button>
    </div>
  );
}
