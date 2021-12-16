import {
  copyTileToReportDir,
  createReportsDirs,
  toFile,
} from "../../../../helper/exportFile";

import * as referenceCoordForFacadeModel from "../../../../helper/compareWithReference/regression_for_all_models/referenceResponsePolygons/facade/indexReferenceResponseFacade";
import * as util from "util";
import {
  cratePNGMaskForFacade,
  createPNGDifferentBetweenMasks,
} from "../../../../helper/compareWithReference/imageProcessing";
import {
  calcIoUClassBuildings,
  calcIoUClassNoneBuildings,
} from "../../../../helper/calcIntersectionOverUnion";
import { getBuildHeightModelV3 } from "../../../../controller/model/buildHeight-model-controller";
import { createReportModelsRegression } from "../../../../helper/createReports/regressionModelsReportHTML";

describe("comparisons of reference data with current for 1 tile Facade model", function () {
  const typeModel = "facade";
  const WIDTH = 256;
  const HEIGHT = 256;
  createReportsDirs();
  describe.each(Object.keys(referenceCoordForFacadeModel))(
    `${util.format("%s")} facade model`,
    function (imageName) {
      // @ts-ignore
      const referenceResponse = referenceCoordForFacadeModel[imageName];
      const referenceMask = imageName + "ReferenceMask";
      beforeAll(async function () {
        copyTileToReportDir(imageName, "streetImage/");
        await cratePNGMaskForFacade(referenceResponse, referenceMask);
      });

      it("successfully calculated IoU", async function () {
        const currentMask = imageName + "CurrentMask";
        const differentBetweenMasks = imageName + "Diff";
        const currentResponse = await getBuildHeightModelV3(imageName);
        await cratePNGMaskForFacade(currentResponse, currentMask);
        createPNGDifferentBetweenMasks(
          referenceMask,
          currentMask,
          differentBetweenMasks
        );
        const IoUClassNoneBuilding = await calcIoUClassNoneBuildings(
          differentBetweenMasks,
          WIDTH,
          HEIGHT
        );
        const IoUClassBuilding = await calcIoUClassBuildings(
          differentBetweenMasks,
          WIDTH,
          HEIGHT
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
      }, 15000);
    }
  );
});
