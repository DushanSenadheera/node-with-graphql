export const typeDefs = `#graphql
  type Employee {
    id: Int
    name: String
    age: Int
    project: Project
  }

  type Project {
    id: Int
    name: String
    employee: [Employee]
  }

  type Query {
    getEmployee: [Employee]
    getEmployeeById(id: Int): Employee
  }

  input empInput{
    id: Int
    name: String
    age: Int
  }

  type Mutation {
    addEmployee(input: empInput): Employee
    deleteEmp(id: Int): [Employee]
    updateEmp(id: Int, input: empInput): Employee
  }
`;
