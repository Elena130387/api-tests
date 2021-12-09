import {
  deleteShapeById,
  getAllidFromSortListShapesByName,
  getShapeById,
} from "../../../controller/shape/shape-controller";

describe("delete all shape with name=`autotest, create from`", function () {
  const NAME = `autotest, create form`,
    STATUS = `deleted`;
  it(`deleted shapes`, async function () {
    const idsShapeForDeleting = await getAllidFromSortListShapesByName(NAME);
    const id = idsShapeForDeleting[0];
    await deleteShapeById(id);
    const response = await getShapeById(id);
    const { status } = response;
    expect(status).toEqual(STATUS);
  }, 50000);
});
