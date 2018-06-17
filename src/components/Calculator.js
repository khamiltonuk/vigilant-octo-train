import React from "react";
import Keypad from "./Keypad/Keypad";
import Screen from "./Screen/Screen";
import History from "./History/History";

const Calculator = props => {
  const {
    displayValue,
    enterNumber,
    clearInput,
    keypadPress,
    clearAll,
    calculate,
    values,
    removeValue
  } = props;
  return (
    <div className="calculator">
      <Screen
        displayValue={displayValue}
        keypadPress={keypadPress}
        enterNumber={enterNumber}
        wipeInput={clearInput}
      />
      <Keypad
        keypadPress={keypadPress}
        clearInput={clearInput}
        clearAll={clearAll}
        calculate={calculate}
      />
      <History values={values} removeValue={removeValue} />
    </div>
  );
};

export default Calculator;
