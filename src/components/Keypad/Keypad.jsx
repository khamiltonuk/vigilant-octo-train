import React from "react";

import "./Keypad.css";

export default function Keypad() {
  return (
    <div className="keypad">
      <button className="number-key">1</button>
      <button className="number-key">2</button>
      <button className="number-key">3</button>
      <button className="number-key">4</button>
      <button className="number-key">5</button>
      <button className="number-key">6</button>
      <button className="number-key">7</button>
      <button className="number-key">8</button>
      <button className="number-key">9</button>
      <button className="operation-key">clear</button>
      <button className="operation-key">add</button>
      <button className="operation-key">sum</button>
      <button className="operation-key">mean</button>
      <button className="operation-key">mean of squared</button>
    </div>
  );
}
