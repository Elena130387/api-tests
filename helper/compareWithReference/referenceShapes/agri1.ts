export const agri1: any = {
  data: {
    shape: {
      id: "165",
      name: "AOI_Regression_Agri1",
      createdAt: "2021-09-13T10:06:42.342390Z",
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
                  [-82.0411, 27.4305],
                  [-82.0229181818182, 27.4305],
                  [-82.0229181818182, 27.4123181818182],
                  [-82.0411, 27.4123181818182],
                  [-82.0411, 27.4305],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Florida",
          admin2: "Hardee County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1695, completed: 1695, __typename: "Progress" },
      tiles: { large: 36, medium: 63, small: 399, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.007839441896978775,
          averageBuildingHeight: 2.8047892877624006,
          buildingCount: 61,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 8.112508908808568,
          building3lessAreaCoverage: 0.000247888397752193,
          building3to8AreaCoverage: 0.000024207552572838347,
          building8moreAreaCoverage: 0.0025464968573778194,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 31659570,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 18818330,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 1873343, __typename: "InsuranceSummary" },
          { name: "COMMERCIAL", value: 539742, __typename: "InsuranceSummary" },
          { name: "INDUSTRIAL", value: 397047, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "CULTIVATED",
            value: 0.7719298245614035,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.17543859649122806,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.05012531328320802,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.002506265664160401,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 3,
              name: "small-vehicle",
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
        populationCount: 522,
        stats: {
          incomePerCapita: 18643,
          housingUnitsTotal: 9724,
          population: 27326,
          unitsInStructure1: 5593,
          unitsInStructure2to9: 706,
          unitsInStructure10to19: 252,
          unitsInStructure20more: 85,
          unitsInStructureMobile: 3088,
          totalUnits: 5288,
          averageUnitPrice: 127874,
          medianUnitPrice: 81196,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
