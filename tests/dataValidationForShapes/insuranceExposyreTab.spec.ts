import { getShape } from "../../controller/graphql/shape";
import {
  getIdsExecutions,
  getFilteredJobExecutionsById,
  calcValueFromResponse,
} from "../../controller/job-execution/job-executions-controller";
import { jsonkeys } from "../../helper/jsonKeys";

describe("data validation for getShape insurance Exposure Tab", function () {
  const idShape = 3165;
  let summary: any,
    listEstimatorJobId: any[] = [];

  beforeAll(async function () {
    summary = (await getShape(idShape)).data.shape.summary;
    listEstimatorJobId = await getIdsExecutions(idShape);
  });

  it("successfully calculated value Economic Exposure", async function () {
    const { insuranceExposure } = summary;
    let sumInsuranceExposure = 0;
    insuranceExposure.forEach((el: any) => (sumInsuranceExposure += el.value));
    expect(
      await calcValueFromResponse(
        idShape,
        jsonkeys.insuranceExposure,
        "exposure_values",
        "V2"
      )
    ).toEqual(sumInsuranceExposure);
  });
});
