// query
export const executionsQuery = (limit: number, offset: number) =>
  `?page%5Blimit%5D=${limit}&page%5Boffset%5D=${offset}`;
export const getShapesCountQuery = (count: number) =>
  `?filter%5Blimit%5D=${count}`;
export const imageTileQuery = (coord: any) =>
  `?latNW=${coord.latNW}&lonNW=${coord.lonNW}&latSE=${coord.latSE}&lonSE=${coord.lonSE}&zoom=18&provider=bing&size_x=224&size_y=224`;
