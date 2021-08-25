export const simpleShapeObject = (name: string, forceProcessing: boolean, testDataGenerating = true) => ({
    name,
    "polygons": [
        {
            "name": `polygon: ${name} `,
            "description": `description: ${name}`,
            "coordinates": [
                {"lat": 26.136744666722507, "lon": -81.7996547336161},
                {"lat": 26.135859268938685, "lon": -81.79952747653266},
                {"lat": 26.13592158454476, "lon": -81.79887094567114},
                {"lat": 26.13682515709741, "lon": -81.79899820275458},
                {"lat": 26.136744666722507, "lon": -81.7996547336161}
            ],
            "shapeId": 0,
            forceProcessing,
            testDataGenerating
        }
    ]
})