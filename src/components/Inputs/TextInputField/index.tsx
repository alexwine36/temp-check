import React from "react";
import useStyles from "./index.styles";
import { Field, FieldProps } from "formik";
import { TextField } from "@material-ui/core";

interface Props {
  name: string;
  label: string;
}

const TextInputField = (props: Props) => {
  const classes = useStyles();
  const { name, label } = props;
  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <React.Fragment>
          <TextField
            variant="outlined"
            label={label}
            error={!!form.errors[name]}
            helperText={form.errors[name] && form.errors[name]}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            fullWidth
          ></TextField>
        </React.Fragment>
      )}
    </Field>
  );
};

export default TextInputField;
