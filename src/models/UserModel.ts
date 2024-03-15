import prismaClient from "../../prisma/prismaClient";


class UserModel {
  constructor(private ormProvider = prismaClient) {}



  get = async () => {
   
    return await this.ormProvider.user.findMany();
  };
}

export default UserModel;
