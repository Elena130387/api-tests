import { callRestApi, getRestBody } from "../api.controller";
import { executionsQuery } from "../../helper/urls";
import { startJobObj } from "../../requests/executions/startJob";
import { getShapeById } from "../shape/shape-controller";

const { MAIN_URL, DEMO_URL } = process.env;
const ESTIMATOR = "/estimator/executions";
const jp = require("jsonpath");
export const EXECUTIONS_URL = process.env.TEST_ENV
  ? `${DEMO_URL}${ESTIMATOR}`
  : `${MAIN_URL}${ESTIMATOR}`;

export const findJobExecutions = (limit: number, offset: number) =>
  callRestApi(
    EXECUTIONS_URL,
    getRestBody("GET", null, executionsQuery(limit, offset))
  );
export const getJobExecutionsById = (shapeId: number) =>
  callRestApi(`${EXECUTIONS_URL}/${shapeId}`, getRestBody("GET", null));
export const startJobExecution = (forceProcessing: boolean, shapeId: number) =>
  callRestApi(
    EXECUTIONS_URL,
    getRestBody("POST", startJobObj(forceProcessing, shapeId))
  );
export const deleteJobExecution = (shapeId: number) =>
  callRestApi(EXECUTIONS_URL, getRestBody("DELETE", null, `?ids=${shapeId}`));
export const findRunningJob = () =>
  callRestApi(`${EXECUTIONS_URL}/running`, getRestBody("GET", null));
export const getFilteredJobExecutionsById = (
  shapeId: any,
  type: string,
  version: string = "V1"
) =>
  callRestApi(
    `${EXECUTIONS_URL}/v2/${shapeId}/filtered`,
    getRestBody("GET", null, `?type=${type.toUpperCase()}&version=${version}`)
  );

export async function getIdsExecutions(id: number) {
  const response = await getShapeById(id);

  return jp.query(response.polygons, "$..estimatorJobId");
}

const parsePath = (str: any) => str.split(".");

const calcCountFromTile = (obj: [], path: string, roundTo: number = 18) => {
  let count = 0,
    arr = parsePath(path);
  obj.forEach((el: any) => (count += +el[arr[0]][arr[1]].toFixed(roundTo)));
  return count;
};

export const calcDateOfStats = (obj: any[], path: string) => {
  let arr = parsePath(path);
  return obj[0][arr[0]][arr[1]];
};

export const calcObjFromTile = (obj: [], path: string, nameObject: string) => {
  let count = 0,
    arr = parsePath(path);
  obj.forEach((el: any) => {
    count += el[arr[0]].filter(
      (el: any) => el.objectClass === nameObject
    ).length;
  });
  return count;
};
function landUse(obj: [], nameObject: string) {
  return obj.map((tile: any) =>
    tile.landUseModel.filter(
      (model: any) =>
        model.order === "0" && model.label === nameObject.toUpperCase()
    )
  );
}
export const calcTypeOfLandUse = (
  obj: [],
  path: string,
  nameObject: string
) => {
  let count = 0;
  landUse(obj, nameObject).forEach((el: any) => (count += el.length));
  return count;
};

export const calcValueFromResponse = async (
  listEstimatorJobId: any[],
  jsonkey: any,
  filterByType: string,
  filterByVersion: string = "V1",
  parseResponse: string = "default",
  func: any = calcCountFromTile,
  roundTo: any = 18
) => {
  let value = 0;

  for (let id of listEstimatorJobId) {
    const response = await getFilteredJobExecutionsById(
      id,
      filterByType,
      filterByVersion
    );
    const def = response.jobExecution.tiles[parseResponse];
    value += await func(def, jsonkey, roundTo);
  }
  return value;
};

export const caclCountTile = async (listEstimatorJobId: any[]) => {
  let value = 0;
  for (let id of listEstimatorJobId) {
    const response = await getFilteredJobExecutionsById(id, "land_use", "V2");
    value += jp.query(response.jobExecution.tiles.default, "$..tile").length;
  }
  return value;
};
