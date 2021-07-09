export const simpleCoordinates = [
    [-118.23837205347144,33.99825495289519],
    [-118.2383891195865,33.998750157397474],
    [-118.2432017640509,33.998707711410084],
    [-118.23837205347144,33.99825495289519]
]

export const smallCoordinates = [
    [-73.04189529858392, 40.9148958250447],
    [-73.04182906996836, 40.914306369915536],
    [-73.04068846602843, 40.91436197911452],
    [-73.04079148831994, 40.914956994615835],
    [-73.04189529858392, 40.9148958250447]
]


export const defaultGraphShapeObj = (name: string, coordinates: number[][]) => ({
    features: [
        {
            type:"Feature",
            properties:{},
            geometry: {
                type:"Polygon",
                coordinates: [coordinates]
            }
        }
    ],
    name,
    forceProcessing:false,
    testDataGenerating:false
})