import Salary from "../models/salaryData";
import User from "../models/usermodel";
const isDev = process.env.NODE_ENV === "development";

const dbInit = () => {
  User.sync({ alter: isDev });
  Salary.sync({ alter: isDev });
};
export default dbInit;
