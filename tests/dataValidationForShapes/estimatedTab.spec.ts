import {
  getShape,
  getSmallObjOfShape,
  getValueByTypeLand,
} from "../../controller/graphql/shape";
import { jsonkeys } from "../../helper/jsonKeys";
import {
  getIdsExecutions,
  getFilteredJobExecutionsById,
  calcCountFromTile,
  calcObjFromTile,
} from "../../controller/job-execution/job-executions-controller";

describe("data validation for getShape Estimated Tab", function () {
  const idShape = 3120;
  let summary: any,
    listEstimatorJobId: any[] = [];

  beforeAll(async function () {
    summary = (await getShape(idShape)).data.shape.summary;
    listEstimatorJobId = await getIdsExecutions(idShape);
  });

  it("successfully calculated obj count", async function () {
    const { small } = summary.objects;
    const smallVehicle = getSmallObjOfShape(small, "small-vehicle");

    let smallVehicleCount: number = 0;
    for (let id of listEstimatorJobId) {
      const response = await getFilteredJobExecutionsById(
        id,
        "object_detection"
      );
      const def = response.jobExecution.tiles.default;
      smallVehicleCount += calcObjFromTile(
        def,
        "small-vehicle",
        jsonkeys.getObjs
      );
    }
    expect(smallVehicleCount || undefined).toEqual(smallVehicle);
  });

  it("successfully calculated buildings count", async function () {
    const {
      buildingCount,
      averageBuildingHeight,
      averageBuildingAreaCoverage,
    } = summary.buildings;

    let numberBuilding: number = 0,
      sumBuildingArea: number = 0,
      sumBuildingHeight: number = 0,
      countTile: number = 0;
    for (let id of listEstimatorJobId) {
      const responseForFootprint = await getFilteredJobExecutionsById(
        id,
        "building_footprint"
      );
      const responseForBuildingHeight = await getFilteredJobExecutionsById(
        id,
        "building_height"
      );
      const defForFootprint = responseForFootprint.jobExecution.tiles.default;
      const defForBuildingHeight =
        responseForBuildingHeight.jobExecution.tiles.default;

      numberBuilding += calcCountFromTile(
        defForFootprint,
        jsonkeys.buildingCount,
        0
      );
      sumBuildingArea += calcCountFromTile(
        defForFootprint,
        jsonkeys.buildingAreaCoverage
      );
      sumBuildingHeight += calcCountFromTile(
        defForBuildingHeight,
        jsonkeys.averageBuildingHeight
      );
      countTile += defForFootprint.filter((el: any) => el.tile).length;
    }
    expect(numberBuilding).toEqual(buildingCount);
    expect(sumBuildingArea / countTile).toEqual(averageBuildingAreaCoverage);
    expect(sumBuildingHeight / countTile).toEqual(averageBuildingHeight);
  });

  it("successfully calculated building height segmentation", async function () {
    const {
      averageBuildingHeight,
      building3lessAreaCoverage,
      building3to8AreaCoverage,
      building8moreAreaCoverage,
    } = summary.buildingHeight;

    let countBuildingHeight = 0,
      countBuilding3lessFloor = 0,
      countBuilding3lto8Floor = 0,
      countBuilding8moreFloor = 0,
      countTile = 0;

    for (let id of listEstimatorJobId) {
      const response = await getFilteredJobExecutionsById(
        id,
        "building_height",
        "V2"
      );
      const def = response.jobExecution.tiles.default;
      countTile += def.filter((el: any) => el.tile).length;
      countBuildingHeight += calcCountFromTile(
        def,
        jsonkeys.averageBuildingHeight
      );
      countBuilding3lessFloor += calcCountFromTile(
        def,
        jsonkeys.building3lessAreaCoverage
      );
      countBuilding3lto8Floor += calcCountFromTile(
        def,
        jsonkeys.building3to8AreaCoverage
      );
      countBuilding8moreFloor += calcCountFromTile(
        def,
        jsonkeys.building8moreAreaCoverage
      );
    }
    expect(countBuildingHeight / countTile).toEqual(averageBuildingHeight);
    expect(countBuilding3lessFloor / countTile).toEqual(
      building3lessAreaCoverage
    );
    expect(countBuilding3lto8Floor / countTile).toEqual(
      building3to8AreaCoverage
    );
    expect(countBuilding8moreFloor / countTile).toEqual(
      building8moreAreaCoverage
    );
  });

  it("successfully calculated population count", async function () {
    const { populationCount } = summary;
    let count = 0;
    for (let id of listEstimatorJobId) {
      const response = await getFilteredJobExecutionsById(id, "population");
      const { population } = response.jobExecution.tiles;
      count += calcCountFromTile(population, jsonkeys.population);
    }
    expect(count).toEqual(populationCount);
  });

  it("successfully calculated land use count", async function () {
    const { landUse } = summary;
    const commercial = getValueByTypeLand(landUse, "COMMERCIAL");
    let countCommercial = 0,
      countTile = 0,
      arrayTypesOfLandTile: any[] = [];
    for (let id of listEstimatorJobId) {
      const response = await getFilteredJobExecutionsById(id, "land_use", "V2");
      const def = response.jobExecution.tiles.default;
      countTile += def.filter((el: any) => el.tile).length;
      def.forEach((el: any) => {
        arrayTypesOfLandTile.push(
          el.landUseModel.filter((el: any) => el.order == "0")
        );
      });
      countCommercial = arrayTypesOfLandTile.filter(
        (el: any) => el[0].label === "COMMERCIAL"
      ).length;
    }
    expect(countCommercial / countTile).toEqual(commercial);
  });
});
