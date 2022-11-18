import { Router } from "express";
import { createSalary, GetSalaries } from "../controllers/salarycontroller";

const Salaryrouter = Router();

Salaryrouter.post("/createsalary", createSalary);
Salaryrouter.post("/getSalary", GetSalaries);

export default Salaryrouter;
