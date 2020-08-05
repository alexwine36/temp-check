import React from "react";
import { render } from "@testing-library/react";
import FamiliesPage from ".";
import { RecoilRoot } from "recoil";

describe("<FamiliesPage />", () => {
  test("Renders without exploding", () => {
    render(
      <RecoilRoot>
        <FamiliesPage />
      </RecoilRoot>
    );
  });
});
