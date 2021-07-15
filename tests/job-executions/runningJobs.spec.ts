import {findRunningJob} from "../../controller/job-execution/job-executions-controller";
import {deleteShapeById, getShapeById} from "../../controller/shape/shape-controller";
import {createGqlShape} from "../../controller/graphql/shape";
import {smallCoordinates} from "../../requests/graphql/createShape";

describe('fined running job', function() {
    let shapeId: number

    beforeAll(async function () {
        const response = await createGqlShape(smallCoordinates)
        const {id, __typename} = response.data.calculate
        shapeId = id

        expect(id.length).toBeGreaterThan(0)
        expect(__typename).toEqual('Shape')
    })

    afterAll(async function () {
        const response = await deleteShapeById(shapeId)
        expect(response.body).toMatchObject({})

        const getDeletedShape = await getShapeById(shapeId)
        expect(getDeletedShape.body).toMatchObject({})

    })

    it('fined running job',async function () {
        const response = await findRunningJob()
        const {content} = response
        expect(content.map((el: any) => el.jobExecution.shape.shapeId)).toContain(+shapeId)
    })

})