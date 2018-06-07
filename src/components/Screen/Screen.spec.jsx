import React from "react";
import { shallow, simulate } from "enzyme";
import Screen from "./Screen";
import toJson from "enzyme-to-json";

const props = {
  displayValue: jest.fn(),
  enterNumber: jest.fn(),
  keypadPress: jest.fn(),
  displayValue: "69"
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

  test.skip("should submit form when submit button is clicked", () => {
    const wrapper = shallow(<Screen {...props} />);
    const button = wrapper.find("[data-q='input-number']");
    button.simulate("click");
    expect(props.enterNumber).toHaveBeenCalledWith(5);
  });

  test.skip("should...u", () => {
    const wrapper = shallow(<Screen {...props} />);
    const input = wrapper.find("[data-q='input-field']");
    console.log(input.debug());
    input.simulate("change", { currentTarget: { value: 4 } });
    expect(props.enterNumber).toHaveBeenCalledWith(5);
  });
});
