import { getBuildHeightModelV1 } from "../../../../controller/model/buildHeight-model-controller";
import * as referenceTile from "../../../../helper/compareWithReference/regression_for_all_models/coordForTile/indexCoords";
import * as referencePolygonsForEachTile from "../../../../helper/compareWithReference/regression_for_all_models/referenceResponsePolygons/buildingHeightV1/indexReferenceResponses";
import { calcDeviation } from "../../../../helper/calcIntersectionOverUnion";

describe.each(Object.keys(referenceTile))(
  "comparisons of reference data with current for 1 tile Building Height model V1",
  function (imageName) {
    const deviation = 20;
    // @ts-ignore
    const coordTile = referenceTile[imageName];
    // @ts-ignore
    const referenceResponse = referencePolygonsForEachTile[imageName];
    it("building height specification V1", async function () {
      const currentResponse = await getBuildHeightModelV1(coordTile, imageName);
      expect(
        calcDeviation(
          referenceResponse.height_mean_estimate,
          currentResponse.height_mean_estimate
        )
      ).toBeLessThan(deviation);
      expect(referenceResponse.height_mean_opensourcedata).toEqual(
        currentResponse.height_mean_opensourcedata
      );
    });
  }
);
