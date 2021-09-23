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
  joplinShape,
  LAAirportAndDowntown300km2,
} from "../../requests/shape-resource/createNewShape";
import { errorRgb } from "../../helper/rowConfluence";

describe("create shapes LAA and Joplin", function () {
  const NAME = `performance test: ${FULLDATE}`;
  let id: any, forceProcessing: boolean, maxSec: number;

  afterEach(async function () {
    const objReport = await createReport(id, !forceProcessing);
    await sendReportToConfluence(
      objReport,
      errorRgb(objReport.seconds, maxSec)
    );
    toFile(
      JSON.stringify(objReport),
      `LAandJoplinReportPreprocessing${!forceProcessing}`
    );
  }, 100000);

  it("successfully create LA shape", async function () {
    maxSec = 50;
    forceProcessing = true;
    const response = await createShape(
      `${NAME}: LA`,
      forceProcessing,
      false,
      LAAirportAndDowntown300km2
    );
    id = response.id;
    await waitWhenShapeStatusEqual(id);
  }, 100000);
  it.only("successfully create joplin shape", async function () {
    maxSec = 60;
    forceProcessing = false;

    const response = await createShape(
      `${NAME}: joplin`,
      forceProcessing,
      false,
      joplinShape
    );
    id = response.id;
    await waitWhenShapeStatusEqual(id);
  }, 110000);
});
