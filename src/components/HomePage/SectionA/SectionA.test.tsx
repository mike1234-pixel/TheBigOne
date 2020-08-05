import React from "react";
import SectionA from "./SectionA";
import renderer from "react-test-renderer";

// snapshot test
const darkMode = true;

it("renders correctly", () => {
  const tree = renderer.create(<SectionA darkMode={darkMode} />).toJSON();
  expect(tree).toMatchSnapshot();
});
