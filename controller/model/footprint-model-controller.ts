import { callRestApi, getRestBody } from "../api.controller";
import { footprintObj } from "../../requests/models/footprintRequest";

const { MAIN_URL, DEMO_URL } = process.env;
const FOOTPRINT = "/footprint-model/footprint";
export const FOOTPRINTS_URL = process.env.TEST_ENV
  ? `${DEMO_URL}${FOOTPRINT}`
  : `${MAIN_URL}${FOOTPRINT}`;

export const getFootprintModel = async (coord: any, imgPath: string) =>
  callRestApi(
    `${FOOTPRINTS_URL}`,
    getRestBody("POST", await footprintObj(coord, imgPath))
  );
