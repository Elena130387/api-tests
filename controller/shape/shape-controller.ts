import { getShapesCountQuery } from "../../helper/urls";
import { callRestApi, getRestBody } from "../api.controller";
import {
  shapeObject,
  smallShape,
} from "../../requests/shape-resource/createNewShape";
import { renameShape } from "../../requests/shape-resource/renameShape";

const { MAIN_URL, DEMO_URL } = process.env;
const CALCULATION = `/calculation-management/shapes`;
export const CALCULATION_URL = process.env.TEST_ENV
  ? `${DEMO_URL}${CALCULATION}`
  : `${MAIN_URL}${CALCULATION}`;

export const getShapeById = (shapeId: number) =>
  callRestApi(`${CALCULATION_URL}/${shapeId}`, getRestBody("GET", null));
export const getShapeByCount = (count: number) =>
  callRestApi(
    CALCULATION_URL,
    getRestBody("GET", null, getShapesCountQuery(count))
  );
export const deleteShapeById = (shapeId: number) =>
  callRestApi(`${CALCULATION_URL}/${shapeId}`, getRestBody("DELETE", null));
export const createShape = (
  name: string,
  forceProcessing = false,
  testDataGenerating = true,
  coordinates: any[] = smallShape
) =>
  callRestApi(
    CALCULATION_URL,
    getRestBody(
      "POST",
      shapeObject(name, forceProcessing, testDataGenerating, coordinates)
    )
  );
export const renameShapeById = (shapeId: number, name: string) =>
  callRestApi(
    `${CALCULATION_URL}/${shapeId}`,
    getRestBody("PUT", renameShape(name))
  );

export async function waitWhenAllProcessDone(shapeId: number) {
  await new Promise((r) => setTimeout(r, 1000));

  const response = await getShapeById(shapeId);
  const { total, completed } = response.progress;

  if (total > 0 && total === completed) {
    expect(total).toEqual(completed);

    return;
  }
  await waitWhenAllProcessDone(shapeId);
}

export async function waitWhenProcessStarted(shapeId: number) {
  await new Promise((r) => setTimeout(r, 1000));
  const STATUS = "started";
  const response = await getShapeById(shapeId);
  const { total } = response.progress;
  const { status } = response.polygons[0];

  if (total > 0 && status === STATUS) {
    return;
  }
  await waitWhenProcessStarted(shapeId);
}

export async function waitWhenShapeStatusEqual(
  shapeId: number,
  statusWhait: string = "completed"
) {
  await new Promise((r) => setTimeout(r, 1000));

  const response = await getShapeById(shapeId);
  const { status } = response;

  if (status === statusWhait) {
    return;
  }
  await waitWhenShapeStatusEqual(shapeId);
}

const getAllShapesByName = async (count: number, name: string) =>
  (await getShapeByCount(count)).filter((el: any) => el.name.includes(name));
export const getAllidFromSortListShapesByName = async (
  name: string,
  count: number = 1
) => (await getAllShapesByName(count, name)).map((el: any) => el.id);

export const messages = {
  toLargeShape:
    "Maximum area size limit 50000 km² per 1 month reached. The maximum area size you can create now is",
  aLotRunningShapes:
    "There are already 5 in progress. You cannot create shape at the moment",
};
