import {
    createGqlShape,
} from "../../controller/graphql/shape";
import {deleteShapeById, getShapeById} from "../../controller/shape/shape-controller";
import { simpleCoordinates } from "../../requests/graphql/createShape";

describe('create new graphql shape', function() {
    let shapeId: number;

    afterAll(async function () {
        const response = await deleteShapeById(shapeId)
        expect(response.body).toMatch("")

        const getDeletedShape = await getShapeById(shapeId)
        expect(getDeletedShape.body).toMatch("")
    })

    it('successfully create shape',async function () {
        const response = await createGqlShape(simpleCoordinates)
        const {id, __typename} = response.data.calculate
        shapeId = id

        expect(id.length).toBeGreaterThan(0)
        expect(__typename).toEqual('Shape')
    })
})