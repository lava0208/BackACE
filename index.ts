import express from "express";
import { ConnectDb } from "./dbconfig";
import cors from "cors";
import Userrouter from "./routes/user";
import dbInit from "./dbconfig/dbinit";
import Salaryrouter from "./routes/salary";

const app: express.Application = express();

ConnectDb();
dbInit();
const port: any = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/user", Userrouter);
app.use("/salary", Salaryrouter);

app.listen(port, () => {
  console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
