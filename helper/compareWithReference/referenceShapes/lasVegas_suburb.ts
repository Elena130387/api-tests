export const lasVegas_suburb: any = {
  data: {
    shape: {
      id: "259",
      name: "LasVegas_suburb. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T06:58:39.261133Z",
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
                  [-115.223882044888, 36.1938561128198],
                  [-115.205700226706, 36.1938561128198],
                  [-115.205700226706, 36.2120379310016],
                  [-115.223882044888, 36.2120379310016],
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
          averageBuildingAreaCoverage: 0.2981635128416601,
          averageBuildingHeight: 2.9248638556779802,
          buildingCount: 1034,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 2.9886838249301415,
          building3lessAreaCoverage: 0.10642793799648766,
          building3to8AreaCoverage: 0.024685429591758578,
          building8moreAreaCoverage: 0.008648613253895309,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 3072005577,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 1674832233,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 233738603,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 224169905,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 6150679, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.6162464985994398,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.15966386554621848,
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
            value: 0.0196078431372549,
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
            {
              count: 6,
              name: "roundabout",
              __typename: "ObjectsSummaryInfo",
            },
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
