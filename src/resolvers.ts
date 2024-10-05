import db from "./db";
import Emp from "./types";

export const resolvers = {
  Query: {
    getEmployee: () => {
      try {
        return db.employee;
      } catch (error) {
        console.log(error);
      }
    },

    getEmployeeById: (_: null, { id }: { id: number }) => {
      try {
        console.log(id);
        return db.employee.find((emp) => emp.id === id);
      } catch (error) {
        console.log(error);
      }
    },
  },

  Mutation: {
    addEmployee: (_: null, { input }: { input: Emp }) => {
      try {
        const newEmp = { ...input };
        db.employee.push(newEmp);
        return newEmp;
      } catch (error) {
        console.log(error);
      }
    },

    deleteEmp: (_: null, { id }: { id: number }) => {
      try {
        const remainingEmployees = db.employee.filter(
          (emp: { id: number }) => emp.id !== id
        );
        return remainingEmployees;
      } catch (error) {
        console.log(error);
      }
    },

    updateEmp: (_: null, { id, input }: { id: number; input: Emp }) => {
      try {
        const emp = db.employee.find((emp) => emp.id === id);
        if (emp) {
          emp.name = input.name;
          emp.age = input.age;
          return emp;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
