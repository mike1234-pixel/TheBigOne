import React from "react";
import SectionD from "./SectionD";
import renderer from "react-test-renderer";

// snapshot test

it("renders correctly", () => {
  const tree = renderer.create(<SectionD />).toJSON();
  expect(tree).toMatchSnapshot();
});
