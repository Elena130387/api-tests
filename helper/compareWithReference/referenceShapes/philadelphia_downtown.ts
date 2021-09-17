export const philadelphia_downtown: any = {
  data: {
    shape: {
      id: "196",
      name: "AOI_Regression_Philadelphia_downtown",
      createdAt: "2021-09-14T10:01:29.168936Z",
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
                  [-75.1792435054085, 39.9738245705749],
                  [-75.1610616872267, 39.9738245705749],
                  [-75.1610616872267, 39.9556427523931],
                  [-75.1792435054085, 39.9556427523931],
                  [-75.1792435054085, 39.9738245705749],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Pennsylvania",
          admin2: "Philadelphia County",
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
          averageBuildingAreaCoverage: 0.34851330802554176,
          averageBuildingHeight: 7.202841596442464,
          buildingCount: 663,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 7.966829698804356,
          building3lessAreaCoverage: 0.015197140829903739,
          building3to8AreaCoverage: 0.1418361890883673,
          building8moreAreaCoverage: 0.1276737167721703,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 5855240941,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 2315809603,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 1210580248,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 322190210,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 41210902, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RIGHTOFWAY",
            value: 0.39285714285714285,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.20238095238095238,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.13392857142857142,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.12202380952380952,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.05952380952380952,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.05357142857142857,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.03571428571428571,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 2547,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 11,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 6, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            { count: 1, name: "harbor", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "storage-tank",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 3,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 3,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 2,
              name: "ground-track-field",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 23912,
        stats: {
          incomePerCapita: 24811,
          housingUnitsTotal: 679876,
          population: 1569657,
          unitsInStructure1: 455126,
          unitsInStructure2to9: 125419,
          unitsInStructure10to19: 15734,
          unitsInStructure20more: 81349,
          unitsInStructureMobile: 2248,
          totalUnits: 308695,
          averageUnitPrice: 199878,
          medianUnitPrice: 151536,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
