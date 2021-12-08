import { imageToBase64 } from "../../helper/createReports/imgToBase64";

export const buildHeightObj = async (coord: any, imgPath: string) => ({
  tile: coord,
  images: {
    "(224, 224)": await imageToBase64(imgPath),
  },
});
