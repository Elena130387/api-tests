import Jimp from "jimp";
import sharp from "sharp";
import { toFileReferenceData } from "../exportFile";
import fs from "fs";
import {
  convertArrayGeoCoordToPixelArray,
  coordToString,
  HEIGHT,
  WIDTH,
} from "./coordProcessing";
import { drawByCoordSVG } from "./SVGcreator";

const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");

export const rgbArrayFromPng = async (
  pathToImage: string,
  width: number,
  height: number
) =>
  await Jimp.read(pathToImage)
    .then((image) => {
      let arrayPixels: any = [];
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          arrayPixels.push(Jimp.intToRGBA(image.getPixelColor(x, y)));
        }
      }
      return arrayPixels;
    })
    .catch((err) => {
      console.error(err);
    });

export const createPNGMaskPolygonsForTile = async (
  coordTile: any,
  polygons: any,
  nameForNewMask: string,
  width: number = WIDTH,
  height: number = HEIGHT
) => {
  let arrayPixelCoord = polygons.map((el: any) => ({
    class: el.buildingClass ?? el.damageClass,
    polygon: coordToString(
      convertArrayGeoCoordToPixelArray(
        coordTile,
        [el.polygon ?? el],
        width,
        height
      )
    ),
  }));
  let maskSVG = drawByCoordSVG(arrayPixelCoord);
  let svgToPng = await sharp(Buffer.from(maskSVG));
  await svgToPng.toFile(`reports/referenceShapes/${nameForNewMask}.png`);
};
export const cratePNGMaskForFacade = async (
  polygons: any,
  nameForNewMask: string,
  WIDTH = 256,
  HEIGHT = 256,
  viewBox = 'viewBox="0 0 512 512"'
) => {
  let maskSVG = drawByCoordSVG(polygons, viewBox, WIDTH, HEIGHT);
  let svgToPng = await sharp(Buffer.from(maskSVG));
  await svgToPng.toFile(`reports/referenceShapes/${nameForNewMask}.png`);
};
export const createPNGDifferentBetweenMasks = (
  nameReferenceImage: string,
  nameCurrentImage: string,
  nameDiffImage: string
) => {
  const img1 = PNG.sync.read(
    fs.readFileSync(`reports/referenceShapes/${nameReferenceImage}.png`)
  );
  const img2 = PNG.sync.read(
    fs.readFileSync(`reports/referenceShapes/${nameCurrentImage}.png`)
  );
  const { width, height } = img1;
  const diff = new PNG({ width, height });
  pixelmatch(img1.data, img2.data, diff.data, width, height, {
    threshold: 0,
    includeAA: true,
  });
  toFileReferenceData(PNG.sync.write(diff), `${nameDiffImage}`, "png");
};
