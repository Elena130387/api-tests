import { getFootprintModel } from "../../../controller/model/footprint-model-controller";
import { coordForPerformance } from "../../../helper/compareWithReference/referenceTile/coordForTile/coordForPerformance";
import { arrayAverage } from "../../../helper/arrayProcessing";
import { sendReportToConfluenceForSecondTable } from "../../../controller/confluence/confluence-controller";

const { performance } = require("perf_hooks");
const numbersRuns = Array.from(Array(50).keys());

describe("footprintModel performance", function () {
  let timeArr: any = [];
  beforeAll(async function () {
    for (const item of numbersRuns) {
      const start_time = performance.now();
      await getFootprintModel(
        coordForPerformance,
        "helper/compareWithReference/referenceTile/tileForPerformance.jpg"
      );
      const end_time = performance.now();
      timeArr.push(end_time - start_time);
    }
  }, 500000);
  afterAll(async function () {
    const obj = {
      name: `Footprint model`,
      speed: arrayAverage(timeArr.slice(1)),
    };
    await sendReportToConfluenceForSecondTable(obj);
  });

  it("check average time request", () =>
    expect(arrayAverage(timeArr.slice(1))).toBeLessThan(1000));
});
