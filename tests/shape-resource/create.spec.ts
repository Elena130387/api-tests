import {FULLDATE} from "../../helper/date";
import {createShape, deleteShapeById, getShapeById} from "../../controller/shape/shape-controller";

describe('create new shape', function() {
    let shapeId = 0
    const STATUS = 'starting'
    const NAME = `new test: ${FULLDATE}`

    afterAll(async function () {
        const response = await deleteShapeById(shapeId)
        expect(response.body).toMatch("")

        const getDeletedShape = await getShapeById(shapeId)
        expect(getDeletedShape.body).toMatch("")
    })

    it('successfully create new shape',async function () {
        const response = await createShape(NAME)
        const {status, id, name, initialPolygons} = response
        shapeId = id

        expect(status).toEqual(STATUS)
        expect(typeof id).toEqual('number')
        expect(name).toEqual(NAME)
        expect(initialPolygons[0].coordinates.length).toEqual(4)
    })
})