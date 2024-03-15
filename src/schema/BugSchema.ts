import { date, number, object, string } from "yup";

export const BugSchema = object({
  userId: number().required("UserId field is required"),
  projectId: number().required(" ProjectId field is required"),
  description: string()
    .max(100, "The field cannot be more than 100 characters")
    .required("Description field is required"),
});

export const BugGetSchema = object({
  userId: number(),
  projectId: number(),
  start_date: date(),
  end_date: date(),
});
