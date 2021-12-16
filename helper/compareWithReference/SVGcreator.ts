import { HEIGHT, WIDTH } from "./coordProcessing";

const colorLibrary: any = {
  "3less": `rgba(255, 0, 0, 0.5)`,
  "3to8": `rgba(0, 255, 0, 0.5)`,
  "8more": `rgba(0, 0, 255, 0.5)`,
  NO_DAMAGE: `rgba(0, 240, 255, 0.5)`,
  DESTROYED: `rgba(255, 255, 0, 0.5)`,
  "small-vehicle": `rgba(255, 255, 0, 0.5)`,
  "swimming-pool": `rgba(0, 240, 255, 0.5)`,
  withOutClass: `rgba(255, 0, 0, 0.5)`,
};
const SVGPolygons = (polygon: any) => `<polygon points="${
  polygon.polygon ?? polygon
}" 
 fill="${colorLibrary[polygon.class] ?? colorLibrary.withOutClass}" 
  stroke-width="1"/>`;
export const creatorPolygonsSVG = (arrayPolygons: any) =>
  arrayPolygons.reduce(
    (polygonsSVG: string, current: any) => polygonsSVG + SVGPolygons(current),
    0
  );

export const drawByCoordSVG = (
  arrayPixelCoord: any,
  addAttribute: string = "",
  width = WIDTH,
  height = HEIGHT
) =>
  `<svg width="${width}" height="${height}" ${addAttribute}>${creatorPolygonsSVG(
    arrayPixelCoord
  )}</svg>`;
