import { coordForPerformance } from "../../../helper/compareWithReference/referenceTile/coordForTile/coordForPerformance";
import { arrayAverage } from "../../../helper/arrayProcessing";
import { getDamageModel } from "../../../controller/model/damage-model-controller";
import { sendReportToConfluenceForSecondTable } from "../../../controller/confluence/confluence-controller";

const { performance } = require("perf_hooks");
const numbersRuns = Array.from(Array(50).keys());

describe("damage model performance", function () {
  let timeArr: any = [];
  beforeAll(async function () {
    for (const item of numbersRuns) {
      const start_time = performance.now();
      await getDamageModel(
        coordForPerformance,
        "helper/compareWithReference/referenceTile/tileForPerformance.jpg"
      );
      const end_time = performance.now();
      timeArr.push(end_time - start_time);
    }
  }, 1000000);
  afterAll(async function () {
    const obj = {
      name: `Damage model`,
      speed: arrayAverage(timeArr.slice(1)),
    };
    await sendReportToConfluenceForSecondTable(obj);
  });

  it("check average time request", () =>
    expect(arrayAverage(timeArr.slice(1))).toBeLessThan(8000));
});
