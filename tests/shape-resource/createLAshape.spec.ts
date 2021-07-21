import {deleteShapeById, getShapeById, waitWhenAllProcessDone} from "../../controller/shape/shape-controller";
import {isEmpty} from "../../helper/checkValue";
import {createGqlMultiShape} from "../../controller/graphql/shape";
import {LAAirportAndDowntown} from "../../requests/graphql/createShape";

xdescribe('wait when progress LA shape will done', function () {
    let shapeId: number;

    afterAll(async function () {
        const response = await deleteShapeById(shapeId)
        expect(isEmpty(response.body))

        const getDeletedShape = await getShapeById(shapeId)
        expect(isEmpty(getDeletedShape.body))
    })

    it('successfully create LA shape',async function () {
        const response = await createGqlMultiShape(LAAirportAndDowntown, `LA auto-test`)
        console.log('response', response)
        const {id, __typename} = response.data.calculate
        shapeId = id

        expect(id.length).toBeGreaterThan(0)
        expect(__typename).toEqual('Shape')
    })

    it('successfully completed progress', async function () {
        await waitWhenAllProcessDone(shapeId)
    },  90000)
})