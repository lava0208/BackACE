import { Router } from "express";
import { createGraph, GetGraph } from "../controllers/graphcontroller";
// import { createSalary, GetSalaries } from "../controllers/salarycontroller";

const GraphRouter = Router();

GraphRouter.post("/creategraph", createGraph);
GraphRouter.post("/getgraph", GetGraph);

export default GraphRouter;
