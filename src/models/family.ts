import {
  ListFamilysQuery,
  CreateFamilyMutationVariables,
  CreateFamilyMutation,
} from "../API";
import { GraphQLResult } from "@aws-amplify/api";
import { createFamily } from "../graphql/mutations";
import callGraphQL from "../functions/graphql-wrapper";

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

export const addFamilyMutation = (data: CreateFamilyMutationVariables) => {
  return callGraphQL<CreateFamilyMutation>(createFamily, {
    ...data,
  });
};

export default Family;
export { mapListFamilysQuery as mapListFamilys };
