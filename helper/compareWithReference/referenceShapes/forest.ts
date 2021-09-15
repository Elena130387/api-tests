export const forest: any = {
  data: {
    shape: {
      id: "163",
      name: "AOI_Regression_Forest",
      createdAt: "2021-09-13T09:56:03.747346Z",
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
                  [-121.180293186256, 40.0697420132864],
                  [-121.180293186256, 40.0515601951046],
                  [-121.198475004438, 40.0515601951046],
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
          averageBuildingAreaCoverage: 0.0027501723345588237,
          averageBuildingHeight: 2.6643303991474445,
          buildingCount: 15,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 3.3795736130895477,
          building3lessAreaCoverage: 0.00017289020100227592,
          building3to8AreaCoverage: 0.00004562677121629902,
          building8moreAreaCoverage: 0.0000133995248490021,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 28969535,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 22587815,
            __typename: "InsuranceSummary",
          },
          { name: "COMMERCIAL", value: 440860, __typename: "InsuranceSummary" },
          { name: "AGRI", value: 0, __typename: "InsuranceSummary" },
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
            value: 0.2689075630252101,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.025210084033613446,
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
