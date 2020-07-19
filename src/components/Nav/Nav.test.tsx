import React from "react";
import { render } from "@testing-library/react";
import Nav from "./Nav";

test('renders "NAV"', () => {
  const { getByText } = render(<Nav />);
  const navText = getByText("NAV");
  expect(navText).toBeInTheDocument();
});
// tests whether "NAV" is rendered on first render, passes.
