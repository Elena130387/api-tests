import { florida } from "../../../helper/compareWithReference/regression_for_all_models/coordForTile/florida";
import { arrayAverage } from "../../../helper/arrayProcessing";
import { getDamageModel } from "../../../controller/model/damage-model-controller";
import { damageObj } from "../../../requests/models/damageRequest";
import { sendReportToConfluenceForSecondTable } from "../../../controller/confluence/confluence-controller";

const { performance } = require("perf_hooks");
const numbersRuns = Array.from(Array(50).keys());

describe("damage model performance", function () {
  let timeArr: any = [];
  beforeAll(async function () {
    for (const item of numbersRuns) {
      const start_time = performance.now();
      const requestBody = await damageObj(florida, `florida`);
      await getDamageModel(requestBody);
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
