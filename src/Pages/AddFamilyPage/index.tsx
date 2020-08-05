import React from "react";
import useStyles from "./index.styles";
import AddFamilyForm from "../../components/Forms/AddFamilyForm";

interface Props {
  sample?: string;
}

const AddFamilyPage = (props: Props) => {
  const classes = useStyles();

  return <AddFamilyForm />;
};

export default AddFamilyPage;
