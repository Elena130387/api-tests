import { callRestApi, getRestBody } from "../api.controller";
import {
  caclCountTile,
  getIdsExecutions,
  getJobExecutionsById,
} from "../job-execution/job-executions-controller";
import { getShapeById } from "../shape/shape-controller";
import {
  rowForFirstTable,
  rowForSecondTable,
  updateFirstTable,
  updateSecondTable,
} from "../../helper/createReports/rowConfluence";
const pageId =
  "https://syncretis.atlassian.net/wiki/rest/api/content/121798682";
const { token_confluence } = process.env;

export const getPageConfluenceBody = () =>
  callRestApi(
    pageId,
    getRestBody("GET", null, "?expand=body.storage,version", {
      Authorization: token_confluence,
    })
  );
export const updatePageConfluenceBody = (obj: any) =>
  callRestApi(
    pageId,
    getRestBody("PUT", obj, undefined, { Authorization: token_confluence })
  );

const getTime = async (listEstimatorJobId: any[], path: any, func: any) => {
  let arrTime: any[] = [];
  for (let jobId of listEstimatorJobId) {
    const response = await getJobExecutionsById(jobId);
    arrTime.push(response.jobExecution[path]);
  }
  return new Date(arrTime.reduce((a, b) => func(new Date(a), new Date(b))));
};
const calcSpeed = async (id: number) => {
  const listEstimatorJobId: any[] = await getIdsExecutions(id);
  const countTile = await caclCountTile(listEstimatorJobId);
  const createTime = await getTime(listEstimatorJobId, "createTime", Math.min);
  const startTime = await getTime(listEstimatorJobId, "startTime", Math.min);
  const endTime = await getTime(listEstimatorJobId, "endTime", Math.max);

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

export const sendReportToConfluence = async (obj: any, color = `#36b37e`) => {
  let newRow = rowForFirstTable(obj, color);
  const response = await getPageConfluenceBody();
  const { value } = response.body.storage;
  const { number } = response.version;
  await updatePageConfluenceBody(updateFirstTable(value, newRow, number));
};

export const sendReportToConfluenceForSecondTable = async (obj: any) => {
  let newRow = rowForSecondTable(obj);
  const response = await getPageConfluenceBody();
  const { value } = response.body.storage;
  const { number } = response.version;
  await updatePageConfluenceBody(updateSecondTable(value, newRow, number));
};
