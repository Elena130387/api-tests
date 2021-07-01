export const startJobObj = (forceProcessing: boolean, shapeId: number) => ({
  forceProcessing,
  "initialPolygons": [
        {
            "coordinates": [
                {
                    "lat": 25.99345622,
                    "lon": -80.19969094
                },
                {
                    "lat": 25.97986877,
                    "lon": -80.16290906
                },
                {
                    "lat": 25.99764191,
                    "lon": -80.13560328
                }
            ]
        }
    ],
  "polygons": [
        {
            "coordinates": [
                {
                    "lat": 25.99345622,
                    "lon": -80.19969094
                },
                {
                    "lat": 25.97986877,
                    "lon": -80.16290906
                },
                {
                    "lat": 25.99764191,
                    "lon": -80.13560328
                }
            ]
        }
    ],
  shapeId,
  "testDataGenerating": true
})