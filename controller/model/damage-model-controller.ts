import { callRestApi, getRestBody } from "../api.controller";
import { damageObj } from "../../requests/models/damageRequest";

const { MAIN_URL, DEMO_URL } = process.env;
const DAMAGE = "/building-damage-model/building-damage";
export const DAMAGES_URL = process.env.TEST_ENV
  ? `${DEMO_URL}${DAMAGE}`
  : `${MAIN_URL}${DAMAGE}`;

export const getDamageModel = async (coord: any, imgPath: string) =>
  callRestApi(
    `${DAMAGES_URL}`,
    getRestBody("POST", await damageObj(coord, imgPath))
  );
