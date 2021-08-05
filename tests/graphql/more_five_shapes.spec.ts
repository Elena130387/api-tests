import {createGqlShape} from "../../controller/graphql/shape";
import {simpleCoordinates} from "../../requests/graphql/createShape";
import {messages} from "../../controller/shape/shape-controller";

xdescribe('create more than 5 shapes', function() {
    const MAX_COUNT = 5

    it('create 6 shapes', async function () {
        [...Array(MAX_COUNT)].map(async (_, i) => {
            if(i === MAX_COUNT) {
                const response = await createGqlShape(simpleCoordinates, `autotest: sixth form`)
                const {body, status} = response.errors[0].extensions.response

                expect(body.message).toEqual(messages.aLotRunningShapes)
                expect(status).toEqual(500)
            }

            const response = await createGqlShape(simpleCoordinates, `shape auto: id_${i}`)
            const {id} = response.data.calculate

            expect(id.length).toBeGreaterThan(0)
        });
    })
})