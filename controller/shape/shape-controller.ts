import {getShapesCountQuery} from "../../helper/urls";
import {callRestApi, getRestBody} from "../api.controller";
import {simpleShapeObject} from "../../requests/shape-resource/createNewShape";
import { renameShape } from "../../requests/shape-resource/renameShape";

const {MAIN_URL} = process.env
const CALCULATION_URL = `${MAIN_URL}/calculation-management/shapes`

export const getShapeById = (shapeId: number) => callRestApi(`${CALCULATION_URL}/${shapeId}`, getRestBody('GET', null))
export const getShapeByCount = (count:number) => callRestApi(CALCULATION_URL, getRestBody('GET', null, getShapesCountQuery(count)))
export const deleteShapeById = (shapeId: number) =>  callRestApi(`${CALCULATION_URL}/${shapeId}`, getRestBody('DELETE', null))
export const createShape = (name: string) =>  callRestApi(CALCULATION_URL, getRestBody('POST', simpleShapeObject(name)))
export const renameShapeById = (shapeId: number, name: string) =>  callRestApi(`${CALCULATION_URL}/${shapeId}`, getRestBody('PUT', renameShape(name)))
