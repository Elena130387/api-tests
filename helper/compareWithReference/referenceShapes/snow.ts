export const snow: any = {
  data: {
    shape: {
      id: "266",
      name: "Snow. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T07:13:39.954789Z",
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
                  [-121.283496196492, 40.4803166129562],
                  [-121.26531437831, 40.4803166129562],
                  [-121.26531437831, 40.498498431138],
                  [-121.283496196492, 40.498498431138],
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
          averageBuildingAreaCoverage: 0.019074757893880207,
          averageBuildingHeight: 2.2342805926277736,
          buildingCount: 234,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 4.487094234252868,
          building3lessAreaCoverage: 0.016659305209205263,
          building3to8AreaCoverage: 0.007085096268426804,
          building8moreAreaCoverage: 0.009920006706601097,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 144532853,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 99340944,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 4643658, __typename: "InsuranceSummary" },
          {
            name: "INDUSTRIAL",
            value: 1185251,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 1148814,
            __typename: "InsuranceSummary",
          },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.36904761904761907,
            __typename: "LandUseSummary",
          },
          { name: "CULTIVATED", value: 0.3125, __typename: "LandUseSummary" },
          {
            name: "OTHERIMP",
            value: 0.23511904761904762,
            __typename: "LandUseSummary",
          },
          { name: "NATURE", value: 0.0625, __typename: "LandUseSummary" },
          {
            name: "COMMERCIAL",
            value: 0.011904761904761904,
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
        populationCount: 19256,
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
