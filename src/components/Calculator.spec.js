import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Calculator from "./Calculator";

describe("Calculator", () => {
  test("should render correctly", () => {
    const wrapper = shallow(<Calculator />);
    //console.log(wrapper.debug());
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
