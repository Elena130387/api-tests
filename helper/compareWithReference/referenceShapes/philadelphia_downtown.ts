export const philadelphia_downtown: any = {
  data: {
    shape: {
      id: "263",
      name: "Philadelphia_downtown. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T07:07:49.422873Z",
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
          averageBuildingAreaCoverage: 0.3534264337448847,
          averageBuildingHeight: 7.300782155375528,
          buildingCount: 661,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 7.918713042468883,
          building3lessAreaCoverage: 0.013718695867629279,
          building3to8AreaCoverage: 0.145615782056536,
          building8moreAreaCoverage: 0.12259313038417272,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 6022508151,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 2500659760,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 1168601829,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 294044851,
            __typename: "InsuranceSummary",
          },
          { name: "AGRI", value: 64170486, __typename: "InsuranceSummary" },
        ],
        landUse: [
          {
            name: "RIGHTOFWAY",
            value: 0.41369047619047616,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.22321428571428573,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.11904761904761904,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.10714285714285714,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.05654761904761905,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.044642857142857144,
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
              count: 2647,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 10,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 6,
              name: "roundabout",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 3,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "harbor",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "storage-tank",
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
              count: 4,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 4,
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
        populationCount: 22795,
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
