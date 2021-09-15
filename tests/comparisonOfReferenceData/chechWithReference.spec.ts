import { getShape } from "../../controller/graphql/shape";
import {
  createShape,
  waitWhenShapeStatusEqual,
} from "../../controller/shape/shape-controller";
import { DATE } from "../../helper/date";
import * as referenceData from "../../helper/compareWithReference/index";
import { referensShape } from "../../requests/shape-resource/createNewShape";
import { transformToOneLevelObject } from "../../helper/jsonProcessing";
import { toJsonFile } from "../../helper/exportToJsonFile";
import { reportHTML } from "../../helper/createReports/checkRegefenceDataReportHTML";

describe("comparison of reference data", function () {
  let response: any;
  const percentError = 0.1;
  let report: any;
  afterAll(function () {
    toJsonFile(report, "htmlResponse", "html");
  });

  Object.keys(referenceData).forEach((el: any, index: number) => {
    it("test", async function () {
      const NAME = `autotest. ${
        el[0].toUpperCase() + el.slice(1)
      }. Comparison of with reference data :,${DATE}`;
      const responseCreate = await createShape(
        NAME,
        true,
        false,
        referensShape[el]
      );
      const { id } = responseCreate;
      await waitWhenShapeStatusEqual(id);
      let response = await getShape(id);
      const { summary } = response.data.shape;
      const objReferenceData = transformToOneLevelObject(
        // @ts-ignore
        referenceData[el].data.shape.summary
      );
      const objReceivedData = transformToOneLevelObject(summary);
      const inccorectExpObj = Object.entries(objReferenceData).filter(
        ([key, value]: any) =>
          Math.abs(value - objReceivedData[key]) >= (value * percentError) / 100
      );
      report = reportHTML(objReferenceData, response, percentError);
      expect(inccorectExpObj.length).toEqual(0);
    }, 5000000);
  });
});
