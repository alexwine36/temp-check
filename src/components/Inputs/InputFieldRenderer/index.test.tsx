import React from "react";
import { render } from "@testing-library/react";
import InputFieldRenderer from ".";
import { Formik } from "formik";

describe("<InputFieldRenderer />", () => {
  test("Renders without exploding", () => {
    render(
      <Formik
        initialValues={{
          sample: "",
        }}
        onSubmit={() => {}}
      >
        <InputFieldRenderer name="sample" label={"sample"} />
      </Formik>
    );
  });
});
