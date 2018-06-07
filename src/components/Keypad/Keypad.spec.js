import React from "react";
import { shallow, simulate } from "enzyme";
import Keypad from "./Keypad";
import toJson from "enzyme-to-json";

const props = {
  keypadPress: () => true,
  clearInput: () => true,
  clearAll: () => true,
  calculate: () => true
};

describe("Keypad", () => {
  test("should return a 17 buttons", () => {
    const wrapper = shallow(<Keypad {...props} />);
    expect(wrapper.find("button").length).toBe(17);
  });

  test("should match the snapshot", () => {
    const wrapper = shallow(<Keypad {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("should call clearInput fucntion when clear button is pressed", () => {
    const props = {
      clearInput: jest.fn()
    };
    const wrapper = shallow(<Keypad {...props} />);
    const button = wrapper.find("[data-q='clear']").first();
    button.simulate("click");
    expect(props.clearInput).toHaveBeenCalled();
  });

  test("should call keypadPress function with value", () => {
    const props = {
      keypadPress: jest.fn()
    };
    const wrapper = shallow(<Keypad {...props} />);
    const button = wrapper.find("[data-q='number-key-5']").first();
    button.simulate("click");
    expect(props.keypadPress).toHaveBeenCalledWith(5);
  });

  test("should call calculate function with operation", () => {
    const props = {
      calculate: jest.fn()
    };
    const wrapper = shallow(<Keypad {...props} />);
    const button = wrapper.find("[data-q='add-all']").first();
    button.simulate("click");
    expect(props.calculate).toHaveBeenCalledWith("Add All");
  });
});
