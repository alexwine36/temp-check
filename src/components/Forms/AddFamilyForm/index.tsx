import React from "react";
import useStyles from "./index.styles";
import { Formik, Form } from "formik";
import InputFieldRenderer from "../../Inputs/InputFieldRenderer";
import { Typography, Button } from "@material-ui/core";
import { addFamilyMutation } from "../../../models/family";

interface Props {
  sample?: string;
}

const FamilyFields = [
  {
    name: "familyName",
    label: "Family Name",
  },
  {
    name: "carPoolNumber",
    label: "Car Pool Number",
    type: "number",
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
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        console.log(values);
        try {
          const res = await addFamilyMutation({
            input: values,
          });
          console.log(res);
          resetForm();
          setSubmitting(false);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {({ values }) => {
        return (
          <Form>
            <Typography variant="overline">Add Family</Typography>
            {FamilyFields.map((field) => {
              return (
                <InputFieldRenderer
                  key={field.name}
                  name={field.name}
                  label={field.label}
                />
              );
            })}
            <Button variant="outlined" color="primary" type="submit">
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddFamilyForm;
