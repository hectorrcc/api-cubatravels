import { Router } from "express";
import ProjectModel from "../models/ProjectModel";
import ProjectController from "../controllers/ProjectController";

const projectModel = new ProjectModel();
const projectController = new ProjectController(projectModel);
export const ProjectRouter = Router();

ProjectRouter.get("/", projectController.get);

export default ProjectRouter;
