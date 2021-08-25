import {
  getShape,
  getSmallObjOfShape,
  getValueByTypeLand,
} from "../../controller/graphql/shape";
import { jsonkeys } from "../../helper/jsonKeys";
import {
  getIdsExecutions,
  getFilteredJobExecutionsById,
  calcValueFromResponse,
  caclCountTile,
  calcObjFromTile,
  calcTypeOfLandUse,
} from "../../controller/job-execution/job-executions-controller";
import { lands } from "../../helper/tyleLandUse";

describe("data validation for getShape Estimated Tab", function () {
  const idShape = 3168;
  let summary: any,
    listEstimatorJobId: any[] = [],
    countTile: number;

  beforeAll(async function () {
    summary = (await getShape(idShape)).data.shape.summary;
    listEstimatorJobId = await getIdsExecutions(idShape);
    countTile = await caclCountTile(listEstimatorJobId);
  });

  it("successfully calculated obj count", async function () {
    const { small } = summary.objects;
    const smallVehicle = getSmallObjOfShape(small, "small-vehicle");

    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.getObjs,
        "object_detection",
        undefined,
        undefined,
        calcObjFromTile,
        "small-vehicle"
      )) || undefined
    ).toEqual(smallVehicle);
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
    const commercial = getValueByTypeLand(landUse, lands.industrial);
    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.landUseModel,
        "land_use",
        "V2",
        undefined,
        calcTypeOfLandUse,
        lands.industrial
      )) / countTile
    ).toEqual(commercial);
  });
});
