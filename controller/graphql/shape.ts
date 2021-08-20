import { query } from "./query";
import { callRestApi, getRestBody } from "../api.controller";
import { LOCAL_TIME } from "../../helper/date";
import {
  defaultGraphShapeObj,
  graphShapeObjects,
} from "../../requests/graphql/createShape";
import { getFacade } from "../../requests/graphql/facade";

const { MAIN_URL } = process.env;
export const GRAPH_URL = `${MAIN_URL}/graphql`;

export const createGqlObj = (createShapeObj: any) => ({
  operationName: "createShape",
  variables: { input: { ...createShapeObj } },
  query: query.create,
});

export const allShapesGqlObj = () => ({
  operationName: "getShapes",
  variables: {},
  query: query.getAll,
});

export const getFacadeObj = (params: any) => ({
  operationName: "getFacade",
  variables: { ...params },
  query: query.facade,
});

export const stopShapeObj = (id: number) => ({
  operationName: "stopShape",
  variables: { id },
  query: query.stop,
});

export const getShapeGq = (id: number) => ({
  operationName: "getShape",
  variables: { id: id },
  query: query.getShape,
});

export const createFacade = () =>
  callRestApi(GRAPH_URL, getRestBody("POST", getFacadeObj(getFacade)));
export const stopShape = (id: number) =>
  callRestApi(GRAPH_URL, getRestBody("POST", stopShapeObj(id)));

export const createGqlShape = (
  coordinates: any[] = [],
  name = `auto test shape: ${LOCAL_TIME}`
) =>
  callRestApi(
    GRAPH_URL,
    getRestBody("POST", createGqlObj(defaultGraphShapeObj(name, coordinates)))
  );
export const createGqlMultiShape = (
  coordinates: any[] = [],
  name = `auto test shape: ${LOCAL_TIME}`
) =>
  callRestApi(
    GRAPH_URL,
    getRestBody("POST", createGqlObj(graphShapeObjects(name, coordinates)))
  );
export const getAllShapes = () =>
  callRestApi(GRAPH_URL, getRestBody("POST", allShapesGqlObj()));
export const getShape = (id: number) =>
  callRestApi(GRAPH_URL, getRestBody("POST", getShapeGq(id)));
export const getSmallObjOfShape = (arrSmallObj: [], name: string) => {
  let num: any;
  num = arrSmallObj.filter((el: any) => el.name === name);
  return num[0].count;
};
export const getValueByTypeLand = (array: any[], nameLandUse: string) =>
  array.filter((el: any) => el.name === nameLandUse)[0].value;
