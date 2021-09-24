import {
  createReport,
  sendReportToConfluence,
} from "../../controller/confluence/confluence-controller";
import {
  createShape,
  waitWhenShapeStatusEqual,
} from "../../controller/shape/shape-controller";
import { toFile } from "../../helper/exportFile";
import { FULLDATE } from "../../helper/date";
import {
  shape400km2,
  overclockingShape,
} from "../../requests/shape-resource/createNewShape";

describe("create shape 400m2 for a while", function () {
  const NAME = `perfomance test: ${FULLDATE}`;
  const TIME = 1000000;
  let id: any, forceProcessing: boolean;

  beforeAll(async function () {
    const response = await createShape(
      "warm up",
      true,
      false,
      overclockingShape
    );
    id = response.id;
    await waitWhenShapeStatusEqual(id);
  }, TIME);

  afterEach(async function () {
    const objReport = await createReport(id, !forceProcessing);
    await sendReportToConfluence(objReport);
    toFile(
      JSON.stringify(objReport),
      `performanceReportPreprocessing${!forceProcessing}`
    );
  }, TIME);

  it(
    "create shape 4m2 with preprocessing",
    async function () {
      forceProcessing = false;
      const response = await createShape(
        NAME,
        forceProcessing,
        false,
        shape400km2
      );
      id = response.id;
      await waitWhenShapeStatusEqual(id);
    },
    TIME
  );
  it(
    "create shape 4m2 without preprocessing",
    async function () {
      forceProcessing = true;
      const response = await createShape(
        NAME,
        forceProcessing,
        false,
        shape400km2
      );
      id = response.id;
      await waitWhenShapeStatusEqual(id);
    },
    TIME
  );
});
