import { callRestApi, getRestBody } from "../api.controller";
import { populationObj } from "../../requests/models/populationRequest";

const { MAIN_URL, DEMO_URL } = process.env;
const POPULATION = "/pm/population/v1/us";
export const POPULATIONS_URL = process.env.TEST_ENV
  ? `${DEMO_URL}${POPULATION}`
  : `${MAIN_URL}${POPULATION}`;

export const getPopulationModel = async (imgPath: string) =>
  callRestApi(
    `${POPULATIONS_URL}`,
    getRestBody("POST", await populationObj(imgPath))
  );
