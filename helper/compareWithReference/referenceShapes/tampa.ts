export const tampa: any = {
  data: {
    shape: {
      id: "269",
      name: "Tampa. Comparison of with reference data: 2021-09-24",
      createdAt: "2021-09-24T07:22:32.152314Z",
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
                  [-82.8380463227566, 27.8783474001336],
                  [-82.8380463227566, 27.8601655819518],
                  [-82.8198645045748, 27.8601655819518],
                  [-82.8198645045748, 27.8783474001336],
                  [-82.8380463227566, 27.8783474001336],
                  [-82.8380463227566, 27.8783474001336],
                ],
              ],
            },
          },
        ],
      },
      geoInfo: [
        {
          admin1: "Florida",
          admin2: "Pinellas County",
          countryCode: "US",
          __typename: "GeoInfo",
        },
      ],
      __typename: "Shape",
      status: "completed",
      progress: { total: 1695, completed: 1695, __typename: "Progress" },
      tiles: { large: 36, medium: 63, small: 399, __typename: "ShapeTiles" },
      summary: {
        buildings: {
          averageBuildingAreaCoverage: 0.20145821631104127,
          averageBuildingHeight: 2.3955711938843964,
          buildingCount: 1667,
          __typename: "BuildingsSummary",
        },
        buildingHeight: {
          averageBuildingHeight: 2.601098901746598,
          building3lessAreaCoverage: 0.11857960636454418,
          building3to8AreaCoverage: 0.03192911171972901,
          building8moreAreaCoverage: 0.002400218992304981,
          __typename: "BuildingHeightSummary",
        },
        economicExposure: 1559978185,
        insuranceExposure: [
          {
            name: "RESIDENTIAL",
            value: 1181323831,
            __typename: "InsuranceSummary",
          },
          {
            name: "COMMERCIAL",
            value: 22628897,
            __typename: "InsuranceSummary",
          },
          {
            name: "AGRI",
            value: 11529629,
            __typename: "InsuranceSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 2870592,
            __typename: "InsuranceSummary",
          },
        ],
        landUse: [
          {
            name: "RESIDENTIAL",
            value: 0.924812030075188,
            __typename: "LandUseSummary",
          },
          {
            name: "CULTIVATED",
            value: 0.03508771929824561,
            __typename: "LandUseSummary",
          },
          {
            name: "NATURE",
            value: 0.022556390977443608,
            __typename: "LandUseSummary",
          },
          {
            name: "INDUSTRIAL",
            value: 0.007518796992481203,
            __typename: "LandUseSummary",
          },
          {
            name: "RIGHTOFWAY",
            value: 0.005012531328320802,
            __typename: "LandUseSummary",
          },
          {
            name: "OTHERIMP",
            value: 0.002506265664160401,
            __typename: "LandUseSummary",
          },
          {
            name: "COMMERCIAL",
            value: 0.002506265664160401,
            __typename: "LandUseSummary",
          },
        ],
        objects: {
          small: [
            {
              count: 648,
              name: "small-vehicle",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 187,
              name: "swimming-pool",
              __typename: "ObjectsSummaryInfo",
            },
            {
              count: 1,
              name: "tennis-court",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          large: [
            {
              count: 1,
              name: "baseball-diamond",
              __typename: "ObjectsSummaryInfo",
            },
          ],
          __typename: "ObjectsSummary",
        },
        populationCount: 9358,
        stats: {
          incomePerCapita: 32120,
          housingUnitsTotal: 506468,
          population: 949842,
          unitsInStructure1: 269263,
          unitsInStructure2to9: 67691,
          unitsInStructure10to19: 35162,
          unitsInStructure20more: 86080,
          unitsInStructureMobile: 48272,
          totalUnits: 265628,
          averageUnitPrice: 235199,
          medianUnitPrice: 167116,
          __typename: "StatsSummary",
        },
        derivativeFriendlyRate: 1,
        __typename: "PolygonSummary",
      },
    },
  },
};
