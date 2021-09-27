import {
  deleteShapeById,
  getAllidFromSortListShapesByName,
  getShapeById,
} from "../../controller/shape/shape-controller";

describe("delete all shape with name=`autotest, create from`", function () {
  const NAME = `Comparison`,
    STATUS = `deleted`,
    COUNT = 100;
  it(`deleted shapes`, async function () {
    const idsShapeForDeleting = await getAllidFromSortListShapesByName(
      COUNT,
      NAME
    );
    for (let id of idsShapeForDeleting) {
      await deleteShapeById(id);
      const response = await getShapeById(id);
      const { status } = response;
      expect(status).toEqual(STATUS);
    }
  }, 50000);
});
