import {
  copyTileToReportDir,
  createReportsDirs,
  toFile,
} from "../../../../helper/exportFile";
import { createReportModelsRegression } from "../../../../helper/createReports/regressionModelsReportHTML";
import * as referencePolygonsSmallObject from "../../../../helper/compareWithReference/regression_for_all_models/referenceResponsePolygons/objectDetection/smallObject/indexReferenceResponsesObject";
import * as referencePolygonsLargeObject from "../../../../helper/compareWithReference/regression_for_all_models/referenceResponsePolygons/objectDetection/largeObject/indexReferenceResponsesObject";
import * as util from "util";
import {
  cratePNGMaskForFacade,
  createPNGDifferentBetweenMasks,
} from "../../../../helper/compareWithReference/imageProcessing";
import {
  calcIoUClassBuildings,
  calcIoUClassNoneBuildings,
} from "../../../../helper/calcIntersectionOverUnion";
import { convertGeoPointsToArrayCoords } from "../../../../helper/compareWithReference/coordProcessing";
import { getObjectDetectionModel } from "../../../../controller/model/object-detection-controller";

describe("comparisons of reference data with current for 1 tile object detection model", function () {
  const typeModel = "objectDetection";
  createReportsDirs();
  describe.each(Object.keys(referencePolygonsSmallObject))(
    `${util.format("%s")} small object model`,
    function (imageName) {
      // @ts-ignore
      const referenceResponse = referencePolygonsSmallObject[imageName];
      const referenceMask = imageName + "ReferenceMaskSmallObject";
      const WIDTH = 224;
      const HEIGHT = 224;
      beforeAll(async function () {
        copyTileToReportDir(imageName);
        await cratePNGMaskForFacade(
          convertGeoPointsToArrayCoords(referenceResponse),
          referenceMask,
          WIDTH,
          HEIGHT,
          `viewBox="0 0 ${WIDTH} ${HEIGHT}"`
        );
      });

      it("successfully calculated IoU", async function () {
        const currentMask = imageName + "CurrentMaskSmallObject";
        const differentBetweenMasks = imageName + "DiffSmallObject";
        const currentResponse = await getObjectDetectionModel(
          "defaultTiles/" + imageName,
          "default"
        );
        await cratePNGMaskForFacade(
          convertGeoPointsToArrayCoords(currentResponse),
          currentMask,
          WIDTH,
          HEIGHT,
          `viewBox="0 0 ${WIDTH} ${HEIGHT}"`
        );
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
          { "none-object": IoUClassNoneBuilding, object: IoUClassBuilding }
        );
        toFile(report, typeModel, "html");
        expect(IoUClassNoneBuilding * 100).toBeGreaterThan(85);
        expect(IoUClassBuilding * 100).toBeGreaterThan(85);
      });
    }
  );
  describe.each(Object.keys(referencePolygonsLargeObject))(
    `${util.format("%s")} large object model`,
    function (imageName) {
      // @ts-ignore
      const referenceResponse = referencePolygonsLargeObject[imageName];
      const referenceMask = imageName + "ReferenceMaskLargeObject";
      const WIDTH = 416;
      const HEIGHT = 416;
      beforeAll(async function () {
        copyTileToReportDir(imageName, "largeObjectDetection/");
        await cratePNGMaskForFacade(
          convertGeoPointsToArrayCoords(referenceResponse),
          referenceMask,
          WIDTH,
          HEIGHT,
          `viewBox="0 0 ${WIDTH} ${HEIGHT}"`
        );
      });

      it("successfully calculated IoU", async function () {
        const currentMask = imageName + "CurrentMaskLargeObject";
        const differentBetweenMasks = imageName + "DiffLargeObject";
        const currentResponse = await getObjectDetectionModel(
          "largeObjectDetection/" + imageName,
          "largeObjects"
        );
        await cratePNGMaskForFacade(
          convertGeoPointsToArrayCoords(currentResponse),
          currentMask,
          WIDTH,
          HEIGHT,
          `viewBox="0 0 ${WIDTH} ${HEIGHT}"`
        );
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
          { "none-object": IoUClassNoneBuilding, object: IoUClassBuilding }
        );
        toFile(report, typeModel, "html");
        expect(IoUClassNoneBuilding * 100).toBeGreaterThan(85);
        expect(IoUClassBuilding * 100).toBeGreaterThan(85);
      });
    }
  );
});
