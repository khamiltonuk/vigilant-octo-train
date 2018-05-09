import React from "react";

import "./History.css";

export default function History(props) {
  const { removeValue, values } = props;
  return (
    <ul className="history group">
      {values.map(el => {
        return (
          <li>
            {el} <button onClick={removeValue}>&#10006;</button>
          </li>
        );
      })}
    </ul>
  );
}
