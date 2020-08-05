import React from "react";
import { mapListFamilys } from "../../../models/family";
import callGraphQL from "../../../functions/graphql-wrapper";
import { ListFamilysQuery } from "../../../API";
import { listFamilys } from "../../../graphql/queries";
import { useSetRecoilState } from "recoil";
import { familiesState } from "../../../State/Families";

interface Props {
  sample?: string;
}

const FamiliesQuery = (props: Props) => {
  // const [families, setFamilies] = React.useState<Family[]>();
  const setFamiliesState = useSetRecoilState(familiesState);
  React.useEffect(() => {
    async function getData() {
      try {
        const familyData = await callGraphQL<ListFamilysQuery>(listFamilys);
        const familys = mapListFamilys(familyData);
        setFamiliesState(familys);
      } catch (error) {
        console.error("Error fetching familys", error);
      }
    }
    getData();
  }, [setFamiliesState]);
  return null;
};

export default FamiliesQuery;
