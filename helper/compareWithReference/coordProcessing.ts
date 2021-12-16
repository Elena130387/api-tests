export const WIDTH = 224;
export const HEIGHT = 224;

const geoCoordToPixel = (
  coordTileXY1: any,
  coordTileXY2: any,
  coordPoint: any,
  sitePX: number
) =>
  Math.round(
    ((coordTileXY1 - coordPoint) * sitePX) / (coordTileXY1 - coordTileXY2)
  );

export const convertArrayGeoCoordToPixelArray = (
  coordTile: any,
  polygons: any,
  width: number = WIDTH,
  height: number = HEIGHT
) =>
  polygons.map((polygon: any) =>
    polygon.map(([x, y]: any) => [
      geoCoordToPixel(coordTile.lonNW, coordTile.lonSE, x, width),
      geoCoordToPixel(coordTile.latNW, coordTile.latSE, y, height),
    ])
  );

export const coordToString = (array: any) =>
  array.map((polygon: any) => polygon.join(" "));

export const convertGeoPointsToArrayCoords = (arrayGeoPoints: any) =>
  arrayGeoPoints.map((el: any) => ({
    polygon: [
      [el.X_NW, el.Y_NW],
      [el.X_SE, el.Y_NW],
      [el.X_SE, el.Y_SE],
      [el.X_NW, el.Y_SE],
      [el.X_NW, el.Y_NW],
    ],
    class: el.class,
  }));
