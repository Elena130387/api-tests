export const lasVegas_suburb: any = {
  data: {
    shape: {
      id: "179",
      name: "AOI_Regression_LasVegas_suburb",
      createdAt: "2021-09-13T18:31:57.488906Z",
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
                  [-115.223882044888, 36.2120379310016],
                  [-115.205700226706, 36.2120379310016],
                  [-115.205700226706, 36.1938561128198],
                  [-115.223882044888, 36.1938561128198],
                  [-115.223882044888, 36.2120379310016],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Nevada",
          admin2: "Clark County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1521, completed: 1521, __typename: "Progress" },
      tiles: { large: 30, medium: 63, small: 357, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.31490214799298627,
          averageBuildingHeight: 2.9262293654138354,
          buildingCount: 1003,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 2.98868382493014,
          building3lessAreaCoverage: 0.10642793799648766,
          building3to8AreaCoverage: 0.024685429591758578,
          building8moreAreaCoverage: 0.008648613253895309,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 3262484515,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 1763263433,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 254567703,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 240911719,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 6139933, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.6162464985994398,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.1568627450980392,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.09243697478991597,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.08403361344537816,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.028011204481792718,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.022408963585434174,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 2054,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 123,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 6, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 5,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 3,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "large-vehicle",
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
        populationCount: 13912,
        stats: {
          incomePerCapita: 27719,
          housingUnitsTotal: 877617,
          population: 2112436,
          unitsInStructure1: 559062,
          unitsInStructure2to9: 150951,
          unitsInStructure10to19: 56383,
          unitsInStructure20more: 84724,
          unitsInStructureMobile: 26497,
          totalUnits: 395201,
          averageUnitPrice: 259323,
          medianUnitPrice: 212303,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
