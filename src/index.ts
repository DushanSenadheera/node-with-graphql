import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

let employee = [
  {
    id: 1,
    name: "Jhon",
    age: 32,
  },
  {
    id: 2,
    name: "Jane",
    age: 28,
  },
];

const typeDefs = `#graphql
  type Employee {
    id: Int
    name: String
    age: Int
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
    deleteEmp(id: Int): Employee
    updateEmp(id: Int, input: empInput): Employee
  }

`;

const resolvers = {
  Query: {
    getEmployee: () => employee,
    getEmployeeById: (parent, { id }) => {
      return employee.find((emp) => emp.id == id);
    },
  },

  Mutation: {
    addEmployee: (parent, { input }) => {
      const newEmp = { ...input };
      employee.push(newEmp);
      return newEmp;
    },
    deleteEmp: (parent, { id }: { id: number }) => {
      const remainingEmployees = employee.filter((emp) => emp.id !== id);
      employee = remainingEmployees;
      return employee;
    },
    updateEmp: (parent, { id, input }) => {
      employee.find((emp) => {
        if (emp.id === id) {
          emp.name = input.name;
          emp.age = input.age;
        }
        return emp;
      });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } =  await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
