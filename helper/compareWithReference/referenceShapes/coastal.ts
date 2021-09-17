export const coastal: any = {
  data: {
    shape: {
      id: "169",
      name: "AOI_Regression_Coastal",
      createdAt: "2021-09-13T13:34:36.472055Z",
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
                  [-82.261, 26.7236],
                  [-82.2428181818182, 26.7236],
                  [-82.2428181818182, 26.7054181818182],
                  [-82.261, 26.7054181818182],
                  [-82.261, 26.7236],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Florida",
          admin2: "Lee County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1689, completed: 1689, __typename: "Progress" },
      tiles: { large: 30, medium: 63, small: 399, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.002330827832520755,
          averageBuildingHeight: 3.2349448999250083,
          buildingCount: 22,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 3.849225887986115,
          building3lessAreaCoverage: 0.0008136873555960213,
          building3to8AreaCoverage: 0.0028595123673441415,
          building8moreAreaCoverage: 0.00017960627276198307,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 28071788,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 7898148,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 3674159,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 2186606,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 1610810, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "NATURE",
            value: 0.9298245614035088,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.045112781954887216,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.015037593984962405,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.005012531328320802,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.005012531328320802,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 27,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 3,
              name: "storage-tank",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 2, name: "ship", __typename: "ObjectsSummaryInfo" },
            { count: 2, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 6,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 156,
        stats: {
          incomePerCapita: 30233,
          housingUnitsTotal: 383224,
          population: 700165,
          unitsInStructure1: 238495,
          unitsInStructure2to9: 44916,
          unitsInStructure10to19: 21878,
          unitsInStructure20more: 39955,
          unitsInStructureMobile: 37980,
          totalUnits: 184567,
          averageUnitPrice: 269098,
          medianUnitPrice: 190208,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
