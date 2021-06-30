import assert from "assert";
import { callRestApi, getRestBody } from "../../controller/api.controller";
import {FULLDATE} from "../../helper/date";
import {shapeUrl} from "../../helper/urls";
import {defaultText} from "../../helper/errors";
import { isEmpty } from "../../helper/checkValue";
import {simpleShapeObject} from "../../requests/shape-resource/createNewShape";
import {renameShape} from "../../requests/shape-resource/renameShape";

describe('put created shape', function() {
    const STATUS = 'starting'
    const NAME = `new test: ${FULLDATE}`
    const UPDATE_NAME = FULLDATE

    afterEach('delete shape', async function () {
        const response = await callRestApi(`${shapeUrl}/${this.shapeId}`, getRestBody('DELETE', null))

        assert(isEmpty(response.body))

        const getDeletedShape = await callRestApi(`${shapeUrl}/${this.shapeId}`, getRestBody('GET', null))
        assert(isEmpty(getDeletedShape.body))
    })

    it('successfully rename shape',async function () {
        const response = await callRestApi(shapeUrl, getRestBody('POST', simpleShapeObject(NAME)))
        const {status, id} = response
        this.shapeId = id

        assert(status === STATUS, defaultText('status', STATUS, status))
        assert(typeof id === 'number', defaultText('id', 'contains number', id))

        const renameResponse = await callRestApi(`${shapeUrl}/${id}`, getRestBody('PUT', renameShape(UPDATE_NAME)))
        assert(isEmpty(renameResponse.body))

        const getUpdatedShape = await callRestApi(`${shapeUrl}/${id}`, getRestBody('GET', null))


        assert(id === getUpdatedShape.id, defaultText('id', id, getUpdatedShape.id))
        assert.equal(getUpdatedShape.name, UPDATE_NAME, defaultText('name', UPDATE_NAME, getUpdatedShape.name))
    })
})