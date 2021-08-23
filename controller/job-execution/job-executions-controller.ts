import { callRestApi, getRestBody } from "../api.controller";
import { executionsQuery } from "../../helper/urls";
import { startJobObj } from "../../requests/executions/startJob";
import { getShapeById } from "../shape/shape-controller";

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

export const parsePath = (str: string) => str.split(".");

let arr = ["test", "data", "path"];
function getData(obj: [], arr: any) {
  if (!arr.length) {
    return obj;
  }
  arr.forEach((el: any, idx: any) => getData(obj[el], arr.slice(idx + 1)));
}

export const calcCountFromTile = (
  obj: [],
  path: string,
  roundTo: number = 18
) => {
  let count = 0,
    arr = parsePath(path);
  obj.forEach((el: any) => (count += +el[arr[0]][arr[1]].toFixed(roundTo)));
  return count;
};

export const calcObjFromTile = (obj: [], nameObject: string, path: string) => {
  let count = 0,
    arr = parsePath(path);
  obj.forEach((el: any) => {
    count += el[arr[0]].filter(
      (el: any) => el.objectClass === nameObject
    ).length;
  });
  return count;
};
