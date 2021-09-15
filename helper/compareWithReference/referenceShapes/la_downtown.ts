export const la_downtown: any = {
  data: {
    shape: {
      id: "181",
      name: "AOI_Regression_LA_downtown",
      createdAt: "2021-09-13T18:59:36.253290Z",
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
                  [-118.265568484725, 34.0621368607523],
                  [-118.247386666543, 34.0621368607523],
                  [-118.247386666543, 34.0439550425705],
                  [-118.265568484725, 34.0439550425705],
                  [-118.265568484725, 34.0621368607523],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "California",
          admin2: "Los Angeles County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1596, completed: 1596, __typename: "Progress" },
      tiles: { large: 30, medium: 54, small: 378, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.2884662365787244,
          averageBuildingHeight: 10.35664726365249,
          buildingCount: 580,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 10.752422045299125,
          building3lessAreaCoverage: 0.01846067236844825,
          building3to8AreaCoverage: 0.03846391546663153,
          building8moreAreaCoverage: 0.22536016393590858,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 29174039000,
        insuranceExposure: [
          {
            name: "COMMERCIAL",
            value: 7123175751,
            __typename: "InsuranceSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 6209662903,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 3741723001,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 55707983, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "OTHERIMP",
            value: 0.3941798941798942,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.25396825396825395,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.20105820105820105,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.042328042328042326,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.03968253968253968,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.037037037037037035,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.031746031746031744,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 1784,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 6, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 6,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 6,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 5,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 4,
              name: "storage-tank",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 2, name: "ship", __typename: "ObjectsSummaryInfo" },
            {
              count: 2,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 3,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 3,
              name: "ground-track-field",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 38626,
        stats: {
          incomePerCapita: 30798,
          housingUnitsTotal: 3506903,
          population: 10105722,
          unitsInStructure1: 1957238,
          unitsInStructure2to9: 560403,
          unitsInStructure10to19: 269963,
          unitsInStructure20more: 662186,
          unitsInStructureMobile: 57113,
          totalUnits: 1512364,
          averageUnitPrice: 644984,
          medianUnitPrice: 495829,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
