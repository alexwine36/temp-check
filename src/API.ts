/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFamilyInput = {
  id?: string | null,
  familyName: string,
  carPoolNumber: number,
};

export type ModelFamilyConditionInput = {
  familyName?: ModelStringInput | null,
  carPoolNumber?: ModelIntInput | null,
  and?: Array< ModelFamilyConditionInput | null > | null,
  or?: Array< ModelFamilyConditionInput | null > | null,
  not?: ModelFamilyConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateFamilyInput = {
  id: string,
  familyName?: string | null,
  carPoolNumber?: number | null,
};

export type DeleteFamilyInput = {
  id?: string | null,
};

export type CreateParentInput = {
  id?: string | null,
  name?: string | null,
  phoneNumber: string,
  familyID: string,
};

export type ModelParentConditionInput = {
  name?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  familyID?: ModelIDInput | null,
  and?: Array< ModelParentConditionInput | null > | null,
  or?: Array< ModelParentConditionInput | null > | null,
  not?: ModelParentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateParentInput = {
  id: string,
  name?: string | null,
  phoneNumber?: string | null,
  familyID?: string | null,
};

export type DeleteParentInput = {
  id?: string | null,
};

export type CreateStudentInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  grade: string,
  familyID: string,
};

export type ModelStudentConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  grade?: ModelStringInput | null,
  familyID?: ModelIDInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
};

export type UpdateStudentInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  grade?: string | null,
  familyID?: string | null,
};

export type DeleteStudentInput = {
  id?: string | null,
};

export type CreateChecksInput = {
  id?: string | null,
  studentID: string,
  schoolDay: string,
  editor?: string | null,
  symptoms: boolean,
  tempUnder: boolean,
  temp?: number | null,
  cough: boolean,
  shortBreath: boolean,
};

