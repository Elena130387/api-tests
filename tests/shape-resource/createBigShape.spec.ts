import {waitWhenAllProcessDone} from "../../controller/shape/shape-controller";
import {createGqlShape} from "../../controller/graphql/shape";
import {longData} from "../../requests/graphql/createShape";

xdescribe('wait when progress big shape will done', function () {
    let shapeId: number;

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