import {
  getAggregatedTiles,
  getAllFilterTilesInAgreggated,
  getCalcDerivativeRights,
  getCoordForUSA,
  getFilteredTiles,
} from "../../controller/derivativeRights/derivative-rights-controller";
import * as util from "util";

const typeDerivativeRights = [
  "NO_DERIVATIVE_RIGHTS",
  "NEW_VINTAGE_DERIVATIVE_RIGHTS",
  "OLD_VINTAGE_DERIVATIVE_RIGHTS",
];
const lvlAggregatedTile = [65536, 16384, 4096, 1024, 256, 64, 16, 4];

describe("calculated filter tile Derivative rights in one aggregated Tile", function () {
  let firstAggregatedTiles: any = getCoordForUSA();

  test.each(lvlAggregatedTile)(
    ` ${util.format("%s")} lvl Derivative rights include filters tile`,
    async function (lvl) {
      firstAggregatedTiles = (
        await getAggregatedTiles(firstAggregatedTiles, lvl)
      ).aggregatedTiles[0];

      const { tiles } = await getFilteredTiles(firstAggregatedTiles);
      const includesTile = getAllFilterTilesInAgreggated(
        firstAggregatedTiles,
        tiles
      );

      expect(
        Object.keys(firstAggregatedTiles.derivativeRightsRates)
      ).not.toBeNull();
      typeDerivativeRights.forEach((el: string) => {
        if (el in firstAggregatedTiles.derivativeRightsRates) {
          expect(getCalcDerivativeRights(includesTile, el)).toEqual(
            firstAggregatedTiles.derivativeRightsRates[el]
          );
        }
      });
    },
    25000
  );
});
