import {FULLDATE} from "../../helper/date";
import {
    createShape,
    deleteShapeById,
    getShapeById,
    waitWhenProcessStopped
} from "../../controller/shape/shape-controller";
import {isEmpty} from "../../helper/checkValue";
import {stopShape} from "../../controller/graphql/shape";

describe('stop creating shape', function() {
    let shapeId: number
    const STATUS = 'starting'
    const NAME = `new test: ${FULLDATE}`

    afterAll(async function () {
        const response = await deleteShapeById(shapeId)
        expect(isEmpty(response.body))

        const getDeletedShape = await getShapeById(shapeId)
        expect(isEmpty(getDeletedShape.body))
    })

    it('successfully create new shape',async function () {
        const response = await createShape(NAME)
        const {status, id} = response
        shapeId = id

        expect(status).toEqual(STATUS)
    })

    it('stop running shape process', async function () {
        const response = await stopShape(shapeId)
        const {name} = response.data.stopCalculation

        expect(name).toEqual(NAME)

        await waitWhenProcessStopped(shapeId)
    }, 20000)
})