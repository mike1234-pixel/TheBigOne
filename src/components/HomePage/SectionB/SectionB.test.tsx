import React from "react";
import SectionB from "./SectionB";
import renderer from "react-test-renderer";

// snapshot test
const darkMode = true;
const loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

it("renders correctly", () => {
  const tree = renderer
    .create(<SectionB loremText={loremText} darkMode={darkMode} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
