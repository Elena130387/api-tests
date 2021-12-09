import {
  findJobExecutions,
  getJobExecutionsById,
} from "../../../controller/job-execution/job-executions-controller";

describe("get job execution by ID", function () {
  const LIMIT = 1;
  const OFFSET = 0;
  let shapeId: number;

  beforeAll(async function () {
    const response = await findJobExecutions(LIMIT, OFFSET);
    const { content } = response;
    const {
      jobExecution: { id },
    } = content[0];

    shapeId = id;
  });

  it("successfully find job executions", async function () {
    const response = await getJobExecutionsById(shapeId);

    const { id, polygon } = response.jobExecution;

    expect(id).toEqual(shapeId);
    expect(response.links[0].href).toContain(shapeId.toString());
    expect.arrayContaining(polygon.coordinates);
  });
});
