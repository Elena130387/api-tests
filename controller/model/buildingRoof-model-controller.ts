import { callRestApi, getRestBodyImg } from "../api.controller";
const { MAIN_URL, DEMO_URL } = process.env;
const BUILDINGROOF = "/brm/building_roof";
export const BUILDINGROOFS_URL = process.env.TEST_ENV
  ? `${DEMO_URL}${BUILDINGROOF}`
  : `${MAIN_URL}${BUILDINGROOF}`;
import { Buffer } from "buffer";
const fs = require("fs");

export const getBuildingRoofModel = async (imgPath: string) =>
  callRestApi(
    `${BUILDINGROOFS_URL}`,
    getRestBodyImg("POST", Buffer.from(fs.readFileSync(imgPath)))
  );
