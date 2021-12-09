import {
  firstCompetedShapeId,
  getShape,
} from "../../../controller/graphql/shape";
import {
  getIdsExecutions,
  calcValueFromResponse,
  calcDateOfStats,
} from "../../../controller/job-execution/job-executions-controller";
import { jsonkeys } from "../../../helper/jsonKeys";

describe("data validation for getShape open sourse Tab", function () {
  let summary: any,
    listEstimatorJobId: any[] = [];

  beforeAll(async function () {
    const idShape = await firstCompetedShapeId();
    summary = (await getShape(idShape)).data.shape.summary;
    listEstimatorJobId = await getIdsExecutions(idShape);
  });

  it.skip("successfully calculated count population", async function () {
    const { incomePerCapita } = summary.stats;
    const { population } = summary.stats;
    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.incomePerCapita,
        "stats",
        undefined,
        "population",
        calcDateOfStats
      )) / listEstimatorJobId.length
    ).toEqual(incomePerCapita);

    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.statPopulation,
        "stats",
        undefined,
        "population",
        calcDateOfStats
      )) / listEstimatorJobId.length
    ).toEqual(population);
  });

  it.skip("successfully calculated Housing unit count", async function () {
    const { housingUnitsTotal } = summary.stats;
    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.housingUnitsTotal,
        "stats",
        undefined,
        "population",
        calcDateOfStats
      )) / listEstimatorJobId.length
    ).toEqual(housingUnitsTotal);
  });

  it.skip("successfully calculated Housing unit distribution", async function () {
    const { unitsInStructure1 } = summary.stats;
    const { unitsInStructure2to9 } = summary.stats;
    const { unitsInStructure10to19 } = summary.stats;
    const { unitsInStructure20more } = summary.stats;
    const { unitsInStructureMobile } = summary.stats;
    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.unitsInStructure1,
        "stats",
        undefined,
        "population",
        calcDateOfStats
      )) / listEstimatorJobId.length
    ).toEqual(unitsInStructure1);
    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.unitsInStructure2to9,
        "stats",
        undefined,
        "population",
        calcDateOfStats
      )) / listEstimatorJobId.length
    ).toEqual(unitsInStructure2to9);
    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.unitsInStructure10to19,
        "stats",
        undefined,
        "population",
        calcDateOfStats
      )) / listEstimatorJobId.length
    ).toEqual(unitsInStructure10to19);
    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.unitsInStructure20more,
        "stats",
        undefined,
        "population",
        calcDateOfStats
      )) / listEstimatorJobId.length
    ).toEqual(unitsInStructure20more);
    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.unitsInStructureMobile,
        "stats",
        undefined,
        "population",
        calcDateOfStats
      )) / listEstimatorJobId.length
    ).toEqual(unitsInStructureMobile);
  });

  it("successfully calculated Housing unit price", async function () {
    const { averageUnitPrice } = summary.stats;
    const { medianUnitPrice } = summary.stats;
    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.averageUnitPrice,
        "stats",
        undefined,
        "population",
        calcDateOfStats
      )) / listEstimatorJobId.length
    ).toEqual(averageUnitPrice);

    expect(
      (await calcValueFromResponse(
        listEstimatorJobId,
        jsonkeys.medianUnitPrice,
        "stats",
        undefined,
        "population",
        calcDateOfStats
      )) / listEstimatorJobId.length
    ).toEqual(medianUnitPrice);
  });
});
