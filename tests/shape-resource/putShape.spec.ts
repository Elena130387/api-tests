import {FULLDATE} from "../../helper/date";
import {createShape, deleteShapeById, getShapeById, renameShapeById} from "../../controller/shape/shape-controller";

describe('put created shape', function() {
    let shapeId = 0
    const STATUS = 'starting'
    const NAME = `new test: ${FULLDATE}`
    const UPDATE_NAME = FULLDATE

    afterAll(async function () {
        const response = await deleteShapeById(shapeId)
        expect(response.body).toMatch("")


        const getDeletedShape = await getShapeById(shapeId)
        expect(getDeletedShape.body).toMatch("")
    })

    it('successfully rename shape',async function () {
        const response = await createShape(NAME)
        const {status, id} = response
        shapeId = id

        expect(status).toEqual(STATUS)
        expect(typeof id).toEqual('number')

        const renameResponse = await renameShapeById(id, UPDATE_NAME)
        expect(renameResponse.body).toMatch("")


        const getUpdatedShape = await getShapeById(id)
        expect(id).toEqual(getUpdatedShape.id)
        expect(getUpdatedShape.name).toEqual(UPDATE_NAME)
    })
})