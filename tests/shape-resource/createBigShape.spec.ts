import {deleteShapeById, getShapeById, waitWhenAllProcessDone} from "../../controller/shape/shape-controller";
import {isEmpty} from "../../helper/checkValue";
import {createGqlShape} from "../../controller/graphql/shape";
import {longData} from "../../requests/graphql/createShape";

describe('wait when progress big shape will done', function () {
    let shapeId: number;

    afterAll(async function () {
        const response = await deleteShapeById(shapeId)
        expect(isEmpty(response.body))

        const getDeletedShape = await getShapeById(shapeId)
        expect(isEmpty(getDeletedShape.body))
    })

    it('successfully create joplin shape',async function () {
        const response = await createGqlShape(longData, `joplin auto-test`)
        const {id, __typename} = response.data.calculate
        shapeId = id

        expect(id.length).toBeGreaterThan(0)
        expect(__typename).toEqual('Shape')
    })

    it('successfully completed progress', async function () {
        await waitWhenAllProcessDone(shapeId)
    },  75000)
})