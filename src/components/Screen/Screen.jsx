import React from "react";
import "./Screen.css";

export default function Screen(props) {
  const calculatedFontSize = props.displayValue.length > 10 ? "1em" : "2em";
  return (
    <form className="screen" onSubmit={e => props.enterNumber(e)}>
      <input
        pattern="\d*"
        style={{ fontSize: calculatedFontSize }}
        onChange={e => props.handleChange(e)}
        onFocus={props.wipeInput}
        autoFocus="true"
        value={props.displayValue}
      />
      <button type="submit">Input number</button>
    </form>
  );
}
