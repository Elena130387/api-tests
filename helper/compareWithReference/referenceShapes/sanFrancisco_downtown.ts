export const sanFrancisco_downtown: any = {
  data: {
    shape: {
      id: "265",
      name: "SanFrancisco_downtown. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T07:11:20.454267Z",
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
                  [-122.423326478769, 37.7934506925063],
                  [-122.423326478769, 37.7752688743245],
                  [-122.405144660587, 37.7752688743245],
                  [-122.405144660587, 37.7934506925063],
                  [-122.423326478769, 37.7934506925063],
                  [-122.423326478769, 37.7934506925063],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "California",
          admin2: "San Francisco County",
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
          averageBuildingAreaCoverage: 0.5192644348999366,
          averageBuildingHeight: 7.441218556759651,
          buildingCount: 473,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 9.902925628635245,
          building3lessAreaCoverage: 0.012780795912114847,
          building3to8AreaCoverage: 0.13894738803724616,
          building8moreAreaCoverage: 0.26372585777475055,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 62115837812,
        insuranceExposure: [
          {
            name: "COMMERCIAL",
            value: 20368162839,
            __typename: "InsuranceSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 8805598252,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 6801453580,
            __typename: "InsuranceSummary",
          },
          {
            name: "AGRI",
            value: 47480390,
            __typename: "InsuranceSummary",
          },
        ],
        landUse: [
          {
            name: "RIGHTOFWAY",
            value: 0.42016806722689076,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.226890756302521,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.19887955182072828,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.14565826330532214,
            __typename: "LandUseSummary",
          },
          {
            name: "RESIDENTIAL",
            value: 0.0056022408963585435,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.0028011204481792717,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 1930,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 6,
              name: "large-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 5,
              name: "ship",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 4,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 4,
              name: "basketball-court",
              __typename: "ObjectsSummaryInfo",
            },
            { count: 2, name: "roundabout", __typename: "ObjectsSummaryInfo" },
            {
              count: 1,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 1,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "soccer-ball-field",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 30042,
        stats: {
          incomePerCapita: 59508,
          housingUnitsTotal: 390376,
          population: 864263,
          unitsInStructure1: 124065,
          unitsInStructure2to9: 123177,
          unitsInStructure10to19: 38486,
          unitsInStructure20more: 103846,
          unitsInStructureMobile: 802,
          totalUnits: 133812,
          averageUnitPrice: 1108474,
          medianUnitPrice: 927383,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
