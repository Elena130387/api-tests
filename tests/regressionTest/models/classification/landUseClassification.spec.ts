import * as referenceTile from "../../../../helper/compareWithReference/regression_for_all_models/coordForTile/indexCoords";
import * as referencePolygonsForEachTile from "../../../../helper/compareWithReference/regression_for_all_models/referenceResponsePolygons/landUse/indexReferenceResponses";
import { calcDeviation } from "../../../../helper/calcIntersectionOverUnion";
import { getLandUseModel } from "../../../../controller/model/landUse-model-controller";

describe.each(Object.keys(referenceTile))(
  "comparisons of reference data with current for 1 tile land Use",
  function (imageName) {
    const deviation = 20;
    // @ts-ignore
    const referenceResponse = referencePolygonsForEachTile[imageName];
    it("landUse specification", async function () {
      const currentResponse = await getLandUseModel(imageName);
      expect(referenceResponse.V1[0].label).toEqual(
        currentResponse.V1[0].label
      );
      expect(referenceResponse.V2[0].label).toEqual(
        currentResponse.V2[0].label
      );
      expect(
        calcDeviation(
          referenceResponse.V1[0].probability,
          currentResponse.V1[0].probability
        )
      ).toBeLessThan(deviation);
      expect(
        calcDeviation(
          referenceResponse.V2[0].probability,
          currentResponse.V2[0].probability
        )
      ).toBeLessThan(deviation);
    });
  }
);
