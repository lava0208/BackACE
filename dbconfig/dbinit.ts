import Graph from "../models/graphdata";
import Salary from "../models/salaryData";
import User from "../models/usermodel";
const isDev = process.env.NODE_ENV === "development";

const dbInit = () => {
  User.sync({ alter: isDev });
  Salary.sync({ alter: isDev });
  Graph.sync({ alter: true });
};
export default dbInit;
