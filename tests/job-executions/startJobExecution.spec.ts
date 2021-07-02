import {callRestApi, getRestBody} from "../../controller/api.controller";
import { startJobObj } from "../../requests/executions/startJob";

describe('start job execution', function() {
    const SHAPE_ID = 2262

    it('successfully start job execution',async function () {
        const {MAIN_URL} = process.env
        const response = await callRestApi(`${MAIN_URL}estimator/executions`, getRestBody('POST', startJobObj(true, SHAPE_ID)))

        const {exitCode, status, tilesDone, tilesTotal, testDataGenerating, shape} = response.jobExecution

        expect(exitCode).toEqual('STARTING')
        expect(status).toEqual('starting')
        expect([tilesDone, tilesTotal].every(el => el === 0))
        expect(testDataGenerating).toEqual(true)
        expect(shape.shapeId).toEqual(SHAPE_ID)
    })
})