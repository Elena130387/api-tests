import { getShape } from "../../controller/graphql/shape";
import {
  getIdsExecutions,
  getFilteredJobExecutionsById,
  calcCountFromTile,
} from "../../controller/job-execution/job-executions-controller";
import { jsonkeys } from "../../helper/jsonKeys";

describe("data validation for getShape economic Exposure Tab", function () {
  const idShape = 3120;
  let summary: any,
    listEstimatorJobId: any[] = [];

  beforeAll(async function () {
    summary = (await getShape(idShape)).data.shape.summary;
    listEstimatorJobId = await getIdsExecutions(idShape);
  });

  it("successfully calculated value Economic Exposure", async function () {
    const { economicExposure } = summary;
    let count = 0;
    for (let id of listEstimatorJobId) {
      const response = await getFilteredJobExecutionsById(
        id,
        "exposure_values",
        "V2"
      );
      const def = response.jobExecution.tiles.default;
      count += await calcCountFromTile(def, jsonkeys.economicExposure);
    }
    expect(count).toEqual(economicExposure);
  });
});
