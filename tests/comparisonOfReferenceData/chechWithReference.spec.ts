import { getShape } from "../../controller/graphql/shape";
import {
  createShape,
  waitWhenShapeStatusEqual,
} from "../../controller/shape/shape-controller";
import { FULLDATE } from "../../helper/date";
import { summaryReference } from "../../helper/compareWithReference/referenceData";
import { referensShape } from "../../requests/shape-resource/createNewShape";
import {
  getObjectNumbers,
  keyify,
  transformToOneLevelObject,
} from "../../helper/jsonProcessing";
import { toJsonFile } from "../../helper/exportToJsonFile";

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
  }, 1500000);

  it("test", function () {
    const objReferenceData = transformToOneLevelObject(summaryReference);
    const objReceivedData = transformToOneLevelObject(summary);
    const inccorectExpObj = Object.entries(objReferenceData).filter(
      ([key, value]: any) =>
        Math.abs(value - objReceivedData[key]) >= (value * percentError) / 100
    );
    const inccorectActualObj = Object.entries(objReceivedData).filter(
      ([key, value]: any) =>
        Math.abs(value - objReferenceData[key]) >= (value * percentError) / 100
    );
    if (inccorectExpObj.length)
      toJsonFile(
        Object.fromEntries(inccorectExpObj),
        "expectedResultReferenceData"
      ),
        toJsonFile(
          Object.fromEntries(inccorectActualObj),
          "actualResultReferenceData"
        );
    expect(inccorectExpObj.length).toEqual(0);
  });
});
