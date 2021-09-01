import { callRestApi, getRestBody } from "../api.controller";
// @ts-ignore
import * as data from "../../confluence.env.json";
import {
  caclCountTile,
  getIdsExecutions,
  getJobExecutionsById,
} from "../job-execution/job-executions-controller";
import { getShapeById } from "../shape/shape-controller";
import { rowToTable, updatePage } from "../../helper/rowConfluence";
import { toJsonFile } from "../../helper/exportToJsonFile";
const pageId =
  "https://syncretis.atlassian.net/wiki/rest/api/content/121798682";
export const getPageConfluenceBody = () =>
  callRestApi(
    pageId,
    getRestBody("GET", null, "?expand=body.storage,version", {
      Authorization: data.token,
    })
  );
export const updatePageConfluenceBody = (obj: any) =>
  callRestApi(
    pageId,
    getRestBody("PUT", obj, undefined, { Authorization: data.token })
  );

const min = (a: any, b: any) => (a < b ? a : b);
const max = (a: any, b: any) => (a > b ? a : b);
const getTime = async (listEstimatorJobId: any[], path: any, func: any) => {
  let arrTime: any[] = [];
  for (let jobId of listEstimatorJobId) {
    const response = await getJobExecutionsById(jobId);
    arrTime.push(response.jobExecution[path]);
  }
  return new Date(arrTime.reduce((a, b) => func(a, b)));
};
const calcSpeed = async (id: number) => {
  const listEstimatorJobId: any[] = await getIdsExecutions(id);
  const countTile = await caclCountTile(listEstimatorJobId);
  const createTime = await getTime(listEstimatorJobId, "createTime", min);
  const startTime = await getTime(listEstimatorJobId, "startTime", min);
  const endTime = await getTime(listEstimatorJobId, "endTime", max);

  return {
    //see Confluence wiki https://syncretis.atlassian.net/wiki/spaces/EXRO/pages/121798682/Scaling+Performance
    seconds: ((endTime.getTime() - createTime.getTime()) / 1000).toFixed(2),
    tiles_per_second_wo_preprocessing: (
      countTile /
      ((endTime.getTime() - startTime.getTime()) / 1000)
    ).toFixed(2),
    ms_per_tile_wo_preprocessing: (
      1000 /
      (countTile / ((endTime.getTime() - startTime.getTime()) / 1000))
    ).toFixed(2),
    tiles_per_second: (
      countTile /
      ((endTime.getTime() - createTime.getTime()) / 1000)
    ).toFixed(2),
    ms_per_tile: (
      1000 /
      (countTile / ((endTime.getTime() - createTime.getTime()) / 1000))
    ).toFixed(2),
  };
};

export const createReport = async (id: number, preprocessing: boolean) => {
  const response = await getShapeById(id);
  let objReport: any = await calcSpeed(id);
  objReport.Shapeid = id;
  objReport.name = response.name;
  objReport.geoInfo = response.polygons[0].geoInfo[0].admin1;
  objReport.preprocessing = preprocessing;
  objReport.areaSize = response.areaSize;
  return objReport;
};

export const sendReportToConfluence = async (obj: any) => {
  let newRow = rowToTable(obj);
  const response = await getPageConfluenceBody();
  const { value } = response.body.storage;
  const { number } = response.version;
  await updatePageConfluenceBody(updatePage(value, newRow, number));
};
