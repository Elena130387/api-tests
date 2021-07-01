import { callRestApi, getRestBody } from "../../controller/api.controller";
import {FULLDATE} from "../../helper/date";
import {shapeUrl} from "../../helper/urls";
import { isEmpty } from "../../helper/checkValue";
import {simpleShapeObject} from "../../requests/shape-resource/createNewShape";
import {renameShape} from "../../requests/shape-resource/renameShape";

describe('put created shape', function() {
    let shapeId = 0
    const STATUS = 'starting'
    const NAME = `new test: ${FULLDATE}`
    const UPDATE_NAME = FULLDATE

    afterAll(async function () {
        const response = await callRestApi(`${shapeUrl}/${shapeId}`, getRestBody('DELETE', null))

        expect(isEmpty(response.body))

        const getDeletedShape = await callRestApi(`${shapeUrl}/${shapeId}`, getRestBody('GET', null))
        expect(isEmpty(getDeletedShape.body))
    })

    it('successfully rename shape',async function () {
        const response = await callRestApi(shapeUrl, getRestBody('POST', simpleShapeObject(NAME)))
        const {status, id} = response
        shapeId = id

        expect(status).toEqual(STATUS)
        expect(typeof id).toEqual('number')

        const renameResponse = await callRestApi(`${shapeUrl}/${id}`, getRestBody('PUT', renameShape(UPDATE_NAME)))
        expect(isEmpty(renameResponse.body))

        const getUpdatedShape = await callRestApi(`${shapeUrl}/${id}`, getRestBody('GET', null))
        expect(id).toEqual(getUpdatedShape.id)
        expect(getUpdatedShape.name).toEqual(UPDATE_NAME)
    })
})