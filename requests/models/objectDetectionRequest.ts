import { imageToBase64 } from "../../helper/createReports/imgToBase64";

export const objectDetectionObj = async (imgPath: string, source: string) => ({
  images: {
    "(416, 416)": await imageToBase64(imgPath),
  },
  source: source,
});
