import {
  createShape,
  waitWhenShapeStatusEqual,
} from "./controller/shape/shape-controller";
import { shape01km2 } from "./requests/shape-resource/createNewShape";
import { FULLDATE } from "./helper/date";
const NAME = `autotest, create form: ${FULLDATE} (before test)`;

module.exports = async () => {
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const response = await createShape(NAME, true, false, shape01km2);
  const { id } = response;
  await waitWhenShapeStatusEqual(id);
  await sleep(20000);
};
