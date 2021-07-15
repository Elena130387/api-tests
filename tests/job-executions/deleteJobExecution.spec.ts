import {deleteJobExecution} from "../../controller/job-execution/job-executions-controller";

describe('delete job executions', function() {

    it('successfully delete job executions',async function () {
        const response = await deleteJobExecution(2482)

        expect(response.body).toMatchObject({})
    })
})