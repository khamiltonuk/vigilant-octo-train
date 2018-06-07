import React from "react";
import FlipMove from "react-flip-move";

import "./History.css";

export default function History(props) {
  const { removeValue, values } = props;
  const historyItem = values.map((el, i) => {
    return (
      <li key={i}>
        {el} <button onClick={() => removeValue(i)}>&#10006;</button>
      </li>
    );
  });
  return (
    <ul className="history group">
      <FlipMove duration={250} easing="ease-out">
        {historyItem}
      </FlipMove>
    </ul>
  );
}
