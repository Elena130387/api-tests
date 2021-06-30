import {shapeUrl} from "../../helper/urls";
import {callRestApi, getRestBody} from "../../controller/api.controller";
import assert from "assert";
import {defaultText} from "../../helper/errors";

describe('Get shapes by count', function () {
    const COUNT = 20

    it(`successfully get first ${COUNT} shapes`, async function () {
        const response = await callRestApi(shapeUrl, getRestBody('GET', null, `?filter%5Blimit%5D=${COUNT}`))

        assert.equal(response.length, COUNT, defaultText('count', COUNT, response.length) )
    })
})
