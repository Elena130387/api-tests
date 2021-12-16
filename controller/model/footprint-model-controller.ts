import { callRestApi, getRestBody } from "../api.controller";
import { footprintObj } from "../../requests/models/footprintRequest";

const { MAIN_URL, DEMO_URL } = process.env;
const FOOTPRINT = "/footprint-model/footprint";
export const FOOTPRINTS_URL = process.env.TEST_ENV
  ? `${DEMO_URL}${FOOTPRINT}`
  : `${MAIN_URL}${FOOTPRINT}`;

export const getFootprintModel = async (coord: any, imgName: string) =>
  callRestApi(
    `${FOOTPRINTS_URL}`,
    getRestBody(
      "POST",
      await footprintObj(
        coord,
        `helper/compareWithReference/regression_for_all_models/tiles/defaultTiles/${imgName}.jpg`
      )
    )
  );
