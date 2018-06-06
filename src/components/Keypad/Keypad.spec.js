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

  test.skip("should behave...", () => {
    const props = {
      removeValue: () => true
    };
    const wrapper = shallow(<Keypad {...props} />);
    const button = wrapper.find("button").first();
    button.simulate("click");
    expect(wrapper.find("li").length).toBe(3);
  });
});
