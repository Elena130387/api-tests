import {
  createReport,
  sendReportToConfluence,
} from "../../controller/confluence/confluence-controller";
import {
  createShape,
  waitWhenShapeStatusEqual,
} from "../../controller/shape/shape-controller";
import { toJsonFile } from "../../helper/exportToJsonFile";
import { FULLDATE } from "../../helper/date";
import { shape01km2 } from "../../requests/shape-resource/createNewShape";

describe("create shape 400m2 for a while", function () {
  const NAME = `perfomance test: ${FULLDATE}`;
  let id: any, forceProcessing: boolean;

  afterEach(async function () {
    const objReport = await createReport(id, !forceProcessing);
    await sendReportToConfluence(objReport);
    toJsonFile(
      JSON.stringify(objReport),
      `performanceReportPreprocessing${!forceProcessing}`
    );
  }, 100000);

  it("create shape 4m2 with preprocessing", async function () {
    forceProcessing = false;
    const response = await createShape(
      NAME,
      forceProcessing,
      false,
      shape01km2
    );
    id = response.id;
    await waitWhenShapeStatusEqual(id);
  }, 1000000);
  it("create shape 4m2 without preprocessing", async function () {
    forceProcessing = true;
    const response = await createShape(
      NAME,
      forceProcessing,
      false,
      shape01km2
    );
    id = response.id;
    await waitWhenShapeStatusEqual(id);
  }, 1000000);
});
