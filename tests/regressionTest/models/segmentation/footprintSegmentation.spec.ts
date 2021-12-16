import { getFootprintModel } from "../../../../controller/model/footprint-model-controller";

import {
  copyTileToReportDir,
  createReportsDirs,
  toFile,
} from "../../../../helper/exportFile";
import { createReportModelsRegression } from "../../../../helper/createReports/regressionModelsReportHTML";
import * as referenceTile from "../../../../helper/compareWithReference/regression_for_all_models/coordForTile/indexCoords";
import * as referencePolygonsForEachTile from "../../../../helper/compareWithReference/regression_for_all_models/referenceResponsePolygons/footprint/indexReferenceResponses";
import * as util from "util";
import {
  createPNGDifferentBetweenMasks,
  createPNGMaskPolygonsForTile,
} from "../../../../helper/compareWithReference/imageProcessing";
import {
  calcIoUClassBuildings,
  calcIoUClassNoneBuildings,
} from "../../../../helper/calcIntersectionOverUnion";

describe("comparisons of reference data with current for 1 tile FootPrint model", function () {
  const typeModel = "footprint";
  createReportsDirs();
  describe.each(Object.keys(referenceTile))(
    `${util.format("%s")} model`,
    function (imageName) {
      // @ts-ignore
      const coordTile = referenceTile[imageName];
      // @ts-ignore
      const referenceResponse = referencePolygonsForEachTile[imageName];
      const referenceMask = imageName + "ReferenceMask";
      beforeAll(async function () {
        copyTileToReportDir(imageName);
        await createPNGMaskPolygonsForTile(
          coordTile,
          referenceResponse.polygons.flat(),
          referenceMask
        );
      });

      it("successfully calculated IoU", async function () {
        const currentMask = imageName + "CurrentMask";
        const differentBetweenMasks = imageName + "Diff";
        const currentResponse = await getFootprintModel(coordTile, imageName);
        await createPNGMaskPolygonsForTile(
          coordTile,
          currentResponse.polygons.flat(),
          currentMask
        );
        createPNGDifferentBetweenMasks(
          referenceMask,
          currentMask,
          differentBetweenMasks
        );
        const IoUClassNoneBuilding = await calcIoUClassNoneBuildings(
          differentBetweenMasks
        );
        const IoUClassBuilding = await calcIoUClassBuildings(
          differentBetweenMasks
        );
        const report = createReportModelsRegression(
          imageName,
          referenceMask,
          currentMask,
          differentBetweenMasks,
          { "none-building": IoUClassNoneBuilding, building: IoUClassBuilding }
        );
        toFile(report, typeModel, "html");
        expect(IoUClassNoneBuilding * 100).toBeGreaterThan(85);
        expect(IoUClassBuilding * 100).toBeGreaterThan(85);
      });
    }
  );
});
