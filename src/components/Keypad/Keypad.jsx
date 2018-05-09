import React from "react";

import "./Keypad.css";

export default function Keypad(props) {
  return (
    <div className="keypad">
      <button className="number-key" onClick={() => props.keypadPress(0)}>
        0
      </button>
      <button className="number-key" onClick={() => props.keypadPress(1)}>
        1
      </button>
      <button className="number-key" onClick={() => props.keypadPress(2)}>
        2
      </button>
      <button className="number-key" onClick={() => props.keypadPress(3)}>
        3
      </button>
      <button className="number-key" onClick={() => props.keypadPress(4)}>
        4
      </button>
      <button className="number-key" onClick={() => props.keypadPress(5)}>
        5
      </button>
      <button className="number-key" onClick={() => props.keypadPress(6)}>
        6
      </button>
      <button className="number-key" onClick={() => props.keypadPress(7)}>
        7
      </button>
      <button className="number-key" onClick={() => props.keypadPress(8)}>
        8
      </button>
      <button className="number-key" onClick={() => props.keypadPress(9)}>
        9
      </button>
      <button className="operation-key">clear</button>
      <button className="operation-key">add</button>
      <button className="operation-key">sum</button>
      <button className="operation-key">mean</button>
      <button className="operation-key">mean of squared</button>
    </div>
  );
}
