import { startJobExecution } from "../../controller/job-execution/job-executions-controller";
import { startJobObj } from "../../requests/executions/startJob";

xdescribe('start job execution', function() {
    const SHAPE_ID = 2262

    it('successfully start job execution',async function () {
        const response = await startJobExecution(true, SHAPE_ID)

        const {exitCode, status, tilesDone, tilesTotal, testDataGenerating, shape, polygon} = response.jobExecution

        expect(exitCode).toEqual('STARTING')
        expect(status).toEqual('starting')
        expect([tilesDone, tilesTotal].every(el => el === 0))
        expect(testDataGenerating).toEqual(true)
        expect(shape.shapeId).toEqual(SHAPE_ID)
        expect(polygon.coordinates).toEqual(startJobObj(true, SHAPE_ID).initialPolygons[0].coordinates)
    })
})