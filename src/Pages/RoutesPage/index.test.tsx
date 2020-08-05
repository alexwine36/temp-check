import React from "react";
import { render } from "@testing-library/react";
import RoutesPage from ".";
import { BrowserRouter as Router } from "react-router-dom";

describe("<RoutesPage />", () => {
  test("Renders without exploding", () => {
    render(
      <Router>
        <RoutesPage />
      </Router>
    );
  });
});
