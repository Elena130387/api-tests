import { callRestApi, getRestBody } from "../api.controller";

const { MAIN_URL, DEMO_URL } = process.env;
const DAMAGE = "/building-damage-model/building-damage";
export const DAMAGES_URL = process.env.TEST_ENV
  ? `${DEMO_URL}${DAMAGE}`
  : `${MAIN_URL}${DAMAGE}`;

export const getDamageModel = async (obj: any) =>
  callRestApi(`${DAMAGES_URL}`, getRestBody("POST", obj));
