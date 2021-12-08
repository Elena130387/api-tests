import { imageToBase64 } from "../../helper/createReports/imgToBase64";

export const footprintObj = async (coord: any, imgPath: string) => ({
  red: {
    mean: 109.79227423604905,
    std: 56.37261427782609,
  },
  green: {
    mean: 110.13631038298558,
    std: 51.97826772313149,
  },
  blue: {
    mean: 105.40105675552961,
    std: 52.76296916418503,
  },
  tile: coord,
  images: {
    "(256, 256)": await imageToBase64(imgPath),
  },
});
