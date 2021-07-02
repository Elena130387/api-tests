export const swaggerUrl = 'http://exro-dev.syncretis.com'
export const shapeUrl = `${swaggerUrl}/calculation-management/shapes`
export const executionsUrl = `${swaggerUrl}/estimator/executions`

// query
export const executionsQuery = (limit: number, offset: number) => `?page%5Blimit%5D=${limit}&page%5Boffset%5D=${offset}`
export const getShapesCountQuery = (count: number) => `?filter%5Blimit%5D=${count}`
