import React from "react";
import useStyles from "./index.styles";
import FamiliesQuery from "../../components/Queries/FamiliesQuery";
import { useRecoilValue } from "recoil";
import { familiesState } from "../../State/Families";

interface Props {
  sample?: string;
}

const FamiliesPage = (props: Props) => {
  const classes = useStyles();
  const families = useRecoilValue(familiesState);
  return (
    <>
      <FamiliesQuery />
      {families.map((family) => (
        <div key={family.id}>
          <span>{family.familyName}</span>
        </div>
      ))}
      <div>FamiliesPage</div>
    </>
  );
};

export default FamiliesPage;
