import express, { json } from "express";
import cors from "cors";


import "dotenv/config";
import {  } from "./routes";
import UserRouter from "./routes/UsersRouter";
import ProjectRouter from "./routes/ProjectRouter";
import BugRouter from "./routes/BugRouter";

export const app = express();


app.disable("x-powered-by");
app.use(json());
app.use(cors());


app.use("/api/users", UserRouter);
app.use("/api/projects", ProjectRouter);
app.use("/api/bugs", BugRouter);


