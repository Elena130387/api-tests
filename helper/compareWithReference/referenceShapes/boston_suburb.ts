export const boston_suburb: any = {
  data: {
    shape: {
      id: "200",
      name: "AOI_Regression_Boston_suburb",
      createdAt: "2021-09-14T12:00:46.097086Z",
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
                  [-71.1227827774183, 42.3995849703306],
                  [-71.1046009592365, 42.3995849703306],
                  [-71.1046009592365, 42.3814031521488],
                  [-71.1227827774183, 42.3814031521488],
                  [-71.1227827774183, 42.3995849703306],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Massachusetts",
          admin2: "Middlesex County",
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
          averageBuildingAreaCoverage: 0.32388323829287574,
          averageBuildingHeight: 3.241705878803967,
          buildingCount: 2197,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 3.546710547591445,
          building3lessAreaCoverage: 0.12201972234816778,
          building3to8AreaCoverage: 0.10302625383649554,
          building8moreAreaCoverage: 0.018593084244501023,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 8002656234,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 5460195584,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 532840988,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 79737326,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 27000037, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.6904761904761905,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.1488095238095238,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.05952380952380952,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.02976190476190476,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.023809523809523808,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.023809523809523808,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.023809523809523808,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 1667,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 2,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 26547,
        stats: {
          incomePerCapita: 47616,
          housingUnitsTotal: 626351,
          population: 1582857,
          unitsInStructure1: 343151,
          unitsInStructure2to9: 164064,
          unitsInStructure10to19: 31600,
          unitsInStructure20more: 84888,
          unitsInStructureMobile: 2648,
          totalUnits: 371697,
          averageUnitPrice: 549373,
          medianUnitPrice: 453266,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
