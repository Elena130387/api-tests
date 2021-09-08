import { getShape } from "../../controller/graphql/shape";
import {
  createShape,
  waitWhenShapeStatusEqual,
} from "../../controller/shape/shape-controller";
import { FULLDATE } from "../../helper/date";
import { referenceData, summaryReference } from "../../helper/referenceData";
import { referensShape } from "../../requests/shape-resource/createNewShape";

describe("comparison of reference data", function () {
  let summary: any;
  const percentError = 5,
    jp = require("jsonpath");

  beforeAll(async function () {
    const NAME = `autotest. Comparison of with reference data : ${FULLDATE}`;
    const responseCreate = await createShape(NAME, true, false, referensShape);
    const id = responseCreate.id;
    await waitWhenShapeStatusEqual(id);

    const response = await getShape(3774);
    summary = response.data.shape.summary;
  }, 1000000);
  describe("estimated Tab", function () {
    it("Buildings", function () {
      const { averageBuildingAreaCoverage, buildingCount } = summary.buildings;
      expect(
        Math.abs(
          averageBuildingAreaCoverage -
            referenceData.averageBuildingAreaCoverage
        )
      ).toBeLessThanOrEqual(
        (referenceData.averageBuildingAreaCoverage * percentError) / 100
      );
      expect(
        Math.abs(buildingCount - referenceData.numberBuilding)
      ).toBeLessThanOrEqual(
        (referenceData.numberBuilding * percentError) / 100
      );
    });
    it("Building Height Segmentation", function () {
      const {
        averageBuildingHeight,
        building3lessAreaCoverage,
        building3to8AreaCoverage,
        building8moreAreaCoverage,
      } = summary.buildingHeight;
      expect(
        Math.abs(averageBuildingHeight - referenceData.averageBuildingHeight)
      ).toBeLessThanOrEqual(
        (referenceData.averageBuildingHeight * percentError) / 100
      );
      expect(
        Math.abs(
          building3lessAreaCoverage - referenceData.building3lessAreaCoverage
        )
      ).toBeLessThanOrEqual(
        (referenceData.building3lessAreaCoverage * percentError) / 100
      );
      expect(
        Math.abs(
          building3to8AreaCoverage - referenceData.building3to8AreaCoverage
        )
      ).toBeLessThanOrEqual(
        (referenceData.building3to8AreaCoverage * percentError) / 100
      );
      expect(
        Math.abs(
          building8moreAreaCoverage - referenceData.building8moreAreaCoverage
        )
      ).toBeLessThanOrEqual(
        (referenceData.building8moreAreaCoverage * percentError) / 100
      );
    });
    it("populationCount", function () {
      const { populationCount } = summary;
      expect(
        Math.abs(populationCount - referenceData.populationCount)
      ).toBeLessThanOrEqual(
        (referenceData.populationCount * percentError) / 100
      );
    });

    it("Landuse type", function () {
      const arrValueLandUse = jp.query(summary.landUse, "$..value");
      const arrValueLandUseRefererData = jp.query(
        referenceData.landUse,
        "$..value"
      );
      arrValueLandUseRefererData.forEach((el: any, index: number) =>
        expect(Math.abs(el - arrValueLandUse[index])).toBeLessThanOrEqual(
          (el * percentError) / 100
        )
      );
    });

    it("small object", function () {
      const arrValueSmallObj = jp.query(summary.objects.small, "$..count");
      const arrValueSmallObjRefererData = jp.query(
        referenceData.objects.small,
        "$..count"
      );
      arrValueSmallObjRefererData.forEach((el: any, index: number) =>
        expect(Math.abs(el - arrValueSmallObj[index])).toBeLessThanOrEqual(
          (el * percentError) / 100
        )
      );
    });

    it("large object", function () {
      const arrValuelargeObj = jp.query(summary.objects.large, "$..count");
      const arrValuelargeObjRefererData = jp.query(
        referenceData.objects.large,
        "$..count"
      );
      arrValuelargeObjRefererData.forEach((el: any, index: number) =>
        expect(Math.abs(el - arrValuelargeObj[index])).toBeLessThanOrEqual(
          (el * percentError) / 100
        )
      );
    });
  });
  describe("Economic exposure Tab", function () {
    it("Economic exposure", function () {
      const { economicExposure } = summary;
      expect(
        Math.abs(economicExposure - referenceData.economicExposure)
      ).toBeLessThanOrEqual(
        (referenceData.economicExposure * percentError) / 100
      );
    });
  });

  describe("Insurance exposure Tab", function () {
    it("Insurance exposure", function () {
      const arrValueInsurance = jp.query(summary.insuranceExposure, "$..value");
      const arrValueInsuranceRefererData = jp.query(
        referenceData.insuranceExposure,
        "$..value"
      );
      arrValueInsuranceRefererData.forEach((el: any, index: number) =>
        expect(Math.abs(el - arrValueInsurance[index])).toBeLessThanOrEqual(
          (el * percentError) / 100
        )
      );
    });
  });
  describe("Opensource Tab", function () {
    it("population", function () {
      const { population, incomePerCapita } = summary.stats;
      expect(
        Math.abs(population - referenceData.stats.population)
      ).toBeLessThanOrEqual(
        (referenceData.stats.population * percentError) / 100
      );
      expect(
        Math.abs(incomePerCapita - referenceData.stats.incomePerCapita)
      ).toBeLessThanOrEqual(
        (referenceData.stats.population * percentError) / 100
      );
    });
    it("housing unit count", function () {
      const { housingUnitsTotal, totalUnits } = summary.stats;
      expect(
        Math.abs(housingUnitsTotal - referenceData.stats.housingUnitsTotal)
      ).toBeLessThanOrEqual(
        (referenceData.stats.housingUnitsTotal * percentError) / 100
      );
      expect(
        Math.abs(totalUnits - referenceData.stats.totalUnits)
      ).toBeLessThanOrEqual(
        (referenceData.stats.totalUnits * percentError) / 100
      );
    });
    it("housing unit count", function () {
      const {
        unitsInStructure1,
        unitsInStructure2to9,
        unitsInStructure10to19,
        unitsInStructure20more,
        unitsInStructureMobile,
      } = summary.stats;
      expect(
        Math.abs(unitsInStructure1 - referenceData.stats.unitsInStructure1)
      ).toBeLessThanOrEqual(
        (referenceData.stats.unitsInStructure1 * percentError) / 100
      );
      expect(
        Math.abs(
          unitsInStructure2to9 - referenceData.stats.unitsInStructure2to9
        )
      ).toBeLessThanOrEqual(
        (referenceData.stats.unitsInStructure2to9 * percentError) / 100
      );
      expect(
        Math.abs(
          unitsInStructure10to19 - referenceData.stats.unitsInStructure10to19
        )
      ).toBeLessThanOrEqual(
        (referenceData.stats.unitsInStructure10to19 * percentError) / 100
      );
      expect(
        Math.abs(
          unitsInStructure20more - referenceData.stats.unitsInStructure20more
        )
      ).toBeLessThanOrEqual(
        (referenceData.stats.unitsInStructure20more * percentError) / 100
      );
      expect(
        Math.abs(
          unitsInStructureMobile - referenceData.stats.unitsInStructureMobile
        )
      ).toBeLessThanOrEqual(
        (referenceData.stats.unitsInStructureMobile * percentError) / 100
      );
    });

    it("housing unit price", function () {
      const { averageUnitPrice, medianUnitPrice } = summary.stats;
      expect(
        Math.abs(averageUnitPrice - referenceData.stats.averageUnitPrice)
      ).toBeLessThanOrEqual(
        (referenceData.stats.averageUnitPrice * percentError) / 100
      );
      expect(
        Math.abs(medianUnitPrice - referenceData.stats.medianUnitPrice)
      ).toBeLessThanOrEqual(
        (referenceData.stats.medianUnitPrice * percentError) / 100
      );
    });
  });
});
