import { getShapeByCount } from "../../controller/shape/shape-controller";

describe('Get shapes by count', function () {
    const COUNT = 20

    it(`successfully get first ${COUNT} shapes`, async function () {
        const response = await getShapeByCount(COUNT)

        expect(response.length).toEqual(COUNT)
    })
})
