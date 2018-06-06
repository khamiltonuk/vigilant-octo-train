import React from "react";
import { shallow, simulate } from "enzyme";
import History from "./History";
import toJson from "enzyme-to-json";

describe("History", () => {
  test("should return a list of four items when given 4 values", () => {
    const props = {
      values: [25, 35, 535, 53]
    };
    const wrapper = shallow(<History {...props} />);
    expect(wrapper.find("li").length).toBe(4);
  });

  test("should match the snapshot", () => {
    const props = {
      values: [25, 35, 535, 53]
    };
    const wrapper = shallow(<History {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test.skip("should behave...", () => {
    const props = {
      values: [25, 35, 535, 53],
      removeValue: () => true
    };
    const wrapper = shallow(<History {...props} />);
    const button = wrapper.find("button").first();
    button.simulate("click");
    expect(wrapper.find("li").length).toBe(3);
  });
});
