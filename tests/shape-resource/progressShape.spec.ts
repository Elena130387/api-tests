import {
    waitWhenAllProcessDone
} from "../../controller/shape/shape-controller";
import {createGqlShape} from "../../controller/graphql/shape";
import {smallCoordinates} from "../../requests/graphql/createShape";

describe('wait when progress shape will done', function () {
    let shapeId: number;

    it('successfully create shape',async function () {
        const response = await createGqlShape(smallCoordinates)
        const {id, __typename} = response.data.calculate
        shapeId = id

        expect(id.length).toBeGreaterThan(0)
        expect(__typename).toEqual('Shape')
    })

    it('successfully completed progress', async function () {
        await waitWhenAllProcessDone(shapeId)
    },  20000)
})