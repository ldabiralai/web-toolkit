import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Button from ".";

configure({ adapter: new Adapter() });

it("renders a Button", () => {
  expect(shallow(<Button>Click me !</Button>)).toMatchSnapshot();
});
