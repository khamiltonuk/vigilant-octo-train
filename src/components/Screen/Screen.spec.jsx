import React from "react";
import { shallow, simulate } from "enzyme";
import Screen from "./Screen";
import toJson from "enzyme-to-json";

const props = {
  displayValue: () => true,
  enterNumber: () => true,
  keypadPress: () => true
};

describe("Screen", () => {
  test("should return a button", () => {
    const wrapper = shallow(<Screen {...props} />);
    const button = wrapper.find("button");
    expect(button.length).toBe(1);
  });

  test("should match the snapshot", () => {
    const wrapper = shallow(<Screen {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
