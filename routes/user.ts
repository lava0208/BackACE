import { Router } from "express";
import { createUser, LoginUser } from "../controllers/usercontroller";

const Userrouter = Router();

Userrouter.post("/createuser", createUser);
Userrouter.post("/login", LoginUser);

export default Userrouter;
