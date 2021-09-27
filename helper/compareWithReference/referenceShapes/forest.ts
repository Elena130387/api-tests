export const forest: any = {
  data: {
    shape: {
      id: "251",
      name: "Forest. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T06:39:45.481336Z",
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
                  [-121.198475004438, 40.0697420132864],
                  [-121.198475004438, 40.0515601951046],
                  [-121.180293186256, 40.0515601951046],
                  [-121.180293186256, 40.0697420132864],
                  [-121.198475004438, 40.0697420132864],
                  [-121.198475004438, 40.0697420132864],
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
      progress: { total: 1512, completed: 1512, __typename: "Progress" },
      tiles: { large: 30, medium: 54, small: 357, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.0001639785552893032,
          averageBuildingHeight: 2.2490377385879308,
          buildingCount: 4,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 3.3795736130895477,
          building3lessAreaCoverage: 0.00017289020100227592,
          building3to8AreaCoverage: 0.00004562677121629902,
          building8moreAreaCoverage: 0.0000133995248490021,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 799641,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 639713,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 0, __typename: "InsuranceSummary" },
          {
            name: "COMMERCIAL",
            value: 0,
            __typename: "InsuranceSummary",
          },
          { name: "INDUSTRIAL", value: 0, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "NATURE",
            value: 0.7058823529411765,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.2913165266106443,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.0028011204481792717,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 7,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [],
          __typename: "ObjectsSummary",
        },
        populationCount: 49,
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
