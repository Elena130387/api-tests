import { FULLDATE } from "../../../helper/date";
import {
  createShape,
  waitWhenProcessStarted,
  waitWhenShapeStatusEqualStopped,
} from "../../../controller/shape/shape-controller";
import { stopShape } from "../../../controller/graphql/shape";

describe("stop creating shape", function () {
  let shapeId: number;
  const STATUS = "starting";
  const NAME = `autotest, create form: ${FULLDATE}`;

  it("successfully create new shape", async function () {
    const response = await createShape(NAME, true, false);
    const { status, id } = response;
    shapeId = id;

    expect(status).toEqual(STATUS);
    await waitWhenProcessStarted(shapeId);
  }, 40000);

  it("stop running shape process", async function () {
    const response = await stopShape(shapeId);
    const { name } = response.data.stopCalculation;

    expect(name).toEqual(NAME);

    await waitWhenShapeStatusEqualStopped(shapeId);
  }, 60000);
});
