import {
  firstCompetedShapeId,
  getShape,
  getSmallObjOfShape,
  getValueByTypeLand,
} from "../../../controller/graphql/shape";
import { jsonkeys } from "../../../helper/jsonKeys";
import {
  getIdsExecutions,
  calcValueFromResponse,
  caclCountTile,
  calcObjFromTile,
  calcTypeOfLandUse,
  caclCountTileFilterBuildingHeight,
} from "../../../controller/job-execution/job-executions-controller";

describe("data validation for getShape Estimated Tab", function () {
  let summary: any,
    listEstimatorJobId: any[] = [],
    countTile: number;
  const timeTest = 20000;

  beforeAll(async function () {
    const idShape = await firstCompetedShapeId();
    summary = (await getShape(idShape)).data.shape.summary;
    listEstimatorJobId = await getIdsExecutions(idShape);
    countTile = await caclCountTile(listEstimatorJobId);
  }, timeTest);

  it(
    "successfully calculated obj count",
    async function () {
      const { small } = summary.objects;
      if (Object.keys(small).length) {
        const nameSmallObj = small[0].name;
        const firstTypeSmallObj = getSmallObjOfShape(small, nameSmallObj);

        expect(
          await calcValueFromResponse(
            listEstimatorJobId,
            jsonkeys.getObjs,
            "object_detection",
            undefined,
            undefined,
            calcObjFromTile,
            nameSmallObj
          )
        ).toEqual(firstTypeSmallObj);
      }
    },
    timeTest
  );

  it(
    "successfully calculated buildings count",
    async function () {
      const {
        buildingCount,
        averageBuildingHeight,
        averageBuildingAreaCoverage,
      } = summary.buildings;

      expect(
        await calcValueFromResponse(
          listEstimatorJobId,
          jsonkeys.buildingCount,
          "building_footprint",
          undefined,
          undefined,
          undefined,
          0
        )
      ).toEqual(buildingCount);
      expect(
        (await calcValueFromResponse(
          listEstimatorJobId,
          jsonkeys.buildingAreaCoverage,
          "building_footprint"
        )) / countTile
      ).toEqual(averageBuildingAreaCoverage);
      expect(
        (
          (await calcValueFromResponse(
            listEstimatorJobId,
            jsonkeys.averageBuildingHeight,
            "building_height",
            "V1"
          )) /
          (await caclCountTileFilterBuildingHeight(listEstimatorJobId, "V1"))
        ).toFixed(13)
      ).toEqual(averageBuildingHeight.toFixed(13));
    },
    timeTest
  );

  it(
    "successfully calculated building height segmentation",
    async function () {
      const {
        averageBuildingHeight,
        building3lessAreaCoverage,
        building3to8AreaCoverage,
        building8moreAreaCoverage,
      } = summary.buildingHeight;

      expect(
        (
          (await calcValueFromResponse(
            listEstimatorJobId,
            jsonkeys.averageBuildingHeight,
            "building_height"
          )) /
          (await caclCountTileFilterBuildingHeight(listEstimatorJobId, "V2"))
        ).toFixed(13)
      ).toEqual(averageBuildingHeight.toFixed(13));
      expect(
        (await calcValueFromResponse(
          listEstimatorJobId,
          jsonkeys.building3lessAreaCoverage,
          "building_height"
        )) / countTile
      ).toEqual(building3lessAreaCoverage);
      expect(
        (await calcValueFromResponse(
          listEstimatorJobId,
          jsonkeys.building3to8AreaCoverage,
          "building_height"
        )) / countTile
      ).toEqual(building3to8AreaCoverage);
      expect(
        (await calcValueFromResponse(
          listEstimatorJobId,
          jsonkeys.building8moreAreaCoverage,
          "building_height"
        )) / countTile
      ).toEqual(building8moreAreaCoverage);
    },
    timeTest
  );

  it(
    "successfully calculated population count",
    async function () {
      const { populationCount } = summary;
      expect(
        await calcValueFromResponse(
          listEstimatorJobId,
          jsonkeys.population,
          "population",
          undefined,
          "population"
        )
      ).toEqual(populationCount);
    },
    timeTest
  );

  it(
    "successfully calculated land use count",
    async function () {
      const { landUse } = summary;
      const { name } = landUse[0];
      const firstLandCount = getValueByTypeLand(landUse, name);
      expect(
        (await calcValueFromResponse(
          listEstimatorJobId,
          jsonkeys.landUseModel,
          "land_use",
          undefined,
          undefined,
          calcTypeOfLandUse,
          name
        )) / countTile
      ).toEqual(firstLandCount);
    },
    timeTest
  );
});
