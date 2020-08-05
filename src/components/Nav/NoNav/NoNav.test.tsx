import React from "react";
import NoNav from "./NoNav";
import renderer from "react-test-renderer";

// snapshot test

it("renders correctly", () => {
  const tree = renderer.create(<NoNav darkMode={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
