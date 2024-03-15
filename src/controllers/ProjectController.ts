import { Response, Request } from "express";
import ProjectModel from "../models/ProjectModel";

class ProjectController {
  constructor(private projectModel: ProjectModel) {}

  get = async (_req: Request, res: Response) => {
    try {
      const projects = await this.projectModel.get();

      return res.status(200).json({ message: "ok", projects });
    } catch (error: any) {
      return res.status(500);
    }
  };
}

export default ProjectController;
