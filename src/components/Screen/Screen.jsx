import React from "react";
import "./Screen.css";

export default function Screen(props) {
  return (
    <div className="screen">
      <input onChange={e => props.handleChange(e)} value={props.displayValue} />
      <button type="submit" />
    </div>
  );
}
