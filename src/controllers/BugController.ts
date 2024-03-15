import { Response, Request } from "express";
import BugModel from "../models/BugModel";
import { BugCreate } from "../types/types";
import { BugGetSchema, BugSchema } from "../schema/BugSchema";

class BugController {
  constructor(private bugModel: BugModel) {}

  create = async (req: Request, res: Response) => {
    const { userId, projectId, description } = req.body as BugCreate;
    let bugValidate;

    try {
      bugValidate = await BugSchema.validate({
        userId,
        projectId,
        description,
      });
    } catch (error: any) {
      return res.status(422).json({ message: error.message });
    }

    try {
      const bug = await this.bugModel.create(bugValidate);
      const newBug = {
        ...bug,
        username: bug.user.name,
        project: bug.project.name,
      } as any;
      delete newBug.user;
      return res.status(200).json({ message: "ok", bug: newBug });
    } catch (error: any) {
      return res.status(409).json({ message: error.message });
    }
  };

  get = async (req: Request, res: Response) => {
    const { project_id, user_id, start_date, end_date } = req.query;

    let bugValidate;
    if (req.method != "GET") {
      return res.status(405);
    }

    if (
      project_id == undefined &&
      user_id == undefined &&
      start_date == undefined &&
      start_date == undefined &&
      end_date == undefined
    ) {
      return res
        .status(422)
        .json({ message: "At least one field is required" });
    }

    try {
      bugValidate = await BugGetSchema.validate({
        projectId: project_id !== "undefined" ? project_id : undefined,
        userId: user_id !== "undefined" ? user_id : undefined,
        start_date: start_date !== "undefined" ? start_date : undefined,
        end_date: end_date !== "undefined" ? end_date : undefined,
      });
    } catch (error: any) {
      return res.status(422).json({ message: error.message });
    }

    try {
      let bugs = await this.bugModel.get(bugValidate);

      if (bugs.length == 0) {
        return res.status(404).json({ message: "Not found" });
      }

      bugs = bugs.map((bug) => {
        const newBug = {
          ...bug,
          username: bug.user.name,
          project: bug.project.name,
        } as any;
        delete newBug.user;
        return newBug;
      });

      return res.status(200).json({ message: "ok", bugs });
    } catch (error: any) {
      return res.status(500);
    }
  };
}

export default BugController;
