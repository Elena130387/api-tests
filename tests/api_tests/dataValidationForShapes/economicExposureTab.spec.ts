import {
  firstCompetedShapeId,
  getShape,
} from "../../../controller/graphql/shape";
import {
  getIdsExecutions,
  calcValueFromResponse,
} from "../../../controller/job-execution/job-executions-controller";
import { jsonkeys } from "../../../helper/jsonKeys";

describe("data validation for getShape economic Exposure Tab", function () {
  let summary: any,
    listEstimatorJobId: any[] = [];
  const timeTest = 20000;
  beforeAll(async function () {
    const idShape = await firstCompetedShapeId();
    summary = (await getShape(idShape)).data.shape.summary;
    listEstimatorJobId = await getIdsExecutions(idShape);
  }, timeTest);

  it(
    "successfully calculated value Economic Exposure",
    async function () {
      const { economicExposure } = summary;
      expect(
        await calcValueFromResponse(
          listEstimatorJobId,
          jsonkeys.economicExposure,
          "exposure_values",
          "V2"
        )
      ).toEqual(economicExposure);
    },
    timeTest
  );
});
