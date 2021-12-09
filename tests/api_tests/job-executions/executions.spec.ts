import { findJobExecutions } from "../../../controller/job-execution/job-executions-controller";

describe("find job executions", function () {
  const LIMIT = 1;
  const OFFSET = 0;

  it("successfully find job executions", async function () {
    const response = await findJobExecutions(LIMIT, OFFSET);

    const { links, content } = response;
    const { jobExecution, links: hrefId } = content[0];

    expect(
      [LIMIT, OFFSET, "executions"].every((el) => links[0].href.includes(el))
    );
    expect(hrefId[0].href.includes(jobExecution.id));
  });
});
