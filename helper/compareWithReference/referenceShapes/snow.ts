export const snow: any = {
  data: {
    shape: {
      id: "161",
      name: "AOI_Regression_Snow",
      createdAt: "2021-09-13T09:31:16.580399Z",
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
                  [-121.283496196492, 40.498498431138],
                  [-121.26531437831, 40.498498431138],
                  [-121.26531437831, 40.4803166129562],
                  [-121.283496196492, 40.4803166129562],
                  [-121.283496196492, 40.498498431138],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "California",
          admin2: "Plumas County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1428, completed: 1428, __typename: "Progress" },
      tiles: { large: 30, medium: 54, small: 336, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.09506168819609143,
          averageBuildingHeight: 2.174003979730456,
          buildingCount: 527,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 4.487094234252867,
          building3lessAreaCoverage: 0.016659305209205263,
          building3to8AreaCoverage: 0.007085096268426804,
          building8moreAreaCoverage: 0.009920006706601097,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 800078732,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 550918380,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 23061426, __typename: "InsuranceSummary" },
          {
            name: "COMMERCIAL",
            value: 10533812,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 6801192,
            __typename: "InsuranceSummary",
          },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.6517857142857143,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.15773809523809523,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.13392857142857142,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.03273809523809524,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.01488095238095238,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.008928571428571428,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 51,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [],
          __typename: "ObjectsSummary",
        },
        populationCount: 20745,
        stats: {
          incomePerCapita: 32056,
          housingUnitsTotal: 15740,
          population: 18724,
          unitsInStructure1: 13206,
          unitsInStructure2to9: 554,
          unitsInStructure10to19: 58,
          unitsInStructure20more: 176,
          unitsInStructureMobile: 1746,
          totalUnits: 6016,
          averageUnitPrice: 284539,
          medianUnitPrice: 228892,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
