import {createGqlShape} from "../../controller/graphql/shape";
import {simpleCoordinates} from "../../requests/graphql/createShape";
import {messages} from "../../controller/shape/shape-controller";
import { FULLDATE } from "../../helper/date";

describe('create more than 5 shapes', function() {
    const MAX_COUNT = 5,
        NAME = 'autotest, create form'

    it('create 6 shapes', async function () {
        [...Array(MAX_COUNT)].map(async (_, i) => {
            if(i === MAX_COUNT) {
                const response = await createGqlShape(simpleCoordinates, `${NAME}: ${FULLDATE}`)
                const {body, status} = response.errors[0].extensions.response

                expect(body.message).toEqual(messages.aLotRunningShapes)
                expect(status).toEqual(500)
            }

            const response = await createGqlShape(simpleCoordinates, NAME)
            const {id} = response.data.calculate

            expect(id.length).toBeGreaterThan(0)
        });
    })
})