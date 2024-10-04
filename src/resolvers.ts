// import { employee } from "./db";

// export const resolvers = {
//     Query: {
//       getEmployee: () => employee,
//       getEmployeeById: (parent, { id }) => {
//         return employee.find((emp) => emp.id == id);
//       },
//     },
  
//     Mutation: {
//       addEmployee: (parent, { input }) => {
//         const newEmp = { ...input };
//         employee.push(newEmp);
//         return newEmp;
//       },
//       deleteEmp: (parent, { id }: { id: number }) => {
//         const remainingEmployees = employee.filter((emp) => emp.id !== id);
//         employee = remainingEmployees;
//         return employee;
//       },
//       updateEmp: (parent, { id, input }) => {
//         employee.find((emp) => {
//           if (emp.id === id) {
//             emp.name = input.name;
//             emp.age = input.age;
//           }
//           return emp;
//         });
//       },
//     },
//   };