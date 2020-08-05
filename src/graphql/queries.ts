/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFamily = /* GraphQL */ `
  query GetFamily($id: ID!) {
    getFamily(id: $id) {
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
export const listFamilys = /* GraphQL */ `
  query ListFamilys(
    $filter: ModelFamilyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getParent = /* GraphQL */ `
  query GetParent($id: ID!) {
    getParent(id: $id) {
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
export const listParents = /* GraphQL */ `
  query ListParents(
    $filter: ModelParentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phoneNumber
        familyID
        family {
          id
          familyName
          carPoolNumber
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChecks = /* GraphQL */ `
  query GetChecks($id: ID!) {
    getChecks(id: $id) {
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
export const listCheckss = /* GraphQL */ `
  query ListCheckss(
    $filter: ModelChecksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCheckss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentID
        student {
          id
          firstName
          lastName
          grade
          familyID
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
      nextToken
    }
  }
`;
