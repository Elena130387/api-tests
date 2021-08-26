
import {getShapesCountQuery} from "../../helper/urls";
import {callRestApi, getRestBody} from "../api.controller";
import {simpleShapeObject} from "../../requests/shape-resource/createNewShape";
import { renameShape } from "../../requests/shape-resource/renameShape";

const {MAIN_URL, DEMO_URL} = process.env
const CALCULATION = `/calculation-management/shapes`
export const CALCULATION_URL = process.env.TEST_ENV ? `${DEMO_URL}${CALCULATION}` : `${MAIN_URL}${CALCULATION}`


export const getShapeById = (shapeId: number) => callRestApi(`${CALCULATION_URL}/${shapeId}`, getRestBody('GET', null))
export const getShapeByCount = (count:number) => callRestApi(CALCULATION_URL, getRestBody('GET', null, getShapesCountQuery(count)))
export const deleteShapeById = (shapeId: number) =>  callRestApi(`${CALCULATION_URL}/${shapeId}`, getRestBody('DELETE', null))
export const createShape = (name: string, forceProcessing = false, testDataGenerating = true) =>  callRestApi(CALCULATION_URL, getRestBody('POST', simpleShapeObject(name, forceProcessing, testDataGenerating)))
export const renameShapeById = (shapeId: number, name: string) =>  callRestApi(`${CALCULATION_URL}/${shapeId}`, getRestBody('PUT', renameShape(name)))

export async function waitWhenAllProcessDone (shapeId: number) {
    await new Promise((r) => setTimeout(r, 1000));

    const response = await getShapeById(shapeId)
    const {total, completed} = response.progress

    if(total > 0 && total === completed) {
        expect(total).toEqual(completed)

        return
    }
    await waitWhenAllProcessDone(shapeId)
}

export async function waitWhenProcessStopped (shapeId: number) {
    const STATUS = 'stopped'

    await new Promise((r) => setTimeout(r, 1000));

    const response = await getShapeById(shapeId)
    const {status, polygons} = response

    if(status === STATUS && polygons[0].status === STATUS) {
       ;[status, polygons[0].status].forEach(el => expect(el).toEqual(STATUS))

        return
    }
    await waitWhenProcessStopped(shapeId)
}
