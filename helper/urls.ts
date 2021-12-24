// query
export const executionsQuery = (limit: number, offset: number) =>
  `?page%5Blimit%5D=${limit}&page%5Boffset%5D=${offset}`;
export const getShapesCountQuery = (count: number) =>
  `?filter%5Blimit%5D=${count}`;
export const imageTileQuery = (coord: any, provider: string) =>
  `?latNW=${coord.lat_nw}&lonNW=${coord.lon_nw}&latSE=${coord.lat_se}&lonSE=${coord.lon_se}&zoom=16&provider=${provider}&size_x=224&size_y=224`;
