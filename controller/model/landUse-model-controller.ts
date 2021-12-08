import { callRestApi, getRestBody } from "../api.controller";
import { landUseObj } from "../../requests/models/landUseRequest";

const { MAIN_URL, DEMO_URL } = process.env;
const LANDUSE = "/lum/land-use";
export const LANDUSES_URL = process.env.TEST_ENV
  ? `${DEMO_URL}${LANDUSE}`
  : `${MAIN_URL}${LANDUSE}`;

export const getLandUseModel = async (imgPath: string) =>
  callRestApi(
    `${LANDUSES_URL}`,
    getRestBody("POST", await landUseObj(imgPath))
  );
