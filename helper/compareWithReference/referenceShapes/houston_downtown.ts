export const houston_downtown: any = {
  data: {
    shape: {
      id: "173",
      name: "AOI_Regression_Houston_downtown",
      createdAt: "2021-09-13T15:47:24.837821Z",
      polygons: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-95.3774680204502, 29.7681706508483],
                  [-95.3592862022684, 29.7681706508483],
                  [-95.3592862022684, 29.7499888326665],
                  [-95.3774680204502, 29.7499888326665],
                  [-95.3774680204502, 29.7681706508483],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Texas",
          admin2: "Harris County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1605, completed: 1605, __typename: "Progress" },
      tiles: { large: 30, medium: 63, small: 378, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.2057418217734685,
          averageBuildingHeight: 10.575846360941506,
          buildingCount: 623,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 10.064302217915413,
          building3lessAreaCoverage: 0.014419616214812749,
          building3to8AreaCoverage: 0.022541853485914764,
          building8moreAreaCoverage: 0.15600759516317378,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 6707179552,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 1360687556,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 1301569857,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 1001370971,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 100082876, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "COMMERCIAL",
            value: 0.18783068783068782,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.1693121693121693,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.15873015873015872,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.15608465608465608,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.12698412698412698,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.12433862433862433,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.07671957671957672,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 2775,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 10,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 8, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 7,
              name: "storage-tank",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 5,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 2, name: "ship", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 1,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 32458,
        stats: {
          incomePerCapita: 30856,
          housingUnitsTotal: 1714340,
          population: 4525519,
          unitsInStructure1: 1056639,
          unitsInStructure2to9: 170636,
          unitsInStructure10to19: 189290,
          unitsInStructure20more: 253075,
          unitsInStructureMobile: 44700,
          totalUnits: 855629,
          averageUnitPrice: 236378,
          medianUnitPrice: 154135,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
