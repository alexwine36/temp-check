import React from "react";
import { render } from "@testing-library/react";
import NavbarGroup from ".";

describe("<LayoutGroup />", () => {
  test("Renders without exploding", () => {
    render(<NavbarGroup />);
  });
});
