import {getShapesCountQuery, shapeUrl} from "../../helper/urls";
import {callRestApi, getRestBody} from "../../controller/api.controller";

describe('Get shapes by count', function () {
    const COUNT = 20

    it(`successfully get first ${COUNT} shapes`, async function () {
        const response = await callRestApi(shapeUrl, getRestBody('GET', null, getShapesCountQuery(COUNT)))

        expect(response.length).toEqual(COUNT)
    })
})
