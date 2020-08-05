/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFamily = /* GraphQL */ `
  mutation CreateFamily(
    $input: CreateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    createFamily(input: $input, condition: $condition) {
      id
      familyName
      carPoolNumber
      parents {
        items {
          id
          name
          phoneNumber
          familyID
          createdAt
          updatedAt
        }
        nextToken
      }
      students {
        items {
          id
          firstName
          lastName
          grade
          familyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFamily = /* GraphQL */ `
  mutation UpdateFamily(
    $input: UpdateFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    updateFamily(input: $input, condition: $condition) {
      id
      familyName
      carPoolNumber
      parents {
        items {
          id
          name
          phoneNumber
          familyID
          createdAt
          updatedAt
        }
        nextToken
      }
      students {
        items {
          id
          firstName
          lastName
          grade
          familyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFamily = /* GraphQL */ `
  mutation DeleteFamily(
    $input: DeleteFamilyInput!
    $condition: ModelFamilyConditionInput
  ) {
    deleteFamily(input: $input, condition: $condition) {
      id
      familyName
      carPoolNumber
      parents {
        items {
          id
          name
          phoneNumber
          familyID
          createdAt
          updatedAt
        }
        nextToken
      }
      students {
        items {
          id
          firstName
          lastName
          grade
          familyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createParent = /* GraphQL */ `
  mutation CreateParent(
    $input: CreateParentInput!
    $condition: ModelParentConditionInput
  ) {
    createParent(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      familyID
      family {
        id
        familyName
        carPoolNumber
        parents {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateParent = /* GraphQL */ `
  mutation UpdateParent(
    $input: UpdateParentInput!
    $condition: ModelParentConditionInput
  ) {
    updateParent(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      familyID
      family {
        id
        familyName
        carPoolNumber
        parents {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteParent = /* GraphQL */ `
  mutation DeleteParent(
    $input: DeleteParentInput!
    $condition: ModelParentConditionInput
  ) {
    deleteParent(input: $input, condition: $condition) {
      id
      name
      phoneNumber
      familyID
      family {
        id
        familyName
        carPoolNumber
        parents {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      firstName
      lastName
      grade
      familyID
      family {
        id
        familyName
        carPoolNumber
        parents {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      checks {
        items {
          id
          studentID
          schoolDay
          editor
          symptoms
          tempUnder
          temp
          cough
          shortBreath
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      firstName
      lastName
      grade
      familyID
      family {
        id
        familyName
        carPoolNumber
        parents {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      checks {
        items {
          id
          studentID
          schoolDay
          editor
          symptoms
          tempUnder
          temp
          cough
          shortBreath
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      firstName
      lastName
      grade
      familyID
      family {
        id
        familyName
        carPoolNumber
        parents {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      checks {
        items {
          id
          studentID
          schoolDay
          editor
          symptoms
          tempUnder
          temp
          cough
          shortBreath
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChecks = /* GraphQL */ `
  mutation CreateChecks(
    $input: CreateChecksInput!
    $condition: ModelChecksConditionInput
  ) {
    createChecks(input: $input, condition: $condition) {
      id
      studentID
      student {
        id
        firstName
        lastName
        grade
        familyID
        family {
          id
          familyName
          carPoolNumber
          createdAt
          updatedAt
        }
        checks {
          nextToken
        }
        createdAt
        updatedAt
      }
      schoolDay
      editor
      symptoms
      tempUnder
      temp
      cough
      shortBreath
      createdAt
      updatedAt
    }
  }
`;
export const updateChecks = /* GraphQL */ `
  mutation UpdateChecks(
    $input: UpdateChecksInput!
    $condition: ModelChecksConditionInput
  ) {
    updateChecks(input: $input, condition: $condition) {
      id
      studentID
      student {
        id
        firstName
        lastName
        grade
        familyID
        family {
          id
          familyName
          carPoolNumber
          createdAt
          updatedAt
        }
        checks {
          nextToken
        }
        createdAt
        updatedAt
      }
      schoolDay
      editor
      symptoms
      tempUnder
      temp
      cough
      shortBreath
      createdAt
      updatedAt
    }
  }
`;
export const deleteChecks = /* GraphQL */ `
  mutation DeleteChecks(
    $input: DeleteChecksInput!
    $condition: ModelChecksConditionInput
  ) {
    deleteChecks(input: $input, condition: $condition) {
      id
      studentID
      student {
        id
        firstName
        lastName
        grade
        familyID
        family {
          id
          familyName
          carPoolNumber
          createdAt
          updatedAt
        }
        checks {
          nextToken
        }
        createdAt
        updatedAt
      }
      schoolDay
      editor
      symptoms
      tempUnder
      temp
      cough
      shortBreath
      createdAt
      updatedAt
    }
  }
`;
