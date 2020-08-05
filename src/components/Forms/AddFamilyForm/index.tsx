import React from "react";
import useStyles from "./index.styles";
import { Formik, Form } from "formik";
import InputFieldRenderer from "../../Inputs/InputFieldRenderer";
import { Typography } from "@material-ui/core";

interface Props {
  sample?: string;
}

const FamilyFields = [
  {
    name: "familyName",
    label: "Family Name",
  },
  {
    name: "carPoolName",
    label: "Car Pool Number",
  },
];

const AddFamilyForm = (props: Props) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        familyName: "",
        carPoolNumber: 0,
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({ values }) => {
        return (
          <Form>
            <Typography variant="subtitle1">Add Family</Typography>
            {FamilyFields.map((field) => {
              return (
                <InputFieldRenderer
                  key={field.name}
                  name={field.name}
                  label={field.label}
                />
              );
            })}
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddFamilyForm;
