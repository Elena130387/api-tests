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
import { joplinShape } from "../../requests/shape-resource/createNewShape";
import { errorRgb } from "../../helper/rowConfluence";
import { createGqlMultiShape } from "../../controller/graphql/shape";
import { LAAirportAndDowntown300km2 } from "../../requests/graphql/createShape";
import {
  getIdsExecutions,
  waitWhenProgressEqual,
} from "../../controller/job-execution/job-executions-controller";

describe("create shapes LAA and Joplin", function () {
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
    const NAME = `LA airport and downtown. Performance test: ${FULLDATE}`;
    maxSec = 50;
    forceProcessing = false;

    const response = await createGqlMultiShape(
      LAAirportAndDowntown300km2,
      `${NAME}: LA`
    );
    id = response.data.calculate.id;
    await waitWhenShapeStatusEqual(id);
  }, 100000);

  it("successfully create joplin shape", async function () {
    const NAME = `Joplin. Performance test: ${FULLDATE}`;
    maxSec = 60;
    forceProcessing = true;

    const response = await createShape(
      `${NAME}: joplin`,
      forceProcessing,
      false,
      joplinShape
    );
    id = response.id;

    const jobIds = await getIdsExecutions(id);
    await waitWhenProgressEqual(jobIds[0], 2000);

    await waitWhenShapeStatusEqual(id);
  }, 500000);
});
