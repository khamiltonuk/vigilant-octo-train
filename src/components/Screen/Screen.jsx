import React from "react";
import "./Screen.css";

export default function Screen(props) {
  const calculatedFontSize = props.displayValue.length > 10 ? "1em" : "2em";
  console.log(calculatedFontSize);
  return (
    <div className="screen">
      <input
        style={{ fontSize: calculatedFontSize }}
        onChange={e => props.handleChange(e)}
        value={props.displayValue}
      />
      <button type="submit" onClick={() => props.enterNumber()}>
        Input number
      </button>
    </div>
  );
}
