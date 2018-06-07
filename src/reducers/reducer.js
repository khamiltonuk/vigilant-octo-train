import {
  CALCULATE,
  CLEAR_ALL,
  CLEAR_INPUT,
  REMOVE_VALUE,
  ENTER_NUMBER,
  KEYPAD_PRESS
} from "../constants/actionTypes";
import { calculateOperation } from "../helpers/helper";

const initialState = {
  displayValue: "0",
  values: []
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case CALCULATE:
      if (state.values.length > 0) {
        return {
          ...state,
          displayValue: calculateOperation(state.values, payload),
          values: []
        };
      } else {
        return state;
      }
    case ENTER_NUMBER:
      return {
        ...state,
        displayValue: "0",
        values: [...state.values, parseInt(payload, 10).toString()]
      };
    case CLEAR_ALL:
      return { ...state, values: [] };
    case CLEAR_INPUT:
      return { ...state, displayValue: "" };
    case REMOVE_VALUE:
      return {
        ...state,
        values: [
          ...state.values.slice(0, payload),
          ...state.values.slice(payload + 1)
        ]
      };
    case KEYPAD_PRESS:
      return { ...state, displayValue: state.displayValue + payload };
    default:
      return state;
  }
}
