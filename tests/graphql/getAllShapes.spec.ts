import {getAllShapes} from "../../controller/graphql/shape";

describe('get all shapes', function() {

    it('successfully get all shapes',async function () {
        const response = await getAllShapes()
        const {shapes} = response.data
        const {createdAt, id, name, polygons, progress, status, __typename} = shapes[0]

        expect(shapes.length).toBeGreaterThan(0)
        expect(typeof shapes).toEqual('object')
        expect(__typename).toEqual('Shape')
        ;[progress, polygons].forEach(el => expect(typeof el).toEqual('object'))
        ;[createdAt, id, name,status].forEach(el => expect(el.length).toBeGreaterThan(0))

    })
})