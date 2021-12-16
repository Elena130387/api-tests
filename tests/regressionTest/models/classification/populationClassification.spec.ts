import * as referenceTile from "../../../../helper/compareWithReference/regression_for_all_models/coordForTile/indexCoords";
import * as referencePolygonsForEachTile from "../../../../helper/compareWithReference/regression_for_all_models/referenceResponsePolygons/population/indexReferenceResponses";
import { calcDeviation } from "../../../../helper/calcIntersectionOverUnion";
import { getPopulationModel } from "../../../../controller/model/population-model-controller";

describe.each(Object.keys(referenceTile))(
  "comparisons of reference data with current for 1 tile population",
  function (imageName) {
    const deviation = 20;
    // @ts-ignore
    const referenceResponse = referencePolygonsForEachTile[imageName];
    it("population specification", async function () {
      const currentResponse = await getPopulationModel(imageName);
      expect(
        calcDeviation(referenceResponse.value, currentResponse.value)
      ).toBeLessThan(deviation);
    });
  }
);
