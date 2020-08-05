import { ListFamilysQuery } from "../API";
import { GraphQLResult } from "@aws-amplify/api";

interface Family {
  id?: string;
  familyName: string;
  carPoolNumber: number;
}

function mapListFamilysQuery(
  listFamilysQuery: GraphQLResult<ListFamilysQuery>
): Family[] {
  return (
    listFamilysQuery.data?.listFamilys?.items?.map(
      (family) =>
        ({
          id: family?.id,
          familyName: family?.familyName,
          carPoolNumber: family?.carPoolNumber,
        } as Family)
    ) || []
  );
}

export default Family;
export { mapListFamilysQuery as mapListFamilys };
