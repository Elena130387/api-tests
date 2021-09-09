import { getShape } from "../../controller/graphql/shape";
import {
  createShape,
  waitWhenShapeStatusEqual,
} from "../../controller/shape/shape-controller";
import { FULLDATE } from "../../helper/date";
import { summaryReference } from "../../helper/compareWithReference/referenceData";
import { referensShape } from "../../requests/shape-resource/createNewShape";
import { getObjectNumbers } from "../../helper/jsonProcessing";

describe("comparison of reference data", function () {
  let summary: any;
  const percentError = 5;

  beforeAll(async function () {
    const NAME = `autotest. Comparison of with reference data : ${FULLDATE}`;
    const responseCreate = await createShape(NAME, true, false, referensShape);
    const id = responseCreate.id;
    await waitWhenShapeStatusEqual(id);

    const response = await getShape(id);
    summary = response.data.shape.summary;
  }, 1000000);

  it("test", function () {
    const objReferenceData = getObjectNumbers(summaryReference);
    const objReceivedData = getObjectNumbers(summary);

    objReferenceData.forEach((el: any, index: number) => {
      expect(Math.abs(el - objReceivedData[index])).toBeLessThanOrEqual(
        (el * percentError) / 100
      );
    });
  });
});
