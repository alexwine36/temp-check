import React from "react";
import { Box } from "@material-ui/core";
import TextInputField from "../TextInputField";
// import useStyles from './index.styles';

interface Props {
  name: string;
  label: string;
}

const Wrapper = (props: { children: React.ReactNode }) => (
  <Box my={1}>{props.children}</Box>
);

const InputFieldRenderer = (props: Props) => {
  // const classes = useStyles();
  const { name, label } = props;
  return (
    <Wrapper>
      <TextInputField name={name} label={label} />
    </Wrapper>
  );
};

export default InputFieldRenderer;
