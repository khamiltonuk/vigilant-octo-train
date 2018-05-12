import React from "react";

import "./History.css";

export default function History(props) {
  const { removeValue, values } = props;
  return (
    <ul className="history group">
      {values.map((el, i) => {
        return (
          <li key={i}>
            {el} <button onClick={() => removeValue(i)}>&#10006;</button>
          </li>
        );
      })}
    </ul>
  );
}
