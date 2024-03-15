import prismaClient from "../../prisma/prismaClient";


class ProjectModel {
  constructor(private ormProvider = prismaClient) {}



  get = async () => {
   
    return await this.ormProvider.project.findMany();
  };
}

export default ProjectModel;
