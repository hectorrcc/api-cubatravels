import { app } from "../src/app";
import request from "supertest";

describe("/", () => {
  it("should response whit a 200 status code", async () => {
    const response = await request(app).post("/api/bugs").send({
      userId: 1,
      projectId: 1,
      description: " Bug #1",
    });

    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual("ok");
  });

  it("should response whit a 200 status code", async () => {
    const response = await request(app).get("/api/bugs").query({
      user_id: 1,
      project_id: 1,
    });

    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual("ok");
    expect(response.body.bugs.userId).toBe(true)
  });
});