export type ModelChecksConditionInput = {
  studentID?: ModelIDInput | null,
  schoolDay?: ModelStringInput | null,
  editor?: ModelStringInput | null,
  symptoms?: ModelBooleanInput | null,
  tempUnder?: ModelBooleanInput | null,
  temp?: ModelFloatInput | null,
  cough?: ModelBooleanInput | null,
  shortBreath?: ModelBooleanInput | null,
  and?: Array< ModelChecksConditionInput | null > | null,
  or?: Array< ModelChecksConditionInput | null > | null,
  not?: ModelChecksConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateChecksInput = {
  id: string,
  studentID?: string | null,
  schoolDay?: string | null,
  editor?: string | null,
  symptoms?: boolean | null,
  tempUnder?: boolean | null,
  temp?: number | null,
  cough?: boolean | null,
  shortBreath?: boolean | null,
};

export type DeleteChecksInput = {
  id?: string | null,
};

export type ModelFamilyFilterInput = {
  id?: ModelIDInput | null,
  familyName?: ModelStringInput | null,
  carPoolNumber?: ModelIntInput | null,
  and?: Array< ModelFamilyFilterInput | null > | null,
  or?: Array< ModelFamilyFilterInput | null > | null,
  not?: ModelFamilyFilterInput | null,
};

export type ModelParentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  familyID?: ModelIDInput | null,
  and?: Array< ModelParentFilterInput | null > | null,
  or?: Array< ModelParentFilterInput | null > | null,
  not?: ModelParentFilterInput | null,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  grade?: ModelStringInput | null,
  familyID?: ModelIDInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export type ModelChecksFilterInput = {
  id?: ModelIDInput | null,
  studentID?: ModelIDInput | null,
  schoolDay?: ModelStringInput | null,
  editor?: ModelStringInput | null,
  symptoms?: ModelBooleanInput | null,
  tempUnder?: ModelBooleanInput | null,
  temp?: ModelFloatInput | null,
  cough?: ModelBooleanInput | null,
  shortBreath?: ModelBooleanInput | null,
  and?: Array< ModelChecksFilterInput | null > | null,
  or?: Array< ModelChecksFilterInput | null > | null,
  not?: ModelChecksFilterInput | null,
};

export type CreateFamilyMutationVariables = {
  input: CreateFamilyInput,
  condition?: ModelFamilyConditionInput | null,
};

export type CreateFamilyMutation = {
  createFamily:  {
    __typename: "Family",
    id: string,
    familyName: string,
    carPoolNumber: number,
    parents:  {
      __typename: "ModelParentConnection",
      items:  Array< {
        __typename: "Parent",
        id: string,
        name: string | null,
        phoneNumber: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    students:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        firstName: string,
        lastName: string,
        grade: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFamilyMutationVariables = {
  input: UpdateFamilyInput,
  condition?: ModelFamilyConditionInput | null,
};

export type UpdateFamilyMutation = {
  updateFamily:  {
    __typename: "Family",
    id: string,
    familyName: string,
    carPoolNumber: number,
    parents:  {
      __typename: "ModelParentConnection",
      items:  Array< {
        __typename: "Parent",
        id: string,
        name: string | null,
        phoneNumber: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    students:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        firstName: string,
        lastName: string,
        grade: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFamilyMutationVariables = {
  input: DeleteFamilyInput,
  condition?: ModelFamilyConditionInput | null,
};

export type DeleteFamilyMutation = {
  deleteFamily:  {
    __typename: "Family",
    id: string,
    familyName: string,
    carPoolNumber: number,
    parents:  {
      __typename: "ModelParentConnection",
      items:  Array< {
        __typename: "Parent",
        id: string,
        name: string | null,
        phoneNumber: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    students:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        firstName: string,
        lastName: string,
        grade: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateParentMutationVariables = {
  input: CreateParentInput,
  condition?: ModelParentConditionInput | null,
};

export type CreateParentMutation = {
  createParent:  {
    __typename: "Parent",
    id: string,
    name: string | null,
    phoneNumber: string,
    familyID: string,
    family:  {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateParentMutationVariables = {
  input: UpdateParentInput,
  condition?: ModelParentConditionInput | null,
};

export type UpdateParentMutation = {
  updateParent:  {
    __typename: "Parent",
    id: string,
    name: string | null,
    phoneNumber: string,
    familyID: string,
    family:  {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteParentMutationVariables = {
  input: DeleteParentInput,
  condition?: ModelParentConditionInput | null,
};

export type DeleteParentMutation = {
  deleteParent:  {
    __typename: "Parent",
    id: string,
    name: string | null,
    phoneNumber: string,
    familyID: string,
    family:  {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    grade: string,
    familyID: string,
    family:  {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    checks:  {
      __typename: "ModelChecksConnection",
      items:  Array< {
        __typename: "Checks",
        id: string,
        studentID: string,
        schoolDay: string,
        editor: string | null,
        symptoms: boolean,
        tempUnder: boolean,
        temp: number | null,
        cough: boolean,
        shortBreath: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    grade: string,
    familyID: string,
    family:  {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    checks:  {
      __typename: "ModelChecksConnection",
      items:  Array< {
        __typename: "Checks",
        id: string,
        studentID: string,
        schoolDay: string,
        editor: string | null,
        symptoms: boolean,
        tempUnder: boolean,
        temp: number | null,
        cough: boolean,
        shortBreath: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    grade: string,
    familyID: string,
    family:  {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    checks:  {
      __typename: "ModelChecksConnection",
      items:  Array< {
        __typename: "Checks",
        id: string,
        studentID: string,
        schoolDay: string,
        editor: string | null,
        symptoms: boolean,
        tempUnder: boolean,
        temp: number | null,
        cough: boolean,
        shortBreath: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChecksMutationVariables = {
  input: CreateChecksInput,
  condition?: ModelChecksConditionInput | null,
};

export type CreateChecksMutation = {
  createChecks:  {
    __typename: "Checks",
    id: string,
    studentID: string,
    student:  {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      grade: string,
      familyID: string,
      family:  {
        __typename: "Family",
        id: string,
        familyName: string,
        carPoolNumber: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      checks:  {
        __typename: "ModelChecksConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    schoolDay: string,
    editor: string | null,
    symptoms: boolean,
    tempUnder: boolean,
    temp: number | null,
    cough: boolean,
    shortBreath: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChecksMutationVariables = {
  input: UpdateChecksInput,
  condition?: ModelChecksConditionInput | null,
};

export type UpdateChecksMutation = {
  updateChecks:  {
    __typename: "Checks",
    id: string,
    studentID: string,
    student:  {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      grade: string,
      familyID: string,
      family:  {
        __typename: "Family",
        id: string,
        familyName: string,
        carPoolNumber: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      checks:  {
        __typename: "ModelChecksConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    schoolDay: string,
    editor: string | null,
    symptoms: boolean,
    tempUnder: boolean,
    temp: number | null,
    cough: boolean,
    shortBreath: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChecksMutationVariables = {
  input: DeleteChecksInput,
  condition?: ModelChecksConditionInput | null,
};

export type DeleteChecksMutation = {
  deleteChecks:  {
    __typename: "Checks",
    id: string,
    studentID: string,
    student:  {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      grade: string,
      familyID: string,
      family:  {
        __typename: "Family",
        id: string,
        familyName: string,
        carPoolNumber: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      checks:  {
        __typename: "ModelChecksConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    schoolDay: string,
    editor: string | null,
    symptoms: boolean,
    tempUnder: boolean,
    temp: number | null,
    cough: boolean,
    shortBreath: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFamilyQueryVariables = {
  id: string,
};

export type GetFamilyQuery = {
  getFamily:  {
    __typename: "Family",
    id: string,
    familyName: string,
    carPoolNumber: number,
    parents:  {
      __typename: "ModelParentConnection",
      items:  Array< {
        __typename: "Parent",
        id: string,
        name: string | null,
        phoneNumber: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    students:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        firstName: string,
        lastName: string,
        grade: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFamilysQueryVariables = {
  filter?: ModelFamilyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFamilysQuery = {
  listFamilys:  {
    __typename: "ModelFamilyConnection",
    items:  Array< {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetParentQueryVariables = {
  id: string,
};

export type GetParentQuery = {
  getParent:  {
    __typename: "Parent",
    id: string,
    name: string | null,
    phoneNumber: string,
    familyID: string,
    family:  {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListParentsQueryVariables = {
  filter?: ModelParentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParentsQuery = {
  listParents:  {
    __typename: "ModelParentConnection",
    items:  Array< {
      __typename: "Parent",
      id: string,
      name: string | null,
      phoneNumber: string,
      familyID: string,
      family:  {
        __typename: "Family",
        id: string,
        familyName: string,
        carPoolNumber: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    grade: string,
    familyID: string,
    family:  {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    checks:  {
      __typename: "ModelChecksConnection",
      items:  Array< {
        __typename: "Checks",
        id: string,
        studentID: string,
        schoolDay: string,
        editor: string | null,
        symptoms: boolean,
        tempUnder: boolean,
        temp: number | null,
        cough: boolean,
        shortBreath: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      grade: string,
      familyID: string,
      family:  {
        __typename: "Family",
        id: string,
        familyName: string,
        carPoolNumber: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      checks:  {
        __typename: "ModelChecksConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetChecksQueryVariables = {
  id: string,
};

export type GetChecksQuery = {
  getChecks:  {
    __typename: "Checks",
    id: string,
    studentID: string,
    student:  {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      grade: string,
      familyID: string,
      family:  {
        __typename: "Family",
        id: string,
        familyName: string,
        carPoolNumber: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      checks:  {
        __typename: "ModelChecksConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    schoolDay: string,
    editor: string | null,
    symptoms: boolean,
    tempUnder: boolean,
    temp: number | null,
    cough: boolean,
    shortBreath: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCheckssQueryVariables = {
  filter?: ModelChecksFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCheckssQuery = {
  listCheckss:  {
    __typename: "ModelChecksConnection",
    items:  Array< {
      __typename: "Checks",
      id: string,
      studentID: string,
      student:  {
        __typename: "Student",
        id: string,
        firstName: string,
        lastName: string,
        grade: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      schoolDay: string,
      editor: string | null,
      symptoms: boolean,
      tempUnder: boolean,
      temp: number | null,
      cough: boolean,
      shortBreath: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateFamilySubscription = {
  onCreateFamily:  {
    __typename: "Family",
    id: string,
    familyName: string,
    carPoolNumber: number,
    parents:  {
      __typename: "ModelParentConnection",
      items:  Array< {
        __typename: "Parent",
        id: string,
        name: string | null,
        phoneNumber: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    students:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        firstName: string,
        lastName: string,
        grade: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFamilySubscription = {
  onUpdateFamily:  {
    __typename: "Family",
    id: string,
    familyName: string,
    carPoolNumber: number,
    parents:  {
      __typename: "ModelParentConnection",
      items:  Array< {
        __typename: "Parent",
        id: string,
        name: string | null,
        phoneNumber: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    students:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        firstName: string,
        lastName: string,
        grade: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFamilySubscription = {
  onDeleteFamily:  {
    __typename: "Family",
    id: string,
    familyName: string,
    carPoolNumber: number,
    parents:  {
      __typename: "ModelParentConnection",
      items:  Array< {
        __typename: "Parent",
        id: string,
        name: string | null,
        phoneNumber: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    students:  {
      __typename: "ModelStudentConnection",
      items:  Array< {
        __typename: "Student",
        id: string,
        firstName: string,
        lastName: string,
        grade: string,
        familyID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateParentSubscription = {
  onCreateParent:  {
    __typename: "Parent",
    id: string,
    name: string | null,
    phoneNumber: string,
    familyID: string,
    family:  {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateParentSubscription = {
  onUpdateParent:  {
    __typename: "Parent",
    id: string,
    name: string | null,
    phoneNumber: string,
    familyID: string,
    family:  {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteParentSubscription = {
  onDeleteParent:  {
    __typename: "Parent",
    id: string,
    name: string | null,
    phoneNumber: string,
    familyID: string,
    family:  {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    grade: string,
    familyID: string,
    family:  {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    checks:  {
      __typename: "ModelChecksConnection",
      items:  Array< {
        __typename: "Checks",
        id: string,
        studentID: string,
        schoolDay: string,
        editor: string | null,
        symptoms: boolean,
        tempUnder: boolean,
        temp: number | null,
        cough: boolean,
        shortBreath: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    grade: string,
    familyID: string,
    family:  {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    checks:  {
      __typename: "ModelChecksConnection",
      items:  Array< {
        __typename: "Checks",
        id: string,
        studentID: string,
        schoolDay: string,
        editor: string | null,
        symptoms: boolean,
        tempUnder: boolean,
        temp: number | null,
        cough: boolean,
        shortBreath: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent:  {
    __typename: "Student",
    id: string,
    firstName: string,
    lastName: string,
    grade: string,
    familyID: string,
    family:  {
      __typename: "Family",
      id: string,
      familyName: string,
      carPoolNumber: number,
      parents:  {
        __typename: "ModelParentConnection",
        nextToken: string | null,
      } | null,
      students:  {
        __typename: "ModelStudentConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    checks:  {
      __typename: "ModelChecksConnection",
      items:  Array< {
        __typename: "Checks",
        id: string,
        studentID: string,
        schoolDay: string,
        editor: string | null,
        symptoms: boolean,
        tempUnder: boolean,
        temp: number | null,
        cough: boolean,
        shortBreath: boolean,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChecksSubscription = {
  onCreateChecks:  {
    __typename: "Checks",
    id: string,
    studentID: string,
    student:  {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      grade: string,
      familyID: string,
      family:  {
        __typename: "Family",
        id: string,
        familyName: string,
        carPoolNumber: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      checks:  {
        __typename: "ModelChecksConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    schoolDay: string,
    editor: string | null,
    symptoms: boolean,
    tempUnder: boolean,
    temp: number | null,
    cough: boolean,
    shortBreath: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChecksSubscription = {
  onUpdateChecks:  {
    __typename: "Checks",
    id: string,
    studentID: string,
    student:  {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      grade: string,
      familyID: string,
      family:  {
        __typename: "Family",
        id: string,
        familyName: string,
        carPoolNumber: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      checks:  {
        __typename: "ModelChecksConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    schoolDay: string,
    editor: string | null,
    symptoms: boolean,
    tempUnder: boolean,
    temp: number | null,
    cough: boolean,
    shortBreath: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChecksSubscription = {
  onDeleteChecks:  {
    __typename: "Checks",
    id: string,
    studentID: string,
    student:  {
      __typename: "Student",
      id: string,
      firstName: string,
      lastName: string,
      grade: string,
      familyID: string,
      family:  {
        __typename: "Family",
        id: string,
        familyName: string,
        carPoolNumber: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      checks:  {
        __typename: "ModelChecksConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    schoolDay: string,
    editor: string | null,
    symptoms: boolean,
    tempUnder: boolean,
    temp: number | null,
    cough: boolean,
    shortBreath: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};
