import { Router } from "express";
import UserModel from "../models/UserModel";
import UserController from "../controllers/UserController";


const userModel = new UserModel()
const bugController = new UserController(userModel)
export const UserRouter = Router();


UserRouter.get("/",  bugController.get);


export default UserRouter;
 