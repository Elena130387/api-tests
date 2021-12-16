import { HEIGHT, WIDTH } from "./compareWithReference/coordProcessing";
import { addDirForReportReferenceShape, removeDir } from "./exportFile";
import {
  createPNGDifferentBetweenMasks,
  createPNGMaskPolygonsForTile,
  rgbArrayFromPng,
} from "./compareWithReference/imageProcessing";

export const calcIoUClassNoneBuildings = async (
  pathToImage: string,
  width: number = WIDTH,
  height: number = HEIGHT
) => {
  let arrayRGB = await rgbArrayFromPng(
    `reports/referenceShapes/${pathToImage}.png`,
    width,
    height
  );
  let getIntersectionArea = arrayRGB.filter(
    (pixel: any) => pixel.r === 255 && pixel.g === 255 && pixel.b === 255
  ).length;
  let getUnionArea =
    getIntersectionArea +
    arrayRGB.filter(
      (pixel: any) => pixel.r === 255 && pixel.g === 0 && pixel.b === 0
    ).length;
  return getIntersectionArea / getUnionArea;
};

export const calcIoUClassBuildings = async (
  pathToImage: string,
  width: number = WIDTH,
  height: number = HEIGHT
) => {
  let arrayRGB = await rgbArrayFromPng(
    `reports/referenceShapes/${pathToImage}.png`,
    width,
    height
  );
  let getUnionArea = arrayRGB.filter(
    (pixel: any) => !(pixel.r === 255 && pixel.g === 255 && pixel.b === 255)
  ).length;
  let getIntersectionArea =
    getUnionArea -
    arrayRGB.filter(
      (pixel: any) => pixel.r === 255 && pixel.g === 0 && pixel.b === 0
    ).length;
  return getIntersectionArea / getUnionArea;
};

export const getIoUForEachClassBuildings = async (
  nameImage: string,
  coordTile: any,
  referenceResponse: any,
  currentResponse: any
) => {
  const nameDir = "masksByClass";
  const objIoU: any = {
    "none-building": await calcIoUClassNoneBuildings(
      nameImage + "OneClassDiff"
    ),
    building: await calcIoUClassBuildings(nameImage + "OneClassDiff"),
  };
  addDirForReportReferenceShape(nameDir);
  const uniqueUnionClass = [
    ...new Set([
      ...referenceResponse.map((el: any) => el.buildingClass ?? el.damageClass),
      ...currentResponse.map((el: any) => el.buildingClass ?? el.damageClass),
    ]),
  ];
  for (let i = 0; i < uniqueUnionClass.length; i++) {
    const polygonsByClassReference = referenceResponse.filter(
      (el: any) => el.buildingClass ?? el.damageClass == uniqueUnionClass[i]
    );
    const nameReferenceImage =
      nameDir + "/" + nameImage + uniqueUnionClass[i] + "Reference";
    await createPNGMaskPolygonsForTile(
      coordTile,
      polygonsByClassReference,
      nameReferenceImage
    );
    const polygonsByClassCurrent = currentResponse.filter(
      (el: any) => el.buildingClass ?? el.damageClass == uniqueUnionClass[i]
    );
    const nameCurrentImage =
      nameDir + "/" + nameImage + uniqueUnionClass[i] + "Current";
    await createPNGMaskPolygonsForTile(
      coordTile,
      polygonsByClassCurrent,
      nameCurrentImage
    );
    const nameDiffImage =
      nameDir + "/" + nameImage + uniqueUnionClass[i] + "Diff";
    createPNGDifferentBetweenMasks(
      nameReferenceImage,
      nameCurrentImage,
      nameDiffImage
    );
    objIoU[uniqueUnionClass[i]] = await calcIoUClassBuildings(nameDiffImage);
  }
  removeDir(nameDir);
  return objIoU;
};
export const calcDeviation = (FactIndex: number, PlanIndex: number) =>
  Math.abs(FactIndex / PlanIndex - 1) * 100;
