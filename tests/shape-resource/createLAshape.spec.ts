import {waitWhenAllProcessDone} from "../../controller/shape/shape-controller";
import {createGqlMultiShape} from "../../controller/graphql/shape";
import {LAAirportAndDowntown} from "../../requests/graphql/createShape";

xdescribe('wait when progress LA shape will done', function () {
    let shapeId: number;

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