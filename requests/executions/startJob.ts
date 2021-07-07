import { DAY } from "../../helper/date";

export const startJobObj = (forceProcessing: boolean, shapeId: number) => ({
  forceProcessing,
  "initialPolygons": [
        {
            "coordinates": [
                {
                    "lat": +`25.993456${DAY}`,
                    "lon": +`-80.199690${DAY}`
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
                    "lat": +`25.993456${DAY}`,
                    "lon": +`-80.199690${DAY}`
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