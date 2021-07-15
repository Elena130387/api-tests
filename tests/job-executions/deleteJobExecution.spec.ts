import {deleteJobExecution} from "../../controller/job-execution/job-executions-controller";
import {isEmpty} from "../../helper/checkValue";

describe('delete job executions', function() {

    it('successfully delete job executions',async function () {
        const response = await deleteJobExecution(2482)

        expect(isEmpty(response.body))
    })
})