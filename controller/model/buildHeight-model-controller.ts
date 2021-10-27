import { callRestApi, getRestBody, getRestBodyImg } from "../api.controller";
import { buildHeightObj } from "../../requests/models/buildHeightRequest";

const { MAIN_URL, DEMO_URL } = process.env;
const BUILDHEIGHT = "/bhm/building-height";
export const BUILDHEIGHTS_URL = process.env.TEST_ENV
  ? `${DEMO_URL}${BUILDHEIGHT}`
  : `${MAIN_URL}${BUILDHEIGHT}`;

import { Buffer } from "buffer";

const fs = require("fs");

export const getBuildHeightModelV2 = async (coord: any, imgPath: string) =>
  callRestApi(
    `${BUILDHEIGHTS_URL}/v2`,
    getRestBody("POST", await buildHeightObj(coord, imgPath))
  );

export const getBuildHeightModelV1 = async (coord: any, imgPath: string) =>
  callRestApi(
    `${BUILDHEIGHTS_URL}/v1`,
    getRestBody("POST", await buildHeightObj(coord, imgPath))
  );
export const getBuildHeightModelV3 = async (coord: any, imgPath: string) =>
  callRestApi(
    `${BUILDHEIGHTS_URL}/v3-facade`,
    getRestBodyImg("POST", Buffer.from(fs.readFileSync(imgPath)))
  );
