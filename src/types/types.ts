import { Bug } from "@prisma/client"

export type WhereBug={
  userId?: number,
  projectId?: number,
  start_date?: Date,
  end_date?: Date
}

export interface BugCreate extends Omit<Bug, "id" | "creationDate">{}
