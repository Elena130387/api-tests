import { callRestApi, getRestBody } from "../api.controller";
import { objectDetectionObj } from "../../requests/models/objectDetectionRequest";

const { MAIN_URL, DEMO_URL } = process.env;
const OBJECTDETECTION = "/object-detection-model/objects";
export const OBJECTDETECTIONS_URL = process.env.TEST_ENV
  ? `${DEMO_URL}${OBJECTDETECTION}`
  : `${MAIN_URL}${OBJECTDETECTION}`;

export const getObjectDetectionModel = async (
  imgName: string,
  source: string
) =>
  callRestApi(
    `${OBJECTDETECTIONS_URL}`,
    getRestBody(
      "POST",
      await objectDetectionObj(
        `helper/compareWithReference/regression_for_all_models/tiles/${imgName}.jpg`,
        source
      )
    )
  );
