import { app } from "../src/app";
import request from "supertest";

describe("/", () => {
  it("Crete new bug", async () => {
    const response = await request(app).post("/api/bugs").send({
      userId: 1,
      projectId: 1,
      description: " Bug #1",
    });

    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual("ok");
  });

  it("Get Bugs", async () => {
    const response = await request(app).get("/api/bugs").query({
      "start_date": "1900-01-01"
    });

    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual("ok");
    expect(response.body.bugs).toBeInstanceOf(Array)
  });
});
