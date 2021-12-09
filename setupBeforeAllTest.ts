import {
  createShape,
  waitWhenShapeStatusEqualCompleted,
} from "./controller/shape/shape-controller";
import { smallShape } from "./requests/shape-resource/createNewShape";
import { FULLDATE } from "./helper/date";
const NAME = `autotest, create form: ${FULLDATE} (before test)`;

module.exports = async () => {
  const response = await createShape(NAME, true, false, smallShape);
  const { id } = response;
  await waitWhenShapeStatusEqualCompleted(id);
};
