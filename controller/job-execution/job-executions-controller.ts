import { callRestApi, getRestBody } from "../api.controller";
import { executionsQuery } from "../../helper/urls";
import { startJobObj } from "../../requests/executions/startJob";
import { getShapeById } from "../shape/shape-controller";
import { jsonkeys } from "../../helper/jsonKeys";

const { MAIN_URL } = process.env;
const EXECUTIONS_URL = `${MAIN_URL}/estimator/executions`;

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
  return response.polygons.map((el: any) => el.estimatorJobId);
}

const parsePath = (str: any) => str.split(".");

const calcCountFromTile = (obj: [], path: string, roundTo: number = 18) => {
  let count = 0,
    arr = parsePath(path);
  obj.forEach((el: any) => (count += +el[arr[0]][arr[1]].toFixed(roundTo)));
  return count;
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
export const calcTypeOfLandUse = (
  obj: [],
  path: string,
  nameObject: string
) => {
  let count = 0,
    arr = parsePath(path),
    arrayTypesOfLandTile: any[] = [];
  obj.forEach((el: any) => {
    arrayTypesOfLandTile.push(el[arr[0]].filter((el: any) => el.order === "0"));
  });
  count += arrayTypesOfLandTile.filter(
    (el: any) => el[0].label === nameObject.toUpperCase()
  ).length;
  return count;
};

export const calcValueFromResponse = async (
  idShape: number,
  jsonkey: any,
  filterByType: string,
  filterByVersion: string = "V1",
  parseResponse: string = "default",
  func: any = calcCountFromTile,
  roundTo: any = 18
) => {
  const listEstimatorJobId = await getIdsExecutions(idShape);
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

export const caclCountTile = async (idShape: number) => {
  const listEstimatorJobId = await getIdsExecutions(idShape);
  let value = 0;
  for (let id of listEstimatorJobId) {
    const response = await getFilteredJobExecutionsById(id, "land_use", "V2");
    const def = response.jobExecution.tiles.default;
    value += def.filter((el: any) => el.tile).length;
  }
  return value;
};
