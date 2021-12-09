import { callRestApi, getRestBody } from "../api.controller";

const { MAIN_URL, DEMO_URL } = process.env;
const DERIVATIVE_RIGHTS = "/derivative-rights";
const EXECUTIONS_URL = process.env.TEST_ENV
  ? `${DEMO_URL}${DERIVATIVE_RIGHTS}`
  : `${MAIN_URL}${DERIVATIVE_RIGHTS}`;

export const getAggregatedTiles = (coord: any, aggregation_level: number) =>
  callRestApi(
    `${EXECUTIONS_URL}/aggregated`,
    getRestBody(
      "GET",
      null,
      `?lat_nw=${coord.latNW}&lat_se=${coord.latSE}&lon_nw=${coord.lonNW}&lon_se=${coord.lonSE}&aggregation_level=${aggregation_level}`
    )
  );

export const getFilteredTiles = (coord: any) =>
  callRestApi(
    `${EXECUTIONS_URL}/filtered`,
    getRestBody(
      "GET",
      null,
      `?lat_nw=${coord.latNW}&lat_se=${coord.latSE}&lon_nw=${coord.lonNW}&lon_se=${coord.lonSE}`
    )
  );

export const getCoordForUSA = () => ({
  latNW: 48,
  latSE: 36,
  lonNW: -117,
  lonSE: -89,
});

export const getAllFilterTilesInAgreggated = (
  aggregatedArea: any,
  fillterTiles: any
) =>
  fillterTiles.filter(
    (el: any) =>
      el.latSE <= aggregatedArea.latNW &&
      el.latSE >= aggregatedArea.latSE &&
      el.lonNW >= aggregatedArea.lonNW &&
      el.lonNW <= aggregatedArea.lonSE
  );

export const getCalcDerivativeRights = (
  includesTile: any,
  typeDerivative: any
) =>
  includesTile.filter((el: any) => el.derivativeRights == typeDerivative)
    .length / includesTile.length;
