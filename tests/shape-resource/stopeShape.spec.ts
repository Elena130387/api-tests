import {FULLDATE} from "../../helper/date";
import {
    createShape,
    waitWhenProcessStopped
} from "../../controller/shape/shape-controller";
import {stopShape} from "../../controller/graphql/shape";

describe('stop creating shape', function() {
    let shapeId: number
    const STATUS = 'starting'
    const NAME = `new test: ${FULLDATE}`

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
    }, 35000)
})