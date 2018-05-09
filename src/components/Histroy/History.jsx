import React from "react";

import "./History.css";

export default function History(props) {
  const { removeValue, values } = props;
  return (
    <ul>
      {values.map(el => {
        return (
          <li>
            {el} <button onClick={removeValue}>x</button>
          </li>
        );
      })}
    </ul>
  );
}
