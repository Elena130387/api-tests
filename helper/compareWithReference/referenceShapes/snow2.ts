export const snow2: any = {
  data: {
    shape: {
      id: "162",
      name: "AOI_Regression_Snow2",
      createdAt: "2021-09-13T09:40:23.805981Z",
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
                  [-121.444534839123, 40.4730909034857],
                  [-121.426353020941, 40.4730909034857],
                  [-121.426353020941, 40.4549090853039],
                  [-121.444534839123, 40.4549090853039],
                  [-121.444534839123, 40.4730909034857],
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
          averageBuildingAreaCoverage: 0.011294342222667876,
          averageBuildingHeight: 3.1874723627554786,
          buildingCount: 108,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 7.827263978263614,
          building3lessAreaCoverage: 0.0018128894624255952,
          building3to8AreaCoverage: 0.01676895504906064,
          building8moreAreaCoverage: 0.022230670565650576,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 125523433,
        insuranceExposure: [
          {
            name: "INDUSTRIAL",
            value: 35393211,
            __typename: "InsuranceSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 13878966,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 5586774,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 3114121, __typename: "InsuranceSummary" },
        ],
        landUse: [
          { name: "CULTIVATED", value: 0.5625, __typename: "LandUseSummary" },
          {
            name: "OTHERIMP",
            value: 0.15178571428571427,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.15178571428571427,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.044642857142857144,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.041666666666666664,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.03273809523809524,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.01488095238095238,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 4,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [],
          __typename: "ObjectsSummary",
        },
        populationCount: 9113,
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
