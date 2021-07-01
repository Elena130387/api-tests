import { callRestApi, getRestBody } from "../../controller/api.controller";
import {FULLDATE} from "../../helper/date";
import {shapeUrl} from "../../helper/urls";
import { isEmpty } from "../../helper/checkValue";
import {simpleShapeObject} from "../../requests/shape-resource/createNewShape";

describe('create new shape', function() {
    let shapeId = 0
    const STATUS = 'starting'
    const NAME = `new test: ${FULLDATE}`

    afterAll(async function () {
        const response = await callRestApi(`${shapeUrl}/${shapeId}`, getRestBody('DELETE', null))
        expect(isEmpty(response.body))

        const getDeletedShape = await callRestApi(`${shapeUrl}/${shapeId}`, getRestBody('GET', null))
        expect(isEmpty(getDeletedShape.body))
    })

    it('successfully create new shape',async function () {
        const response = await callRestApi(shapeUrl, getRestBody('POST', simpleShapeObject(NAME)))
        const {status, id, name, initialPolygons} = response
        shapeId = id

        expect(status).toEqual(STATUS)
        expect(typeof id).toEqual('number')
        expect(name).toEqual(NAME)
        expect(initialPolygons[0].coordinates.length).toEqual(4)
    })
})