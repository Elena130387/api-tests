import {createGqlShape} from "../../controller/graphql/shape";
import {simpleCoordinates} from "../../requests/graphql/createShape";
import {messages, waitWhenShapeStatusEqual} from "../../controller/shape/shape-controller";
import { FULLDATE } from "../../helper/date";

xdescribe('create more than 5 shapes', function() {
    const MAX_COUNT = 6,
        NAME = 'autotest, create form',
        ALL_ID: number[] = []

    it(`create ${MAX_COUNT} shapes`, async function () {
        await Promise.all([...Array(MAX_COUNT)].map(async (_, i) => {
            if(i === MAX_COUNT) {
                const response = await createGqlShape(simpleCoordinates, `${NAME}: ${FULLDATE}`)
                const {body, status} = response.errors[0].extensions.response

                expect(body.message).toEqual(messages.aLotRunningShapes)
                expect(status).toEqual(500)
            }

            const response = await createGqlShape(simpleCoordinates, NAME)
            const {id} = response.data.calculate
            ALL_ID.push(id)

            expect(id.length).toBeGreaterThan(0)
        }))
        await Promise.all(ALL_ID.map(async (shapeId) =>  {
            await waitWhenShapeStatusEqual(shapeId)
        }))
    }, 40000)
})