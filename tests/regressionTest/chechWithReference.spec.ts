import { getShape } from "../../controller/graphql/shape";
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

describe("comparison of reference data", function () {
  const percentError = 5;

  Object.keys(referenceData).forEach((el: any) => {
    it.concurrent(
      `test ${el}`,
      async function () {
        const NAME = `${
          el[0].toUpperCase() + el.slice(1)
        }. Comparison of with reference data: ${DATE}`;
        const { id } = await createShape(NAME, true, false, referensShape[el]);
        await waitWhenShapeStatusEqual(id);
        const response = await getShape(id);
        const { summary } = response.data.shape;
        // @ts-ignore
        const objReferenceData = referenceData[el].data.shape.summary;
        toFile(
          reportHTML(objReferenceData, response, percentError),
          "htmlResponse",
          "html"
        );
        toFileReferenceData(
          `export const ${el}: any =${JSON.stringify(response)}`,
          el
        );
        expect(
          getListWithErorrsValue(objReferenceData, summary, percentError).length
        ).toEqual(0);
      },
      1000000
    );
  });
});
