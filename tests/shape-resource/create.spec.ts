import {FULLDATE} from "../../helper/date";
import {createShape} from "../../controller/shape/shape-controller";
import {simpleShapeObject} from "../../requests/shape-resource/createNewShape";

describe('create new shape', function() {
    let shapeId = 0
    const STATUS = 'starting'
    const NAME = `new test: ${FULLDATE}`

    it('successfully create new shape',async function () {
        const coordinatesCount = simpleShapeObject('', false).polygons[0].coordinates.length
        const response = await createShape(NAME)
        const {status, id, name, initialPolygons} = response
        shapeId = id

        expect(status).toEqual(STATUS)
        expect(typeof id).toEqual('number')
        expect(name).toEqual(NAME)
        expect(initialPolygons[0].coordinates.length).toEqual(coordinatesCount)
    })
})