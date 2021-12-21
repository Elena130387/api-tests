import { callRestApi, getRestBody } from "../api.controller";
import { executionsQuery, imageTileQuery } from "../../helper/urls";

const { MAIN_URL, DEMO_URL } = process.env;
const IMAGE_SERVICE = "image-service/swagger-ui/";
export const EXECUTIONS_URL = process.env.TEST_ENV
  ? `${DEMO_URL}${IMAGE_SERVICE}`
  : `${MAIN_URL}${IMAGE_SERVICE}`;

export const getImageTile = (coordinates: any) =>
  callRestApi(
    `${EXECUTIONS_URL}tile`,
    getRestBody("GET", null, imageTileQuery(coordinates))
  );
