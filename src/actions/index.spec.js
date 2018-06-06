import * as actions from "./index";
import * as types from "../constants/actionTypes";

describe("Actions", () => {
  test("calculate should create an action with an operation", () => {
    const operation = "addAll";
    const expectedAction = {
      type: types.CALCULATE,
      payload: operation
    };
    expect(actions.calculate("addAll")).toEqual(expectedAction);
  });

  test("clearAll should create an action clear all", () => {
    const expectedAction = {
      type: types.CLEAR_ALL
    };
    expect(actions.clearAll()).toEqual(expectedAction);
  });

  test("clearInput should create an action clear input", () => {
    const expectedAction = {
      type: types.CLEAR_INPUT
    };
    expect(actions.clearInput()).toEqual(expectedAction);
  });

  test("removeValue should create an action remove value with id", () => {
    const id = 4;
    const expectedAction = {
      type: types.REMOVE_VALUE,
      payload: id
    };
    expect(actions.removeValue(4)).toEqual(expectedAction);
  });

  test("enterNumber should create an action enter number with value", () => {
    const value = 4;
    const expectedAction = {
      type: types.ENTER_NUMBER,
      payload: value
    };
    expect(actions.enterNumber(4)).toEqual(expectedAction);
  });

  test("keypadPress should create an action keypad press with value", () => {
    const value = 4;
    const expectedAction = {
      type: types.KEYPAD_PRESS,
      payload: value
    };
    expect(actions.keypadPress(4)).toEqual(expectedAction);
  });
});
