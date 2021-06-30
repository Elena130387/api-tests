export const simpleShapeObject = (name: string, forceProcessing = false, testDataGenerating = true) => ({
    name,
    "polygons": [
        {
            "name": `polygon: ${name} `,
            "description": `description: ${name}`,
            "coordinates": [
                {"lat":34.01232286201504,"lon":-118.43593129049536},
                {"lat":34.0,"lon":-118.43279478578168},
                {"lat":34.0,"lon":-118.39647129976021},
                {"lat":34.00201657339223,"lon":-118.39262852137288}
            ],
            "shapeId": 0,
            forceProcessing,
            testDataGenerating
        }
    ]
})