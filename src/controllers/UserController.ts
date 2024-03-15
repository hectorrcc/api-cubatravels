import { Response, Request } from "express";
import UserModel from "../models/UserModel";

class UserController {
  constructor(private userModel: UserModel) {}

  get = async (_req: Request, res: Response) => {
    try {
      const users = await this.userModel.get();

      return res.status(200).json({ message: "ok", users });
    } catch (error: any) {
      return res.status(500);
    }
  };
}

export default UserController;
