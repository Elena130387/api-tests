import { FULLDATE, LOCAL_TIME } from "../../../helper/date";
import {
  createShape,
  getShapeById,
  renameShapeById,
} from "../../../controller/shape/shape-controller";
import { isEmpty } from "../../../helper/checkValue";

describe("put created shape", function () {
  let shapeId = 0;
  const STATUS = "starting";
  const NAME = `autotest, create form: ${FULLDATE}`;
  const UPDATE_NAME = `autotest, create form: ${LOCAL_TIME}`;

  it("successfully rename shape", async function () {
    const response = await createShape(NAME);
    const { status, id } = response;
    shapeId = id;

    expect(status).toEqual(STATUS);
    expect(typeof id).toEqual("number");

    const renameResponse = await renameShapeById(id, UPDATE_NAME);
    expect(isEmpty(renameResponse.body));

    const getUpdatedShape = await getShapeById(id);
    expect(id).toEqual(getUpdatedShape.id);
    expect(getUpdatedShape.name).toEqual(UPDATE_NAME);
  });
});
