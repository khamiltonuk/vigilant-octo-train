import React from "react";
import "./Screen.css";

export default function Screen(props) {
  function handleChange(e) {
    //console.log("change");
    props.displayValue = e.target.value;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (props.displayValue !== "0" && props.displayValue !== "") {
      props.enterNumber(props.displayValue);
    }
  }
  const calculatedFontSize =
    props.displayValue && props.displayValue.lenght > 10 ? "1em" : "2em";
  return (
    <form className="screen" onSubmit={handleSubmit}>
      <input
        pattern="\d*"
        style={{ fontSize: calculatedFontSize }}
        onChange={e => handleChange(e)}
        onFocus={props.wipeInput}
        autoFocus="true"
        data-q="input-field"
        value={props.displayValue}
      />
      <button type="submit" data-q="input-number">
        Input number
      </button>
    </form>
  );
}
