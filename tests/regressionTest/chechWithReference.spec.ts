import {
  createShape,
  waitWhenShapeStatusEqual,
} from "../../controller/shape/shape-controller";
import { DATE } from "../../helper/date";
import * as referenceData from "../../helper/compareWithReference/index";
import { referensShape } from "../../requests/shape-resource/createNewShape";
import { getListWithErorrsValue } from "../../helper/jsonProcessing";
import { toFile, toFileReferenceData } from "../../helper/exportFile";
import { reportHTML } from "../../helper/createReports/checkRegefenceDataReportHTML";
import {
  getIdsExecutions,
  getSummaryDataAboutJobs,
} from "../../controller/job-execution/job-executions-controller";
import { receivedIds } from "../../helper/createReports/checkReferenceDataReportIds";

describe("comparison of reference data", function () {
  const percentError = 5;
  Object.keys(referenceData).forEach((el: any) => {
    it.concurrent(
      `test ${el}`,
      async function () {
        const NAME = `${
          el[0].toUpperCase() + el.slice(1)
        }. Comparison of with reference data: ${DATE}`;
        const { id } = await createShape(NAME, false, true, referensShape[el]);
        await waitWhenShapeStatusEqual(id);
        const idExecutions = await getIdsExecutions(id);
        const response = await getSummaryDataAboutJobs(idExecutions[0]);
        // @ts-ignore
        const objReferenceData = referenceData[el];
        toFile(
          reportHTML(objReferenceData, response, percentError, id, NAME),
          "htmlResponse",
          "html"
        );
        toFile(JSON.stringify(receivedIds(id, el)), "ids");
        toFileReferenceData(
          `export const ${el}: any =${JSON.stringify(response)}`,
          el
        );
        expect(
          getListWithErorrsValue(objReferenceData, response, percentError)
            .length
        ).toEqual(0);
      },
      1000000
    );
  });
});
