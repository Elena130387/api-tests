// query
export const executionsQuery = (limit: number, offset: number) => `?page%5Blimit%5D=${limit}&page%5Boffset%5D=${offset}`
export const getShapesCountQuery = (count: number) => `?filter%5Blimit%5D=${count}`
