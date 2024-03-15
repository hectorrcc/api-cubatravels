import { Router } from "express";
import BugController from "../controllers/BugController";
import BugModel from "../models/BugModel";


const bugModel = new BugModel()
const bugController = new BugController(bugModel)
export const BugRouter = Router();

BugRouter.post("/",  bugController.create);
BugRouter.get("/",  bugController.get);


export default BugRouter;
 