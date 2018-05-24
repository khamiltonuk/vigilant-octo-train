import * as types from "../constants/actionTypes";

export function calculate(operation) {
  return {
    type: types.CALCULATE,
    payload: operation
  };
}

export function clearAll() {
  return {
    type: types.CLEAR_ALL
  };
}

export function clearInput() {
  return {
    type: types.CLEAR_INPUT
  };
}

export function removeValue(id) {
  return {
    type: types.REMOVE_VALUE,
    payload: id
  };
}

export function enterNumber(value) {
  return {
    type: types.ENTER_NUMBER,
    payload: value
  };
}

export function keypadPress(value) {
  return {
    type: types.KEYPAD_PRESS,
    payload: value
  };
}
