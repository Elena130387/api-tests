import { florida } from "../../../helper/compareWithReference/regression_for_all_models/coordForTile/florida";
import { arrayAverage } from "../../../helper/arrayProcessing";
import {
  getBuildHeightModelV1,
  getBuildHeightModelV2,
  getBuildHeightModelV3,
} from "../../../controller/model/buildHeight-model-controller";
import * as util from "util";
import { sendReportToConfluenceForSecondTable } from "../../../controller/confluence/confluence-controller";

const { performance } = require("perf_hooks");
const numbersRuns = Array.from(Array(50).keys());
const requestsForBuildingHeight = [
  getBuildHeightModelV1,
  getBuildHeightModelV2,
  getBuildHeightModelV3,
];

describe("building height model performance", function () {
  let index = 0;
  describe.each(requestsForBuildingHeight)(
    `building height V${util.format("%#")} model performance`,
    function (func) {
      let timeArr: any = [];
      beforeAll(async function () {
        for (const item of numbersRuns) {
          const start_time = performance.now();
          await func(florida, `florida`);
          const end_time = performance.now();
          timeArr.push(end_time - start_time);
        }
      }, 2000000);

      afterAll(async function () {
        const obj = {
          name: `Building-Height V${++index} model`,
          speed: arrayAverage(timeArr.slice(1)),
        };
        await sendReportToConfluenceForSecondTable(obj);
      });

      it("check average time request", () =>
        expect(arrayAverage(timeArr.slice(1))).toBeLessThan(6000));
    }
  );
});
