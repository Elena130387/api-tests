export const renameShape = (name: string) => ({
    name,
    "polygons": [
        {
            "name": "string",
            "description": "string",
            "coordinates": [
                {
                    "lat": 0,
                    "lon": 0
                }
                ],
            "shapeId": 0,
            "forceProcessing": true,
            "testDataGenerating": true
        }
        ]
})