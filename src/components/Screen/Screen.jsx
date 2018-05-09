import React from "react";
import "./Screen.css";

export default function Screen() {
  const state = {
    displayValue: "helo",
    values: []
  };
  function handleChange(e) {
    console.log(e);
    // disable keypress for leters
  }
  function addValue(value) {
    // push value into array on enter press
    this.setState({
      values: this.state.values.push(value),
      displayValue: ""
    });
  }
  return (
    <div>
      <input onChange={e => handleChange(e)} />
      <button
        type="submit"
        onClick={() => {
          addValue(state.displayValue);
        }}
      />
    </div>
  );
}
