import React from "react";
// import ReactShallowRender from "react-test-renderer/shallow";
import { shallow } from "enzyme";
import Header from "../../components/Header";
import toJSON from "enzyme-to-json";

test("Should render the header correctly", () => {
  // Using React Test Renderer
  //   const renderer = new ReactShallowRender();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();

  // Using Enzyme
  const wrapper = shallow(<Header />);
  // expect(wrapper.find("h1").length).toBe(1);
  //expect(wrapper.find("h1").text()).toBe("Expensify");

  expect(toJSON(wrapper)).toMatchSnapshot();
});
