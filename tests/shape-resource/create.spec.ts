import assert from "assert";
import { callRestApi, getRestBody } from "../../controller/api.controller";
import {FULLDATE} from "../../helper/date";
import {shapeUrl} from "../../helper/urls";
import {defaultText} from "../../helper/errors";
import { isEmpty } from "../../helper/checkValue";
import {simpleShapeObject} from "../../requests/shape-resource/createNewShape";

describe('create new shape', function() {
    const STATUS = 'starting'
    const NAME = `new test: ${FULLDATE}`

    afterEach('delete shape', async function () {
        const response = await callRestApi(`${shapeUrl}/${this.shapeId}`, getRestBody('DELETE', null))
        assert(isEmpty(response.body))

        const getDeletedShape = await callRestApi(`${shapeUrl}/${this.shapeId}`, getRestBody('GET', null))
        assert(isEmpty(getDeletedShape.body))
    })

    it('successfully create new shape',async function () {
        const response = await callRestApi(shapeUrl, getRestBody('POST', simpleShapeObject(NAME)))
        const {status, id, name, initialPolygons} = response
        this.shapeId = id

        assert(status === STATUS, defaultText('status', STATUS, status))
        assert(typeof id === 'number', defaultText('id', 'contains number', id))
        assert.equal(name, NAME, defaultText('shape name', NAME, name))
        assert.equal(initialPolygons[0].coordinates.length, 4)
    })
})