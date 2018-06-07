import reducers from "./reducer";

describe("Reducer", () => {
  describe("CALCULATE", () => {
    test("should addALL if values contain any values", () => {
      let state;
      state = reducers(
        { displayValue: "0", values: ["3", "22"] },
        { type: "CALCULATE", payload: "addAll" }
      );
      expect(state).toEqual({ displayValue: 0, values: [] });
    });

    test("should add nothing if I have no values", () => {
      let state;
      state = reducers(
        { displayValue: "0", values: [] },
        { type: "CALCULATE", payload: "addAll" }
      );
      expect(state).toEqual({ displayValue: "0", values: [] });
    });
  });

  test("ENTER_NUMBER", () => {
    let state;
    state = reducers(
      { displayValue: "07", values: ["3", "22"] },
      { type: "ENTER_NUMBER", payload: "07" }
    );
    expect(state).toEqual({ displayValue: "0", values: ["3", "22", "7"] });
  });

  test("CLEAR_ALL", () => {
    let state;
    state = reducers(
      { displayValue: "0", values: ["3", "22"] },
      { type: "CLEAR_ALL" }
    );
    expect(state).toEqual({ displayValue: "0", values: [] });
  });

  test("CLEAR_INPUT", () => {
    let state;
    state = reducers(
      { displayValue: "0", values: [] },
      { type: "CLEAR_INPUT" }
    );
    expect(state).toEqual({ displayValue: "", values: [] });
  });

  test("REMOVE_VALUE", () => {
    let state;
    state = reducers(
      { displayValue: "0", values: ["3", "22", "21"] },
      { type: "REMOVE_VALUE", payload: 1 }
    );
    expect(state).toEqual({ displayValue: "0", values: ["3", "21"] });
  });

  describe("KEYPAD_PRESS", () => {
    test("should add the payload to the display value", () => {
      let state = reducers(
        { displayValue: "0", values: ["3"] },
        { type: "KEYPAD_PRESS", payload: 2 }
      );
      expect(state).toEqual({ displayValue: "02", values: ["3"] });
    });
  });

  test("should return original state if unrecognised action", () => {
    let state = reducers(
      { displayValue: "0", values: ["3"] },
      { type: "UNKNOWN", payload: 2 }
    );
    expect(state).toEqual({ displayValue: "0", values: ["3"] });
  });
});
