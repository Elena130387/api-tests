import * as referencePolygonsForEachTile from "../../../../helper/compareWithReference/regression_for_all_models/referenceResponsePolygons/exposure/indexReferenceResponses";
import { getExposure } from "../../../../controller/model/exposure-model-controller";
import { calcDeviation } from "../../../../helper/calcIntersectionOverUnion";

describe.each(Object.keys(referencePolygonsForEachTile))(
  "comparisons of reference data with current for 1 tile exposure calc",
  function (imageName) {
    const deviation = 20;
    // @ts-ignore
    const referenceResponse = referencePolygonsForEachTile[imageName];
    it("exposure calc classification", async function () {
      const fs = require("fs");
      const body = JSON.parse(
        fs.readFileSync(
          `./helper/compareWithReference/regression_for_all_models/bodyForRequestByExposureCalc/${imageName}.json`
        )
      );
      const currentResponse = await getExposure(body);
      expect(
        calcDeviation(
          currentResponse.economicExposure,
          referenceResponse.economicExposure
        )
      ).toBeLessThan(deviation);
      expect(
        calcDeviation(
          currentResponse.insuranceExposure,
          referenceResponse.insuranceExposure
        )
      ).toBeLessThan(deviation);
    });
  }
);
