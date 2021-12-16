import { callRestApi, getRestBody } from "../api.controller";

const { MAIN_URL, DEMO_URL } = process.env;
const EXPOSURE = "/exposure-calc/tile";
export const EXPOSURE_URL = process.env.TEST_ENV
  ? `${DEMO_URL}${EXPOSURE}`
  : `${MAIN_URL}${EXPOSURE}`;

export const getExposure = (obj: any) =>
  callRestApi(`${EXPOSURE_URL}`, getRestBody("POST", obj));
