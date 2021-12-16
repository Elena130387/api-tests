import {
  copyTileToReportDir,
  createReportsDirs,
  toFile,
} from "../../../../helper/exportFile";
import { createReportModelsRegression } from "../../../../helper/createReports/regressionModelsReportHTML";
import * as util from "util";
import { getDamageModel } from "../../../../controller/model/damage-model-controller";
import { getBuildHeightModelV2 } from "../../../../controller/model/buildHeight-model-controller";
import { damageObj } from "../../../../requests/models/damageRequest";
import * as referenceTile from "../../../../helper/compareWithReference/regression_for_all_models/coordForTile/indexCoords";
import * as referencePolygonsForEachTile from "../../../../helper/compareWithReference/regression_for_all_models/referenceResponsePolygons/damage/indexReferenceResponses";
import {
  createPNGDifferentBetweenMasks,
  createPNGMaskPolygonsForTile,
} from "../../../../helper/compareWithReference/imageProcessing";
import { getIoUForEachClassBuildings } from "../../../../helper/calcIntersectionOverUnion";

describe("comparisons of reference data with current for 1 tile Damage model", function () {
  const typeModel = "damage";
  createReportsDirs();
  describe.each(Object.keys(referenceTile))(
    `${util.format("%s")} model`,
    function (imageName) {
      // @ts-ignore
      const coordTile = referenceTile[imageName];
      // @ts-ignore
      const referenceResponse = referencePolygonsForEachTile[imageName];

      const referenceMask = imageName + "ReferenceMask",
        currentMask = imageName + "CurrentMask",
        differentBetweenMasks = imageName + "Diff";

      const referenceMaskOneClass = imageName + "OneClassReferenceMask",
        currentMaskOneClass = imageName + "OneClassCurrentMask",
        differentBetweenMasksOneClass = imageName + "OneClassDiff";
      beforeAll(async function () {
        const { buildings } = referenceResponse.buildingDamageModel.V2;
        const arrayPolygonsOneClass = buildings.map((el: any) => el.polygon);
        copyTileToReportDir(imageName);
        await createPNGMaskPolygonsForTile(coordTile, buildings, referenceMask);
        await createPNGMaskPolygonsForTile(
          coordTile,
          arrayPolygonsOneClass,
          referenceMaskOneClass
        );
      }, 15000);

      it("successfully calculated IoU", async function () {
        const buildingHeightV2Response = await getBuildHeightModelV2(
          coordTile,
          imageName
        );
        const bodyForDamageRequest = await damageObj(
          coordTile,
          imageName,
          buildingHeightV2Response.buildings
        );
        const currentResponse = await getDamageModel(bodyForDamageRequest);
        const { buildings } = currentResponse.buildingDamageModel.V2;
        const arrayPolygonsOneClass = buildings.map((el: any) => el.polygon);
        await createPNGMaskPolygonsForTile(coordTile, buildings, currentMask);
        await createPNGMaskPolygonsForTile(
          coordTile,
          arrayPolygonsOneClass,
          currentMaskOneClass
        );
        createPNGDifferentBetweenMasks(
          referenceMask,
          currentMask,
          differentBetweenMasks
        );
        createPNGDifferentBetweenMasks(
          referenceMaskOneClass,
          currentMaskOneClass,
          differentBetweenMasksOneClass
        );
        const IoUs = await getIoUForEachClassBuildings(
          imageName,
          coordTile,
          referenceResponse.buildingDamageModel.V2.buildings,
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
      }, 30000);
    }
  );
});
