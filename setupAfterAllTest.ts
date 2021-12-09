import {
  deleteShapeById,
  getAllidFromSortListShapesByName,
  getShapeById,
} from "./controller/shape/shape-controller";

module.exports = async () => {
  const NAME = `autotest, create form`,
    COUNT = 50;
  const idsShapeForDeleting = await getAllidFromSortListShapesByName(
    NAME,
    COUNT
  );
  for (let id of idsShapeForDeleting) {
    await deleteShapeById(id);
  }
};
