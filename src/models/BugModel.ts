import prismaClient from "../../prisma/prismaClient";
import { BugCreate, WhereBug } from "../types/types";

class BugModel {
  constructor(private ormProvider = prismaClient) {}

  async create(bug: BugCreate) {
    const newBug = await this.ormProvider.bug.create({
      data: bug,
      select: {
        id: true,
        description: true,
        creationDate: true,
        user: {
          select: {
            name: true,
            surname: true
          },
        },
        project: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });

    return newBug;
  }

  get = async (where: WhereBug) => {
    return await this.ormProvider.bug.findMany({
      where: {
        AND: [
          {
            userId: where.userId,
          },
          {
            projectId: where.projectId,
          },
          {
            creationDate: {
              gte: where.start_date ? new Date(where.start_date) : undefined,
              lte: where.end_date ? new Date(where.end_date) : undefined,
            },
          },
        ],
      },
      select: {
        id: true,
        description: true,
        creationDate: true,
        user: {
          select: {
            name: true,
            surname: true
          },
        },
        project: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });
  };
}

export default BugModel;
