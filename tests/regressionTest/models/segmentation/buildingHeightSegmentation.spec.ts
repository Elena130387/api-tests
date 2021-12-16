import { getBuildHeightModelV2 } from "../../../../controller/model/buildHeight-model-controller";
import * as referenceTile from "../../../../helper/compareWithReference/regression_for_all_models/coordForTile/indexCoords";
import * as referencePolygonsForEachTile from "../../../../helper/compareWithReference/regression_for_all_models/referenceResponsePolygons/buildingHeightV2/indexReferenceResponses";
import {
  createPNGDifferentBetweenMasks,
  createPNGMaskPolygonsForTile,
} from "../../../helper/compareWithReference/imageProcessing";
import {
  copyTileToReportDir,
  createReportsDirs,
  toFile,
} from "../../../helper/exportFile";
import { createReportModelsRegression } from "../../../helper/createReports/regressionModelsReportHTML";
import {
  calcIoUClassBuildings,
  calcIoUClassNoneBuildings,
  getIoUForEachClassBuildings,
} from "../../../helper/calcIntersectionOverUnion";

describe("comparisons of reference data with current for 1 tile Building Height model", function () {
  const typeModel = "buildingHeightV2";
  createReportsDirs();
  describe.each(Object.keys(referenceTile))(
    `comparisons of reference data with current for 1 tile Building Height model`,
    function (imageName) {
      // @ts-ignore
      const coordTile = referenceTile[imageName];
      // @ts-ignore
      const referenceResponse = referencePolygonsForEachTile[imageName];
      const referenceMaskOneClass = imageName + "OneClassReferenceMask",
        currentMaskOneClass = imageName + "OneClassCurrentMask",
        differentBetweenMasksOneClass = imageName + "OneClassDiff";
      const referenceMask = imageName + "ReferenceMask",
        currentMask = imageName + "CurrentMask",
        differentBetweenMasks = imageName + "Diff";
      beforeAll(async function () {
        copyTileToReportDir(imageName);
        const arrayPolygonsOneClass = referenceResponse.buildings.map(
          (el: any) => el.polygon
        );
        await createPNGMaskPolygonsForTile(
          coordTile,
          arrayPolygonsOneClass,
          referenceMaskOneClass
        );
        await createPNGMaskPolygonsForTile(
          coordTile,
          referenceResponse.buildings,
          referenceMask
        );
      });

      it("building height one class (like footprint)", async function () {
        const currentResponse = await getBuildHeightModelV2(
          coordTile,
          imageName
        );
        const currentArrayPolygons = currentResponse.buildings.map(
          (el: any) => el.polygon
        );
        await createPNGMaskPolygonsForTile(
          coordTile,
          currentArrayPolygons,
          currentMaskOneClass
        );
        createPNGDifferentBetweenMasks(
          referenceMaskOneClass,
          currentMaskOneClass,
          differentBetweenMasksOneClass
        );
        const IoUClassNoneBuilding = await calcIoUClassNoneBuildings(
          differentBetweenMasksOneClass
        );
        const IoUClassBuilding = await calcIoUClassBuildings(
          differentBetweenMasksOneClass
        );
        const report = createReportModelsRegression(
          imageName,
          referenceMaskOneClass,
          currentMaskOneClass,
          differentBetweenMasksOneClass,
          { "none-building": IoUClassNoneBuilding, building: IoUClassBuilding }
        );
        toFile(report, typeModel, "html");
        expect(IoUClassNoneBuilding * 100).toBeGreaterThan(85);
        expect(IoUClassBuilding * 100).toBeGreaterThan(85);
      }, 15000);
      it("building height  BuildingClass", async function () {
        const { buildings } = await getBuildHeightModelV2(coordTile, imageName);
        await createPNGMaskPolygonsForTile(coordTile, buildings, currentMask);
        createPNGDifferentBetweenMasks(
          referenceMask,
          currentMask,
          differentBetweenMasks
        );
        const IoUs = await getIoUForEachClassBuildings(
          imageName,
          coordTile,
          referenceResponse.buildings,
          buildings
        );
        const report = createReportModelsRegression(
          imageName,
          referenceMask,
          currentMask,
          differentBetweenMasks,
          IoUs
        );
        toFile(report, typeModel, "html");
      }, 15000);
    }
  );
});
