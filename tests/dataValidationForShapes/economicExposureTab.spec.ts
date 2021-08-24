import { getShape } from "../../controller/graphql/shape";
import {
  getIdsExecutions,
  getFilteredJobExecutionsById,
  calcValueFromResponse,
} from "../../controller/job-execution/job-executions-controller";
import { jsonkeys } from "../../helper/jsonKeys";

describe("data validation for getShape economic Exposure Tab", function () {
  const idShape = 3165;
  let summary: any,
    listEstimatorJobId: any[] = [];

  beforeAll(async function () {
    summary = (await getShape(idShape)).data.shape.summary;
    listEstimatorJobId = await getIdsExecutions(idShape);
  });

  it("successfully calculated value Economic Exposure", async function () {
    const { economicExposure } = summary;
    expect(
      await calcValueFromResponse(
        idShape,
        jsonkeys.economicExposure,
        "exposure_values",
        "V2"
      )
    ).toEqual(economicExposure);
  });
});
