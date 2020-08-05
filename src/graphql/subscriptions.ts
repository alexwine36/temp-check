/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFamily = /* GraphQL */ `
  subscription OnCreateFamily {
    onCreateFamily {
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
export const onUpdateFamily = /* GraphQL */ `
  subscription OnUpdateFamily {
    onUpdateFamily {
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
export const onDeleteFamily = /* GraphQL */ `
  subscription OnDeleteFamily {
    onDeleteFamily {
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
export const onCreateParent = /* GraphQL */ `
  subscription OnCreateParent {
    onCreateParent {
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
export const onUpdateParent = /* GraphQL */ `
  subscription OnUpdateParent {
    onUpdateParent {
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
export const onDeleteParent = /* GraphQL */ `
  subscription OnDeleteParent {
    onDeleteParent {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
export const onCreateChecks = /* GraphQL */ `
  subscription OnCreateChecks {
    onCreateChecks {
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
export const onUpdateChecks = /* GraphQL */ `
  subscription OnUpdateChecks {
    onUpdateChecks {
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
export const onDeleteChecks = /* GraphQL */ `
  subscription OnDeleteChecks {
    onDeleteChecks {
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
