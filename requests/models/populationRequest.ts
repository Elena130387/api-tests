import { imageToBase64 } from "../../helper/createReports/imgToBase64";

export const populationObj = async (imgPath: string) => ({
  images: {
    "(224, 224)": await imageToBase64(imgPath),
  },
});
