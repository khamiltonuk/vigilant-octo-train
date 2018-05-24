import reducers from "./reducer";

describe("Reducer", () => {
  test("CLEAR_INPUT", () => {
    let state;
    state = reducers(
      { displayValue: "0", values: [] },
      { type: "CLEAR_INPUT" }
    );
    expect(state).toEqual({ displayValue: "", values: [] });
  });

  test("ENTER_NUMBER", () => {
    let state;
    state = reducers(
      { displayValue: "07", values: ["3", "22"] },
      { type: "ENTER_NUMBER", payload: "07" }
    );
    expect(state).toEqual({ displayValue: "0", values: ["3", "22", "7"] });
  });

  test("REMOVE_VALUE", () => {
    let state;
    state = reducers(
      { displayValue: "0", values: ["3", "22"] },
      { type: "REMOVE_VALUE", payload: 2 }
    );
    expect(state).toEqual({ displayValue: "0", values: ["3"] });
  });
});
