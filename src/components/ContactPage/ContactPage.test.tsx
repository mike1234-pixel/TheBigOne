import React from "react";
import ContactPage from "./ContactPage";
import renderer from "react-test-renderer";

// snapshot test

it("renders correctly", () => {
  const tree = renderer.create(<ContactPage darkMode={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
