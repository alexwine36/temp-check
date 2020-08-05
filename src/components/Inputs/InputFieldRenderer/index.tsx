import React from "react";
import { Box } from "@material-ui/core";
import TextInputField from "../TextInputField";
// import useStyles from './index.styles';

export type FieldTypes = "number" | "text";

interface Props {
  name: string;
  label: string;
  type?: FieldTypes;
}

const Wrapper = (props: { children: React.ReactNode }) => (
  <Box my={1}>{props.children}</Box>
);

const InputFieldRenderer = (props: Props) => {
  // const classes = useStyles();
  const { name, label, type } = props;
  if (type === "number") {
    return (
      <Wrapper>
        <TextInputField type="number" name={name} label={label} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <TextInputField name={name} label={label} />
    </Wrapper>
  );
};

export default InputFieldRenderer;
