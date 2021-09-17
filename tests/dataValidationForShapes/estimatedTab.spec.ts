import {
  firstCompetedShapeId,
  getShape,
  getSmallObjOfShape,
  getValueByTypeLand,
} from "../../controller/graphql/shape";
import { jsonkeys } from "../../helper/jsonKeys";
import {
  getIdsExecutions,
  calcValueFromResponse,
  caclCountTile,
  calcObjFromTile,
  calcTypeOfLandUse,
} from "../../controller/job-execution/job-executions-controller";

describe("data validation for getShape Estimated Tab", function () {
  let summary: any,
    listEstimatorJobId: any[] = [],
    countTile: number;

  beforeAll(async function () {
    const idShape = await firstCompetedShapeId();
    summary = (await getShape(idShape)).data.shape.summary;
    listEstimatorJobId = await getIdsExecutions(idShape);
    countTile = await caclCountTile(listEstimatorJobId);
  });

  it("successfully calculated obj count", async function () {
    const { small } = summary.objects;
    if (small !== null) {
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
  });

  it("successfully calculated buildings count", async function () {
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
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.averageBuildingHeight,
        "building_height"
      )) / countTile
    ).toEqual(averageBuildingHeight);
  });

  it("successfully calculated building height segmentation", async function () {
    const {
      averageBuildingHeight,
      building3lessAreaCoverage,
      building3to8AreaCoverage,
      building8moreAreaCoverage,
    } = summary.buildingHeight;

    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.averageBuildingHeight,
        "building_height",
        "V2"
      )) / countTile
    ).toEqual(averageBuildingHeight);
    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.building3lessAreaCoverage,
        "building_height",
        "V2"
      )) / countTile
    ).toEqual(building3lessAreaCoverage);
    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.building3to8AreaCoverage,
        "building_height",
        "V2"
      )) / countTile
    ).toEqual(building3to8AreaCoverage);
    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.building8moreAreaCoverage,
        "building_height",
        "V2"
      )) / countTile
    ).toEqual(building8moreAreaCoverage);
  });

  it("successfully calculated population count", async function () {
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
  });

  it("successfully calculated land use count", async function () {
    const { landUse } = summary;
    const { name } = landUse[0];
    const firstLandCount = getValueByTypeLand(landUse, name);
    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.landUseModel,
        "land_use",
        "V2",
        undefined,
        calcTypeOfLandUse,
        name
      )) / countTile
    ).toEqual(firstLandCount);
  });
});
