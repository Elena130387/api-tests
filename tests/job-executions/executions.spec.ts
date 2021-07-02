import { callRestApi, getRestBody } from "../../controller/api.controller";
import {executionsQuery, executionsUrl} from "../../helper/urls";

describe('find job executions', function() {
    const LIMIT = 1
    const OFFSET = 0

    it('successfully find job executions',async function () {
        const response = await callRestApi(executionsUrl, getRestBody('GET', null, executionsQuery(LIMIT, OFFSET)))

        const {links, content} = response
        const {jobExecution, links: hrefId} = content[0]

        expect([LIMIT, OFFSET, 'executions'].every(el => links[0].href.includes(el)))
        expect(hrefId[0].href.includes(jobExecution.id))
    })
})